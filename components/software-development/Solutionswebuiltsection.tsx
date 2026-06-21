"use client";

import Image from "next/image";
import AnimateOnView from "../ui/AnimateOnView";

const SOLUTIONS = [
  "CRM & ERP Applications",
  "Billing & Payroll Systems",
  "Custom Automation Tools",
  "Inventory & Logistics Management",
  "Desktop & Cloud Applications",
];

export default function SolutionsWeBuiltSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drxigvlxc/image/upload/v1781792413/Frame_2147226491_sojvnw.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <AnimateOnView direction="right" delay={0.2}>
          <div className="flex flex-col gap-7">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight">
              Solutions{" "}
              <span className="relative inline-block text-blue-600">
                We Build
                <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-blue-600" />
              </span>
            </h2>

            <ul className="flex flex-col gap-5">
              {SOLUTIONS.map((item, i) => (
                <AnimateOnView
                  key={i}
                  direction="right"
                  delay={0.15 * (i + 1)}
                >
                  <li className="flex items-center gap-4">
                    <span className="shrink-0 w-10 h-10 flex items-center justify-center">
                      <Image
                        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781254425/streamline-sharp-color_star-2-flat_xbpaad.png"
                        alt="star"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </span>

                    <span className="text-slate-700 text-base md:text-lg font-medium">
                      {item}
                    </span>
                  </li>
                </AnimateOnView>
              ))}
            </ul>
          </div>
        </AnimateOnView>

        {/* Right Side */}
        <AnimateOnView
          direction="left"
          delay={0.4}
          className="w-full flex justify-center"
        >
          <div className="relative w-full max-w-[600px] aspect-square">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse" />
            </div>

            {/* Main Image */}
            <Image
              src="https://res.cloudinary.com/drxigvlxc/image/upload/v1782026529/ChatGPT_Image_Jun_20_2026_10_51_05_PM_1_il3rqy.png"
              alt="ERP System"
              fill
              priority
              className="object-contain relative z-10"
            />

            {/* Floating Cards */}
            <div className="hidden sm:block">

              {/* Finance */}
              <div className="absolute top-[8%] right-[8%] z-20 bg-white p-3 rounded-2xl shadow-xl animate-float">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-center mt-1 text-black">
                  Finance
                </p>
              </div>

              {/* Inventory */}
              <div className="absolute top-[22%] left-0 z-20 bg-white p-3 rounded-2xl shadow-xl animate-float-slow">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-center mt-1 text-black">
                  Inventory
                </p>
              </div>

              {/* HR */}
              <div className="absolute bottom-[25%] left-[8%] z-20 bg-white p-3 rounded-2xl shadow-xl animate-float">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-center mt-1 text-black">
                  HR
                </p>
              </div>

              {/* CRM */}
              <div className="absolute bottom-[10%] right-[15%] z-20 bg-white p-3 rounded-2xl shadow-xl animate-float-slow">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-center mt-1 text-black">
                  CRM
                </p>
              </div>

              {/* Analytics */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-white p-3 rounded-2xl shadow-xl animate-float">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-center mt-1 text-black">
                  Analytics
                </p>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}