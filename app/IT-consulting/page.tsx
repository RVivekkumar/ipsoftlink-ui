import Navbar from "@/components/Navbar";
import Itconsultingherosection from "@/components/IT-consulting/Itconsultingherosection";
import Itconsultingsection2 from "@/components/IT-consulting/Itconsultingsection2";
import Strategicframworksection from "@/components/IT-consulting/Strategicframeworksection";
import Smartitsolutionssection from "@/components/IT-consulting/Smartitsolutionssection"
import Footer from "@/components/Footer";
import Whychooseconsultingsection from "@/components/IT-consulting/Whychooseconsultingsection";
import EmpoweringIndustriesSection from "@/components/software-development/Empoweringindustriessection";
import MobileappCommitPage from "@/components/mobile-developement/Mobileappcommit";
import ConsultationSection from "@/components/ConsultationSection";
import TechStack from "@/components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting Services - IP Softlink",
  description: "Expert IT consulting services from IP Softlink. Transform your business with strategic technology solutions, digital transformation, and innovative IT strategies.",
  keywords: ["IT consulting", "digital transformation", "technology consulting", "IT strategy"],
  openGraph: {
    title: "IT Consulting Services - IP Softlink",
    description: "Expert IT consulting services from IP Softlink. Transform your business with strategic technology solutions, digital transformation, and innovative IT strategies.",
    url: "https://ipsoftlink.com/IT-consulting",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting Services - IP Softlink",
    description: "Expert IT consulting services from IP Softlink. Transform your business with strategic technology solutions, digital transformation, and innovative IT strategies.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/IT-consulting",
  },
};

export default function ITConsulting() {
  return (
    <main>
      <Navbar />
      <Itconsultingherosection />
      <Itconsultingsection2 />
      <Strategicframworksection />
      <Smartitsolutionssection />
      <Whychooseconsultingsection />
      <TechStack />
      {/* <MobileappCommitPage /> */}
      <EmpoweringIndustriesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}