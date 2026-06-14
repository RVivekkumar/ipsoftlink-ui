"use client";

import Image from "next/image";
import AnimateOnView from "@/components/ui/AnimateOnView";

const modulesData = [
  {
    title: "Finance & Accounting",
    description: "Manage financial transactions, budgeting, invoicing, and real-time financial reporting from a centralized platform.",
    color: "from-red-400 to-blue-600",
  },
  {
    title: "Inventory Management",
    description: "Track stock levels, warehouse operations, procurement, and inventory forecasting with complete visibility.",
    color: "from-purple-400 to-indigo-600",
  },
  {
    title: "Human Resource Management (HRM)",
    description: "Simplify employee records, attendance tracking, payroll processing, benefits administration, and performance evaluations.",
    color: "from-orange-400 to-green-600",
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Manage leads, sales pipelines, customer interactions, and support processes to strengthen customer relationships.",
    color: "from-blue-400 to-orange-600",
  },
  {
    title: "Procurement Management",
    description: "Automate purchasing workflows, vendor management, approvals, and procurement analytics to improve efficiency.",
    color: "from-pink-400 to-cyan-600",
  },
  {
    title: "Sales Management",
    description: "Monitor sales performance, quotations, orders, invoicing, and revenue generation through an integrated sales platform.",
    color: "from-yellow-400 to-red-600",
  },
  {
    title: "Production Management",
    description: "Plan, schedule, and monitor manufacturing operations to improve productivity and reduce operational bottlenecks.",
    color: "from-cyan-400 to-pink-600",
  },
  {
    title: "Supply Chain Management",
    description: "Optimize logistics, supplier coordination, order fulfillment, and distribution processes across the supply chain.",
    color: "from-green-400 to-yellow-600",
  },
];

export default function ERPModules() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 opacity-10">
          <div className="grid grid-cols-8 gap-2">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
              OUR COMMITMENT
            </h3>
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1E1E1E] mb-4">
              Key ERP Modules
            </h2>
            <p className="text-[#4B5563] text-lg max-w-3xl mx-auto">
              We Don't Just Build Apps - We Craft Digital Experiences That
              Help Your Business Grow, Engage Users, And Stay Ahead In A
              Mobile-First World.
            </p>
          </div>
        </AnimateOnView>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {modulesData.map((item, idx) => (
            <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t-4 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300" style={{ borderTopColor: idx % 4 === 0 ? '#EF4444' : idx % 4 === 1 ? '#8B5CF6' : idx % 4 === 2 ? '#10B981' : '#F97316' }}>
                <div className="mb-4">
                  <div className="w-full aspect-[3/2] rounded-[20px] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-center p-4">
                    <p className="text-sm text-blue-500 font-semibold">Cloudinary Image Here</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0052FF] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>

        {/* Bottom Banner */}
        <AnimateOnView direction="up" delay={0.8}>
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg flex flex-col lg:flex-row items-center justify-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="IP Softlink"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                At IP SoftLink, <span className="text-[#0052FF]">We are committed</span> to helping brands.
              </h3>
              <p className="text-[#4B5563] text-lg">
                Connect. Secure. Solve. Grow.
              </p>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
