import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import FounderAndWhyChooseSection from "@/components/about/FounderAndWhyChooseSection";
import { Metadata } from "next";
import CounterSection from "@/components/CounterSection";

export const metadata: Metadata = {
  title: "About Us - IP Softlink",
  description: "Learn about IP Softlink - a leading software development company with a passion for innovation. Discover our story, mission, and the team behind our success.",
  keywords: ["about IP Softlink", "software development company", "IT consulting firm", "our mission", "our team"],
  openGraph: {
    title: "About Us - IP Softlink",
    description: "Discover the story behind IP Softlink, our mission, values, and the team dedicated to transforming businesses through technology.",
    url: "https://ipsoftlink.com/about",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - IP Softlink",
    description: "Discover the story behind IP Softlink, our mission, values, and the team dedicated to transforming businesses through technology.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <CounterSection />
      <WhoWeAreSection />
      <FounderAndWhyChooseSection />
      <Footer />
    </main>
  );
}
