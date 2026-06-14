import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import FounderAndWhyChooseSection from "@/components/about/FounderAndWhyChooseSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <WhoWeAreSection />
      <FounderAndWhyChooseSection />
      <Footer />
    </main>
  );
}
