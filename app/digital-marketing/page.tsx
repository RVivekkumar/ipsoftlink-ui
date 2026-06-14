import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalMarketingHero from "@/components/digital-marketing/DigitalMarketingHero";
import OurExpertise from "@/components/digital-marketing/OurExpertise";
import DigitalMarketingSolutions from "@/components/digital-marketing/DigitalMarketingSolutions";
import OurCommitment from "@/components/digital-marketing/OurCommitment";
import DrivingGrowth from "@/components/digital-marketing/DrivingGrowth";
import EmpoweringIndustriesSection from "@/components/software-development/Empoweringindustriessection";
import TechStack from "@/components/TechStack";
import ConsultationSection from "@/components/ConsultationSection";

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DigitalMarketingHero />
      <DigitalMarketingSolutions />
      <OurExpertise />
      <DrivingGrowth />
      <OurCommitment />
      <TechStack />
      <EmpoweringIndustriesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
