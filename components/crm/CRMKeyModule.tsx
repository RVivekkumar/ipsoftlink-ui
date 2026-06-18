"use client";

import Image from "next/image";
import AnimateOnView from "@/components/ui/AnimateOnView";

const modulesData = [
    {
        title: "Improve Customer Retention",
        description: "Build stronger customer relationships through personalized engagement.",
        color: "from-red-400 to-blue-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781799220/Frame_w6h5rt.png",
    },
    {
        title: "Increase Sales Efficiency",
        description: "Automate repetitive tasks and accelerate sales cycles.",
        color: "from-purple-400 to-indigo-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798993/Frame_1_a0gmkx.png",
    },
    {
        title: "Better Team Collaboration",
        description: "Enable seamless communication across teams.",
        color: "from-orange-400 to-green-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798991/Frame_2_t7kyhj.png",

    },
    {
        title: "Faster Decision Making",
        description: "Access accurate data and reports instantly.",
        color: "from-blue-400 to-orange-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798985/Frame_3_juirvx.png",

    },
    {
        title: "Enhanced Customer Experience",
        description: "Deliver personalized and consistent customer interactions.",
        color: "from-pink-400 to-cyan-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798984/Frame_4_ncioot.png",

    },
    {
        title: "Higher Conversion Rates",
        description: "Convert more leads into loyal customers.",
        color: "from-yellow-400 to-red-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798974/Frame_5_vb2pvn.png",

    },
    {
        title: " Real-Time Business Insights",
        description: "Track KPIs and customer trends in real time.",
        color: "from-cyan-400 to-pink-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798973/Frame_6_euvfhh.png",

    },
    {
        title: "Automated Workflows",
        description: "Reduce manual work with intelligent automation.",
        color: "from-green-400 to-yellow-600",
        icon: "https://res.cloudinary.com/drxigvlxc/image/upload/v1781798973/Frame_7_ixxgez.png",

    },
];

export default function CRMKeyModule() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1781426411/Frame_2147226433_fusmbv.png"
                    alt="contact Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
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
                            <div className="bg-white p-5 w-full h-full rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t-4 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300"
                            //   style={{ borderTopColor: idx % 4 === 0 ? '#EF4444' : idx % 4 === 1 ? '#8B5CF6' : idx % 4 === 2 ? '#10B981' : '#F97316' }}
                            >
                                <div className="mb-4">
                                    <div className="w-full rounded-[20px] flex items-center justify-center text-center">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={180}
                                            height={180}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#0052FF] mb-3">{item.title}</h3>
                                <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
                            </div>
                        </AnimateOnView>
                    ))}
                </div>
            </div>
        </section>
    );
}
