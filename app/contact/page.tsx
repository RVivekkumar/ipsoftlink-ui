import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - IP Softlink",
  description: "Get in touch with IP Softlink for software development, IT consulting, mobile apps, web development, and digital marketing solutions. Let's discuss your project!",
  keywords: ["contact IP Softlink", "software development inquiry", "IT consulting contact", "digital marketing services"],
  openGraph: {
    title: "Contact Us - IP Softlink",
    description: "Ready to transform your business? Contact IP Softlink today for expert software development, IT consulting, and digital marketing solutions.",
    url: "https://ipsoftlink.com/contact",
    siteName: "IP Softlink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - IP Softlink",
    description: "Ready to transform your business? Contact IP Softlink today for expert software development, IT consulting, and digital marketing solutions.",
  },
  alternates: {
    canonical: "https://ipsoftlink.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
