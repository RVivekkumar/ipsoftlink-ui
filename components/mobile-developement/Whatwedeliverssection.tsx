"use client";

const DELIVERABLES = [
  {
    number: "01",
    title: "Feature-Rich, Scalable Apps",
    desc: "Powerful, Flexible, And Scalable Applications Build To Grow With Your Business.",
  },
  {
    number: "02",
    title: "Smooth, User Friendly Designs",
    desc: "Intuitive Interfaces That Engage Users And Delivery Seamless Experiences.",
  },
  {
    number: "03",
    title: "Secure & Future Ready Architecture",
    desc: "Robust, Secure, And Future-Ready Solutions That Protect And Scale.",
  },
];

export default function WhatWeDeliversSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241337/Frame_2147225751_ddr1pc.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight">
            What We{" "}
            <span className="relative inline-block text-blue-400">
              Delivers
              <span className="absolute left-0 -bottom-1 w-full h-[2.5px] rounded-full bg-blue-400" />
            </span>
          </h2>
        </div>

        {/* ── Full-width circles image ── */}
        <div className="w-full flex justify-center mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241340/ChatGPT_Image_Jun_3_2026_11_01_52_PM_1_esy3ng.png"
            alt="What we deliver - 3 steps"
            className="w-full max-w-[860px] object-contain"
          />
        </div>

        {/* ── 3-column text below each circle ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 px-2 md:px-8">
          {DELIVERABLES.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <h3 className="text-white font-bold text-[16px] md:text-[17px] leading-snug">
                {item.title}
              </h3>
              <p className="text-blue-200/80 text-[12.5px] md:text-[13px] leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}