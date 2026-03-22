import { ArrowRight, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/8 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-violet-800/10 blur-[140px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-8">
          <Clock size={13} />
          Энэ сарын тохируулгын 5 байр дутагдаж байна
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Өрсөлдөгч тань{" "}
          <span className="gradient-text">автоматаар хариулж байна.</span>
          <br />
          Та яах вэ?
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Автоматжуулалтгүй өнгөрөх өдөр бүр алдагдсан мессеж, алдагдсан лид,
          алдагдсан орлого. Үнэгүй демо авна уу — 30 минутад таны бизнест
          ямар үр дүн гарахыг харуулна.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#contact" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto justify-center">
            Үнэгүй демо авах
            <ArrowRight size={20} />
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/nexonnova"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base w-full sm:w-auto justify-center"
          >
            Telegram-ээр холбогдох
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-zinc-500">
          <span>✓ Төлбөр шаардахгүй</span>
          <span className="hidden sm:block">·</span>
          <span>✓ 30 минутын демо</span>
          <span className="hidden sm:block">·</span>
          <span>✓ 48 цагт бэлэн болно</span>
        </div>
      </div>
    </section>
  );
}
