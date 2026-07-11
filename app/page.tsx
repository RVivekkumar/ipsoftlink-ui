import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CounterSection from "@/components/CounterSection";
import IndustriesSection from "@/components/IndustriesSection";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Softlink - Leading Software Development & IT Consulting Company",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png",
        type: "image/png",
      },
    ],
    apple: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png",
  },
  description: "IP Softlink is a top software development company offering custom software, mobile apps, web development, IT consulting, and digital marketing solutions. Transform your business with our expertise.",
  keywords: ["software development", "IT consulting", "mobile app development", "web development", "digital marketing", "IP Softlink"],
  openGraph: {
    title: "IP Softlink - Leading Software Development & IT Consulting Company",
    description: "Transform your business with IP Softlink's custom software, mobile apps, web development, IT consulting, and digital marketing solutions.",
    url: "https://ipsoftlink.com",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IP Softlink - Leading Software Development & IT Consulting Company",
    description: "Transform your business with IP Softlink's custom software, mobile apps, web development, IT consulting, and digital marketing solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ipsoftlink.com",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <CounterSection />
      <TechStack />
      <IndustriesSection />
      <BusinessGrowthSection />
      <WhyChooseUsSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}