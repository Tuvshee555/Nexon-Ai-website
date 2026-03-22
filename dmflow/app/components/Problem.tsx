import { AlertCircle, Clock3, MessageSquareOff, RefreshCcw, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock3,
    title: "Хариулт удаан",
    body: "Хэрэглэгч асуугаад хариу хүлээсэн бол 10 минутын дотор явчихдаг. Өрсөлдөгч нь хурдан хариулсан бол та лидийг алдана.",
    tag: "Хамгийн нийтлэг",
  },
  {
    icon: MessageSquareOff,
    title: "Мессеж алдагдана",
    body: "Шөнө, амралтын өдөр, баяр ёслолын үеэр ирсэн мессеж хэн ч хариулдаггүй. Тэр хэрэглэгч буцаж ирдэггүй.",
    tag: null,
  },
  {
    icon: RefreshCcw,
    title: "Дахин давтагдах асуулт",
    body: '"Үнэ хэд вэ?", "Хаана байдаг вэ?", "Нээлтийн цаг хэд вэ?" — энэ асуултуудад өдөр бүр дахин хариулдаг. Цаг алдагддаг.',
    tag: null,
  },
  {
    icon: TrendingDown,
    title: "Лид хаалттай болдоггүй",
    body: "Мессеж илгээгч хэрэглэгч болон хувирахгүйгээр орхигдоно. Дагалдах мессеж явуулахгүй бол 60% нь мартагддаг гэдэг судалгаанд харагддаг.",
    tag: null,
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-[#0a0a0e]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-3">Асуудал</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Мессеж ирж байна.
            <br />
            <span className="gradient-text-warm">Гэхдээ лид болохгүй байна.</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Монголын дийлэнх бизнес мессежийг гараар хариулдаг. Энэ нь удаан,
            тогтворгүй, цаг хүч их шаарддаг. Үр дүн нь алдагдсан борлуулалт.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="card-dark card-hover p-7 flex gap-5"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                  <Icon size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-white font-bold text-base">{p.title}</h3>
                    {p.tag && (
                      <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/20">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-start gap-4 p-6 rounded-2xl bg-violet-500/5 border border-violet-500/15">
          <AlertCircle size={22} className="text-violet-400 shrink-0 mt-0.5" />
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            <span className="text-white font-semibold">Шийдэл нь энгийн:</span>{" "}
            Таны мессежийг хариулах, лид цуглуулах, захиалга авах ажлыг
            автомат системд шилжүүлэх — 24 цагийн турш, алдагдалгүй.
          </p>
        </div>
      </div>
    </section>
  );
}
