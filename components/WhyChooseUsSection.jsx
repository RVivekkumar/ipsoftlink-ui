import {
  Award,
  TrendingUp,
  MessageSquare,
  Workflow,
  Headphones,
  Target,
} from "lucide-react";
import Image from "next/image";

const leftFeatures = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103130/Group_1686552853_o8hdgq.png",
    title: "Industry Expertise",
    desc: "Proven experience in jewellery and event booking software solutions.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103129/Group_1686552854_obi5mo.png",
    title: "Scalable Technology",
    desc: "Future-ready platforms that grow with your business.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103144/Group_1686552854_1_olkram.png",
    title: "Transparent Communication",
    desc: "Clear updates, honest timelines, and professional collaboration.",
  },
];

const rightFeatures = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103144/Group_1686552854_2_txjqev.png",
    title: "Workflow-Based Solutions",
    desc: "Custom-built systems designed around your unique business processes.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103143/Group_1686552854_3_emk12x.png",
    title: "Reliable Support",
    desc: "Dedicated maintenance and long-term technical assistance.",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103143/Group_1686552854_4_vtakwd.png",
    title: "Results-Driven Approach",
    desc: "Focused on business growth not just technical delivery.",
  },
];


export default function WhyChooseUsSection() {
  return (
    <section
  className="relative py-24 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/drg82xgxc/image/upload/v1781101698/Frame_2147225672_w0sev8.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Background */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-lg md:text-xl font-medium">
            Why Choose IP Softlink Solution
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
            Build on Expertise,
            <span className="text-blue-600">
              {" "}Driven by Results.
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine regional expertise with global standards to
            deliver software that outperforms expectations.
          </p>
        </div>

        {/* Content */}
       <div className="relative grid lg:grid-cols-3 gap-12 items-center"> 
              {/* Left Cards */}
          <div className="space-y-6">
            {leftFeatures.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>

          {/* Center Logo */}
       <div className="flex justify-center items-center h-full">
<Image
  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
  alt="IP Softlink"
  width={420}
  height={420}
  className="w-[340px] h-auto mx-auto"
/>
</div>

          {/* Right Cards */}
          <div className="space-y-6">
            {rightFeatures.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ image, title, desc }) {
  return (
    <div
      className="
      relative
  bg-white
  rounded-[14px]
  border
  border-[#E2E8F0]
  shadow-md
  px-4
  py-5
  flex
  justify-between
  items-center
  gap-4
  min-h-[115px]
"
    >
      <Image
        src={image}
        alt={title}
        width={54}
        height={54}
        className="w-[54px] h-[54px] shrink-0"
      />

        <div
  className="
    hidden lg:block
    absolute
    left-[80px]
    top-2
    -translate-x-1/4
    h-[100px]
    w-[2px]
    bg-[#D7E4FF]
  "
/> 

      <div className="px-4">
        <h3 className="text-[#0057FF] font-semibold text-[15px]">
          {title}
        </h3>

        <p className="text-[#6B7280] text-[12px] leading-5 mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
}