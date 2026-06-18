"use client";

import { motion } from "framer-motion";

export default function ITConsultingHeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[520px] flex items-center">

      {/* ── Full background image (team photo included) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256416/Frame_2147225797_gfjthm.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Left gradient overlay so text stays readable ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />

      {/* ── Left content — max half width ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-14">
        <div className="max-w-[480px] flex flex-col gap-5">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-[35px] font-extrabold text-slate-900 leading-[1.15] tracking-tight"
          >
            Driving Business
            <br />
            Success Through
            <br />
            <span className="text-blue-600">Strategic IT Consulting</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-800 font-semibold text-sm md:text-[14.5px] leading-relaxed"
          >
            Empowering Businesses With Innovative IT Consulting, Digital Transformation, And
            Scalable Technology Solutions To Accelerate Growth And Drive Long-Term Success.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-1"
          >
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-md transition-colors shadow-md hover:scale-105 transition-transform">
              Explore Our Service <span>→</span>
            </button>
            <button className="bg-white px-6 py-2.5 rounded-md flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors hover:scale-105 transition-transform">
              View Our Work
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}