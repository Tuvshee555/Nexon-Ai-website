"use client";
import { useState } from "react";
import { Send, Phone, Mail, MessageCircle, CheckCircle2, Loader2, Instagram, Facebook } from "lucide-react";

interface FormData {
  name: string;
  businessName: string;
  phone: string;
  pageUrl: string;
  message: string;
}

interface FormErrors {
  name?: string;
  businessName?: string;
  phone?: string;
  pageUrl?: string;
  message?: string;
}

const TELEGRAM_LINK  = process.env.NEXT_PUBLIC_TELEGRAM_LINK  ?? "https://t.me/nexonnova";
const PHONE_NUMBER   = process.env.NEXT_PUBLIC_PHONE_NUMBER   ?? "+976 8618 5769";
const EMAIL_ADDRESS  = process.env.NEXT_PUBLIC_EMAIL_ADDRESS  ?? "nexondigitalnova@gmail.com";
const PHONE_RAW      = process.env.NEXT_PUBLIC_PHONE_RAW      ?? "+97686185769";
const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? "https://www.instagram.com/nexon_nova/";
const FACEBOOK_LINK  = process.env.NEXT_PUBLIC_FACEBOOK_LINK  ?? "https://www.facebook.com/profile.php?id=61582430194143";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim())         errors.name         = "Нэрийг оруулна уу";
  if (!data.businessName.trim()) errors.businessName = "Бизнесийн нэрийг оруулна уу";
  if (!data.phone.trim())        errors.phone        = "Утасны дугаарыг оруулна уу";
  else if (!/^[0-9\s\+\-]{8,15}$/.test(data.phone.trim()))
                                 errors.phone        = "Зөв утасны дугаар оруулна уу";
  if (!data.message.trim())      errors.message      = "Мессежийг оруулна уу";
  return errors;
}

export default function Contact() {
  const [form, setForm]       = useState<FormData>({ name: "", businessName: "", phone: "", pageUrl: "", message: "" });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", businessName: "", phone: "", pageUrl: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `input-field${errors[field] ? " error" : ""}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a0a0e]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: info */}
          <div>
            <p className="section-label mb-3">Холбогдох</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
              Демо авах бол{" "}
              <span className="gradient-text">одоо холбогдоорой.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              Та маягт бөглөхөд 24 цагийн дотор манай баг тантай холбогдоно.
              Демо нь үнэгүй, хугацаа нь 30 минут — үр дүнг шууд харуулна.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col gap-3 mb-10">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a27] border border-white/[0.08] hover:border-violet-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/25 flex items-center justify-center">
                  <MessageCircle size={18} className="text-[#229ED9]" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Telegram-ээр холбогдох</div>
                  <div className="text-zinc-500 text-xs">Хамгийн хурдан хариулт</div>
                </div>
              </a>

              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a27] border border-white/[0.08] hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Phone size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{PHONE_NUMBER}</div>
                  <div className="text-zinc-500 text-xs">Даваа–Баасан, 09:00–18:00</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a27] border border-white/[0.08] hover:border-violet-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Mail size={18} className="text-violet-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{EMAIL_ADDRESS}</div>
                  <div className="text-zinc-500 text-xs">Gmail-ээр холбогдох</div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a27] border border-white/[0.08] hover:border-pink-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <Instagram size={18} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Instagram</div>
                    <div className="text-zinc-500 text-xs">@nexon_nova</div>
                  </div>
                </a>

                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a27] border border-white/[0.08] hover:border-blue-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Facebook size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Facebook</div>
                    <div className="text-zinc-500 text-xs">Nexon Nova</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Үнэгүй демо, төлбөр шаардахгүй</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> 24 цагийн дотор хариу</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400">✓</span> 48 цагт бэлэн болно</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="card-dark p-8 rounded-2xl border border-white/[0.07]">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-black text-xl">Амжилттай илгээгдлээ!</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                  24 цагийн дотор манай баг тантай холбогдоно.
                  Telegram-ийн мэдэгдлийг хүлээж байгаарай.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary text-sm mt-2"
                >
                  Дахин илгээх
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3 className="text-white font-bold text-lg mb-1">Холбогдох маягт</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                      Нэр <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Батболд"
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                      Бизнесийн нэр <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Glow Beauty Studio"
                      className={inputClass("businessName")}
                    />
                    {errors.businessName && <p className="text-red-400 text-xs mt-1">{errors.businessName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                    Утасны дугаар <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="9911 0000"
                    className={inputClass("phone")}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                    Instagram / Facebook хуудасны холбоос
                    <span className="text-zinc-600 ml-1">(заавал биш)</span>
                  </label>
                  <input
                    type="url"
                    name="pageUrl"
                    value={form.pageUrl}
                    onChange={handleChange}
                    placeholder="https://www.instagram.com/yourbusiness"
                    className={inputClass("pageUrl")}
                  />
                  {errors.pageUrl && <p className="text-red-400 text-xs mt-1">{errors.pageUrl}</p>}
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                    Мессеж <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Бизнесийн талаар товчхон бичнэ үү — хэд хэдэн хуудас байгаа, хоногт хэдэн мессеж ирдэг гэх мэт."
                    rows={4}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    Алдаа гарлаа. Дахин оролдоно уу эсвэл Telegram-ээр холбогдоно уу.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary text-base justify-center w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "loading" ? (
                    <><Loader2 size={18} className="animate-spin" /> Илгээж байна...</>
                  ) : (
                    <><Send size={17} /> Илгээх</>
                  )}
                </button>

                <p className="text-zinc-600 text-xs text-center">
                  Мэдээллийг зөвхөн холбогдохын тулд ашиглана. Гуравдагч этгээдэд дамжуулдаггүй.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
