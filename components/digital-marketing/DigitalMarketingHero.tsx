"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function DigitalMarketingHero() {
  return (
    <section className="pt-48 pb-24 lg:py-48 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[500px]">
        <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 500L60 460C120 420 240 340 360 300C480 260 600 260 720 280C840 300 960 340 1080 340C1200 340 1320 300 1380 280L1440 260V500H1380C1320 500 1200 500 1080 500C960 500 840 500 720 500C600 500 480 500 360 500C240 500 120 500 60 500H0Z" fill="url(#paint0_linear_1_1)" />
          <defs>
            <linearGradient id="paint0_linear_1_1" x1="720" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.15" />
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
              <h2 className="text-[42px] lg:text-[64px] font-bold text-[#1E1E1E] mb-2">
                Digital Marketing
              </h2>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.1}>
              <h1 className="text-[42px] lg:text-[64px] font-bold text-[#0052FF] mb-8">
                That Drives Results.
              </h1>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.2}>
              <p className="text-[#4B5563] text-lg lg:text-xl mb-12 max-w-xl leading-relaxed">
                Creative Strategies, Smart Campaigns, And Data-Driven Solutions T Grow Your Brand And Reach The Right Audience.
              </p>
            </AnimateOnView>

            {/* Buttons */}
            <AnimateOnView direction="right" delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#0052FF] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-[#1E1E1E] font-bold rounded-xl shadow-md transition-all duration-300">
                View Our Work
              </button>
            </div>
            </AnimateOnView>
          </div>

          {/* Right Image */}
          <AnimateOnView direction="left" delay={0.4} className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-center p-10 text-blue-400 z-10">
                <div>
                  <p className="font-bold text-lg mb-2">Cloudinary Image Here</p>
                  <p className="text-sm text-gray-400">Digital Marketing Illustration</p>
                </div>
              </div>
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="Digital Marketing"
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
