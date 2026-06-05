"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ServicePage() {
  return (
    <div className="relative overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/servicepage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-16">
          <div className="max-w-xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
              Build <span className="text-blue-600">Smarter.</span><br />
              Scale <span className="text-blue-600">Faster.</span>
            </h1>

            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              Custom software solutions designed to streamline operations
              and accelerate <strong>business growth.</strong>
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>

              <button className="w-full sm:w-auto border border-blue-600 text-blue-600 px-5 py-3 rounded-full hover:bg-blue-600 hover:text-white transition">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">

        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            <span className="text-blue-600 underline">
              Software Development Service
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Build software that works the way your business works.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center px-4 sm:px-6 lg:px-20">

          {/* LEFT */}
          <div className="flex flex-col gap-4">
            {[
              "Scalable Custom Software Solutions",
              "Agile Development Methodology",
              "Enterprise-Grade Architecture",
            ].map((item, i) => (
              <div key={i} className="bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 border border-blue-100 hover:shadow-lg transition">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">●</div>
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div className="flex justify-center order-first lg:order-none">
            <Image
              src="/service-device.png"
              alt="Devices"
              width={500}
              height={500}
              className="w-full max-w-[350px]"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {[
              "Secure Code & Compliance Standards",
              "API & Third-Party Integrations",
              "Long-Term Product Support",
            ].map((item, i) => (
              <div key={i} className="bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 border border-blue-100 hover:shadow-lg transition">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">●</div>
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DIFFERENT SECTION ================= */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          What Makes Our{" "}
          <span className="text-blue-600 underline">
            Software Different?
          </span>
        </h2>
      </section>

      {/* ================= SOLUTIONS SECTION ================= */}
      <section
        className="relative py-20 flex items-center"
        style={{
          backgroundImage: "url('/laptopdashboard.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* 🔥 BLUE-WHITE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/90 to-transparent" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200 blur-3xl opacity-30 rounded-full" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16">

          <div className="max-w-xl">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
              Solutions{" "}
              <span className="text-blue-600 relative">
                We Build
                <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-blue-400 to-blue-700 rounded-full"></span>
              </span>
            </h2>

            <p className="mt-4 text-gray-700">
              Powerful systems tailored for modern businesses.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "CRM & ERP Applications",
                "Billing & Payroll Systems",
                "Custom Automation Tools",
                "Inventory & Logistics Management",
                "Desktop & Cloud Applications",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-3 rounded-xl border border-blue-100 hover:shadow-xl hover:border-blue-300 transition"
                >
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-700 rotate-45" />

                  <p className="text-black font-semibold group-hover:text-blue-700 transition">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}