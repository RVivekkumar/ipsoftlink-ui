"use client";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    title: "Jewellery & DigiGold",
    description:
      "Automates jewellery management, inventory, billing, and customer management. GST-ready, secure, and scalable for multi-branch operations.",
    image: "/gold.png",
  },
  {
    title: "Event Booking Software",
    description:
      "Manage corporate, luxury, entertainment, sports, and cultural events with real-time tracking, online payments, and multi-service support.",
    image: "/event.png",
  },
  {
    title: "Travel Booking Platforms",
    description:
      "Systems for managing tour packages, reservations, customer records, and travel operations efficiently.",
    image: "/booking.png",
  },
  {
    title: "Oil & Gas Software",
    description:
      "We are a leading mobile app development company building Android and iOS apps that are fully customized to improve customer engagement and daily business operations.",
    image: "/oilgas.png",
  },
  {
    title: "Food Delivery Systems",
    description:
      "Platforms that help restaurants manage menus, orders, payments, and delivery tracking.",
    image: "/delivery.png",
  },
  {
    title: "Billing Solutions",
    description:
      "Easy-to-use billing and invoicing software for managing payments, transactions, and financial records.",
    image: "/billing.png",
  },
  {
    title: "HRMS Applications",
    description:
      "Human resource management systems for employee records, attendance, payroll, and HR operations.",
    image: "/hrms.png",
  },
  {
    title: "CRM Software",
    description:
      "Customer relationship management systems to track leads, manage customers, and improve sales processes.",
    image: "/crm.png",
  },
  {
    title: "Chit Software Development",
    description:
      "Streamlined member registration, collection management, passbooks, and automated EMI reminders.",
    image: "/chit.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium text-sm tracking-wide mb-2">
            Expertise &amp; Industry
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Software Solutions for{" "}
            <span className="text-blue-600">Multiple Industries</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-blue-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-blue-700 font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-5">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Explore <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}