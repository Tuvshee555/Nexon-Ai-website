import { CheckCheck, Instagram } from "lucide-react";

const beforeMsgs = [
  { from: "user",  text: "Сайн уу! Үнэ хэд вэ? 🙏",                            time: "Даваа 10:03" },
  { from: "user",  text: "Харлаа уу? Хариу хүлээж байна 😅",                    time: "Даваа 14:22" },
  { from: "user",  text: "За болж байна, өөр газар очно...",                    time: "Мягмар 09:10" },
];

const afterMsgs = [
  { from: "user", text: "Сайн уу! Үнэ хэд вэ? 🙏",                            time: "10:03" },
  {
    from: "bot",
    text: "Сайн уу! 👋 Манай үйлчилгээнд сонирхол тавьсанд баярлалаа. Та ямар үйлчилгээ авахыг хүсэж байна вэ?",
    time: "10:03",
  },
  { from: "user", text: "Гоо сайхны үйлчилгээ авмаар байна",                   time: "10:04" },
  {
    from: "bot",
    text: "Гайхалтай! 😊 Манай үнийн жагсаалт:\n• Үс засалт — 25,000₮\n• Хумс арчилгаа — 35,000₮\n• Нүдний хөмсөг — 20,000₮\nТа аль үйлчилгээ сонирхож байна вэ?",
    time: "10:04",
  },
  { from: "user", text: "Үс засалт хийлгэмээр байна",                          time: "10:05" },
  {
    from: "bot",
    text: "Маш сайн! Та өнөөдөр 14:00 эсвэл маргааш 11:00 цагт ирэх боломжтой юу?",
    time: "10:05",
  },
  { from: "user", text: "Өнөөдөр 14:00 тохирно",                               time: "10:06" },
  {
    from: "bot",
    text: "Захиалга баталгаажлаа! ✅ Өнөөдөр 14:00 цагт хүлээж байна. Утасны дугаараа үлдээнэ үү?",
    time: "10:06",
  },
  { from: "user", text: "9911-XXXX",                                            time: "10:06" },
  {
    from: "bot",
    text: "Баярлалаа! Захиалгыг бататгалаа 🎉 Танд тохиромжтой газраа ирнэ үү. Асуух зүйл байвал мэдэгдээрэй!",
    time: "10:06",
  },
];

const notificationMsg = {
  title: "🔔 Шинэ лид — Nexon Nova",
  lines: [
    "👤 Хэрэглэгч: @enkhbat_b",
    "📋 Үйлчилгээ: Үс засалт",
    "📅 Цаг: Өнөөдөр 14:00",
    "📞 Утас: 9911-XXXX",
    "✅ Төлөв: Захиалга баталгаажсан",
  ],
};

export default function Demo() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-[#0a0a0e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-violet-900/8 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Жишээ яриа</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Автоматжуулалтын{" "}
            <span className="gradient-text">ялгааг харна уу.</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Ижил хэрэглэгч, ижил асуулт — гэхдээ огт өөр үр дүн.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Before */}
          <div className="card-glass overflow-hidden border-red-500/15">
            <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center">
                  <Instagram size={12} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Автоматжуулалтгүй</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 font-semibold border border-red-500/20">
                ЛИД АЛДАГДСАН
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3 min-h-[300px]">
              {beforeMsgs.map((m, i) => (
                <div key={i} className={`flex flex-col gap-1 ${m.from === "user" ? "items-end" : "items-start"}`}>
                  <div className={m.from === "user" ? "chat-user" : "chat-bot"}>{m.text}</div>
                  <span className="text-[10px] text-zinc-600">{m.time}</span>
                </div>
              ))}
              <div className="mt-auto flex items-center gap-2 text-zinc-600 text-xs pt-3 border-t border-white/5">
                <span>Бизнес 27 цагийн дараа хариулсан...</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="card-glass overflow-hidden border-emerald-500/20">
            <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                  <Instagram size={12} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Nexon Nova-тай</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/20">
                ЗАХИАЛГА БОЛСОН ✓
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3">
              {afterMsgs.map((m, i) => (
                <div key={i} className={`flex flex-col gap-1 ${m.from === "user" ? "items-end" : "items-start"}`}>
                  {m.from === "bot" && (
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-4 h-4 rounded-full bg-violet-500/30 flex items-center justify-center text-[7px] text-violet-300 font-bold">AI</div>
                      <span className="text-[10px] text-zinc-500">Nexon Nova Bot</span>
                    </div>
                  )}
                  <div className={m.from === "user" ? "chat-user" : "chat-bot"} style={{ whiteSpace: "pre-line" }}>
                    {m.text}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-zinc-600">{m.time}</span>
                    {m.from === "bot" && <CheckCheck size={10} className="text-violet-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Telegram notification preview */}
        <div className="max-w-md mx-auto">
          <p className="text-center text-xs text-zinc-500 mb-3">Telegram дээр эзэнд ирэх мэдэгдэл</p>
          <div className="card-dark border border-emerald-500/20 p-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#229ED9] flex items-center justify-center text-white text-xs font-bold">T</div>
              <span className="text-sm font-semibold text-white">Nexon Nova Bot</span>
              <span className="ml-auto text-[10px] text-zinc-500">10:07</span>
            </div>
            <div className="bg-[#0a1628] rounded-xl p-3 border border-white/5">
              <p className="text-emerald-400 text-xs font-bold mb-2">{notificationMsg.title}</p>
              {notificationMsg.lines.map((line, i) => (
                <p key={i} className="text-zinc-300 text-xs leading-6">{line}</p>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-6">
          * Дээрх нь жишээ яриа юм. Хариулт, дизайн таны бизнест тохируулагдана.
        </p>
      </div>
    </section>
  );
}
