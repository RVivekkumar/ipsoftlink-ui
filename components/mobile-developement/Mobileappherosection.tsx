"use client";

import { motion } from "framer-motion";

export default function MobileAppHeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241338/Frame_2147226485_klziup.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* ── LEFT: text ── */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[45px] font-extrabold text-slate-900 leading-[1.12] tracking-tight"
          >
            We Build Apps That
            <br />
            <span className="text-blue-600">Inspire &amp; Perform</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-[400px]"
          >
            We Design And Develop Powerful, User-Friendly Mobile Apps That Drive Growth And
            Deliver Exceptional User Experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-1"
          >
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-md hover:scale-105 transition-transform">
              Explore Our Services <span>→</span>
            </button>
            <button className="bg-white px-4 py-3 flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors rounded-md hover:scale-105 transition-transform">
              View Our Work
            </button>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: mobile mockup image — load as-is ── */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241337/ChatGPT_Image_Jun_11_2026_10_43_11_PM_1_1_1_c5q6l5.png"
            alt="Mobile app showcase"
            className="w-full max-w-[480px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}