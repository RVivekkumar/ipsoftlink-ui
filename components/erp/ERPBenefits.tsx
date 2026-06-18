"use client";

import Image from "next/image";
import AnimateOnView from "@/components/ui/AnimateOnView";

const benefitsData = [
  {
    title: "Improved Productivity",
    description: "Automate repetitive tasks and enable teams to focus on strategic business activities.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428662/Frame_1_lzntoc.png",
  },
  {
    title: "Real-Time Business Insights",
    description: "Access accurate data and reports instantly for faster decision-making.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428524/Frame_2_adej1c.png",
  },
  {
    title: "Centralized Data",
    description: "Store and manage all business information from a single unified platform.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428524/Frame_3_pwfdl5.png",
  },
  {
    title: "Increased Data Security",
    description: "Protect sensitive business information with advanced security and access controls.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428522/Frame_4_jlz4kk.png",
  },
  {
    title: "Enhanced Collaboration",
    description: "Improve communication and workflow access across departments with connected processes.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428521/Frame_5_jwkpev.png",
  },
  {
    title: "Better Customer Experience",
    description: "Deliver faster service and improve customer satisfaction through streamlined operations.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428520/Frame_6_bvvb7y.png",
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs by eliminating manual processes and inefficiencies.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428514/Frame_7_dt8jxh.png",
  },
  {
    title: "Scalability & Flexibility",
    description: "Adapt and grow your ERP system as your business expands.",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781428662/Frame_1_lzntoc.png",
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
              <div className="bg-white p-6 w-full h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-full flex items-center justify-center my-3">
                  <Image
                      src={item.icon}
                      alt={item.title}
                      width={350}
                      height={350}
                      className="object-contain"
                      priority={true}
                      unoptimized={true}
                    />
                </div>
                <h3 className="text-lg font-bold text-[#0154EE] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed text-sm">{item.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
