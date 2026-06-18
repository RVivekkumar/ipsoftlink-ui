"use client";

import Image from "next/image";
import { Monitor } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const solutionsData = [
  { title: "Performance Marketing" },
  { title: "Content Marketing" },
  { title: "Analytics & Reporting" },
  { title: "Social Media Marketing" },
  { title: "Lead Generation" },
  { title: "Search Engine Optimization (SEO)" },
];

export default function DigitalMarketingSolutions() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">

         <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781422414/Frame_2147225837_kdwz8j.png"
                alt="contact Background"
                fill
                className="object-cover"
                priority
              />
            </div>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[100px] "></div>
        <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-blue-200 rounded-full blur-[80px] "></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
            OUR DIGITAL MARKETING SOLUTIONS
          </h3>
          <h2 className="text-[36px] lg:text-[48px] font-semibold text-[#0052FF] mb-4">
            Complete Digital Marketing Services
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
            Helping businesses attract, engage, and convert customers through strategic digital services.
          </p>
        </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Solutions */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center justify-center">
            {solutionsData.slice(0, 3).map((item, idx) => (
              <AnimateOnView key={idx} direction="right" delay={idx * 0.1}>
              <div key={idx} className="bg-[#0154EE] p-2 w-44 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#0052FF] rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm text-white text-center">{item.title}</h3>
              </div>
              </AnimateOnView>
            ))}
          </div>

          {/* Center Image */}
          <AnimateOnView direction="up" delay={0.3} className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Laptop Mockup - Plain */}
              <div className="relative">
                <div className="relative w-full aspect-square">
                   <Image
                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781422411/ChatGPT_Image_Jun_8_2026_01_08_58_PM_1_er4nd8.png"
                    alt="Dashboard"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 z-10 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                  <p className="text-xs text-gray-500">Total Reach</p>
                  <p className="text-xl font-bold text-[#1E1E1E]">125K</p>
                </div>
                <div className="absolute top-1/2 -right-8 z-10 bg-white p-4 rounded-xl shadow-lg animate-pulse">
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                  <p className="text-xl font-bold text-green-600">+41.7%</p>
                </div>
                <div className="absolute -bottom-4 -left-4 z-10 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-100">
                  <p className="text-xs text-gray-500">Leads Generated</p>
                  <p className="text-xl font-bold text-[#1E1E1E]">36K</p>
                </div>
              </div>
            </div>
          </AnimateOnView>

          {/* Right Column - Solutions */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center justify-center">
            {solutionsData.slice(3).map((item, idx) => (
              <AnimateOnView key={idx} direction="left" delay={0.4 + idx * 0.1}>
              <div key={idx} className="bg-[#0154EE] p-2 w-44 rounded-2xl shadow-lg flex flex-col items-center justify-center shadow-blue-500/10 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#0052FF] rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm text-white text-center">{item.title}</h3>
              </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
