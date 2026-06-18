"use client";

import Image from "next/image";
import { Target, Headphones, Zap, ShieldCheck, Smartphone, Code } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

const whyChooseData = [
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424574/Frame_2147225754_c21xof.png",
        title: "Centralized Business Management",
        color: "#E82A66",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424573/Frame_2147225754_1_celap6.png",
        title: "Real-Time Data & Analytic",
        color: "#FE7B14",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424571/Frame_2147225754_2_re43pb.png",
        title: "Process Automation",
        color: "#6736DA",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781424570/Frame_2147225754_3_b8w9xw.png",
        title: "Improved Operational Efficiency",
        color: "#059F61",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781427320/Frame_2147225754_1_oilumd.png",
        title: "Enhances Data Security",
        color: "#06ABD6",
    },
    {
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781427349/Frame_2147225754_giqxrn.png",
        title: "Scalable & Future-Ready Solutions",
        color: "#ED469F",
    },
];

export default function CustomerRelationship() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781426411/Frame_2147225840_trogkq.png"
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
                                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781427322/ChatGPT_Image_Jun_10_2026_11_58_49_PM_1_gqyypa.png"
                                    alt="ERP System"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Floating Icons - Hidden on small screens */}
                            <div className="hidden sm:block">
                                <div className="absolute top-5 sm:top-10 right-5 sm:right-10 z-10 bg-white p-2 sm:p-3 rounded-2xl shadow-lg animate-bounce">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs font-semibold text-center mt-1 text-black">Finance</p>
                                </div>

                                <div className="absolute top-16 sm:top-20 left-0 z-10 bg-white p-2 sm:p-3 rounded-2xl shadow-lg animate-pulse">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <p className="text-xs font-semibold text-center mt-1 text-black">Inventory</p>
                                </div>

                                <div className="absolute bottom-16 sm:bottom-20 left-5 sm:left-10 z-10 bg-white p-2 sm:p-3 rounded-2xl shadow-lg animate-bounce delay-100">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs font-semibold text-center mt-1 text-black">HR</p>
                                </div>

                                <div className="absolute bottom-5 sm:bottom-10 right-16 sm:right-20 z-10 bg-white p-2 sm:p-3 rounded-2xl shadow-lg animate-pulse">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs font-semibold text-center mt-1 text-black">CRM</p>
                                </div>

                                <div className="absolute top-1/2 -right-2 sm:-right-4 bg-white p-2 sm:p-3 rounded-2xl shadow-lg animate-bounce delay-200">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs font-semibold text-center mt-1 text-black">Analytics</p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnView>
                    {/* Right Image */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <AnimateOnView direction="right">
                            <h2 className="text-[28px] md:text-[32px] lg:text-[44px] font-bold text-[#0052FF] mb-4 lg:mb-6">
                                Why Business Choose Our CRM Solutions
                            </h2>
                        </AnimateOnView>
                        <AnimateOnView direction="right" delay={0.1}>
                            <p className="text-[#4B5563] text-base lg:text-lg mb-6 lg:mb-8 max-w-xl leading-relaxed">
                                Our ERP Solutions help organizations streamline operations, improve productivity, and make smarter decisions through a centralized and scalable platform. From finance and inventory to HR and sales, We bring every business function together for better efficiency, visibility, and growth.
                            </p>
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