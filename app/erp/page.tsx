import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ERPHero from "@/components/erp/ERPHero";
import ERPModules from "@/components/erp/ERPModules";
import ERPWhyChoose from "@/components/erp/ERPWhyChoose";
import ConsultationSection from "@/components/ConsultationSection";
import ERPBenefits from "@/components/erp/ERPBenefits";
import ERPIndustries from "@/components/erp/ERPIndustries";
import ERPWorkflow from "@/components/erp/ERPWorkflow";

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ERPHero />
      <ERPModules />
      <ERPWhyChoose />
      <ERPBenefits />
      <ERPIndustries />
      <ERPWorkflow />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
