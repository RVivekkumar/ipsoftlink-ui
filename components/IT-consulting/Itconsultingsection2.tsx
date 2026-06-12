"use client";

const LIST_ITEMS = [
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256423/Frame_2147225754_xqzuk9.png",
    title: "Right Technology",
    desc: "Alin Technology With Business Objectives",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256401/Frame_2147225754_1_isldzv.png",
    title: "Secure & Scalable",
    desc: "Build Secure And Future Ready Solutions",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256402/Frame_2147225754_2_ne3nn1.png",
    title: "Cost Optimizations",
    desc: "Reduce Costs And Improve Operational Efficiency",
  },
  {
    image: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781256403/Frame_2147225754_3_ugs5n1.png",
    title: "Faster Tranformation",
    desc: "Accelerate Innovation And Achieve Business Growth",
  },
];

// 5 floating cards around the center image
// Positioned: top-center, top-right, mid-left, bottom-center, bottom-right
const FLOATING_CARDS = [
  {
    id: "tc",
    title: "Technology Roadmap Planning",
    desc: "We Create A Clear Technology Roadmap Aligned With Your Business Objectives.",
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1",
    align: "items-center text-center",
  },
  {
    id: "tr",
    title: "Digital Transformation Strategy",
    desc: "We Guide Your Digital Journey To Improve Customer Experience And Business Agility.",
    position: "top-0 right-0",
    align: "items-start text-left",
  },
  {
    id: "ml",
    title: "Risk & Cost Assessment",
    desc: "We Identify Risks And Analyze Costs To Deliver Secure And Cost Effective Solutions.",
    position: "top-1/2 left-0 -translate-y-1/2",
    align: "items-start text-left",
  },
  {
    id: "bc",
    title: "Cloud & Infrastructure Advisory",
    desc: "We Help You Adopt The Right Cloud Solutions For Scalability, Security, And Performance.",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1",
    align: "items-center text-center",
  },
  {
    id: "br",
    title: "Business-Driven IT Decisions",
    desc: "We Provide Data-Driven Insights To Help You Make Smarter Technology Decisions.",
    position: "top-1/2 right-0 -translate-y-1/2",
    align: "items-start text-left",
  },
];

// Small icon SVGs per card
const CARD_ICON_COLORS = {
  tc: "#2563EB",
  tr: "#2563EB",
  ml: "#2563EB",
  bc: "#2563EB",
  br: "#2563EB",
} as const;

type CardIconId = keyof typeof CARD_ICON_COLORS;

const CardIcon = ({ id }: { id: CardIconId }) => {
  const c = CARD_ICON_COLORS[id] || "#2563EB";
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EFF6FF" }}>
      <svg viewBox="0 0 16 16" fill="none" style={{ width: 12, height: 12 }}>
        <circle cx="8" cy="8" r="6" stroke={c} strokeWidth="1.5" />
        <path d="M5 8l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default function ITConsultingSection2() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256418/Frame_2147225793_cxvpfp.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ══════════════════════════════════
              LEFT: heading + list
          ══════════════════════════════════ */}
          <div className="flex flex-col gap-6">

            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Strategic IT
                <br />
                <div className="">
  <span className="text-blue-600 font-semibold">
    Consulting
  </span>

  <div className="h-[2px] w-16 bg-blue-600"></div>
</div>
              </h2>
              <p className="mt-3 text-black font-semibold text-[14px]">
                Driving Technology. Delivering Growth
              </p>
              <p className="mt-2 text-slate-600 text-[13.5px] leading-relaxed max-w-[400px]">
                We Help Business Choose The Right Technology, Optimise Operations, Reduce Costs,
                And Accelerate Digital Transformation.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-5 mt-2">
              {LIST_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-11 h-11 object-contain shrink-0"
                  />
                  <div>
                    <h4 className="text-blue-600 font-bold text-[14.5px] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-[12.5px] leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════
              RIGHT: center tech image + 5 floating cards
          ══════════════════════════════════ */}
          <div className="relative w-full min-h-[500px] flex items-center justify-center">

            {/* Center tech image */}
            <div className="relative z-10 w-full max-w-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781256418/Group_1686552867_lagsez.png"
                alt="IT Consulting tech platform"
                className="w-full object-contain drop-shadow-xl"
              />
            </div>

            {/* ── Floating cards ── */}

           
          </div>
          {/* end right col */}

        </div>
      </div>
    </section>
  );
}