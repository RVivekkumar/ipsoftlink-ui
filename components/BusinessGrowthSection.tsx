import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Lower day-to-day operating costs",
    description:
      "Automate repetitive tasks to save time and resources.",
  },
  {
    title: "Secure business data",
    description:
      "Enterprise-grade security protocols to protect your assets.",
  },
  {
    title: "Smart workflow automation",
    description:
      "Streamline operations with intelligent process management.",
  },
  {
    title: "Support business growth",
    description:
      "Scalable architecture that grows with your user base.",
  },
  {
    title: "Clear reporting & analytics",
    description:
      "Data-driven insights for better decision making.",
  },
];

const TICK_ICON =
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103130/Group_1686552852_prbpel.png";

const DEV_IMAGE =
  "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103100/Generated_Image_March_02_2026_-_3_14PM_1_yxhh2t.png";

export default function BusinessGrowthSection() {
  return (
    <section
  className="relative overflow-hidden py-24"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/drg82xgxc/image/upload/v1781101697/Frame_2147225663_jtvalg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* 🔥 Overlay (important for readability) */}

      {/* Top Left Dots */}
      <div className="absolute top-0 left-0 opacity-30 z-10">
        <div
          className="w-44 h-44"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 2px, transparent 2px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Bottom Right Dots */}
      <div className="absolute bottom-0 right-0 opacity-30 z-10">
        <div
          className="w-72 h-72"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#dbeafe"
            fillOpacity="0.8"
            d="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="text-blue-600 text-xl md:text-2xl mb-6 font-medium">
            Solutions that Drive Growth
          </p>

          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
            Business-Focused <span className="text-[#2563EB]">Software Development</span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-800 max-w-4xl mx-auto">
            We don't just write code. We build solutions that solve
            real business problems and drive measurable growth.
          </p>
        </div>

        {/* Content */}
       <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start mt-16">

  {/* Left Side Full Image */}
  <div className="relative">
    <Image
      src={DEV_IMAGE}
      alt="Business Development"
      width={900}
      height={700}
      className="w-full h-auto"
      priority
    />
  </div>

  {/* Right Side */}
  <div className="relative">

<div
  className="
    absolute
    left-[-28px]
    top-[53px]
    bottom-[40px]
    w-[2px]
    h-[550px]
    bg-[#0057FF]
  "
/>

    <div className="space-y-5">
      {benefits.map((item, index) => (
       <div
  key={index}
  className="flex items-center gap-5 relative"
>
  {/* Timeline Dot */}
 <div
  className="
    absolute
    -left-[32px]
    top-1/2
    -translate-y-1/2
    w-[12px]
    h-[12px]
    rounded-full
    bg-[#0057FF]
    border-2
    border-white
    shadow-md
    z-30
  "
/>
          {/* Tick Image */}
         
          {/* Card */}
          <div
            className="
              flex
              gap-4
              bg-white
              rounded-xl
              border
              border-[#E5E7EB]
              shadow-sm
              px-5
              py-4
              w-full
            "
          >
             <div className="relative z-10">
           <Image
  src={TICK_ICON}
  alt=""
  width={82}
  height={82}
  className="w-[82px] h-[82px] relative z-20"
/>
          </div>
           <div>
            <h3 className="font-semibold text-[18px] text-[#1F2937]">
              {item.title}
            </h3>

            <p className="text-[13px] text-[#6B7280] mt-1">
              {item.description}
            </p>
          </div>
          </div>
        </div>
      ))}
    </div>

  </div>

</div>
      </div>
    </section>
  );
}