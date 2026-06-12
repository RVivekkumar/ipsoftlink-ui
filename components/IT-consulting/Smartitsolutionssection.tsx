"use client";

const SOLUTIONS = [
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256404/Frame_2147225754_4_htiwwn.png",
    title: "Strategic IT Consulting",
    desc: "Align Technology With Your Business Goals For Measurable Results.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256405/Frame_2147225754_5_f3nscg.png",
    title: "Cloud & Digital Transformation",
    desc: "Modernize Infrastructure And Costs Cut Seamlessly With Cloud-Ready Solutions.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256406/Frame_2147225754_6_zwxt7f.png",
    title: "Cybersecurity Solutions",
    desc: "Protect Your Business With Robust Security Frameworks And Compliance.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256408/Frame_2147225754_7_jub5rl.png",
    title: "Managed IT Services",
    desc: "Ensure Seamless Operations With Reliable Support And Monitoring.",
  },
];

export default function SmartITSolutionsSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ══════════════════════════════════
            LEFT: text + 2×2 grid + CTA
        ══════════════════════════════════ */}
        <div className="flex flex-col gap-7">

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-blue-600 leading-tight">
              Smart IT Solutions.
              <br />
              Stronger Businesses.
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-[14px] leading-relaxed max-w-[460px]">
              At IPSoftlink, We Empower Businesses With Strategic IT Consulting, Digital
              Transformation, Cloud Solutions, And Managed Services That Drive Innovation,
              Improve Efficiency, And Accelerate Growth.
            </p>
          </div>

          {/* 2×2 solutions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {SOLUTIONS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Icon — loaded as-is */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="text-slate-900 font-bold text-[13.5px] md:text-[14.5px] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-1">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-md">
              Let's Build what Next? <span>→</span>
            </button>
          </div>

        </div>

        {/* ══════════════════════════════════
            RIGHT: office photo — loaded as-is
        ══════════════════════════════════ */}
        <div className="flex justify-center lg:justify-end items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256422/Frame_2147225809_c7nhwt.png"
            alt="Smart IT solutions team"
            className="w-full max-w-[500px] rounded-2xl object-contain shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}