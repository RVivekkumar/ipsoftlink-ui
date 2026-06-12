"use client";

const LEFT_BOXES = [
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241336/Frame_clwgqv.png",
    title: "Native & Cross-Platform Apps",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241336/Frame_2_vv2gkt.png",
    title: "Android & iOS App Engineering",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241336/Frame_4_wlbbdr.png",
    title: "Performance-Optimized Apps",
  },
];

const RIGHT_BOXES = [
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241336/Frame_1_yj8iqs.png",
    title: "UX-Focused Mobile Interfaces",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241336/Frame_3_bggxbq.png",
    title: "Post-Launch App Maintenance",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781241336/Frame_5_lheus2.png",
    title: "App Store Deployment Support",
  },
];

export default function MobileAppDevSection() {
  return (
    <section className="relative w-full overflow-hidden py-14 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241338/Frame_2147226485_klziup.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            <span className="relative inline-block text-blue-600">
              Mobile App Development
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-full h-[2.5px] rounded-full bg-blue-600" />
            </span>
            {" "}
            <span className="text-slate-900">Service</span>
          </h2>
          <p className="mt-5 text-slate-700 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            <strong>Turn Ideas Into Apps Users Love</strong> Ip SoftLink helps bring your ideas to life through intuitive,
            high-performance mobile applications that create real business impact.
          </p>
        </div>

        {/* ── 3-column grid: left boxes | center phone | right boxes ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">

          {/* ── LEFT column: 3 blue boxes ── */}
          <div className="flex flex-col gap-4">
         {LEFT_BOXES.map((box, i) => (
  <div
    key={i}
    className="relative w-[220px] sm:w-[250px] md:w-[280px]"
  >
    <img
      src={box.image}
      alt={box.title}
      className="w-full h-auto object-contain"
    />

    <div className="absolute top-3/4 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2">
      <span className="block text-white text-center text-[10px] sm:text-xs md:text-sm font-semibold text-slate-800">
        {box.title}
      </span>
    </div>
  </div>
))}
          </div>

          {/* ── CENTER: phone mockup — loaded as-is ── */}
          <div className="flex justify-center items-center py-4 md:py-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781241337/ChatGPT_Image_Jun_2_2026_10_46_40_PM_1_1_bpoyeb.png"
              alt="Mobile app mockup"
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* ── RIGHT column: 3 blue boxes ── */}
          <div className="flex flex-col gap-4">
           {RIGHT_BOXES.map((box, i) => (
  <div
    key={i}
    className="relative w-[220px] sm:w-[250px] md:w-[280px]"
  >
    <img
      src={box.image}
      alt={box.title}
      className="w-full h-auto object-contain"
    />

    <div className="absolute top-3/4 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2">
      <span className="block text-white text-center text-[10px] sm:text-xs md:text-sm font-semibold text-slate-800">
        {box.title}
      </span>
    </div>
  </div>
))}
          </div>

        </div>
      </div>
    </section>
  );
}