"use client";

import { Network, UsersRound, Gauge, Workflow, TrendingUp, UserCheck } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Image from "next/image";

const features = [
    {
        title: "Centerlized customer data",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797363/Group_1686552867_hsn5yn.png",
    },
    {
        title: "Improved Team Productivity",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797361/Group_1686552868_rxocwa.png",
    },
    {
        title: "Faster Sales Conversions",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797360/Group_1686552869_smqvpv.png",
    },
    {
        title: "Automated Workflows",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797359/Group_1686552870_mmvmkl.png",
    },
    {
        title: "Real-Time Insights",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797359/Group_1686552871_tkntbj.png",
    },
    {
        title: "Better Customer Experience",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781797359/Group_1686552872_bwtj94.png",
    },
];

export default function CRMSolution() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <AnimateOnView direction="up">
                    <div className="text-center">

                        <h2 className="text-[36px] lg:text-[48px] font-bold text-[#0052FF]">
                            CRM Implementation Process         </h2>
                    </div>
                    <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">

                        A step-by-step approach to successfully deploy, optimize, and support your CRM solution for long-term business success.       </p> </AnimateOnView>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
                    {features.map((item, idx) => (
                        <AnimateOnView key={idx} direction="up" delay={idx * 0.1}>
                            <div className="grid grid-cols-1 gap-6 items-center gap-6 text-center">
                                <div className="rounded-[28px]  flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0052FF]">
                                    {item.title}
                                </h3> */}
                            </div>
                        </AnimateOnView>
                    ))}
                </div>
            </div>
        </section>
    );
}
