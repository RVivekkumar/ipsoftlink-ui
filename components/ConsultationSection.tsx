"use client";

import Image from "next/image";
import { ArrowRight, User, Mail, Phone, Shield, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Quick Response",
    desc: "Within 24 Hours",
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103142/Group_1686552854_5_xkmhz6.png",
  },
  {
    title: "One-to-One Call",
    desc: "With Solution Experts",
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103142/Group_1686552854_5_xkmhz6.png",
  },
  {
    title: "Tailored Solutions",
    desc: "For Your Business Needs",
    icon: "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103142/Group_1686552854_5_xkmhz6.png",
  },
];

const benefits = [
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103140/Group_1686552856_ibdjm7.png",
    title: "Expert Guidance",
    desc: "Get advice from industry experts",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103139/Group_1686552856_1_k1mvft.png",
    title: "Project Estimation",
    desc: "Accurate timeline & cost estimation",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781108885/Group_1686552856_kjx73a.png",
    title: "Tech Recommendations",
    desc: "Right technology for your business",
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781108884/Group_1686552856_1_mknksh.png",
    title: "No Obligation",
    desc: "100% free and no commitment",
    shield: true,
  },
  {
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103139/Group_1686552856_2_lyobon.png",
    title: "100% Confidential",
    desc: "Your data is safe and secure",
  },
];

export default function ConsultationSection() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drg82xgxc/image/upload/v1781101697/Frame_2147225693_djvkgq.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex bg-[#0057FF] text-white text-xs font-medium px-4 py-2 rounded-full">
              100% Free, No Obligation
            </div>

            <h2 className="mt-6 md:mt-8 text-[34px] sm:text-[42px] md:text-[48px] lg:text-[58px] leading-tight font-bold text-black">
              Schedule Your
              <br />
              <span className="text-[#0057FF]">
                Free Consultation
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-base md:text-lg max-w-[560px]">
              Discuss your business goals with our experts and
              get a customised software solution roadmap for
              your success.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={42}
                    height={42}
                  />

                  <div>
                    <h4 className="font-semibold text-sm text-[#111827]">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="mt-8 md:mt-10 bg-white border border-[#0057FF] rounded-[24px] shadow-xl p-5 sm:p-6 md:p-8 w-full max-w-[580px]">
              <div className="flex items-start gap-4 mb-6">
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103144/Group_1686552854_2_txjqev.png"
                  alt=""
                  width={55}
                  height={55}
                  className="shrink-0"
                />

                <div>
                  <h3 className="font-semibold text-xl md:text-[30px] leading-tight text-black">
                    Book Your Free Consultation
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Fill in your details and our expert
                    will connect with you.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <InputField
                  icon={<User size={18} />}
                  placeholder="Full Name"
                />

                <InputField
                  icon={<Mail size={18} />}
                  placeholder="Work Email"
                />

                <InputField
                  icon={<Phone size={18} />}
                  placeholder="Phone Number"
                />
              </div>

              <button
                className="
                  mt-5
                  w-full
                  sm:w-auto
                  bg-[#0057FF]
                  hover:bg-[#0048d4]
                  text-white
                  px-8
                  h-[54px]
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                "
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col items-center">
            {/* Quote Card */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 bg-white rounded-2xl shadow-xl p-5 w-full max-w-[280px] z-20 mb-8 lg:mb-0">
              <div className="text-[#0057FF] text-4xl">
                ❝
              </div>

              <p className="text-sm text-gray-700 mt-2 leading-6">
                Our experts are ready to help transform
                your ideas into powerful digital solutions.
              </p>

              <div className="w-12 h-1 bg-[#0057FF] mt-4 rounded-full" />
            </div>

            {/* Circle Section */}
            <div className="relative mt-2 lg:mt-72">
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px] rounded-full bg-[#DCE8FF] flex items-center justify-center">
                <div className="w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] md:w-[360px] md:h-[360px] lg:w-[430px] lg:h-[430px] rounded-full bg-[#AFCBFF] flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781111726/Group_1686552863_woqhnq.png"
                    alt=""
                    width={380}
                    height={500}
                    priority
                    className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[380px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 mt-16 border-t border-[#D7DCE5] pt-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="px-4 md:px-6 text-center lg:border-r last:border-r-0 border-[#D7DCE5]"
            >
              <div className="relative w-[80px] h-[80px] mx-auto">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-contain"
                />

                {item.shield && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck
                      size={26}
                      className="text-white"
                    />
                  </div>
                )}
              </div>

              <h4 className="font-bold text-[18px] mt-4 text-[#1F2937]">
                {item.title}
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InputField({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          h-[56px]
          border
          border-[#0057FF]
          rounded-xl
          pl-12
          pr-4
          text-sm
          text-gray-700
          outline-none
          focus:ring-2
          focus:ring-blue-200
        "
      />
    </div>
  );
}