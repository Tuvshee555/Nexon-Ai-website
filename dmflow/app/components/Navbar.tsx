"use client";
import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const links = [
  { label: "Хэрхэн ажилладаг", href: "#how-it-works" },
  { label: "Боломжууд", href: "#features" },
  { label: "Үнэ", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(9,9,11,0.92)] backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-black text-lg tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg">
            <Zap size={15} className="text-white fill-white" />
          </span>
          <span className="text-white">
            Nexon<span className="gradient-text"> Nova</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
          Үнэгүй демо авах
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-300 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Цэс нээх"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[rgba(9,9,11,0.98)] border-t border-white/[0.06] px-5 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 text-sm py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm justify-center mt-1"
          >
            Үнэгүй демо авах
          </a>
        </div>
      )}
    </header>
  );
}
