"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  "Home",
  "Service",
  "About Us",
  "Product",
  "Portfolio",
  "Blogs",
  "Career",
  "Contact Us",
];

const serviceItems = [
  {
    label: "Software Development",
    href: "/software-development",
  },
  // {
  //   label: "Web Development",
  //   href: "/services/web-development",
  // },
  {
    label: "Mobile App Development",
    href: "/mobile-developement",
  },
  {
    label: "IT Consulting",
    href: "/IT-consulting",
  },
  // {
  //   label: "E-Commerce Development",
  //   href: "/services/ecommerce-development",
  // },
  // {
  //   label: "Cloud Solutions",
  //   href: "/services/cloud-solutions",
  // },
];

export default function Navbar() {
  const [serviceOpen, setServiceOpen] = useState(false);
  return (
    <header className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="
        w-full
        max-w-[1180px]
        bg-white
        rounded-[18px]
        shadow-lg
        border border-[#E7EDF8]
        flex
        items-center
        justify-between
        px-8
        py-2
      "
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
            alt="logo"
            width={50}
            height={10}
            priority
            className="object-contain"
          />
        </div>

        {/* Menu */}
      <nav className="hidden lg:flex items-center gap-8">
  <Link
    href="/"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    Home
  </Link>

  {/* Services Dropdown */}
  <div
    className="relative"
    onMouseEnter={() => setServiceOpen(true)}
    onMouseLeave={() => setServiceOpen(false)}
  >
    <button className="flex items-center gap-2 text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]">
      Services
      <svg
        className={`w-4 h-4 transition-transform ${
          serviceOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {serviceOpen && (
      <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {serviceItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-5 py-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>

  <Link
    href="/about"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    About Us
  </Link>

  <Link
    href="/product"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    Product
  </Link>

  <Link
    href="/portfolio"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    Portfolio
  </Link>

  <Link
    href="/blogs"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    Blogs
  </Link>

  <Link
    href="/careers"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    Careers
  </Link>

  <Link
    href="/contact"
    className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
  >
    Contact Us
  </Link>
</nav>

        {/* CTA */}
       <button
  className="
    text-white
    text-[13px]
    font-semibold
    px-7
    py-2.5
    rounded-full
    shadow-lg
    hover:scale-105
    transition-all
    duration-300
  "
  style={{
    background:
      "linear-gradient(100.91deg, #0181FE -1.59%, #0077F9 21.16%, #0042BF 41.54%, #012586 60.02%, #011766 78.5%, #000946 96.99%)",
  }}
>
  Get Demo
</button>
      </div>
    </header>
  );
}