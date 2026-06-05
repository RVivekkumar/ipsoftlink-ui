"use client";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#3B6FE8" strokeWidth="2.5" fill="#EEF3FF"/>
        <path d="M16 44h16M24 36v8" stroke="#3B6FE8" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M13 20l4 4-4 4M21 28h8" stroke="#3B6FE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgColor: "bg-blue-50",
    accentColor: "bg-blue-200/40",
    title: "Web Development",
    description:
      "As a trusted web development company, we create fast, secure, and professional websites based on your business goals, brand style, and customer requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="#E05C8A" strokeWidth="2.5" fill="#FEE8F1"/>
        <circle cx="24" cy="38" r="2" fill="#E05C8A"/>
        <path d="M20 10h8" stroke="#E05C8A" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 22l3 3 5-6" stroke="#E05C8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgColor: "bg-pink-50",
    accentColor: "bg-pink-200/40",
    title: "Mobile App Development",
    description:
      "We are a leading mobile app development company building Android and iOS apps that are fully customized to improve customer engagement and daily business operations.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#F59E0B" strokeWidth="2.5" fill="#FEF3C7"/>
        <path d="M14 24h4M22 20h4M30 24h4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="14" r="5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M34.5 14h1.5l1 1" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: "bg-amber-50",
    accentColor: "bg-yellow-200/40",
    title: "Ecommerce Website Development",
    description:
      "Our ecommerce website development services help you sell online with customized design, secure payment systems, easy product management, and smooth user experience.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" stroke="#22C55E" strokeWidth="2.5" fill="#DCFCE7"/>
        <path d="M24 14v-6M24 40v-6M14 24H8M40 24h-6" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 20l8 8M28 20l-8 8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: "bg-green-50",
    accentColor: "bg-green-200/40",
    title: "Digital Marketing",
    description:
      "As a digital marketing company, we create digital strategies based on your target audience, industry, and market location to bring more customers to your business.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="24" rx="3" stroke="#8B5CF6" strokeWidth="2.5" fill="#EDE9FE"/>
        <path d="M16 40h16M24 32v8" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 18h12M18 24h8" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: "bg-violet-50",
    accentColor: "bg-violet-200/40",
    title: "UI/UX Design",
    description:
      "Our UI/UX design company team designs clean, simple, and user-friendly interfaces tailored to your users and business workflow for better satisfaction and conversions.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#3B6FE8" strokeWidth="2.5" fill="#EEF3FF"/>
        <path d="M14 20h6v8h-6zM26 20h8M26 26h6" stroke="#3B6FE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgColor: "bg-blue-50",
    accentColor: "bg-blue-200/40",
    title: "Custom Software Development",
    description:
      "We deliver custom software development designed around your business processes, helping you automate workflows, manage data securely, and generate clear, useful reports.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-br from-cyan-300 via-sky-200 to-blue-400">
      
      {/* Background diamond shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/20 rotate-45"
            style={{
              width: `${80 + (i % 4) * 40}px`,
              height: `${80 + (i % 4) * 40}px`,
              top: `${(i * 17) % 90}%`,
              left: `${(i * 23) % 90}%`,
              opacity: 0.15 + (i % 3) * 0.1,
              background: "rgba(255,255,255,0.05)",
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="relative text-center mb-12">
        <p className="text-blue-600 font-semibold text-sm tracking-wide mb-2">Our Service</p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Comprehensive{" "}
          <span className="text-blue-600">Digital Solutions</span>
        </h2>
        <p className="text-gray-700 text-base max-w-xl mx-auto">
          We provide end-to-end software development services tailored for the modern USA market.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative bg-white/95 rounded-2xl border border-blue-200 p-7 flex flex-col overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Decorative circle top-right */}
            <div
              className={`absolute top-4 right-4 w-14 h-14 rounded-full ${service.accentColor}`}
            />

            {/* Icon */}
            <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 z-10`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-blue-700 font-bold text-xl mb-3 z-10">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1 z-10">{service.description}</p>

            {/* Button */}
            <div className="mt-6 z-10">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}