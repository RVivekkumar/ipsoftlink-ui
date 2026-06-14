import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CounterSection from "@/components/CounterSection";
import IndustriesSection from "@/components/IndustriesSection";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <CounterSection />
      <TechStack />
      <IndustriesSection />
      <BusinessGrowthSection />
      <WhyChooseUsSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}