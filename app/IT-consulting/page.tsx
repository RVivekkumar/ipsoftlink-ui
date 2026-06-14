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