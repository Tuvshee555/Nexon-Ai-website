import { Zap, MessageSquare, Filter, Database, UserCheck, Bell, RefreshCcw, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "24/7 автомат хариулт",
    body: "Хэрэглэгч мессеж илгээхэд 5 секундын дотор хариулна. Шөнө ч, баяр ёслолын өдөр ч.",
    color: "amber",
  },
  {
    icon: MessageSquare,
    title: "Байнгын асуултанд хариулна",
    body: "Үнэ, хаяг, цагийн хуваарь зэрэг байнга давтагдах асуултуудыг систем автоматаар хариулна.",
    color: "violet",
  },
  {
    icon: Filter,
    title: "Лид тодорхойлох",
    body: "Зөв асуулт асуун, бодит сонирхолтой хэрэглэгчийг тодорхойлж, чанартай лид дамжуулна.",
    color: "sky",
  },
  {
    icon: Database,
    title: "Мэдээлэл цуглуулна",
    body: "Нэр, утас, хаяг, сонирхолыг системд хадгалдаг. Та лидийн бүрэн жагсаалтыг харах боломжтой.",
    color: "emerald",
  },
  {
    icon: UserCheck,
    title: "Хүний гараар оролцох",
    body: "Хэдийд ч та яриаг гартаа авч болно. Систем ухарч, бүх дэлгэрэнгүйг хадгалдаг.",
    color: "pink",
  },
  {
    icon: Bell,
    title: "Telegram мэдэгдэл",
    body: "Шинэ лид ирэх бүрд таны Telegram руу шууд мэдэгдэл очно. Ямар ч мессежийг орхохгүй.",
    color: "orange",
  },
  {
    icon: RefreshCcw,
    title: "Дагалдах мессеж",
    body: "Хариу өгөөгүй хэрэглэгчид автоматаар дагалдах мессеж явуулж, сонирхлыг дахин сэргээнэ.",
    color: "indigo",
  },
  {
    icon: BarChart3,
    title: "Үр дүн хэмждэг",
    body: "Хэдэн мессеж ирсэн, хэдэн лид цуглуулсан, хэдэн захиалга болсныг бүгдийг харуулдаг.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  amber:  { bg: "bg-amber-500/10",  border: "border-amber-500/20",  text: "text-amber-400"  },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  sky:    { bg: "bg-sky-500/10",    border: "border-sky-500/20",    text: "text-sky-400"    },
  emerald:{ bg: "bg-emerald-500/10",border: "border-emerald-500/20",text: "text-emerald-400"},
  pink:   { bg: "bg-pink-500/10",   border: "border-pink-500/20",   text: "text-pink-400"   },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  teal:   { bg: "bg-teal-500/10",   border: "border-teal-500/20",   text: "text-teal-400"   },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[400px] rounded-full bg-violet-900/8 blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[350px] rounded-full bg-indigo-900/6 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Боломжууд</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Мессежийг{" "}
            <span className="gradient-text">бизнес болгодог тогтолцоо.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Зүгээр л чатбот биш — таны борлуулалтын туслах систем.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, body, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className="card-dark card-hover p-6"
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <Icon size={19} className={c.text} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
