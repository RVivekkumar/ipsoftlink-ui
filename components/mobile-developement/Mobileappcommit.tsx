"use client";

import AnimateOnView from "../ui/AnimateOnView";

const FEATURES = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192040/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_uqowia.png",
    title: "Custom Mobile App Development",
    desc: "Tailored android, ios & cross-platform apps built to match your business goals.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192040/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_1_a65w28.png",
    title: "Scalable & Future Solutions",
    desc: "Our apps are built with clean code and modern tech to grow with your business.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192040/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_2_uyun2l.png",
    title: "Secure, Reliable & High Performance",
    desc: "We follow industry best practices to deliver secure, bug-free, and high-performing apps.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241338/Protect_Your_Online_Identity_with_the_Best_VPN_Security__1_4_nuwqfl.png",
    title: "End-to-End Support",
    desc: "From idea to launch and beyond - we’re with you at every step of the journey.",
  },
];

export default function MobileappCommitPage() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4">

      {/* Background */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191781/Frame_2147226434_btstjk.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <AnimateOnView direction="up" delay={0.1}>
          <div className="text-center mb-12 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-tight">
              OUR COMMITMENT
            </h2>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-tight">
              We're Committed to Your Growth
            </h2>

            <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We don’t just build apps - We craft digital experiences that help your business grow,
              engage users, and stay ahead in a mobile-first world.
            </p>
          </div>
        </AnimateOnView>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FEATURES.map((feat, i) => (
            <AnimateOnView key={i} direction="up" delay={i * 0.15}>
              <div className="bg-white w-full h-full rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover"
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

        {/* Bottom banner */}
        <AnimateOnView direction="up" delay={0.3}>
          <div className="bg-white border border-blue-200 rounded-2xl shadow-sm px-6 py-5 flex flex-col sm:flex-row items-center gap-5 hover:shadow-lg transition-all duration-300">

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