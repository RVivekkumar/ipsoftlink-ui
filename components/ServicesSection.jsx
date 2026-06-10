"use client";

import Image from "next/image";
import Link from "next/link";
import services from "./services";

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781101699/Frame_1686552865_y0vckg.png"
        alt="services bg"
        fill
        priority
        className="object-cover"
      />

      {/* <div className="absolute inset-0 bg-white/70" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">
            Our Service
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Comprehensive{" "}
            <span className="text-blue-600">
              Digital Solutions
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end software development services
            tailored for the modern USA market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                rounded-2xl
                border
                border-[#4F7DFF]
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Top Left Image */}
              <div className="mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-5 right-5 w-16 h-16 rounded-full bg-blue-100" />

              {/* Content */}
              <h3 className="text-xl font-bold text-blue-700 mb-4 relative z-10">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                {service.description}
              </p>

              <Link
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  font-medium
                  relative z-10
                "
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}