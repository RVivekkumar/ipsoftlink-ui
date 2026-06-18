import Navbar from "@/components/Navbar";
import Hero from "@/components/software-development/Herosection";
import SoftwareServiceSection from "@/components/software-development/Softwareservicesection";
import WhatMakesDifferentSection from "@/components/software-development/Whatmakesdifferentsection";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/software-development/Whychoosesection";
import EmpoweringIndustriesSection from "@/components/software-development/Empoweringindustriessection";
import SolutionsSection from "@/components/software-development/Solutionswebuiltsection";
import ConsultationSection from "@/components/ConsultationSection";
import TechStack from "@/components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services - IP Softlink",
  description: "Get custom software development services from IP Softlink. We build scalable, secure, and high-performance software solutions tailored to your business needs.",
  keywords: ["software development", "custom software", "enterprise software", "software solutions"],
  openGraph: {
    title: "Software Development Services - IP Softlink",
    description: "Get custom software development services from IP Softlink. We build scalable, secure, and high-performance software solutions tailored to your business needs.",
    url: "https://ipsoftlink.com/software-development",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services - IP Softlink",
    description: "Get custom software development services from IP Softlink. We build scalable, secure, and high-performance software solutions tailored to your business needs.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/software-development",
  },
};

export default function SoftwareDevelopment() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SoftwareServiceSection />
      <WhatMakesDifferentSection />
      <SolutionsSection />
      <TechStack />
      <WhyChooseSection />
      <EmpoweringIndustriesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}