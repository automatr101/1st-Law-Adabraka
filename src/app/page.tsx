import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Principal from "@/components/sections/Principal";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LexChat from "@/components/LexChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Principal />
      <PracticeAreas />
      <WhyUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppWidget />
      <LexChat />
    </>
  );
}
