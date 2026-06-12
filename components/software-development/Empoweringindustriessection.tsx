"use client";

const INDUSTRIES = [
  {
    number: "01",
    color: "#0154EE",
    title: "Health Care",
    desc: "Advanced Digital Solutions To Improve Patient Care, Streamline Operations And Ensure Better Outcomes.",
    iconColor: "bg-blue-100",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M20 12v16M12 20h16" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    topImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192037/Group_1686552855_lqxutg.png",
    sideImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192036/Frame_2147225737_k6r86e.png",
  },
  {
    number: "02",
    color: "#6132C7",
    title: "E-Commerce",
    desc: "Robust e-commerce platforms that drive sales, enhance user experience, and grow your business.",
    iconColor: "bg-blue-100",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 14h16l-2 9H14L12 14z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="16" cy="27" r="1.5" fill="#2563EB" />
        <circle cx="24" cy="27" r="1.5" fill="#2563EB" />
        <path d="M10 11h2l2 3" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    topImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192037/Group_1686552855_1_mzhldb.png",
    sideImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192037/Frame_2147225737_1_uimxs9.png",
  },
  {
    number: "03",
    color: "#03A26A",
    title: "Education",
    desc: "Smart learning platforms that make education accessible, engaging, and effective.",
    iconColor: "bg-green-100",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
        <path d="M20 12l10 5-10 5-10-5 10-5z" stroke="#16A34A" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 25v4M26 25v4M20 22v4" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    topImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192036/Group_1686552855_2_eknxgb.png",
    sideImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192036/Frame_2147225737_2_jifela.png",
  },
  {
    number: "04",
    color: "#FD6A15",
    title: "Fin Tech",
    desc: "Secure and innovative financial solution designed for the future of digital finance.",
    iconColor: "bg-orange-100",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <path d="M20 12v2M20 26v2M14 17h4a2 2 0 010 4h-4a2 2 0 000 4h6" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    topImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192035/Group_1686552855_3_jkp8oe.png",
    sideImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192036/Frame_2147225737_3_mnbcur.png",
  },
  {
    number: "05",
    color: "#025B2A",
    title: "Real Estate",
    desc: "Technology-driven solutions to buy, sell, manage, and grow real estate with ease.",
    iconColor: "bg-blue-100",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M12 28V18l8-6 8 6v10H12z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="17" y="22" width="6" height="6" rx="1" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
    ),
    topImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192034/Group_1686552855_4_axwlvp.png",
    sideImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192032/Frame_2147225737_4_ky4i0j.png",
  },
  {
    number: "06",
    color: "#006A88",
    title: "Logistics & Supply",
    desc: "End-to-end logistics solutions to optimise supply chains and ensure timely delivery.",
    iconColor: "bg-blue-100",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M10 24h16l4-8H14L10 24z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="15" cy="27" r="2" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="2" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
    ),
    topImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192033/Group_1686552855_5_ftpm8v.png",
    sideImg:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192033/Frame_2147225737_5_jkjqau.png",
  },
];

export default function EmpoweringIndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191780/Frame_2147225685_om5mlw.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-12 px-2">
          <p className="text-blue-600 text-sm font-semibold tracking-wide mb-1 italic">
            Our Industries
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Empowering{" "}
            <span className="text-blue-600 border-b-3 border-blue-600">Every Industry</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We Delivery Smart, Scalable, And Innovative Software Solutions
            <br className="hidden sm:block" />
            Tailored To The Unique Needs Of Every Industry
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* ── Card top: icon left + photo right ── */}
              <div className="relative flex items-start justify-between p-4 pb-0">
                {/* Icon top-left */}
                {/* <div className={`w-11 h-11 rounded-xl ${ind.iconColor} flex items-center justify-center shrink-0 z-10`}>
                  {ind.icon}
                </div> */}

                <div>
                     <div className="px-4 pt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.topImg}
                  alt=""
                  aria-hidden="true"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* ── Card content ── */}
              <div className="px-4 pt-2 pb-5 flex flex-col gap-1.5 flex-1">
                <h3 style={{ color: ind.color }} className={`font-bold text-[16px] leading-snug`}>
                  {ind.title}
                </h3>
                <hr style={{ color: ind.color }} className={`w-10 border-t-2`} />
                <p className="text-slate-500 text-[12.5px] leading-relaxed">
                  {ind.desc}
                </p>

                {/* Number badge */}
                <div className="mt-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 text-black text-sm font-semibold">
                    {ind.number}
                  </span>
                </div>
              </div>
                  </div>

                {/* Photo right — overlaps slightly */}
                <div className="w-[120px] rounded-xl md:mt-12 overflow-hidden shrink-0 ml-auto">
                  <img
                    src={ind.sideImg}
                    alt={ind.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
           
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}