"use client";

import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const services = [
  "Web Development",
  "Software Development",
  "Mobile App Development",
  "IT Consulting",
  "Digital Marketing",
];

const solutions = [
  "ERP",
  "CRM",
  "Enterprise Application",
  "Data Analysis",
  "IT Solution Management",
  "Supply Chain",
  "Web-Portals",
];

const technologies = [
  "Front-End",
  "Back-End",
  "Cross-Platform",
  "E-commerce & CMS",
  "AI & Machine Learning",
  "Block Chain",
];

const products = [
  "Smart CRM",
  "Real Estate CRM",
  "Travel CRM",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black pt-16">
      {/* Main Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781101697/Frame_2147225663_jtvalg.png"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Top Left Dots */}
      <div
        className="absolute top-0 left-0 w-44 h-44 md:w-56 md:h-56 opacity-30 pointer-events-none z-10"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1.8px, transparent 2px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">
          {/* Left Section - Logo + Contact */}
          <div className="md:col-span-5 lg:col-span-4">
            <Image
              src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
              alt="IP Softlink"
              width={140}
              height={60}
              className="mb-6"
            />

            <p className="text-[#1e40af] text-[22px] leading-tight font-semibold mb-10">
              Transforming Businesses
              <br />
              Through Technology
            </p>

            {/* Visit Us */}
            <div className="flex gap-4 mb-8">
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103147/Frame_2147225758_1_ahzq94.png"
                alt="Location"
                width={52}
                height={52}
                className="h-12 w-auto flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-lg mb-1">Visit Us</p>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  5B, Singarayar Colony, B.B Kulam<br />
                  Narimedu, Madurai-625002.
                </p>
              </div>
            </div>

            {/* USA */}
            <div className="flex gap-4 mb-8">
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103146/Frame_2147225758_2_zr3dn6.png"
                alt="USA"
                width={52}
                height={52}
                className="h-12 w-auto flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-lg mb-1">USA</p>
                <a
                  href="tel:+18323871021"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  +1 (832) 387-1021
                </a>
              </div>
            </div>

            {/* India */}
            <div className="flex gap-4">
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103146/Frame_2147225758_3_ypdyun.png"
                alt="India"
                width={52}
                height={52}
                className="h-12 w-auto flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-lg mb-1">India</p>
                <a
                  href="tel:+919003418834"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  +91 90034 18834
                </a>
              </div>
            </div>
          </div>

          {/* Right Sections */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Services */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103138/Frame_2147225758_yr0kot.png"
                  alt="Services"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
                <h3 className="text-xl font-bold text-black">Services</h3>

              <ul className="space-y-3 text-[15px] text-gray-700 py-4">
                {services.map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                    <span className="text-[#1e40af]"><ChevronRightIcon size={22} color="#0154EE" /> </span> <span className="text-xs">{item} </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103138/Frame_2147225761_ipowjj.png"
                  alt="Solutions"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
                <h3 className="text-xl font-bold text-black">Solutions</h3>
              <ul className="space-y-3 text-[15px] text-gray-700 py-4">
                {solutions.map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                    <span className="text-[#1e40af]"><ChevronRightIcon size={22} color="#0154EE" /> </span> <span className="text-xs">{item} </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103137/Frame_2147225762_yup4e2.png"
                  alt="Technology"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                
              </div>
              <h3 className="text-xl font-bold text-black">Technology</h3>
              <ul className="space-y-3 text-[15px] text-gray-700 py-4">
                {technologies.map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                    <span className="text-[#1e40af]"><ChevronRightIcon size={22} color="#0154EE" /> </span> <span className="text-xs">{item} </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781111083/Frame_2147225763_ywj97y.png"
                  alt="Product"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
                <h3 className="text-xl font-bold text-black">Product</h3>

              <ul className="space-y-3 text-[15px] text-gray-700 py-4">
                {products.map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                    <span className="text-[#1e40af]"><ChevronRightIcon size={22} color="#0154EE" /></span> <span className="text-xs">{item} </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Icons as Images */}
        <div className="border-t border-gray-200 mt-16 py-8 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm md:text-base">
              Copyright © 2025 IP Softlink. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 whitespace-nowrap">
                Follow us on Social media
              </span>

              {/* Social Icons as Images (Exact as provided) */}
              <div className="flex gap-3">
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103308/Group_161988_yzqyj3.png"
                  alt="Facebook"
                  width={42}
                  height={42}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103307/Group_143_foa2ic.png"
                  alt="Twitter"
                  width={42}
                  height={42}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103145/Group_144_knxqlm.png"
                  alt="Pinterest"
                  width={42}
                  height={42}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781103145/Group_145_riy6cr.png"
                  alt="Instagram"
                  width={42}
                  height={42}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <Image
                  src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781111245/Group_146_kjrlnv.png"
                  alt="YouTube"
                  width={42}
                  height={42}
                  className="cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}