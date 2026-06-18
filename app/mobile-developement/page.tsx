import Navbar from "@/components/Navbar";
import Mobileappherosection from "@/components/mobile-developement/Mobileappherosection";
import Mobileappdevsection from "@/components/mobile-developement/Mobileappdevsection";
import Whatwedeliversection from "@/components/mobile-developement/Whatwedeliverssection";
import Appswedbuiltsection from "@/components/mobile-developement/Appswebuiltsection"
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/software-development/Whychoosesection";
import EmpoweringIndustriesSection from "@/components/software-development/Empoweringindustriessection";
import MobileappCommitPage from "@/components/mobile-developement/Mobileappcommit";
import ConsultationSection from "@/components/ConsultationSection";
import TechStack from "@/components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development - IP Softlink",
  description: "Build stunning mobile apps with IP Softlink's expert mobile development services. iOS, Android, and cross-platform solutions tailored to your business.",
  keywords: ["mobile app development", "iOS app development", "Android app development", "cross-platform apps"],
  openGraph: {
    title: "Mobile App Development - IP Softlink",
    description: "Build stunning mobile apps with IP Softlink's expert mobile development services. iOS, Android, and cross-platform solutions tailored to your business.",
    url: "https://ipsoftlink.com/mobile-developement",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development - IP Softlink",
    description: "Build stunning mobile apps with IP Softlink's expert mobile development services. iOS, Android, and cross-platform solutions tailored to your business.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/mobile-developement",
  },
};

export default function MobileDevelopment() {
  return (
    <main>
      <Navbar />
      <Mobileappherosection />
      <Mobileappdevsection />
      <Whatwedeliversection />
      <Appswedbuiltsection />
      <TechStack />
      <MobileappCommitPage />
      <WhyChooseSection />
      <EmpoweringIndustriesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}