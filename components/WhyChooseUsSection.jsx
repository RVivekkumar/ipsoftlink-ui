import {
  Award,
  TrendingUp,
  MessageSquare,
  Workflow,
  Headphones,
  Target,
} from "lucide-react";

const leftFeatures = [
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "Proven experience in delivering efficient and reliable software solutions.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Technology",
    desc: "Future-ready platforms that grow with your business.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Clear updates, honest timelines, and professional collaboration.",
  },
];

const rightFeatures = [
  {
    icon: Workflow,
    title: "Workflow-Based Solutions",
    desc: "Custom-built systems designed around your unique business processes.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    desc: "Dedicated maintenance and long-term technical assistance.",
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    desc: "Focused on delivering growth, not just technical delivery.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_30%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-lg md:text-xl font-medium">
            Why Choose IP Softlink Solution
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
            Build on Expertise,
            <span className="text-blue-600">
              {" "}Driven by Results.
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine regional expertise with global standards to
            deliver software that outperforms expectations.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left Cards */}
          <div className="space-y-6">
            {leftFeatures.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src="/logo.png"
                alt="IP Softlink"
                className="w-56 mx-auto"
              />


            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {rightFeatures.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 flex gap-4 items-start hover:shadow-lg transition">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>

      <div>
        <h3 className="font-semibold text-blue-600">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
}