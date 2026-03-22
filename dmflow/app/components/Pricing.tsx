import { Check, Zap, ArrowRight } from "lucide-react";

export const pricingPlans = [
  {
    name: "Эхлэх",
    setupFee: "200,000₮",
    monthlyFee: "29,000₮",
    tagline: "Дөнгөж эхэлж буй бизнесийн хувьд хурдан эхлэх хамгийн хялбар арга.",
    features: [
      "Facebook эсвэл Instagram (1 хуудас)",
      "Сарын 300 яриа — харилцагч алдахгүй",
      "10 байнгын асуулт автоматаар хариулна",
      "Харилцагчийн нэр, утас цуглуулна",
      "Telegram мэдэгдэл — шинэ лид ирэхэд",
      "Имэйл дэмжлэг",
    ],
    cta: "Эхлэх",
    highlight: false,
    badge: null,
  },
  {
    name: "Өсөлт",
    setupFee: "200,000₮",
    monthlyFee: "39,000₮",
    tagline: "Мессеж идэвхтэй ирдэг бизнест — борлуулалтыг нэмэгдүүлэх тогтолцоо.",
    features: [
      "Facebook + Instagram (2 хуудас)",
      "Сарын 1,000 яриа — хязгаарлалтгүй хариулт",
      "30 байнгын асуулт автоматаар хариулна",
      "Харилцагч тодорхойлох урсгал",
      "Дагалдах мессеж — алдсан лидийг эргүүлнэ",
      "Хүний гараар яриаг авах боломж",
      "Telegram мэдэгдэл + сарын тайлан",
      "Хоног бүрийн дэмжлэг",
    ],
    cta: "Үнэгүй демо авах",
    highlight: true,
    badge: "Хамгийн алдартай",
  },
  {
    name: "Бүрэн автомат",
    setupFee: "200,000₮",
    monthlyFee: "59,000₮",
    tagline: "Олон хуудас эсвэл өндөр ачаалалтай бизнест — бүрэн автомат систем.",
    features: [
      "3 хүртэлх хуудас нэгэн зэрэг",
      "Хязгааргүй яриа",
      "Бүрэн тохируулсан хариулт урсгал",
      "Захиалгын систем холболт",
      "Google Sheets / CRM руу өгөгдөл дамжуулна",
      "Сарын гүйцэтгэлийн тайлан",
      "Тэргүүлэх дэмжлэг — 24 цагт хариу",
    ],
    cta: "Холбогдох",
    highlight: false,
    badge: null,
  },
  {
    name: "Байгууллага",
    setupFee: "Тохиролцоогоор",
    monthlyFee: "Тохиролцоогоор",
    tagline: "Олон салбар, франчайз эсвэл тусгай хэрэгцээтэй байгууллагуудад.",
    features: [
      "Хязгааргүй хуудас, салбар",
      "Тусгай брэнд дизайн",
      "API / CRM бүрэн интеграци",
      "Нарийн тайлан, дашбоард",
      "Тусгай менежер хариуцна",
      "SLA баталгаа",
    ],
    cta: "Ярилцах",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0a0a0e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-900/8 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Value statement */}
        <div className="max-w-2xl mx-auto text-center mb-4 px-4 py-4 rounded-2xl bg-red-500/6 border border-red-500/15">
          <p className="text-red-300 text-sm md:text-base font-medium leading-relaxed">
            💬 Чатанд хариу өгөхгүйгээс болж та өдөр бүр харилцагч алдаж байна.
          </p>
        </div>

        <div className="text-center mb-14 mt-10">
          <p className="section-label mb-3">Үнэ</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Нэг шинэ харилцагч{" "}
            <span className="gradient-text">сарын хөлсийг нөхдөг.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Нуугдмал төлбөр байхгүй. Бүх тарифт нэг удаагийн тохиргооны үнэ адилхан —{" "}
            <span className="text-white font-semibold">200,000₮</span>.
            Бид бүх ажлыг хийнэ.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.highlight
                  ? "bg-gradient-to-b from-violet-600/18 to-indigo-900/10 border border-violet-500/40 shadow-[0_0_50px_rgba(109,40,217,0.15)]"
                  : "card-dark"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold shadow-lg">
                    <Zap size={10} className="fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <div className="text-zinc-400 text-sm font-semibold mb-2">{plan.name}</div>
                <div className="flex items-end gap-1 mb-0.5">
                  <span className="text-3xl font-black text-white">{plan.monthlyFee}</span>
                  {plan.monthlyFee !== "Тохиролцоогоор" && (
                    <span className="text-zinc-400 text-xs mb-1">/сар</span>
                  )}
                </div>
                {plan.setupFee !== "Тохиролцоогоор" ? (
                  <div className="text-zinc-500 text-xs">
                    + <span className="text-zinc-400 font-medium">200,000₮</span> нэг удаагийн тохиргоо
                  </div>
                ) : (
                  <div className="text-zinc-500 text-xs">Тохиролцоогоор</div>
                )}
                <p className="text-zinc-400 text-xs mt-3 leading-relaxed">{plan.tagline}</p>
              </div>

              <ul className="flex flex-col gap-2 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check size={13} className="text-violet-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  plan.highlight ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
                {plan.highlight && <ArrowRight size={15} />}
              </a>
            </div>
          ))}
        </div>

        {/* Risk reversal */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-500/8 border border-emerald-500/20">
            <span className="text-emerald-400 text-base">🛡️</span>
            <p className="text-zinc-300 text-sm">
              <span className="text-white font-semibold">7 хоног туршиж үзээд</span>{" "}
              сэтгэл хангалуун биш бол буцаан олголт.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
