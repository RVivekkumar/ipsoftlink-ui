"use client";

const FEATURES = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192040/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_uqowia.png",
    title: "Industry specific expertise",
    desc: "We don't give generic solutions our products are tailored to your business context and workflow.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192040/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_1_a65w28.png",
    title: "End-to-End Development Support",
    desc: "From UX research to development, we support your complete software lifecycle.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192040/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_2_uyun2l.png",
    title: "Fast Delivery Approach",
    desc: "Agile frameworks ensure quicker development, faster releases, and continuous improvement.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_3_h20cgn.png",
    title: "User-Centric Experience",
    desc: "We design intuitive, user-friendly interfaces that improve adoption, enhance productivity, and deliver a seamless user experience.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191781/Frame_2147226434_btstjk.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-tight">
            Why Businesses&nbsp; Choose IP SoftLink?
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We Don't Just Code, We First Understand Your Challenges, Then Deliver
            <br className="hidden sm:block" />
            A Solution That Is Practical, Efficient, And Future-Ready. Let IP Softlink
            <br className="hidden sm:block" />
            Transform Your Challenges Into Powerful Software Solutions
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card image */}
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="text-blue-600 font-bold text-[15px] leading-snug">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-[12.5px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom commitment banner ── */}
        <div className="bg-white border border-blue-200 rounded-2xl shadow-sm px-6 py-5 flex items-center gap-5">
          {/* Logo */}
          <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-blue-100 bg-blue-50 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
              alt="IP SoftLink logo"
              className="w-11 h-11 object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-slate-800 font-semibold text-sm md:text-base">
              At IP SoftLink, We are committed to helping brands.
            </p>
            <p className="text-blue-600 font-bold text-sm md:text-base mt-0.5 tracking-wide">
              Connect. Secure. Solve. Grow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}