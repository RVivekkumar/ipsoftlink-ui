import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Lower day-to-day operating costs",
    description:
      "Automate repetitive tasks to save time and resources.",
  },
  {
    title: "Secure business data",
    description:
      "Enterprise-grade security protocols to protect your assets.",
  },
  {
    title: "Smart workflow automation",
    description:
      "Streamline operations with intelligent process management.",
  },
  {
    title: "Support business growth",
    description:
      "Scalable architecture that grows with your user base.",
  },
  {
    title: "Clear reporting & analytics",
    description:
      "Data-driven insights for better decision making.",
  },
];

export default function BusinessGrowthSection() {
  return (
    <section className="relative overflow-hidden py-24 
      bg-[url('/bg4.png')] bg-cover bg-center bg-no-repeat">

      {/* 🔥 Overlay (important for readability) */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-0"></div>

      {/* Top Left Dots */}
      <div className="absolute top-0 left-0 opacity-30 z-10">
        <div
          className="w-44 h-44"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 2px, transparent 2px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Bottom Right Dots */}
      <div className="absolute bottom-0 right-0 opacity-30 z-10">
        <div
          className="w-72 h-72"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#dbeafe"
            fillOpacity="0.8"
            d="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="text-blue-600 text-xl md:text-2xl mb-6 font-medium">
            Solutions that Drive Growth
          </p>

          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2563EB]">
            Business-Focused Software Development
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-gray-800 max-w-4xl mx-auto">
            We don't just write code. We build solutions that solve
            real business problems and drive measurable growth.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-20">
          
          {/* Left Image */}
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
            <Image
              src="/development-cycle.png"
              alt="Development Cycle"
              width={900}
              height={900}
              className="w-full h-auto"
            />
          </div>

          {/* Right Timeline */}
          <div className="relative">
            
            {/* Vertical Line */}
            <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-blue-600" />

            <div className="space-y-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center gap-6"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
                      <CheckCircle2
                        size={38}
                        className="text-blue-600"
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex-1">
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600 text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}