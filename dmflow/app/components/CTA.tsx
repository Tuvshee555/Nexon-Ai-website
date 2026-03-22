import { ArrowRight, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/8 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-violet-800/12 blur-[140px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-8">
          <Clock size={13} />
          Only 5 setup slots open this month
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          Your competitors are already{" "}
          <span className="gradient-text">automating their DMs.</span>
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Every day without automation is another day of missed leads, slow replies, and
          revenue walking out the door. Book your free demo — we&apos;ll show you exactly
          what&apos;s possible for your business in 30 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto justify-center">
            Book My Free Demo
            <ArrowRight size={20} />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base w-full sm:w-auto justify-center">
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
          <span>✓ No credit card required</span>
          <span className="hidden sm:block">·</span>
          <span>✓ 30-minute call</span>
          <span className="hidden sm:block">·</span>
          <span>✓ Setup in 48 hours</span>
        </div>
      </div>
    </section>
  );
}
