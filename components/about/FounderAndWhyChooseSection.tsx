"use client";

import Image from "next/image";
import { Rocket, User, Users, BarChart3 } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const whyChooseUsData = [
  {
    icon: <Rocket className="w-10 h-10 text-[#0052FF]" />,
    title: "Innovation First",
    description:
      "We embrace the latest technologies to deliver innovative solutions that keep you ahead.",
  },
  {
    icon: <User className="w-10 h-10 text-[#0052FF]" />,
    title: "Business Focused",
    description:
      "Our solutions are designed with a business-first approach to drive real results.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#0052FF]" />,
    title: "Client Partnership",
    description:
      "We believe in building long-term partnerships through trust, transparency, and collaboration.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#0052FF]" />,
    title: "Scalable Growth",
    description:
      "Our solutions are built to scale with your business and support your growth journey.",
  },
];

export default function FounderAndWhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 opacity-10">
          <div className="grid grid-cols-8 gap-2">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[60%] h-[350px]">
          <svg className="w-full h-full" viewBox="0 0 800 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300L100 270C200 240 400 180 600 160C800 140 1000 160 1100 175L1200 190V400H1100C1000 400 800 400 600 400C400 400 200 400 100 400H0V300Z" fill="url(#paint2_linear)" />
            <defs>
              <linearGradient id="paint2_linear" x1="600" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0052FF" stopOpacity="0.15" />
                <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Founder Section */}
        <div className="mb-24 lg:mb-32">
          <AnimateOnView direction="up">
          <h2 className="text-[32px] lg:text-[42px] font-bold text-[#1E1E1E] text-center mb-2">
            Meet Our Founder
          </h2>
          </AnimateOnView>
          <AnimateOnView direction="up" delay={0.1}>
          <h1 className="text-[32px] lg:text-[42px] font-bold text-[#0052FF] text-center mb-16">
            A Vision Built on Innovation
          </h1>
          </AnimateOnView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Text */}
            <AnimateOnView direction="right" className="lg:col-span-1">
            <div className="lg:col-span-1">
              <div className="border-l-4 border-[#0052FF] pl-8">
                <p className="text-[#1E1E1E] text-lg font-semibold italic leading-relaxed">
                  "IP Softlink was founded with a simple vision — to help businesses leverage technology not just as a tool, but as a strategic advantage."
                </p>
              </div>
            </div>
            </AnimateOnView>

            {/* Center Image */}
            <AnimateOnView direction="up" delay={0.2} className="lg:col-span-1 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square rounded-[32px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-blue-400 z-10">
                  <div>
                    <p className="font-bold text-lg mb-2">Cloudinary Image Here</p>
                    <p className="text-sm text-gray-400">Founder Photo</p>
                  </div>
                </div>
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                  alt="Founder"
                  fill
                  className="object-cover opacity-10"
                />
              </div>
            </AnimateOnView>

            {/* Right Text */}
            <AnimateOnView direction="left" delay={0.3} className="lg:col-span-1">
            <div className="border-r-4 border-[#0052FF] pr-8">
                <p className="text-[#1E1E1E] text-lg font-semibold italic leading-relaxed">
                  "Our goal is to create meaningful digital solutions that solve real-world challenges and empower organizations to grow with confidence."
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <AnimateOnView direction="up">
          <h2 className="text-[36px] lg:text-[48px] font-bold text-[#0052FF] text-center mb-16">
            Why Businesses Choose Us
          </h2>
          </AnimateOnView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, idx) => (
              <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
              <div
                key={idx}
                className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0052FF]/10 to-[#0052FF]/5 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-[#0052FF]/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
              </AnimateOnView>
            ))}
          </div>
        </div>

        {/* Mission/Vision Section */}
        <AnimateOnView direction="up" className="mt-20">
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-14">
      <p className="text-sm text-gray-500 mb-2">Our Purpose</p>
      <h2 className="text-4xl font-bold text-blue-700">
        Driven by Vision, Guided by Mission
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Mission Card */}
      <AnimateOnView direction="right" delay={0.1}>
      <div className="bg-white rounded-lg border-t-4 border-blue-600 shadow-md p-8 hover:shadow-lg transition-all duration-300">
        <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L4 10h5v10h6V10h5L12 2z" />
          </svg>
        </div>

        <h3 className="text-3xl font-semibold text-blue-700 mb-4">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Deliver innovative technology solutions that create measurable
          business impact.
        </p>
      </div>
      </AnimateOnView>

      {/* Vision Card */}
      <AnimateOnView direction="left" delay={0.2}>
      <div className="bg-white rounded-lg border-t-4 border-blue-600 shadow-md p-8 hover:shadow-lg transition-all duration-300">
        <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 110-8 4 4 0 010 8z" />
          </svg>
        </div>

        <h3 className="text-3xl font-semibold text-blue-700 mb-4">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Become a trusted digital transformation partner for businesses
          worldwide.
        </p>
      </div>
      </AnimateOnView>
    </div>
  </div>
</section>
</AnimateOnView>
      </div>
    </section>
  );
}
