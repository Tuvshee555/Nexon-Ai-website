import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Lead {
  id: string;
  name: string;
  businessName: string;
  phone: string;
  pageUrl: string;
  message: string;
  createdAt: string;
  ip?: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function validateBody(body: Partial<Lead>): string | null {
  if (!body.name?.trim())         return "Нэрийг оруулна уу";
  if (!body.businessName?.trim()) return "Бизнесийн нэрийг оруулна уу";
  if (!body.phone?.trim())        return "Утасны дугаарыг оруулна уу";
  if (!/^[0-9\s\+\-]{8,15}$/.test(body.phone.trim()))
                                  return "Зөв утасны дугаар оруулна уу";
  if (!body.message?.trim())      return "Мессежийг оруулна уу";
  return null;
}

function saveLead(lead: Lead): void {
  const dataDir  = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "leads.json");

  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const existing: Lead[] = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  existing.push(lead);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
}

async function sendTelegramNotification(lead: Lead): Promise<void> {
  const token  = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = [
    `🔔 *Шинэ лид ирлээ — Nexon Nova*`,
    ``,
    `👤 *Нэр:* ${lead.name}`,
    `🏢 *Бизнес:* ${lead.businessName}`,
    `📞 *Утас:* ${lead.phone}`,
    lead.pageUrl ? `🔗 *Хуудас:* ${lead.pageUrl}` : null,
    `💬 *Мессеж:* ${lead.message}`,
    ``,
    `📅 *Огноо:* ${new Date(lead.createdAt).toLocaleString("mn-MN")}`,
    `🆔 *ID:* ${lead.id}`,
  ]
    .filter(Boolean)
    .join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });
}

// ── Route handler ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const error = validateBody(body);
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const lead: Lead = {
      id:           crypto.randomUUID(),
      name:         body.name.trim(),
      businessName: body.businessName.trim(),
      phone:        body.phone.trim(),
      pageUrl:      body.pageUrl?.trim() ?? "",
      message:      body.message.trim(),
      createdAt:    new Date().toISOString(),
      ip:           req.headers.get("x-forwarded-for") ?? undefined,
    };

    // Persist locally (swap this for a real DB call — Prisma, Supabase, etc.)
    saveLead(lead);

    // Notify via Telegram (fire-and-forget; errors do not fail the response)
    sendTelegramNotification(lead).catch(() => {});

    return NextResponse.json({ success: true, id: lead.id });
  } catch {
    return NextResponse.json(
      { success: false, error: "Серверийн алдаа. Дараа дахин оролдоно уу." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple health-check / leads viewer (protect with auth in production)
  const filePath = path.join(process.cwd(), "data", "leads.json");
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ leads: [], total: 0 });
  }
  const leads: Lead[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return NextResponse.json({ leads, total: leads.length });
}
