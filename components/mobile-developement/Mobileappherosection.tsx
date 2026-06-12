"use client";

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
        <div className="flex flex-col gap-6">

          <h1 className="text-4xl md:text-5xl lg:text-[45px] font-extrabold text-slate-900 leading-[1.12] tracking-tight">
            We Build Apps That
            <br />
            <span className="text-blue-600">Inspire &amp; Perform</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-[400px]">
            We Design And Develop Powerful, User-Friendly Mobile Apps That Drive Growth And
            Deliver Exceptional User Experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-1">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-md">
              Explore Our Services <span>→</span>
            </button>
            <button className="bg-white px-4 py-3 flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors rounded-md">
              View Our Work
            </button>
          </div>
        </div>

        {/* ── RIGHT: mobile mockup image — load as-is ── */}
        <div className="flex justify-center md:justify-end items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241337/ChatGPT_Image_Jun_11_2026_10_43_11_PM_1_1_1_c5q6l5.png"
            alt="Mobile app showcase"
            className="w-full max-w-[480px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}