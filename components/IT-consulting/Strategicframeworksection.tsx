"use client";

export default function StrategicFrameworkSection() {
  return (
    <section className="relative w-full overflow-hidden py-14 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256419/Frame_2147225813_x95gbb.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="mb-8 px-2">
          <h2 className="text-2xl text-blue-600 md:text-3xl lg:text-[36px] font-extrabold leading-tight">
            Our Strategic Consulting Framework
          </h2>
          <p className="mt-2 text-slate-600 text-sm md:text-[14.5px]">
            Guiding Businesses Through Every Stage Of Growth
          </p>
        </div>

        {/* ── Curve / wave image — loaded as-is, full width ── */}
        <div className="w-full flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256421/Group_1686552809_ty3aaf.png"
            alt="Strategic consulting framework — 5 stage roadmap"
            className="w-full max-w-[900px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}