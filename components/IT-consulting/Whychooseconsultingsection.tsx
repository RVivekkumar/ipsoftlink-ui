"use client";

const REASONS = [
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256409/Frame_2147225754_8_mre3ni.png",
    title: "Technology Assessment & Planning",
    desc: "Evaluate Current Systems And Create A Clear Roadmap For Future Growth.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256410/Frame_2147225754_9_erev9l.png",
    title: "Digital Transformation Consulting",
    desc: "Modernize Business Processes With Innovative Digital Strategies And Solutions.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256411/Frame_2147225754_10_iau1cg.png",
    title: "Cloud & Infrastructure Advisory",
    desc: "Design Secure, Scalable, And Cost-Effective Cloud Environments.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256412/Frame_2147225754_11_cto5gl.png",
    title: "Business Process Optimization",
    desc: "Improve Operational Efficiency Through Data-Driven Insights And Automation.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781259648/Frame_2147225754_13_nqwzew.png",
    title: "Risk Management & Compliance",
    desc: "Identify Technology Risks And Ensure Secure, Compliant Business Operations.",
  },
  {
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256413/Frame_2147225754_12_wvoadv.png",
    title: "Continuous Support & Strategic Guidance",
    desc: "Long-Term Consulting Partnership To Help Your Business Adapt And Grow.",
  },
];

export default function WhyChooseConsultingSection() {
  return (
    <section className="relative w-full overflow-hidden py-14 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781259098/Frame_2147225798_hwgk2x.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-white/15" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ══════════════════════════════════
              LEFT: heading + subtitle + para + photo
          ══════════════════════════════════ */}
          <div className="flex flex-col gap-5">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight">
              Why Choose
              <br />
              <span className="text-blue-600">IP Softlink Consulting?</span>
            </h2>

            {/* Bold subtitle */}
            <p className="text-slate-900 font-bold text-[14px] md:text-[15px] leading-snug max-w-[380px]">
              Strategic Technology Guidance for Sustainable Business Growth
            </p>

            {/* Paragraph */}
            <p className="text-slate-600 text-[13.5px] md:text-[14px] leading-relaxed max-w-[400px]">
              We help organizations make smarter technology decisions, optimize operations,
              and build scalable digital solutions that drive measurable business outcomes.
            </p>

            {/* Left office photo */}
            <div className="mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256416/ChatGPT_Image_Jun_5_2026_10_40_42_PM_1_x23mxv.png"
                alt="IT consulting team meeting"
                className="w-full max-w-[480px] rounded-2xl object-cover shadow-lg"
              />
            </div>

          </div>

          {/* ══════════════════════════════════
              RIGHT: 6 rows — icon + title + desc
          ══════════════════════════════════ */}
          <div className="flex flex-col gap-6 pt-2">
            {REASONS.map((item, i) => (
              <div key={i} className="flex items-start gap-4">

                {/* Icon image — loaded as-is, square rounded */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain rounded-xl shrink-0"
                />

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-slate-900 font-bold text-[14.5px] md:text-[15.5px] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-[12.5px] md:text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}