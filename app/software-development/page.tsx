import Navbar from "@/components/Navbar";
import Hero from "@/components/software-development/Herosection";
import SoftwareServiceSection from "@/components/software-development/Softwareservicesection";
import WhatMakesDifferentSection from "@/components/software-development/Whatmakesdifferentsection";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/software-development/Whychoosesection";
import EmpoweringIndustriesSection from "@/components/software-development/Empoweringindustriessection";
import SolutionsSection from "@/components/software-development/Solutionswebuiltsection";
import ConsultationSection from "@/components/ConsultationSection";

export default function SoftwareDevelopment() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SoftwareServiceSection />
      <WhatMakesDifferentSection />
      <SolutionsSection />
      <WhyChooseSection />
      <EmpoweringIndustriesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}