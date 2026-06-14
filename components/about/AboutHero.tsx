"use client";

import Image from "next/image";
import { Lightbulb, Layers, TrendingUp } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const heroFeatures = [
  { icon: <Lightbulb className="w-7 h-7" />, text: "Technology Consulting" },
  { icon: <Layers className="w-7 h-7" />, text: "Digital Transformation" },
  { icon: <TrendingUp className="w-7 h-7" />, text: "Business Growth" },
];

export default function AboutHero() {
  return (
    <section className="pt-48 pb-24 lg:py-48 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[400px]">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400L60 373.333C120 346.667 240 293.333 360 266.667C480 240 600 240 720 253.333C840 266.667 960 293.333 1080 280C1200 266.667 1320 213.333 1380 186.667L1440 160V400H1380C1320 400 1200 400 1080 400C960 400 840 400 720 400C600 400 480 400 360 400C240 400 120 400 60 400H0Z" fill="url(#paint0_linear_1_1)" />
          <defs>
            <linearGradient id="paint0_linear_1_1" x1="720" y1="0" x2="720" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <AnimateOnView direction="right">
              <h2 className="text-[42px] lg:text-[56px] font-bold text-[#1E1E1E] mb-2">
                About us
              </h2>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.1}>
              <h1 className="text-[42px] lg:text-[56px] font-bold text-[#0052FF] mb-8">
                IP SoftLink Solutions
              </h1>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.2}>
              <p className="text-[#4B5563] text-lg lg:text-xl mb-12 max-w-xl leading-relaxed">
                We are a technology consulting and solution provider helping business innovate, transforms, and grow in a digital - first world.
              </p>
            </AnimateOnView>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-10">
              {heroFeatures.map((feature, idx) => (
                <AnimateOnView key={idx} direction="up" delay={0.3 + idx * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0052FF] to-[#4A90E2] rounded-full flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-500/30">
                      {feature.icon}
                    </div>
                    <span className="text-[#1E1E1E] font-semibold text-sm">
                      {feature.text}
                    </span>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <AnimateOnView direction="left" delay={0.4} className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-center p-10 text-blue-400">
                <div>
                  <p className="font-bold text-lg mb-2">Cloudinary Image Here</p>
                  <p className="text-sm text-gray-400">Team Meeting Photo</p>
                </div>
              </div>
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="Team Meeting"
                fill
                className="object-cover opacity-10"
              />
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
