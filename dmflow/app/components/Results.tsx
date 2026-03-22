import { TrendingUp, Clock, Users2, MessageCircle } from "lucide-react";

const stats = [
  { icon: TrendingUp,     value: "+40%", label: "Захиалга нэмэгдсэн",        color: "emerald" },
  { icon: Clock,          value: "< 5с", label: "Дундаж хариулах хугацаа",   color: "sky"     },
  { icon: Users2,         value: "3×",   label: "Илүү олон чанартай лид",    color: "violet"  },
  { icon: MessageCircle,  value: "24/7", label: "Тасралтгүй ажиллах",        color: "pink"    },
];

const testimonials = [
  {
    quote: "Шөнө ирсэн мессежнүүдэд автоматаар хариулж, өглөө босоход 4 захиалга бэлэн байсан. Энэ систем нэг долоо хоногийн дотор өөрийгөө нөхсөн.",
    name: "Оюунтунгалаг Б.",
    role: "Эзэн, Glow Beauty — Улаанбаатар",
    avatar: "О",
    color: "bg-pink-400",
  },
  {
    quote: "Байнга ижил асуулт хариулдагаас залхаж байсан. Одоо систем хариулдаг, би чухал хэрэгт л цаг зарцуулдаг болсон.",
    name: "Батбаяр Д.",
    role: "Захирал, FitZone Gym — УБ",
    avatar: "Б",
    color: "bg-violet-400",
  },
  {
    quote: "Telegram руу шууд мэдэгдэл ирдэг болсноос хойш жодгор мессеж алдахгүй болсон. Нэг сарын дотор 18 шинэ хэрэглэгч авсан.",
    name: "Мөнхзул Г.",
    role: "Эзэн, Lux Lashes Studio — УБ",
    avatar: "М",
    color: "bg-amber-400",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  sky:     { bg: "bg-sky-500/10",     border: "border-sky-500/20",     text: "text-sky-400"     },
  violet:  { bg: "bg-violet-500/10",  border: "border-violet-500/20",  text: "text-violet-400"  },
  pink:    { bg: "bg-pink-500/10",    border: "border-pink-500/20",    text: "text-pink-400"    },
};

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[400px] rounded-full bg-emerald-900/6 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Үр дүн</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Тоо баримт{" "}
            <span className="gradient-text">өөрөө ярьдаг.</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Nexon Nova ашигладаг бизнесүүдийн дундаж үзүүлэлт.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map(({ icon: Icon, value, label, color }) => {
            const c = colorMap[color];
            return (
              <div key={label} className="card-dark p-7 text-center">
                <div className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-5`}>
                  <Icon size={22} className={c.text} />
                </div>
                <div className={`text-4xl font-black mb-1.5 ${c.text}`}>{value}</div>
                <div className="text-zinc-400 text-sm">{label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark p-7 flex flex-col gap-5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
