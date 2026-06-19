import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Features from "@/components/Features";
import Goals from "@/components/Goals";
import Method from "@/components/Method";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStats />
        <Features />
        <Goals />
        <Method />
        <About />
        <Testimonials />
        <Offers />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
