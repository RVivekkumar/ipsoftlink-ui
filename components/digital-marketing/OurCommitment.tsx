"use client";

import Image from "next/image";
import { Rocket, Users, Zap, BarChart3 } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const commitmentData = [
  {
    icon: <Rocket className="w-10 h-10 text-[#0052FF]" />,
    title: "Strategic Focus",
    description: "We understand your business and create strategies that align with your goals.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#0052FF]" />,
    title: "End-to-End Partnership",
    description: "From planning to execution, we're with you every step.",
  },
  {
    icon: <Zap className="w-10 h-10 text-[#0052FF]" />,
    title: "Agile & Efficient",
    description: "We use smart processes and tools to deliver faster without compromising quality.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#0052FF]" />,
    title: "Results That Matter",
    description: "Focus on measurable results that drive real growth and long-term success.",
  },
];

export default function OurCommitment() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 opacity-10">
          <div className="grid grid-cols-6 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <div className="grid grid-cols-6 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
            OUR COMMITMENT
          </h3>
          <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1E1E1E] mb-4">
            We're <span className="text-[#0052FF]">Committed</span> To Your Growth
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
            We Don't Just Provide Services — We Build Partnerships. Our Commitment Drives Everything We Do.
          </p>
        </div>
        </AnimateOnView>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {commitmentData.map((item, idx) => (
            <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
            <div key={idx} className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t-4 border-blue-500 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0052FF]/10 to-[#0052FF]/5 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-[#0052FF]/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{item.title}</h3>
              <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
            </AnimateOnView>
          ))}
        </div>

        {/* Bottom Banner */}
        <AnimateOnView direction="up" delay={0.4}>
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
              alt="IP Softlink"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
              At IP SoftLink, We are committed to helping brands.
            </h3>
            <p className="text-[#4B5563] text-lg">
              Connect. Secure. Solve. Grow.
            </p>
          </div>
        </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
