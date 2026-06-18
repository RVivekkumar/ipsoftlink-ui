import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ERPHero from "@/components/erp/ERPHero";
import ERPModules from "@/components/erp/ERPModules";
import ERPWhyChoose from "@/components/erp/ERPWhyChoose";
import ConsultationSection from "@/components/ConsultationSection";
import ERPBenefits from "@/components/erp/ERPBenefits";
import ERPIndustries from "@/components/erp/ERPIndustries";
import ERPWorkflow from "@/components/erp/ERPWorkflow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Solutions - IP Softlink",
  description: "Streamline your business operations with IP Softlink's comprehensive ERP solutions. Integrate finance, HR, inventory, and more in one powerful platform.",
  keywords: ["ERP solutions", "enterprise resource planning", "business management software", "ERP implementation"],
  openGraph: {
    title: "ERP Solutions - IP Softlink",
    description: "Transform your business operations with IP Softlink's comprehensive ERP solutions. Integrate finance, HR, inventory, and more in one powerful platform.",
    url: "https://ipsoftlink.com/erp",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions - IP Softlink",
    description: "Transform your business operations with IP Softlink's comprehensive ERP solutions. Integrate finance, HR, inventory, and more in one powerful platform.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/erp",
  },
};

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
