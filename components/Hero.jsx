"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781101698/Frame_2147225661_ltzmxm.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-7xl font-bold leading-tight"
        >
          Connect.
          <span className="text-blue-500"> Secure. Solve</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-6xl font-bold mt-3"
        >
          Transforming Technology
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-4xl md:text-6xl font-bold"
        >
          Into <span className="text-blue-500">Business Growth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 mt-6 max-w-xl text-lg"
        >
          We deliver end-to-end IT infrastructure, cloud,
          cybersecurity and software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 mt-8"
        >
          <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-full hover:scale-105 transition-transform">
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}