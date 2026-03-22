import { Link2, Settings2, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Facebook / Instagram холбоно",
    body: "Таны Facebook эсвэл Instagram хуудастай холбогдоно. Техникийн мэдлэг шаардахгүй — бид бүгдийг хийж өгнө.",
    badge: "10 минутанд дуусна",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Автоматжуулалт тохируулна",
    body: "Манай баг таны бизнест тохирсон хариулт, асуулт, лид цуглуулах урсгалыг бүрэн тохируулна.",
    badge: "48 цагт бэлэн болно",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Лид, захиалга ирж эхэлнэ",
    body: "Систем ажилласнаас эхлэн таны Facebook, Instagram-ийн мессежийг автоматаар хариулж, лидийг цуглуулж эхэлнэ.",
    badge: "1-р өдрөөс үр дүн",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden bg-[#0a0a0e]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-violet-900/8 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Хэрхэн ажилладаг</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            3 алхамд{" "}
            <span className="gradient-text">бэлэн болно.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-7">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-500/10 border border-violet-500/30 flex items-center justify-center group-hover:border-violet-400/60 transition-colors duration-300">
                        <Icon size={26} className="text-violet-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-[10px] font-black text-white">
                        {step.number.slice(1)}
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-4">
                      {step.badge}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary text-base inline-flex">
            Одоо эхлэх
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
