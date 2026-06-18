"use client";

import Image from "next/image";
import { Target, Headphones, Zap, ShieldCheck } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const growthPoints = [
  {
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424574/Frame_2147225754_c21xof.png",
    title: "Industry Expertise",
    description: "Tailored marketing solutions designed for your business and industry.",
    color: "#E82A66",
  },
  {
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424573/Frame_2147225754_1_celap6.png",
    title: "End-to-End Support",
    description: "From strategy to execution, we're with you every step.",
    color: "#FE7B14",
  },
  {
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424571/Frame_2147225754_2_re43pb.png",
    title: "Fast Execution",
    description: "Agile campaigns that deliver faster results.",
    color: "#6736DA",
  },
  {
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424570/Frame_2147225754_3_b8w9xw.png",
    title: "Results Focused",
    description: "Maximizing visibility, leads, and ROI.",
    color: "#059F61",
  },
];

export default function DrivingGrowth() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-pink-200 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Right Image - Comes first on mobile */}
          <AnimateOnView direction="left" delay={0.5} className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781424577/ChatGPT_Image_Jun_9_2026_07_58_34_AM_1_kdjivk.png"
                alt="Growth Dashboard"
                fill
                className="object-contain"
                priority={true}
              />
              </div>
              
              {/* Floating Elements - Hidden on small screens */}
              <div className="hidden sm:block">
                <div className="absolute top-5 sm:top-10 right-5 sm:right-10 flex items-center gap-2 bg-white p-3 sm:p-4 rounded-2xl shadow-lg animate-bounce">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Conversion Rate</p>
                    <p className="text-base sm:text-lg font-bold text-[#1E1E1E]">8.74%</p>
                  </div>
                </div>

                <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 bg-white p-2 rounded-xl shadow-lg">
                  <div className="flex items-end gap-1">
                    <div className="w-3 h-6 bg-pink-500 rounded-t-sm"></div>
                    <div className="w-3 h-10 bg-orange-500 rounded-t-sm"></div>
                    <div className="w-3 h-14 bg-green-500 rounded-t-sm"></div>
                    <div className="w-3 h-12 bg-blue-500 rounded-t-sm"></div>
                  </div>
                </div>

                <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 bg-white p-3 sm:p-4 rounded-2xl shadow-lg animate-pulse">
                  <div className="w-24 sm:w-32 h-16 sm:h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-end justify-center pb-2">
                    <svg className="w-20 sm:w-24 h-10 sm:h-12" viewBox="0 0 100 40">
                      <path d="M0 30 Q25 10 50 25 Q75 35 100 10" stroke="#0052FF" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnView>

          {/* Left Content - Comes second on mobile */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <AnimateOnView direction="right">
            <h2 className="text-[28px] md:text-[32px] lg:text-[44px] font-semibold text-[#0052FF] mb-4 lg:mb-6">
              Driving Growth Through<br className="hidden sm:block" />Smart Digital Marketing
            </h2>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.1}>
            <p className="text-[#4B5563] text-base lg:text-lg mb-6 lg:mb-10 max-w-xl leading-relaxed">
              We create result-driven marketing strategies that help businesses attract, engage, and convert the right audience.
            </p>
            </AnimateOnView>

            {/* Points */}
            <div className="space-y-4 lg:space-y-6">
              {growthPoints.map((item, idx) => (
                <AnimateOnView key={idx} direction="right" delay={0.2 + idx * 0.1}>
                <div key={idx} className="flex items-start gap-3 lg:gap-4 bg-white p-3 lg:p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  borderRight: `3px solid ${item.color}`,
                }}>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color }}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 lg:w-10 lg:h-10 object-contain"
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E1E1E] mb-1">{item.title}</h4>
                    <p className="text-[#4B5563] text-sm">{item.description}</p>
                  </div>
                </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}