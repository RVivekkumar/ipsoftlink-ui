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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services - IP Softlink",
  description: "Boost your online presence with IP Softlink's comprehensive digital marketing services including SEO, social media, PPC, and content marketing.",
  keywords: ["digital marketing", "SEO services", "social media marketing", "PPC advertising", "content marketing"],
  openGraph: {
    title: "Digital Marketing Services - IP Softlink",
    description: "Elevate your brand with IP Softlink's comprehensive digital marketing services including SEO, social media, PPC, and content marketing.",
    url: "https://ipsoftlink.com/digital-marketing",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services - IP Softlink",
    description: "Elevate your brand with IP Softlink's comprehensive digital marketing services including SEO, social media, PPC, and content marketing.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/digital-marketing",
  },
};

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
