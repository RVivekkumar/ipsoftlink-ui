import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <TechnologiesSection />
      <IndustriesSection />
      <BusinessGrowthSection />
      <WhyChooseUsSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}