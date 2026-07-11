"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceItems = [
  {
    label: "Software Development",
    href: "/software-development",
  },
  {
    label: "Mobile App Development",
    href: "/mobile-developement",
  },
  {
    label: "IT Consulting",
    href: "/IT-consulting",
  },
  {
    label: "Digital Marketing",
    href: "/digital-marketing",
  },
];

const productItems = [
  {
    label: "ERP",
    href: "/erp",
  },
  {
    label: "CRM",
    href: "/crm",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "Product", href: "/product" },
  // { label: "Portfolio", href: "/portfolio" },
  // { label: "Blogs", href: "/blogs" },
  // { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const serviceDropdownRef = useRef(null);
  const productDropdownRef = useRef(null);
  const serviceTimeoutRef = useRef(null);
  const productTimeoutRef = useRef(null);

  const handleServiceMouseEnter = () => {
    if (serviceTimeoutRef.current) {
      clearTimeout(serviceTimeoutRef.current);
    }
    setServiceOpen(true);
  };

  const handleServiceMouseLeave = () => {
    serviceTimeoutRef.current = setTimeout(() => {
      setServiceOpen(false);
    }, 200);
  };

  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
    setProductOpen(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setProductOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (serviceTimeoutRef.current) {
        clearTimeout(serviceTimeoutRef.current);
      }
      if (productTimeoutRef.current) {
        clearTimeout(productTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 md:top-6 left-0 right-0 z-[9999] flex justify-center px-0">
      <div
        className="
        w-full
        max-w-[1180px]
        h-auto
        min-h-[50px]
        bg-white
        md:rounded-[18px]
        shadow-lg
        border border-[#E7EDF8]
        flex
        items-center
        justify-between
        px-6
        py-3
        md:px-8
        md:py-2
      "
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
              alt="IP Softlink Logo"
              width={50}
              height={10}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB]"
          >
            About Us
          </Link>
          {/* Services Dropdown */}
          <div
            ref={serviceDropdownRef}
            className="relative"
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB] transition-colors">
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown with negative top margin to remove gap */}
            {serviceOpen && (
              <div className="absolute top-full left-0 mt-[-2px] w-72 bg-white rounded-b-2xl rounded-t-none shadow-xl border border-t-0 border-gray-100 overflow-hidden">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setServiceOpen(false)}
                    className="block px-6 py-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Product Dropdown */}
          <div
            ref={productDropdownRef}
            className="relative"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB] transition-colors">
              Product
              <ChevronDown
                className={`w-4 h-4 transition-transform ${productOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown with negative top margin to remove gap */}
            {productOpen && (
              <div className="absolute top-full left-0 mt-[-2px] w-72 bg-white rounded-b-2xl rounded-t-none shadow-xl border border-t-0 border-gray-100 overflow-hidden">
                {productItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setProductOpen(false)}
                    className="block px-6 py-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#1E1E1E] hover:text-[#2563EB] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
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
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 z-[9998]">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-[60px] left-0 right-0 w-full bg-white shadow-2xl p-6 max-h-[80vh] overflow-y-auto">            <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#1E1E1E] py-2"
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full text-left text-base font-medium text-[#1E1E1E] py-2"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {serviceOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-blue-100">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setServiceOpen(false);
                      }}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Product Dropdown */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full text-left text-base font-medium text-[#1E1E1E] py-2"
                onClick={() => setProductOpen(!productOpen)}
              >
                Product
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${productOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {productOpen && (
                <div className="pl-4 space-y-2 border-l-2 border-blue-100">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setProductOpen(false);
                      }}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Link */}
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#1E1E1E] py-2"
            >
              About Us
            </Link>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E1E1E] py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                  mt-2
                  w-full
                  text-white
                  text-sm
                  font-semibold
                  px-6
                  py-3
                  rounded-full
                  shadow-lg
                  text-center
                  block
                "
              style={{
                background:
                  "linear-gradient(100.91deg, #0181FE -1.59%, #0077F9 21.16%, #0042BF 41.54%, #012586 60.02%, #011766 78.5%, #000946 96.99%)",
              }}
            >
              Get Demo
            </Link>
          </nav>
          </div>
        </div>
      )}
    </header>
  );
}
