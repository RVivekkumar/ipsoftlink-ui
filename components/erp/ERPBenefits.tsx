"use client";

import Image from "next/image";
import AnimateOnView from "@/components/ui/AnimateOnView";

const benefitsData = [
  {
    title: "Improved Productivity",
    description: "Automate repetitive tasks and enable teams to focus on strategic business activities.",
  },
  {
    title: "Real-Time Business Insights",
    description: "Access accurate data and reports instantly for faster decision-making.",
  },
  {
    title: "Centralized Data",
    description: "Store and manage all business information from a single unified platform.",
  },
  {
    title: "Increased Data Security",
    description: "Protect sensitive business information with advanced security and access controls.",
  },
  {
    title: "Enhanced Collaboration",
    description: "Improve communication and workflow access across departments with connected processes.",
  },
  {
    title: "Better Customer Experience",
    description: "Deliver faster service and improve customer satisfaction through streamlined operations.",
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs by eliminating manual processes and inefficiencies.",
  },
  {
    title: "Scalability & Flexibility",
    description: "Adapt and grow your ERP system as your business expands.",
  },
];

export default function ERPBenefits() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 opacity-10">
          <div className="grid grid-cols-8 gap-2">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
              Benefits of ERP System
            </h3>
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1E1E1E] mb-4">
              Unlock the Full Potential of Your Business with ERP
            </h2>
            <p className="text-[#4B5563] text-lg max-w-3xl mx-auto">
              An integrated ERP system helps businesses streamline operations, improve efficiency, and gain complete visibility across every department.
            </p>
          </div>
        </AnimateOnView>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((item, idx) => (
            <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white p-6 rounded-[28px] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-full aspect-square rounded-[20px] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 overflow-hidden">
                  <div className="text-center p-4">
                    <p className="font-bold text-blue-500 mb-2">Cloudinary Image</p>
                    <p className="text-xs text-gray-400">Benefit Illustration</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0052FF] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed text-sm">{item.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
