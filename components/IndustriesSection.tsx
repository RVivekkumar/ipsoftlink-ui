"use client";
import Image from "next/image";

const industries = [
  {
    title: "Jewellery & DigiGold",
    description:
      "Automates jewellery management, inventory, billing, and customer management. GST-ready, secure, and scalable for multi-branch operations.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103127/Frame_1000002974_tu4e1w.png",
  },
  {
    title: "Event Booking Software",
    description:
      "Manage corporate, luxury, entertainment, sports, and cultural events with real-time tracking, online payments, and multi-service support.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781105710/Frame_1000002974_hklyra.png",
  },
  {
    title: "Travel Booking Platforms",
    description:
      "Systems for managing tour packages, reservations, customer records, and travel operations efficiently.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103136/Frame_1000002974_1_zc2aqm.png",
  },
  {
    title: "Oil & Gas Software",
    description:
      "Industry-focused software for monitoring operations, managing assets, tracking production, and streamlining workflows.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781105856/Frame_1000002974_2_xuneeb.png",
  },
  {
    title: "Food Delivery Systems",
    description:
      "Platforms that help restaurants manage menus, orders, payments, and delivery tracking efficiently.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781105766/Frame_1000002974_1_oskazm.png",
  },
  {
    title: "Billing Solutions",
    description:
      "Easy-to-use billing and invoicing software for managing payments, transactions, and financial records.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103134/Frame_1000002974_3_tchev4.png",
  },
  {
    title: "HRMS Applications",
    description:
      "Human resource management systems for employee records, attendance, payroll, and HR operations.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103135/Frame_1000002974_2_qn562c.png",
  },
  {
    title: "CRM Software",
    description:
      "Customer relationship management systems to track leads, manage customers, and improve sales processes.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103134/Frame_1000002974_4_qj1pxj.png",
  },
  {
    title: "Chit Software Development",
    description:
      "Streamlined member registration, collection management, passbooks, automated EMI reminders, and reporting.",
    image:
      "https://res.cloudinary.com/drg82xgxc/image/upload/v1781103131/Frame_1000002974_5_ioz3uc.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full py-20 bg-[#F6F7FB]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
  <p className="text-[#0052FF] text-sm font-medium mb-3">
    Expertise & Industry
  </p>

  <h2 className="text-[42px] font-bold text-[#111827]">
    Software Solutions for{" "}
    <span className="text-[#0052FF]">
      Multiple Industries
    </span>
  </h2>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
          <div
  key={i}
  className="
    bg-white
    border
    border-[#1E40AF]
    rounded-[10px]
    p-3
    flex
    flex-col
    transition-all
    duration-300
    hover:shadow-xl
    hover:-translate-y-1
  "
>
  {/* Image */}
  <div className="relative h-[160px] w-full overflow-hidden rounded-[6px]">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Content */}
  <div className="pt-4">
    <h3 className="text-[#0052FF] text-[18px] font-semibold mb-2">
      {item.title}
    </h3>

    <p className="text-[12px] leading-5 text-[#555] min-h-[72px]">
      {item.description}
    </p>

    <button
      className="
        mt-4
        h-[32px]
        px-4
        rounded-md
        text-white
        text-[12px]
        font-medium
      "
      style={{
        background:
          "linear-gradient(100.91deg,#0181FE -1.59%,#0077F9 21.16%,#0042BF 41.54%,#012586 60.02%,#011766 78.5%,#000946 96.99%)",
      }}
    >
      Explore →
    </button>
  </div>
</div>
          ))}
        </div>

      </div>
    </section>
  );
}