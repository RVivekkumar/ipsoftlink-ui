"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function ERPHero() {
  return (
    <section className="pt-48 pb-24 lg:py-48 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[500px]">
        <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 500L60 460C120 420 240 340 360 300C480 260 600 260 720 280C840 300 960 340 1080 340C1200 340 1320 300 1380 280L1440 260V500H1380C1320 500 1200 500 1080 500C960 500 840 500 720 500C600 500 480 500 360 500C240 500 120 500 60 500H0Z" fill="url(#paint0_linear_1_1)" />
          <defs>
            <linearGradient id="paint0_linear_1_1" x1="720" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.1" />
              <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <AnimateOnView direction="right">
              <h2 className="text-[36px] lg:text-[56px] font-bold text-[#1E1E1E] mb-3 leading-tight">
                ERP Solutions That
              </h2>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.1}>
              <h1 className="text-[36px] lg:text-[56px] font-bold text-[#0052FF] mb-8 leading-tight">
                Drive Efficiency &
                <br />
                Growth
              </h1>
            </AnimateOnView>
            <AnimateOnView direction="right" delay={0.2}>
              <p className="text-[#4B5563] text-lg mb-10 max-w-xl leading-relaxed">
                Unify Finance, Inventory, HR, Procurement, Sales,
                <br />
                And Analytics Into One Powerful Platform To
                <br />
                Accelerate Business Success.
              </p>
            </AnimateOnView>

            {/* Buttons */}
            <AnimateOnView direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#0052FF] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0052FF] font-bold rounded-xl shadow-md border border-blue-200 transition-all duration-300">
                  Explore ERP Modules
                </button>
              </div>
            </AnimateOnView>
          </div>

          {/* Right Image */}
          <AnimateOnView direction="left" delay={0.4} className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center text-center p-10 text-blue-400 z-10">
                <div>
                  <p className="font-bold text-lg mb-2">Cloudinary Image Here</p>
                  <p className="text-sm text-gray-400">ERP Dashboard Illustration</p>
                </div>
              </div>
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="ERP Dashboard"
                fill
                className="object-cover opacity-10"
              />

              {/* Floating Icons */}
              <div className="absolute top-10 left-10 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-lg animate-pulse">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-10 left-20 bg-white p-3 rounded-2xl shadow-lg animate-bounce delay-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-20 right-0 bg-white p-3 rounded-2xl shadow-lg animate-pulse">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
