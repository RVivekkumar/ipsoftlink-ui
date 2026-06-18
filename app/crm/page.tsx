import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";
import { Metadata } from "next";
import CRMHero from "@/components/crm/CRMHero";
import CounterSection from "@/components/CounterSection";
import CustomerRelationship from "@/components/crm/CustomerRelationship";
import CRMIndustries from "@/components/crm/CRMIndustries";

export const metadata: Metadata = {
  title: "CRM Solutions - IP Softlink",
  description:
    "Enhance customer relationships and boost sales with IP Softlink's CRM solutions. Manage leads, automate workflows, track customer interactions, and improve business growth.",
  keywords: [
    "CRM solutions",
    "customer relationship management",
    "sales automation",
    "lead management",
    "customer management software",
    "CRM implementation",
  ],
  openGraph: {
    title: "CRM Solutions - IP Softlink",
    description:
      "Enhance customer relationships and boost sales with IP Softlink's CRM solutions. Manage leads, automate workflows, track customer interactions, and improve business growth.",
    url: "https://ipsoftlink.com/crm",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions - IP Softlink",
    description:
      "Enhance customer relationships and boost sales with IP Softlink's CRM solutions. Manage leads, automate workflows, track customer interactions, and improve business growth.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/crm",
  },
};

export default function CRMPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CRMHero />
      <CounterSection/>
      <CustomerRelationship />
      <CRMIndustries/>
      <ConsultationSection />
      <Footer />
    </main>
  );
}