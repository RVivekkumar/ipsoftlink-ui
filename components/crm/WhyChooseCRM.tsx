"use client";

import { Network, UsersRound, Gauge, Workflow, TrendingUp, UserCheck } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Image from "next/image";

const features = [
  {
    title: "Centerlized customer data",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797517/Frame_1000002562_bzsmfu.png",
  },
  {
    title: "Improved Team Productivity",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797516/Frame_1000002562_1_o4v2oo.png",
  },
  {
    title: "Faster Sales Conversions",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797514/Frame_1000002562_2_u83si6.png",
  },
  {
    title: "Automated Workflows",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797513/Frame_1000002562_3_rpmiab.png",
  },
  {
    title: "Real-Time Insights",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797511/Frame_1000002562_4_jr25ky.png",
  },
  {
    title: "Better Customer Experience",
    icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797510/Frame_1000002562_5_pmwlrq.png",
  },
];

export default function WhyChooseCRM() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
              Why Choose Our CRM
            </h3>
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#0052FF] mb-4">
              Empower Your Business Growth
            </h2>
          </div>
        </AnimateOnView>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, idx) => (
            <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="rounded-[28px] bg-blue-100/60 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0052FF]">
                  {item.title}
                </h3>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
