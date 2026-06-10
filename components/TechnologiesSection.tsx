"use client";
import Image from "next/image";

const counters = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104502/div_v9wtmw.png",
    count: "500+",
    label: "Happy Clients",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/div_udpqge.png",
    count: "1200+",
    label: "Projects Delivered",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103126/div_1_mna7mu.png",
    count: "50+",
    label: "Experts",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/div_2_y5kddn.png",
    count: "98%",
    label: "Success Rate",
  },
];

const technologies = [
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104416/Group_1686552568_g7i1ok.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103100/Group_1686552545_zpej7a.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103100/Group_1686552551_jjpfxo.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552558_n6umaw.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552559_x0ywsf.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104691/Group_1686552557_d1uvvk.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552562_b9hltm.png",

  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103083/Group_1686552555_p7mmpw.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103124/Group_1686552564_kbkxpe.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103123/Group_1686552554_rwcwzl.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103114/Group_1686552563_sjr5nh.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103105/Group_1686552610_hrheef.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103104/Group_1686552561_ox9vhb.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103104/Group_1686552553_c1rrb5.png",

  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103104/Group_1686552565_jcuxy1.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103103/Group_1686552560_syca5l.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103128/Group_1686552566_hd0wdy.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103128/Group_1686552552_uyh1qg.png",
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103128/Group_1686552567_k3loq5.png",
];

function TechCard({ tech }: { tech: { name: string; logo: string } }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-blue-400 flex items-center justify-center p-2 sm:p-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group aspect-square">
      <img
        src={tech.logo}
        alt={tech.name}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section className="w-full overflow-hidden">

      {/* Counter Area */}
      <div
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg,#0B69FF 0%,#004CCF 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[14px]
                  py-2
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-xl
                "
              >
                <Image
                  src={item.image}
                  alt=""
                  width={52}
                  height={52}
                  className="object-contain"
                />

                <h3 className="mt-4 text-[34px] font-bold text-[#223354]">
                  {item.count}
                </h3>

                <p className="text-[#7A7A7A] text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Area */}
      <div
        className="relative py-20"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/drg82xgxc/image/upload/v1781101698/h1_bg-2_1_m04caq.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[36px] font-bold mb-12 text-[#223354]">
            Technologies{" "}
            <span className="text-[#0B69FF] underline underline-offset-4">
              We Use
            </span>
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-7 gap-6">
            {technologies.map((logo, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center
                "
              >
                <Image
  src={logo}
  alt=""
  width={100}
  height={54}
  className="object-contain"
/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}