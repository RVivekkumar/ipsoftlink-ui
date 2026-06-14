"use client";

import Image from "next/image";
import { Search, Share2, TrendingUp, Send, BarChart2 } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const expertiseData = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO (Search Engine Optimization)",
    description: "Improve your search rankings, increase organic traffic, and enhance visibility effectively.",
    color: "from-teal-400 to-blue-500",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Build communities, engage audiences, and create powerful connections across popular social platforms.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Google Ads & Paid Campaigns",
    description: "Maximize ROI with targeted ads, smart bidding, and strategic paid advertising campaigns.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: "Content & Email Marketing",
    description: "Create valuable content and personalized email campaigns that nurture leads and improve customer engagement.",
    color: "from-orange-400 to-red-400",
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Website & App Conversion Marketing",
    description: "Optimize websites and applications to improve user experiences, boost conversions, and turn visitors into loyal customers.",
    color: "from-blue-700 to-blue-900",
  },
];

export default function OurExpertise() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[400px] opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300L100 280C200 260 400 220 600 200C800 180 1000 180 1100 190L1200 200V400H1100C1000 400 800 400 600 400C400 400 200 400 100 400H0V300Z" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint1_linear" x1="600" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
        <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1E1E1E] text-center mb-16">
          Our <span className="text-[#0052FF]">Expertise</span> Includes
        </h2>
        </AnimateOnView>

        {/* Staggered Grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Row */}
            {expertiseData.slice(0, 3).map((item, idx) => (
              <AnimateOnView key={idx} direction="up" delay={idx * 0.15} className="col-span-1">
                <ExpertiseCard {...item} />
              </AnimateOnView>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl md:mx-auto md:mt-6">
            {/* Second Row */}
            {expertiseData.slice(3).map((item, idx) => (
              <AnimateOnView key={idx} direction="up" delay={0.45 + idx * 0.15}>
                <ExpertiseCard {...item} />
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ icon, title, description, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-50">
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">{title}</h3>
      <p className="text-[#4B5563] leading-relaxed">{description}</p>
    </div>
  );
}
