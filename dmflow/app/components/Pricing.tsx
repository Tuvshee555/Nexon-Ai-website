import { Check, Zap, ArrowRight } from "lucide-react";

export const pricingPlans = [
  {
    name: "Хөнгөн",
    setupFee: "150,000₮",
    monthlyFee: "29,000₮",
    tagline: "Дөнгөж эхэлж буй эсвэл жижиг бизнесүүдэд тохиромжтой.",
    features: [
      "Facebook эсвэл Instagram (1 хуудас)",
      "Сарын 300 хүртэлх яриа",
      "Байнгын 10 асуулт-хариулт",
      "Лид мэдээлэл цуглуулах",
      "Telegram мэдэгдэл",
      "Имэйл дэмжлэг",
    ],
    cta: "Сонгох",
    highlight: false,
    badge: null,
  },
  {
    name: "Стандарт",
    setupFee: "200,000₮",
    monthlyFee: "39,000₮",
    tagline: "Идэвхтэй бизнесүүдэд хамгийн тохиромжтой — алдартай сонголт.",
    features: [
      "Facebook + Instagram (2 хуудас)",
      "Сарын 1000 хүртэлх яриа",
      "Байнгын 30 асуулт-хариулт",
      "Лид тодорхойлох урсгал",
      "Хэрэглэгчийн мэдээлэл хадгалах",
      "Telegram мэдэгдэл + тайлан",
      "Дагалдах мессеж",
      "Хүний гараар оролцох боломж",
      "Хоног бүрийн дэмжлэг",
    ],
    cta: "Үнэгүй демо авах",
    highlight: true,
    badge: "Хамгийн алдартай",
  },
  {
    name: "Про",
    setupFee: "350,000₮",
    monthlyFee: "59,000₮",
    tagline: "Олон хуудас эсвэл өндөр ачааллай бизнесүүдэд зориулсан.",
    features: [
      "3 хүртэлх хуудас",
      "Хязгааргүй яриа",
      "Бүрэн тохируулсан хариулт урсгал",
      "Захиалгын систем холболт",
      "CRM / Google Sheets холболт",
      "Сарын гүйцэтгэлийн тайлан",
      "Telegram + имэйл мэдэгдэл",
      "Тэргүүлэх дэмжлэг (24 цаг)",
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
      "Хязгааргүй хуудас",
      "Тусгай брэнд дизайн",
      "API / CRM интеграци",
      "Өгөгдлийн нарийн тайлан",
      "Тусгай менежер",
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
        <div className="text-center mb-14">
          <p className="section-label mb-3">Үнэ</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Нэг шинэ хэрэглэгч{" "}
            <span className="gradient-text">сарын хөлсийг нөхдөг.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Нуугдмал төлбөр байхгүй. Тохируулга бүх зүйлийг хамардаг — бид ажлыг хийнэ.
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
                  <div className="text-zinc-500 text-xs">+ {plan.setupFee} нэг удаагийн тохируулга</div>
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

        <p className="text-center text-zinc-500 text-sm mt-8">
          Бүх тарифт{" "}
          <span className="text-white font-semibold">7 хоногийн туршилтын хугацаа</span>{" "}
          байна. Үр дүн гарахгүй бол буцаан олгоно.
        </p>
      </div>
    </section>
  );
}
