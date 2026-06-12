"use client";

// Left: curve images are placed DIRECTLY — image on left, text on right, no card wrapper
const LEFT_FEATURES = [
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Group_1686552542_m4udhh.png",
    title: "Scalable Custom Software Solutions",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Group_1686552543_hechfq.png",
    title: "Agile Development Methodology",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Group_1686552544_pfpkwn.png",
    title: "Enterprise-Grade Architecture",
  },
];

// Right: same pattern — image on left, text on right
const RIGHT_FEATURES = [
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Group_1686552542_m4udhh.png",
    title: "Secure Code & Compliance Standards",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Group_1686552543_hechfq.png",
    title: "API & Third-Party Integrations",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781192041/Group_1686552544_pfpkwn.png",
    title: "Long-Term Product Support",
  },
];

export default function SoftwareServiceSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191665/Frame_2147225681_lukphd.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-white/10" />

      {/* ── Section Header ── */}
      <div className="relative z-10 text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
  <span className="relative inline-block text-blue-600 italic">
    Software Development
    <span className="absolute left-0 -bottom-1 h-1 w-72 bg-blue-600 rounded-full"></span>
  </span>{" "}
  Service
</h2>
        <p className="mt-3 text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Build Software That Works the Way Your Business Works. SoftLink believes your business deserves
          more than generic tools. We develop custom software that matches your workflow, not the other way around.
        </p>
      </div>

      {/* ── Three-column layout ── */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">

        {/* ── LEFT: image + text rows, right-aligned ── */}
        <div className="flex flex-col gap-7 items-end">
  {LEFT_FEATURES.map((feat, i) => (
    <div
      key={i}
      className="relative w-[220px] sm:w-[250px] md:w-[280px]"
    >
      <img
        src={feat.image}
        alt={feat.title}
        className="w-full h-auto object-contain"
      />

      <div className="absolute left-0 inset-0 flex items-center justify-center px-15">
        <p className="text-[10px] sm:text-xs md:text-xs font-semibold text-slate-800 text-center">
          {feat.title}
        </p>
      </div>
    </div>
  ))}
</div>

        {/* ── CENTER: computer mockup ── */}
        <div className="flex justify-center items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191666/Group_1686552859_wqqlus.png"
            alt="Software dashboard mockup"
            className="w-full max-w-[340px] md:max-w-[400px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* ── RIGHT: image + text rows, left-aligned ── */}
      <div className="flex flex-col gap-7 items-start">
  {RIGHT_FEATURES.map((feat, i) => (
    <div
      key={i}
      className="relative w-[220px] sm:w-[250px] md:w-[280px]"
    >
      <img
        src={feat.image}
        alt={feat.title}
        className="w-full h-auto object-contain"
      />

      <div className="absolute inset-0 flex items-center justify-center px-15">
        <p className="text-[8px] sm:text-xs md:text-xs ml-4 font-semibold text-slate-800 text-center">
          {feat.title}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}