"use client";

import AnimateOnView from "../ui/AnimateOnView";

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
    <section className="relative w-full overflow-hidden py-16 md:py-20 px-4">

      {/* Background */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191781/Frame_2147226434_btstjk.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <AnimateOnView direction="up" delay={0.1}>
          <div className="text-center mb-12 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-tight">
              Why Businesses Choose IP SoftLink?
            </h2>

            <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We Don't Just Code, We First Understand Your Challenges, Then Deliver
              <br className="hidden sm:block" />
              A Solution That Is Practical, Efficient, And Future-Ready. Let IP Softlink
              <br className="hidden sm:block" />
              Transform Your Challenges Into Powerful Software Solutions
            </p>
          </div>
        </AnimateOnView>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {FEATURES.map((feat, i) => (
            <AnimateOnView
              key={i}
              direction="up"
              delay={i * 0.15}
            >
              <div className="group bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-blue-600 font-bold text-[15px] leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-slate-500 text-[12.5px] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </AnimateOnView>
          ))}

        </div>

        {/* Bottom Banner */}
        <AnimateOnView direction="up" delay={0.3}>
          <div className="bg-white border border-blue-200 rounded-2xl shadow-sm px-6 py-5 flex flex-col sm:flex-row items-center gap-5 hover:shadow-lg transition-all duration-500">

            {/* Logo */}
            <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-blue-100 bg-blue-50 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="IP SoftLink logo"
                className="w-11 h-11 object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center sm:text-left">
              <p className="text-slate-800 font-semibold text-sm md:text-base">
                At IP SoftLink, We are committed to helping brands.
              </p>

              <p className="text-blue-600 font-bold text-sm md:text-base mt-0.5 tracking-wide">
                Connect. Secure. Solve. Grow.
              </p>
            </div>

          </div>
        </AnimateOnView>

      </div>
    </section>
  );
}