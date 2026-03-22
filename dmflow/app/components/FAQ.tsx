"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Энэ систем найдвартай юу? Аккаунт хаалгахгүй юу?",
    a: "Тийм, найдвартай. Nexon Nova нь Meta (Facebook/Instagram)-ийн зөвшөөрөгдсөн API ашиглан холбогддог. Бид тусгай зөвшөөрлийн дагуу ажилладаг тул таны аккаунтад эрсдэл байхгүй. Мессежинг хаасан, автоматжуулалт хориглосон зүйл биш — энэ нь Meta-ийн официал Messenger API юм.",
  },
  {
    q: "Facebook болон Instagram хоёуланд нь ажилладаг уу?",
    a: "Тийм. Систем Facebook Page, Instagram Business аккаунт хоёуланд нь ажилладаг. Хэрэв та зөвхөн нэг платформ дээр байгаа бол зөвхөн тэр хуудасны автоматжуулалт тохируулна. Хоёулангийнх нь сонголт нь Стандарт ба дээш тарифт байдаг.",
  },
  {
    q: "Тохируулахад хэр удаан болдог вэ?",
    a: "Холболт хийх нь 10–15 минут, бүрэн тохируулга нь 48 цаг. Та бидэнд хандсанаас хойш 2 өдрийн дотор систем ажиллаж эхэлнэ. Бид бүх техникийн ажлыг хийдэг — та зүгээр л үр дүнгээ хүлээнэ.",
  },
  {
    q: "Хариултуудыг өөрчлөх, өөртөө тохируулах боломжтой юу?",
    a: "Мэдээж. Хариулт бүрийг таны бизнесийн хэлбэр, үйлчилгээ, үнэ, хаяг зэрэгт тохируулан бичдэг. Та хэдийд ч хариулт нэмэх, засах хүсэлт гаргах боломжтой. Ихэнх өөрчлөлтийг 24 цагийн дотор хийдэг.",
  },
  {
    q: "Telegram-д мэдэгдэл авах боломжтой юу?",
    a: "Тийм, энэ нь манай системийн нэг гол онцлог. Шинэ лид ирэх бүрд — нэр, утас, сонирхсон үйлчилгээ, харилцааны агуулга — бүгдийг Telegram-ийн мэдэгдэлд оруулж илгээнэ. Та ямар ч мессеж орхихгүй.",
  },
  {
    q: "Бүх лидийг, яриаг харах боломжтой юу?",
    a: "Тийм. Бүх яриа, цуглуулсан лид, хэрэглэгчийн мэдээллийг хянах самбар эсвэл Google Sheets-т хадгалдаг (тарифаас хамаарч). Та хэдэн хэрэглэгч ирсэн, хэдэн захиалга болсныг бүгдийг харна. Сарын тайлан ч авах боломжтой.",
  },
  {
    q: "Хүний гараар оролцох боломжтой юу?",
    a: "Тийм. Хэдийд ч та тухайн яриаг гартаа авч болно. Систем автоматаар ухарч, таны хариулах боломжийг нээдэг. Та дуусмагц дахин автомат горимд шилжих боломжтой.",
  },
  {
    q: "Захиалгыг цуцлах боломжтой юу?",
    a: "Тийм. Сарын захиалгыг дурын үед цуцлах боломжтой. Нуугдмал хугацааны гэрээ байхгүй. Хэрэв систем таны хүлээлтэд хүрэхгүй бол 7 хоногийн дотор бүрэн буцаан олгоно.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0a0a0e]">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Байнгын асуулт</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Асуулт байна уу?{" "}
            <span className="gradient-text">Хариулт нь энд байна.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`card-dark rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen ? "border-violet-500/30" : "border-white/[0.07]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-sm font-semibold leading-snug ${isOpen ? "text-white" : "text-zinc-200"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-violet-400" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 border-t border-white/[0.05]">
                    <p className="text-zinc-400 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-zinc-400 text-sm mb-4">
            Өөр асуулт байна уу?
          </p>
          <a href="#contact" className="btn-outline-blue text-sm">
            Бидэнтэй холбогдох
          </a>
        </div>
      </div>
    </section>
  );
}
