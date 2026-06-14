"use client";

import Image from "next/image";
import { Headset, MessageSquare, Puzzle, Mail } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const features = [
  {
    icon: <Headset className="w-6 h-6 text-blue-600" />,
    title: "Expert Support",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
    title: "Quick Response",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-blue-600" />,
    title: "Reliable Solutions",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Get In Touch",
  },
];

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFF]">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Soft Blue Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px]"></div>
        
        {/* Dot Patterns */}
        <div className="absolute top-20 left-10 opacity-30">
            <div className="grid grid-cols-6 gap-3">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                ))}
            </div>
        </div>
        <div className="absolute bottom-20 left-1/2 opacity-20">
            <div className="grid grid-cols-8 gap-3">
                {[...Array(32)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                ))}
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <AnimateOnView direction="right">
              <h2 className="text-[40px] lg:text-[64px] font-bold text-[#1E1E1E] leading-tight mb-2">
                Let's Connect
              </h2>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.1}>
              <h1 className="text-[40px] lg:text-[64px] font-bold text-[#2563EB] leading-tight mb-8">
                We're Here To Help
              </h1>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.2}>
              <p className="text-[#4B5563] text-lg lg:text-xl max-w-xl mb-16 leading-relaxed">
                Have A Question, A Project In Mind, Or Just Want To Say Hello? 
                Our Team At IP Softlink Is Ready To Assist You.
              </p>
            </AnimateOnView>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
              {features.map((feature, index) => (
                <AnimateOnView key={index} direction="up" delay={0.3 + index * 0.1}>
                  <div className="flex flex-col items-center group">
                    <div className="w-14 h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-[#1E1E1E] font-bold text-xs uppercase tracking-wider text-center max-w-[80px]">
                      {feature.title}
                    </span>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Illustration Placeholder */}
          <AnimateOnView direction="left" delay={0.4} className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[1.1/1] max-w-[650px] mx-auto">
              {/* This is where the user's Cloudinary image will go */}
              <div className="w-full h-full relative flex items-center justify-center">
                 {/* Placeholder for the 3D illustration from the image */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-[40px] -z-10"></div>
                 
                 {/* This div represents the main 3D image space */}
                 <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center p-12 border-2 border-dashed border-blue-200 rounded-[40px] bg-white/40 backdrop-blur-sm">
                        <p className="text-blue-400 font-semibold mb-2">Cloudinary 3D Illustration Here</p>
                        <p className="text-gray-400 text-sm">Background image with Phone, Envelope, Globe</p>
                    </div>
                 </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>

  );
}
