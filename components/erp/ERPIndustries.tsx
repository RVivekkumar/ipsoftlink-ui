"use client";

import Image from "next/image";
import AnimateOnView from "@/components/ui/AnimateOnView";

const industriesData = [
  { name: "HealthCare" },
  { name: "Rwtail & E-Commerce" },
  { name: "Manufacturing" },
  { name: "Educations" },
  { name: "Construction" },
  { name: "Logistics & Supply Chain" },
  { name: "Corporate Enterprises" },
  { name: "Agriculture" },
  { name: "Pharmaceuticals" },
];

export default function ERPIndustries() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[400px]">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400L60 373.333C120 346.667 240 293.333 360 266.667C480 240 600 240 720 253.333C840 266.667 960 293.333 1080 280C1200 266.667 1320 213.333 1380 186.667L1440 160V400H1380C1320 500 1200 500 1080 500C960 500 840 500 720 500C600 500 480 500 360 500C240 500 120 500 60 500H0Z" fill="url(#paint0_linear_1_1)" />
          <defs>
            <linearGradient id="paint0_linear_1_1" x1="720" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.2" />
              <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
              Industries We Serve
            </h3>
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1E1E1E] mb-4">
              ERP solution for <span className="text-[#0052FF]">Every Industry</span>
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
              Our ERP System is designed to meet the unique needs of different industries by streamlining operations, improving effective, and driving growth
            </p>
          </div>
        </AnimateOnView>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industriesData.map((item, idx) => (
            <AnimateOnView key={idx} direction="up" delay={idx * 0.08}>
              <div className="bg-white p-6 rounded-[40px] shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <p className="text-xs text-gray-500 font-semibold">Image</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1E1E1E]">{item.name}</h3>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
