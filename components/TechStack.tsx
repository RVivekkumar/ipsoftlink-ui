"use client";
import { useState } from "react";

// ── Tab data — name + logo grouped per category ────────────────────────────
const TABS = [
  {
    label: "Front End",
    items: [
      { name: "HTML5", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103100/Group_1686552551_jjpfxo.png" },
      { name: "CSS3", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552558_n6umaw.png" },
      { name: "React", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104691/Group_1686552557_d1uvvk.png" },
      { name: "Tailwind", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103124/Group_1686552564_kbkxpe.png" },
      { name: "Angular", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103123/Group_1686552554_rwcwzl.png" },
      { name: "Next", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103128/Group_1686552552_uyh1qg.png" },
    ],
  },
  {
    label: "Back End",
    items: [
      { name: "Python", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103100/Group_1686552545_zpej7a.png" },
      { name: "Node", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552559_x0ywsf.png" },
      // { name: "PHP", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552562_b9hltm.png" },
    ],
  },
  {
    label: "Mobile App",
    items: [
      { name: "Flutter", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103114/Group_1686552563_sjr5nh.png" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104416/Group_1686552568_g7i1ok.png" },
      { name: "Docker", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103105/Group_1686552610_hrheef.png" },
      { name: "Git", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103128/Group_1686552566_hd0wdy.png" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MongoDB", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552562_b9hltm.png" },
      { name: "MySQL", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103128/Group_1686552567_k3loq5.png" },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Canva", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552555_p7mmpw.png" },
      { name: "Figma", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103104/Group_1686552561_ox9vhb.png" },
      { name: "Photoshop", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103103/Group_1686552560_syca5l.png" },
      { name: "Adobe", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103104/Group_1686552553_c1rrb5.png" },
      { name: "Illustrator", logo: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103104/Group_1686552565_jcuxy1.png" },
    ],
  },
];

const ACTIVE_COLOR = "#0154EE";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#F4F5F7] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#223354]">
            Technologies{" "}
            <span className="text-[#0154EE] underline underline-offset-4">
              We Use
            </span>
          </h2>
        </div>

        {/* ── Pill tab bar ── */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full shadow-md p-2 flex flex-wrap items-center justify-center gap-1 md:gap-2">
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-[15px] font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === idx
                    ? "text-white shadow-md scale-105"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                style={{
                  background: activeTab === idx ? ACTIVE_COLOR : "transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Logo grid — re-keyed per tab to retrigger animation ── */}
        <div
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6"
        >
          {TABS[activeTab].items.map((tech, i) => (
            <div
              key={tech.name + i}
              className="tech-card bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center gap-4 py-8 px-4"
              style={{
                animation: `fadeSlideUp 0.45s ease forwards`,
                animationDelay: `${i * 70}ms`,
                opacity: 0,
              }}
            >
              {/* Logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              {/* Name */}
              <span className="text-slate-700 font-medium text-sm md:text-[15px]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Keyframe animation ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}