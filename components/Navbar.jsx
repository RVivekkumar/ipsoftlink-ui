"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function Navbar() {
  return (
    <header className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="
        w-full
        max-w-[1180px]
        h-[50px]
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
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href="#"
              className="
                text-[14px]
                font-medium
                text-[#1E1E1E]
                hover:text-[#2563EB]
                transition
              "
            >
              {item}
            </Link>
          ))}
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