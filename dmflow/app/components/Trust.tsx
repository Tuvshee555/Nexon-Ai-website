import { ShieldCheck, Clock, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "48 цагт бэлэн",
    body: "Тохируулга хийгдэж, таны мессежийг 48 цагийн дотор автоматаар хариулж эхэлнэ.",
  },
  {
    icon: ShieldCheck,
    title: "Найдвартай, найрсаг",
    body: "Meta-ийн зөвшөөрөгдсөн арга замаар холбогдоно. Таны аккаунт, мэдээлэл бүрэн хамгаалагдсан байдаг.",
  },
  {
    icon: Users,
    title: "Монголын бизнест тохирсон",
    body: "Хариулт, мессеж бүрийг таны бизнесийн хэлбэр, харилцааны хэв маягт тохируулан бэлддэг.",
  },
  {
    icon: TrendingUp,
    title: "Үр дүн хэмждэг",
    body: "Хэдэн мессеж ирсэн, хэдэн лид цуглуулсан, хэдэн захиалга болсныг бүгдийг харах боломжтой.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 md:py-24 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Top label */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Яагаад Nexon Nova?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Монголын бизнесийн хэрэгцээнд
            <br className="hidden md:block" />{" "}
            <span className="gradient-text">зориулан бүтээсэн</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Гадаадын ерөнхий платформ биш — таны Facebook, Instagram хуудасны онцлогт
            тохирсон, Монгол хэлэнд суурилсан систем.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="card-dark card-hover p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Icon size={20} className="text-violet-400" />
                </div>
                <h3 className="text-white font-bold text-base">{r.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{r.body}</p>
              </div>
            );
          })}
        </div>

        {/* Platform logos strip */}
        <div className="mt-14 flex flex-col items-center gap-5">
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold">
            Дараах платформуудтай ажилладаг
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {["Facebook", "Instagram", "Telegram", "WhatsApp"].map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
