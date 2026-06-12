"use client";

const SOLUTIONS = [
  "CRM & ERP Applications",
  "Billing & Payroll Systems",
  "Custom Automation Tools",
  "Inventory & Logistics Management",
  "Desktop & Cloud Applications",
];

export default function SolutionsWeBuiltSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drg82xgxc/image/upload/v1781191798/Frame_2147225683_iaaw9h.png')",
      }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-7">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight">
            Solutions{" "}
            <span className="relative inline-block text-blue-600">
              We Build
              <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-blue-600" />
            </span>
          </h2>

          <ul className="flex flex-col gap-4">
            {SOLUTIONS.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="shrink-0 w-10 h-10 flex items-center justify-center">
                  {/* <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5"
                  >
                    <path
                      d="M10 2L18 10L10 18L2 10L10 2Z"
                      fill="#2563EB"
                      stroke="#2563EB"
                      strokeWidth="1"
                    />
                  </svg> */}
                  <img src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781254425/streamline-sharp-color_star-2-flat_xbpaad.png" className="" />
                </span>

                <span className="text-slate-700 text-base md:text-[17px] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side (Optional) */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}