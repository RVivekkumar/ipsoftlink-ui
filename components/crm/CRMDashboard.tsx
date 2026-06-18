"use client";

import Image from "next/image";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function CRMDashboard() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781792413/Frame_2147226491_sojvnw.png"
                    alt="contact Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[400px]">
                <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 400L60 373.333C120 346.667 240 293.333 360 266.667C480 240 600 240 720 253.333C840 266.667 960 293.333 1080 280C1200 266.667 1320 213.333 1380 186.667L1440 160V400H1380C1320 500 1200 500 1080 500C960 500 840 500 720 500C600 500 480 500 360 500C240 500 120 500 60 500H0Z" fill="url(#paint0_linear_1_1)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_1" x1="720" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0052FF" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#0052FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <AnimateOnView direction="up">
                    <div className="text-center mb-16">
                        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0052FF] mb-3">
                            CRM Dashboard Review
                        </h3>
                        <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1E1E1E] mb-4">
                            <span className="text-[#0052FF]">Powerful CRM Dashboard for Smarter Decisions</span>
                        </h2>
                        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
                            Gain complete visibility into your sales performance, customer interactions, and business growth with real-time analytics, actionable insights, and intelligent reporting.
                        </p>
                    </div>
                </AnimateOnView>

                <AnimateOnView direction="left" delay={0.4} className="lg:w-full relative">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-center p-10 text-blue-400 z-10">
                            <Image
                                src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781792413/ChatGPT_Image_Jun_16_2026_11_10_57_PM_1_gjljzw.png"
                                alt="Digital Marketing"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </AnimateOnView>
            </div>
        </section>
    );
}
