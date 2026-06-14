"use client";

import Image from "next/image";
import { Target, Headphones, Zap, ShieldCheck } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const growthPoints = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Industry Expertise",
    description: "Tailored marketing solutions designed for your business and industry.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "End-to-End Support",
    description: "From strategy to execution, we're with you every step.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Execution",
    description: "Agile campaigns that deliver faster results.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Results Focused",
    description: "Maximizing visibility, leads, and ROI.",
    color: "bg-green-100 text-green-600",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <AnimateOnView direction="right">
            <h2 className="text-[32px] lg:text-[44px] font-bold text-[#0052FF] mb-6">
              Driving Growth Through<br />Smart Digital Marketing
            </h2>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.1}>
            <p className="text-[#4B5563] text-lg mb-10 max-w-xl leading-relaxed">
              We create result-driven marketing strategies that help businesses attract, engage, and convert the right audience.
            </p>
            </AnimateOnView>

            {/* Points */}
            <div className="space-y-6">
              {growthPoints.map((item, idx) => (
                <AnimateOnView key={idx} direction="right" delay={0.2 + idx * 0.1}>
                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
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

          {/* Right Image */}
          <AnimateOnView direction="left" delay={0.5} className="lg:col-span-6">
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-center p-10 text-blue-400 z-10">
                <div>
                  <p className="font-bold text-lg mb-2">Cloudinary Image Here</p>
                  <p className="text-sm text-gray-400">Growth Dashboard Illustration</p>
                </div>
              </div>
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="Growth Dashboard"
                fill
                className="object-cover opacity-10"
              />

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 flex items-center gap-2 bg-white p-4 rounded-2xl shadow-lg animate-bounce">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                  <p className="text-lg font-bold text-[#1E1E1E]">8.74%</p>
                </div>
              </div>

              <div className="absolute bottom-20 right-20 bg-white p-2 rounded-xl shadow-lg">
                <div className="flex items-end gap-1">
                  <div className="w-3 h-6 bg-pink-500 rounded-t-sm"></div>
                  <div className="w-3 h-10 bg-orange-500 rounded-t-sm"></div>
                  <div className="w-3 h-14 bg-green-500 rounded-t-sm"></div>
                  <div className="w-3 h-12 bg-blue-500 rounded-t-sm"></div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-lg animate-pulse">
                <div className="w-32 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-end justify-center pb-2">
                  <svg className="w-24 h-12" viewBox="0 0 100 40">
                    <path d="M0 30 Q25 10 50 25 Q75 35 100 10" stroke="#0052FF" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
