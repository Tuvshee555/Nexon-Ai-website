import { Bot, Filter, Bell, UserCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "24/7 автомат хариулт",
    body: "Хэрэглэгч мессеж илгээснээс хойш 5 секундын дотор хариулна. Шөнө ч, баярын өдөр ч.",
  },
  {
    icon: Filter,
    title: "Лид тодорхойлох",
    body: "Систем зөв асуулт асуун, бодит хэрэглэгчийг тодорхойлж, таны цагийг хэмнэнэ.",
  },
  {
    icon: Bell,
    title: "Telegram мэдэгдэл",
    body: "Шинэ лид ирэх бүрд таны Telegram руу шууд мэдэгдэл очно. Ямар ч мессежийг орхохгүй.",
  },
  {
    icon: UserCheck,
    title: "Хүний гараар оролцох",
    body: "Хэдийд ч та яриаг гартаа авч болно. Систем ухарч, дэлгэрэнгүй мэдээллийг хадгалдаг.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[700px] h-[500px] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <p className="section-label mb-4">Шийдэл</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
              Nexon Nova — таны бизнесийн{" "}
              <span className="gradient-text">24/7 чат туслах.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              Facebook, Instagram хуудасны мессежийг автоматаар хариулж,
              хэрэглэгчийн мэдээллийг цуглуулж, захиалгыг нэмэгдүүлдэг —
              та унтаж байх үед ч ажилладаг тогтолцоо.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              Техникийн мэдлэг шаардахгүй. Бид бүх зүйлийг тохируулж өгнө.
              Та зүгээр л үр дүнгээ хүлээж авна.
            </p>
            <a href="#contact" className="btn-primary text-base inline-flex">
              Үнэгүй демо авах
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-dark card-hover p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/12 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
