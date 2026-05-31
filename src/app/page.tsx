import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <PracticeAreas />
      <WhyUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
