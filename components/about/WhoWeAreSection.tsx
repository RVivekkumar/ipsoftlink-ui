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


const images = [
  "https://res.cloudinary.com/drxigvlxc/image/upload/v1781418311/image_23_chrrsn.png",
  "https://res.cloudinary.com/drxigvlxc/image/upload/v1781418311/image_25_xidytg.png",
  "https://res.cloudinary.com/drxigvlxc/image/upload/v1781418311/image_24_cuo2fz.png",
  "https://res.cloudinary.com/drxigvlxc/image/upload/v1781418311/image_22_g0uaij.png",
];


export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden">

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

      {/* Main Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781417730/Frame_2147225826_emudvv.png"
          alt="Who We Are Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-6 py-10 relative z-10 ">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Images 2x2 Grid */}
          <AnimateOnView
            direction="right"
            className="lg:w-1/2 relative z-10 hidden lg:block h-full"
          >
            <div className="relative mx-auto w-full max-w-[520px] h-[380px] sm:h-[440px]">

              <div className="absolute left-0 top-4 sm:top-8 w-[48%] h-[160px] sm:h-[200px] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src={images[0]}
                  alt="Office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 top-0 w-[48%] h-[150px] sm:h-[180px] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src={images[1]}
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-0 bottom-0 w-[48%] h-[150px] sm:h-[180px] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src={images[2]}
                  alt="Dashboard"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 bottom-4 sm:bottom-8 w-[48%] h-[160px] sm:h-[200px] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src={images[3]}
                  alt="Meeting"
                  fill
                  className="object-cover"
                />
              </div>

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
