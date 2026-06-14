"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const whoWeArePoints = [
  "Strategic advice and roadmaps to align technology with your business goals.",
  "End-to-end transformation solutions to modernize your business.",
  "Scalable, secure, and reliable cloud solutions tailored to your needs.",
  "Improve efficiency and reduce costs with optimized business processes.",
];

const counters = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104502/div_v9wtmw.png",
    count: "500+",
    label: "Happy Clients",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/div_udpqge.png",
    count: "1200+",
    label: "Projects Delivered",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103126/div_1_mna7mu.png",
    count: "50+",
    label: "Experts",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/div_2_y5kddn.png",
    count: "98%",
    label: "Success Rate",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">

            {/* Counter Area */}
            <AnimateOnView direction="up">
            <div
              className="py-20"
              style={{
                background:
                  "linear-gradient(180deg,#0B69FF 0%,#004CCF 100%)",
              }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {counters.map((item, index) => (
                    <AnimateOnView key={index} direction="up" delay={index * 0.1}>
                    <div
                      key={index}
                      className="
                        bg-white
                        rounded-[14px]
                        py-2
                        flex
                        flex-col
                        items-center
                        justify-center
                        shadow-xl
                      "
                    >
                      <Image
                        src={item.image}
                        alt=""
                        width={52}
                        height={52}
                        className="object-contain"
                      />
      
                      <h3 className="mt-4 text-[34px] font-bold text-[#223354]">
                        {item.count}
                      </h3>
      
                      <p className="text-[#7A7A7A] text-sm">
                        {item.label}
                      </p>
                    </div>
                    </AnimateOnView>
                  ))}
                </div>
              </div>
            </div>
            </AnimateOnView>
            
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[400px] opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300L100 280C200 260 400 220 600 200C800 180 1000 180 1100 190L1200 200V400H1100C1000 400 800 400 600 400C400 400 200 400 100 400H0V300Z" fill="url(#paint1_linear)" />
          <defs>
            <linearGradient id="paint1_linear" x1="600" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Images 2x2 Grid */}
          <AnimateOnView direction="right" className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-5">
              {[
                "Office Corridor Image",
                "Workstation Image",
                "Stock Market/Charts Image",
                "Meeting Room Image",
              ].map((alt, idx) => (
                <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
                <div
                  key={idx}
                  className="aspect-[3/4] rounded-[32px] overflow-hidden shadow-lg bg-[#F8FAFF] relative"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-blue-300 z-10">
                    <p className="text-sm">{alt}</p>
                  </div>
                  <Image
                    src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                    alt={alt}
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                </AnimateOnView>
              ))}
            </div>
          </AnimateOnView>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <AnimateOnView direction="left">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0052FF] mb-3">
              Who We Are
            </h3>
            </AnimateOnView>
            <AnimateOnView direction="left" delay={0.1}>
            <h2 className="text-[32px] lg:text-[44px] font-bold text-[#1E1E1E] mb-6 leading-tight">
              Your Trusted Technology Consulting Partner
            </h2>
            </AnimateOnView>
            <AnimateOnView direction="left" delay={0.2}>
            <p className="text-[#4B5563] text-lg mb-10 leading-relaxed">
              At IP Softlink Solutions, we combine business expertise with innovative technology to help companies solve complex challenges, improve efficiency, and achieve long-term success.
            </p>
            </AnimateOnView>

            {/* Points */}
            <div className="space-y-6">
              {whoWeArePoints.map((point, idx) => (
                <AnimateOnView key={idx} direction="left" delay={0.3 + idx * 0.1}>
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-10 h-10 text-[#0052FF] flex-shrink-0" />
                  <p className="text-[#1E1E1E] text-lg leading-relaxed font-medium">
                    {point}
                  </p>
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
