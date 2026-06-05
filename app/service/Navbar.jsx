"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="absolute top-6 w-full flex justify-center z-50 px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 md:px-8 py-3 flex items-center justify-between w-full max-w-[1200px] shadow-lg">

          {/* ✅ Logo (Clickable) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="IP Softlink"
              width={50}
              height={50}
              className="object-contain cursor-pointer"
            />
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex gap-6 text-gray-800 font-medium text-sm">
            <Link href="/">Home</Link>
            <Link href="/service">Service</Link>
            <Link href="/about">About Us</Link>
            <Link href="/product">Product</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/career">Career</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* ✅ Right Section */}
          <div className="flex items-center gap-3">

            {/* CTA Button */}
            <button className="hidden sm:block bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 md:px-5 py-2 rounded-full text-sm">
              Get Demo
            </button>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-black"></span>
              <span className="w-6 h-[2px] bg-black"></span>
              <span className="w-6 h-[2px] bg-black"></span>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE DROPDOWN */}
      <div
        className={`fixed top-[80px] left-0 w-full bg-white shadow-md z-40 flex flex-col items-center py-5 gap-4 md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/service" onClick={() => setOpen(false)}>Service</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
        <Link href="/product" onClick={() => setOpen(false)}>Product</Link>
        <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
        <Link href="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
        <Link href="/career" onClick={() => setOpen(false)}>Career</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

        {/* Mobile CTA */}
        <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-full">
          Get Demo
        </button>
      </div>
    </>
  );
}