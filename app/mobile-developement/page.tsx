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

export default function MobileDevelopment() {
  return (
    <main>
      <Navbar />
      <Mobileappherosection />
      <Mobileappdevsection />
      <Whatwedeliversection />
      <Appswedbuiltsection />
      <MobileappCommitPage />
      <WhyChooseSection />
      <EmpoweringIndustriesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}