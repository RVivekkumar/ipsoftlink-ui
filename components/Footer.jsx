"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const services = [
  "Web Development",
  "Software Development",
  "Mobile App Development",
  "Training & Consulting",
  "Web3 Development",
  "IT Consulting",
  "Digital Transformation",
  "Digital Marketing",
];

const solutions = [
  "ERP",
  "CRM",
  "Enterprise Application",
  "Data Analysis",
  "IT Solution Management",
  "E-commerce",
  "Supply Chain",
  "Web Portals",
];

const technologies = [
  "Front-End",
  "Back-End",
  "Cross-Platform",
  "Full Stack",
  "DevOps & ML",
  "E-commerce & CMS",
  "Blockchain",
];

const products = [
  "Smart CRM",
  "Real Estate CRM",
  "Travel CRM",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black">

      {/* Top Left Dots */}
      <div
        className="absolute top-0 left-0 w-40 h-40 md:w-48 md:h-48 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(#60a5fa 2px, transparent 2px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#dbeafe"
            fillOpacity="0.9"
            d="M0,224L80,245.3C160,267,320,309,480,309.3C640,309,800,267,960,213.3C1120,160,1280,96,1360,64L1440,32L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">

          {/* Company */}
          <div>
            <Image
              src="/logo.png"
              alt="IP Softlink"
              width={130}
              height={130}
              className="mb-5"
            />

            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Visit Us
            </h3>

            <p className="text-gray-700 text-sm md:text-base leading-7">
              No 5B, Singarayar colony South Extension
              <br />
              Narimedu Madurai North
              <br />
              BB Kulam Madurai - 625002
            </p>

            <div className="mt-6 space-y-2 text-sm md:text-base">
 <p className="font-semibold">Business</p>

  <p>
    USA:{" "}
    <a href="tel:+18323871021" className="text-blue-500 hover:underline">
      +1 (832) 387-1021
    </a>
  </p>

  <p>
    India:{" "}
    <a href="tel:+919003418834" className="text-blue-500 hover:underline">
      +91 90034 18834
    </a>
  </p>
              <p>
                <span className="font-semibold">
                  Jobs:
                </span>{" "}
                +91 9003418834
              </p>
            </div>
          </div>

          {/* Reusable Column */}
          {[services, solutions, technologies, products].map(
            (list, i) => (
              <div key={i}>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {["Services", "Solutions", "Technology", "Product"][i]}
                </h3>

                <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-12 md:mt-16 py-6 md:py-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

            <p className="text-gray-700 text-sm md:text-base">
              © 2026 IP Softlink Solutions. All Rights Reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">

              <span className="font-semibold text-sm md:text-base">
                Follow us
              </span>

              <div className="flex gap-3">

                <a className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition hover:scale-110">
                  <FaFacebookF size={16} />
                </a>

                <a className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition hover:scale-110">
                  <FaXTwitter size={16} />
                </a>

                <a className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition hover:scale-110">
                  <FaInstagram size={16} />
                </a>

                <a className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition hover:scale-110">
                  <FaYoutube size={16} />
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}