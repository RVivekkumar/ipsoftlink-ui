"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Service",
    href: "/service",
    hasDropdown: true,
    children: [
      { label: "IT Consulting", href: "/service/it-consulting" },
      { label: "Cloud Services", href: "/service/cloud" },
      { label: "Cybersecurity", href: "/service/security" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "Product",
    href: "/product",
    hasDropdown: true,
    children: [
      { label: "CRM System", href: "/product/crm" },
      { label: "ERP Solution", href: "/product/erp" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center mt-6 px-4 relative z-50">
      <div className="bg-white border border-blue-200 shadow-lg w-full max-w-[1200px] rounded-3xl overflow-hidden">

        {/* Top Row */}
        <div className="flex items-center px-6 py-4">

          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="IP Softlink Logo"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition">
              Get Demo
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden ml-auto flex items-center gap-3">
            <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
              Get Demo
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[5px] w-8 h-8"
            >
              <span className={`h-0.5 bg-black ${menuOpen && "rotate-45 translate-y-[6px]"}`} />
              <span className={`${menuOpen && "opacity-0"} h-0.5 bg-black`} />
              <span className={`h-0.5 bg-black ${menuOpen && "-rotate-45 -translate-y-[6px]"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="border-t px-4 py-3 flex flex-col gap-1">

            {NAV_LINKS.map((link, index) => (
              <div key={link.label}>

                {/* Main Item */}
                <div
                  onClick={() =>
                    link.hasDropdown
                      ? setOpenDropdown(openDropdown === index ? null : index)
                      : setMenuOpen(false)
                  }
                  className="flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-800 hover:bg-blue-50 cursor-pointer"
                >
                  <span>{link.label}</span>

                  {link.hasDropdown && (
                    <span
                      className={`text-xs transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {link.hasDropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === index ? "max-h-40 mt-1" : "max-h-0"
                    }`}
                  >
                    {link.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="block ml-6 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}