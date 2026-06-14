"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const counters = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781104502/div_v9wtmw.png",
    count: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/div_udpqge.png",
    count: 1200,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103126/div_1_mna7mu.png",
    count: 50,
    suffix: "+",
    label: "Experts",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/div_2_y5kddn.png",
    count: 98,
    suffix: "%",
    label: "Success Rate",
  },
];

export default function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full overflow-hidden" ref={ref}>
      <div
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg,#0B69FF 0%,#004CCF 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {counters.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[14px]
                  py-8
                  px-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-xl
                  text-center
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={52}
                  height={52}
                  className="object-contain"
                />

                <h3 className="mt-4 text-[28px] md:text-[34px] font-bold text-[#223354]">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.count}
                      duration={2.5}
                      suffix={item.suffix}
                    />
                  ) : (
                    `0${item.suffix}`
                  )}
                </h3>

                <p className="mt-1 text-[#7A7A7A] text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}