import { ArrowRight, MessageCircle, Star } from "lucide-react";

const stats = [
  { value: "+40%", label: "Захиалга нэмэгдсэн" },
  { value: "< 5с", label: "Хариулах хугацаа" },
  { value: "24/7", label: "Тасралтгүй ажилладаг" },
  { value: "3×", label: "Илүү олон лид" },
];

const avatarColors = ["bg-violet-400", "bg-indigo-400", "bg-sky-400", "bg-pink-400"];
const avatarLetters = ["О", "Б", "М", "Э"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden mesh-bg">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-violet-800/12 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-indigo-700/8 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
            Монголын бизнесүүдэд зориулсан автоматжуулалт
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.06] tracking-tight text-white mb-6 animate-fade-in-up animate-delay-100">
            Мессежийг алдахгүй.{" "}
            <span className="gradient-text">Хэрэглэгчийг орхихгүй.</span>
            <br className="hidden sm:block" />
            {" "}24/7 автомат тогтолцоо.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Nexon Nova-ийн AI систем таны Facebook, Instagram-ийн мессежийг
            шөнө өдөргүй хариулж, хэрэглэгчийн мэдээллийг цуглуулж,
            борлуулалтыг нэмэгдүүлдэг.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a href="#contact" className="btn-primary text-base w-full sm:w-auto justify-center">
              Үнэгүй демо авах
              <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary text-base w-full sm:w-auto justify-center">
              <MessageCircle size={17} />
              Хэрхэн ажилладаг вэ
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {avatarColors.map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-[#09090b] flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {avatarLetters[i]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-zinc-400">50+ бизнес ашиглаж байна</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-white/10" />

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm text-zinc-400 ml-1">5.0 үнэлгээ</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-white/10" />

            <span className="text-sm text-zinc-400">⚡ 48 цагт тохируулна</span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up">
          {stats.map((s) => (
            <div key={s.label} className="card-glass p-5 text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-zinc-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
