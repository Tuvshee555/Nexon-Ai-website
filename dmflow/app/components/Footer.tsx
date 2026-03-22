import { MessageCircle, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                <MessageCircle size={16} className="text-white" />
              </span>
              <span className="text-white">DM<span className="gradient-text">flow</span></span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              The #1 DM automation system for local service businesses.
              Turn social media messages into booked appointments — automatically.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook,  href: "#" },
                { icon: Twitter,   href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Product</div>
            <ul className="flex flex-col gap-2.5">
              {["How It Works", "Features", "Pricing", "Demo", "Results"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-zinc-500 text-sm hover:text-zinc-200 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Industries</div>
            <ul className="flex flex-col gap-2.5">
              {["Beauty Salons", "Gyms & Fitness", "Restaurants", "Spas", "Real Estate", "Dental Clinics"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-zinc-200 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">Contact</div>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@dmflow.io"
                  className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-200 transition-colors"
                >
                  <Mail size={14} />
                  hello@dmflow.io
                </a>
              </li>
              <li className="text-zinc-500 text-sm">
                Available Mon – Fri, 9am – 6pm GMT
              </li>
              <li className="pt-2">
                <a href="#cta" className="btn-primary text-sm py-2.5 px-4">
                  Book Free Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <span>© {year} DMflow. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
