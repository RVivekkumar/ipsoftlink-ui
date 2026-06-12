"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col">

      {/* ── Background image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781239005/Frame_2147226484_pukhms.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* ── Content — pushed down to clear the fixed navbar (~76px) ── */}
      <div className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ── LEFT: text content ── */}
        <div className="flex flex-col gap-6">

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[45px] font-extrabold text-slate-900 leading-[1.12] tracking-tight">
            We Build Software
            <br />
            That{" "}
            <span className="text-blue-600">Powers Growth</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-[420px]">
            Custom Software Solutions Designed To Streamline Operations, Enhance User
            Experience, And Accelerate Your Business Into The Future.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-md"
            >
              Explore Our Services
              <span className="text-base">→</span>
            </button>

            <button
              className="bg-white hover:bg-gray-100 text-slate-700 hover:text-blue-600 font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-md"
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* ── RIGHT: computer image — loaded as-is, no UI overlays ── */}
        <div className="flex justify-center md:justify-end items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781239005/ChatGPT_Image_Jun_11_2026_10_43_11_PM_1_1_rbz85c.png"
            alt="Software dashboard"
            className="w-full max-w-[560px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}