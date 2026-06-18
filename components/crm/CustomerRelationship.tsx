"use client";

import Image from "next/image";
import { Target, Headphones, Zap, ShieldCheck, Smartphone, Code } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const whyChooseData = [
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424574/Frame_2147225754_c21xof.png",
        title: "Customer Management",
        color: "#E82A66",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424573/Frame_2147225754_1_celap6.png",
        title: "Lead Tracking & Conversion",
        color: "#FE7B14",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424571/Frame_2147225754_2_re43pb.png",
        title: "Sales Pipeline Management",
        color: "#6736DA",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424570/Frame_2147225754_3_b8w9xw.png",
        title: "Communication Tracking",
        color: "#059F61",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781427320/Frame_2147225754_1_oilumd.png",
        title: "Task & Activity Automation",
        color: "#06ABD6",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781427349/Frame_2147225754_giqxrn.png",
        title: "Analytics & Reporting",
        color: "#ED469F",
    },
];

export default function CustomerRelationship() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781791385/Frame_2147225840_ntlgdi.png"
                    alt="Why Choose ERP Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-[500px] opacity-30 hidden lg:block">
                <div className="absolute top-20 right-20 w-[200px] h-[200px] bg-blue-200 rounded-full blur-[80px]" />
                <div className="absolute bottom-20 right-40 w-[150px] h-[150px] bg-purple-200 rounded-full blur-[60px]" />
                <div className="absolute top-40 right-10 w-[120px] h-[120px] bg-orange-200 rounded-full blur-[50px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <AnimateOnView direction="left" delay={0.6} className="lg:w-1/2 w-full order-1 lg:order-2 relative">
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781791382/ChatGPT_Image_Jun_15_2026_08_51_33_PM_1_1_zqabgp.png"
                                    alt="ERP System"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                           
                        </div>
                    </AnimateOnView>
                    {/* Right Image */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <AnimateOnView direction="right">
                            <h2 className="text-[28px] md:text-2xl lg:text-3xl font-bold text-[#0052FF] mb-4 lg:mb-6">
                                Everything You Need To Manage Customer Relationships
                            </h2>
                        </AnimateOnView>
                        <AnimateOnView direction="right" delay={0.1}>
                            <p className="text-[#4B5563] text-base lg:text-lg mb-6 lg:mb-8 max-w-xl leading-relaxed">
Manage your customers, leads, sales activities, and business communications from a single platform. Our CRM solution helps teams improve productivity, streamline workflows, and build stronger customer relationships through automation and real-time insights.                            </p>
                        </AnimateOnView>

                        <AnimateOnView direction="right" delay={0.2}>
                            <h3 className="text-lg font-bold text-[#1E1E1E] mb-4 lg:mb-6">Key Benefits</h3>
                        </AnimateOnView>

                        {/* Points List */}
                        <div className="space-y-3 lg:space-y-4">
                            {whyChooseData.map((item, idx) => (
                                <AnimateOnView key={idx} direction="right" delay={0.3 + idx * 0.1}>
                                    <div key={idx} className="flex items-center gap-3 lg:gap-4 bg-white p-3 lg:p-4 rounded-xl shadow-md border-l-4 hover:shadow-xl transition-all duration-300" style={{
                                        borderRight: `3px solid ${item.color}`,
                                    }}>
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color }}>
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain"
                                                priority={true}
                                                unoptimized={true}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1E1E1E] text-sm lg:text-base">{item.title}</h4>
                                        </div>
                                    </div>
                                </AnimateOnView>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}