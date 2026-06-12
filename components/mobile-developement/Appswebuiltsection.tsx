"use client";

const APP_TYPES = [
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241339/Frame_2147225754_sguv3d.png",
    title: "Android Apps",
    desc: "High-performance apps for diverse android devices.",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241339/Frame_2147225754_1_az5ioe.png",
    title: "iOS Apps",
    desc: "Elegant & Secure Apps For iPhone And iPad.",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241338/Frame_2147225754_2_rkgyma.png",
    title: "Hybrid & Cross-Platform Apps",
    desc: "One Codebase, Multiple Platforms, Maximum Reach.",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241338/Frame_2147225754_3_fcg8vo.png",
    title: "On-Demand Apps",
    desc: "On-Demand Solutions For Travel, Delivery, Fitness And More.",
  },
];

// Bottom 4 feature boxes — only 4th has image, first 3 empty circle icons
const BOTTOM_FEATURES = [
  { label: "Secure & Reliable",    hasImage: true, image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781248937/Mask_group_zntv63.png" },
  { label: "High Performance",     hasImage: true, image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781248936/Mask_group_1_mfdbjf.png" },
  { label: "Scalable Solutions",   hasImage: true, image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781248936/Mask_group_2_kv6ek6.png" },
  {
    label: "User-Centric Design",
    hasImage: true,
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241338/Mask_group_vbmlfb.png",
  },
];

const ICON_GRADIENT =
  "linear-gradient(100.91deg,#0181FE -1.59%,#0077F9 21.16%,#0042BF 41.54%,#012586 60.02%,#011766 78.5%,#000946 96.99%)";

export default function AppsWeBuiltSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781247702/Frame_2147225774_yp3o6u.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT: heading + list */}
          <div className="flex flex-col gap-6 pb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Apps{" "}
                <span className="relative inline-block text-blue-600">
                  We Build
                  <span className="absolute left-0 -bottom-1 w-full h-[2.5px] rounded-full bg-blue-600" />
                </span>
              </h2>
              <p className="mt-4 text-slate-600 text-sm md:text-[14px] leading-relaxed max-w-[380px]">
                Powerful, scalable & user-centric Mobile Apps for{" "}
                <span className="text-blue-600 font-semibold">Every Business Needs</span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {APP_TYPES.map((app, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-10 h-10 object-contain shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 className="text-slate-900 font-bold text-[14px] md:text-[15px] leading-snug">
                      {app.title}
                    </h4>
                    <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed mt-0.5">
                      {app.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: mobile image */}
          <div className="flex justify-center md:justify-end items-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241339/ChatGPT_Image_Jun_3_2026_11_18_49_PM_1_prl2jp.png"
              alt="Mobile app mockup"
              className="w-full max-w-[420px] object-contain"
            />
          </div>

        </div>
      </div>

      {/* ── Bottom feature boxes strip — white bg, 4 individual gradient-icon boxes ── */}
      <div className="relative z-10 w-full mt-20 mb-20">
        <div className="max-w-5xl mx-auto px-2 md:px-2 lg:px-3 py-4 border border-[#0154EE] rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {BOTTOM_FEATURES.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border-l border-black  md:border-l-0 md:border-r last:border-0"
              >
                {/* Individual icon box — gradient bg, rounded, fixed size */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ background: ICON_GRADIENT }}
                >
                  {feat.hasImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={feat.image}
                      alt={feat.label}
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    /* Empty circle inside gradient bg as per design */
                    <span className="w-3 h-3 rounded-full border-2 border-white/70 block" />
                  )}
                </div>

                {/* Label */}
                <span className="text-slate-800 font-semibold text-[12px] md:text-[13px] leading-tight">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}