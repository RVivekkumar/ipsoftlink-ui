"use client";

import AnimateOnView from "@/components/ui/AnimateOnView";

const workflowSteps = [
  {
    left: {
      title: "Customer Management & CRM",
      description: "Centralize customer data, track interactions, manage leads, and enhance relationships with our ERP.",
      color: "from-red-500 to-rose-600",
    },
    right: {
      title: "Production Management",
      description: "Plan, schedule, and control manufacturing processes to ensure optimal production efficiency.",
      color: "from-red-500 to-rose-600",
    },
  },
  {
    left: {
      title: "Sales Processing",
      description: "Manage the entire sales cycle from inquiry to order fulfillment with automated workflows.",
      color: "from-orange-500 to-amber-500",
    },
    right: {
      title: "Quality Assurance",
      description: "Monitor and maintain product quality standards throughout the production and delivery processes.",
      color: "from-orange-500 to-amber-500",
    },
  },
  {
    left: {
      title: "Inventory Control",
      description: "Track stock levels, automate reordering, and manage warehouse operations efficiently.",
      color: "from-purple-500 to-violet-600",
    },
    right: {
      title: "Delivery & Logistics",
      description: "Optimize supply chain, track shipments, and ensure timely delivery of products to customers.",
      color: "from-purple-500 to-violet-600",
    },
  },
  {
    left: {
      title: "Procurement",
      description: "Streamline purchasing, vendor management, and procurement processes for cost efficiency.",
      color: "from-cyan-500 to-teal-500",
    },
    right: {
      title: "Finance & Accounting",
      description: "Manage financial transactions, budgeting, reporting, and compliance in one integrated system.",
      color: "from-cyan-500 to-teal-500",
    },
  },
];

const bottomStep = {
  title: "Analytics & Reporting",
  description: "Gain actionable insights with real-time dashboards, reports, and business intelligence tools.",
  color: "from-yellow-400 to-amber-500",
};

export default function ERPWorkflow() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimateOnView direction="up">
          <div className="text-center mb-20">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#0052FF] mb-4">
              ERP Implementation Workflow
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
              A structured approach to streamline operations, automate processes, and drive business growth through seamless ERP implementation.
            </p>
          </div>
        </AnimateOnView>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-orange-500 via-purple-500 via-cyan-500 to-yellow-500 z-0" />

          {/* Steps */}
          <div className="space-y-16">
            {workflowSteps.map((step, idx) => (
              <AnimateOnView key={idx} direction="up" delay={idx * 0.15}>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Step */}
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${step.left.color} p-8 rounded-[40px] text-white shadow-2xl`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">{step.left.title}</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed">{step.left.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  {/* Right Step */}
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${step.right.color} p-8 rounded-[40px] text-white shadow-2xl`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">{step.right.title}</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed">{step.right.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}

            {/* Bottom Step */}
            <AnimateOnView direction="up" delay={0.6}>
              <div className="flex justify-center mt-12">
                <div className={`bg-gradient-to-br ${bottomStep.color} p-8 rounded-[50px] text-white shadow-2xl max-w-2xl w-full text-center`}>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{bottomStep.title}</h3>
                  <p className="text-white/90 leading-relaxed">{bottomStep.description}</p>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
