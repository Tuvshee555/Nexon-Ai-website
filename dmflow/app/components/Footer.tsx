import { Zap, Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

const TELEGRAM_LINK  = process.env.NEXT_PUBLIC_TELEGRAM_LINK  ?? "https://t.me/nexonnova";
const PHONE_NUMBER   = process.env.NEXT_PUBLIC_PHONE_NUMBER   ?? "+976 9911 0000";
const PHONE_RAW      = process.env.NEXT_PUBLIC_PHONE_RAW      ?? "+97699110000";
const EMAIL_ADDRESS  = process.env.NEXT_PUBLIC_EMAIL_ADDRESS  ?? "hello@nexonnova.mn";
const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? "https://instagram.com/nexonnova";
const FACEBOOK_LINK  = process.env.NEXT_PUBLIC_FACEBOOK_LINK  ?? "https://facebook.com/nexonnova";

const productLinks = [
  { label: "Хэрхэн ажилладаг", href: "#how-it-works" },
  { label: "Боломжууд",         href: "#features"     },
  { label: "Жишээ яриа",        href: "#demo"         },
  { label: "Үр дүн",            href: "#results"      },
  { label: "Үнэ",               href: "#pricing"      },
  { label: "FAQ",               href: "#faq"          },
];

const niches = [
  "Гоо сайхны салон",
  "Фитнес, дасгалын заал",
  "Ресторан, кафе",
  "Эмийн сан, эмнэлэг",
  "Үл хөдлөх хөрөнгө",
  "Онлайн дэлгүүр",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 font-black text-lg tracking-tight mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center">
                <Zap size={15} className="text-white fill-white" />
              </span>
              <span className="text-white">Nexon<span className="gradient-text"> Nova</span></span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Монголын бизнесүүдэд зориулсан Facebook & Instagram
              чат автоматжуулалт. 24/7 мессеж хариулалт, лид цуглуулалт.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: INSTAGRAM_LINK, label: "Instagram" },
                { icon: Facebook,  href: FACEBOOK_LINK,  label: "Facebook"  },
                { icon: MessageCircle, href: TELEGRAM_LINK, label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Үйлчилгээ</div>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-zinc-500 text-sm hover:text-zinc-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Хэрэглэгчдийн салбар</div>
            <ul className="flex flex-col gap-2.5">
              {niches.map((n) => (
                <li key={n}>
                  <span className="text-zinc-500 text-sm">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Холбоо барих</div>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-200 transition-colors"
                >
                  <MessageCircle size={14} />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-200 transition-colors"
                >
                  <Phone size={14} />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-200 transition-colors"
                >
                  <Mail size={14} />
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="text-zinc-600 text-xs pt-1">
                Даваа–Баасан, 09:00–18:00
              </li>
              <li className="pt-2">
                <a href="#contact" className="btn-primary text-sm py-2.5 px-4">
                  Үнэгүй демо авах
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <span>© {year} Nexon Nova. Бүх эрх хуулиар хамгаалагдсан.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-400 transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Үйлчилгээний нөхцөл</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
