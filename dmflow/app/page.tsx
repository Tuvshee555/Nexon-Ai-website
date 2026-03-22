import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Trust       from "./components/Trust";
import Problem     from "./components/Problem";
import Solution    from "./components/Solution";
import HowItWorks  from "./components/HowItWorks";
import Features    from "./components/Features";
import Demo        from "./components/Demo";
import Results     from "./components/Results";
import Pricing     from "./components/Pricing";
import Contact     from "./components/Contact";
import FAQ         from "./components/FAQ";
import CTA         from "./components/CTA";
import Footer      from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Demo />
        <Results />
        <Pricing />
        <Contact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
