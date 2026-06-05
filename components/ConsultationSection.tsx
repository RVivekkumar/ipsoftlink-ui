import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ConsultationSection() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="relative overflow-hidden rounded-3xl md:rounded-[40px] bg-gradient-to-r from-[#eaf5ff] to-[#dff0ff] p-5 sm:p-8 md:p-10 lg:p-12">

          {/* Background Shape (hide on mobile) */}
          <div className="absolute top-0 right-0 w-[45%] h-full bg-blue-100 rounded-l-full opacity-40 hidden md:block" />

          {/* Main Card */}
          <div className="relative z-10 border border-blue-400 rounded-2xl md:rounded-[30px] bg-white/90 backdrop-blur-sm p-5 sm:p-8 md:p-10">

            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">

              {/* LEFT */}
              <div className="text-center lg:text-left">

                {/* ✅ Responsive Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900 max-w-[600px] mx-auto lg:mx-0">
                  Schedule Your Free Consultation
                </h2>

                <p className="mt-4 md:mt-6 text-gray-700 text-sm sm:text-base md:text-lg max-w-[500px] mx-auto lg:mx-0">
                  Let's discuss your goals and find the right
                  technology to grow your business.
                </p>

                {/* ✅ Responsive Form */}
                <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 max-w-[500px] mx-auto lg:mx-0">
                  
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    className="flex-1 border border-blue-400 rounded-xl px-4 py-3 md:px-6 md:py-4 outline-none text-sm md:text-base"
                  />

                  <button className="w-full sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                    <ArrowRight size={22} />
                  </button>

                </div>

                <h3 className="mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                  Start Your Journey Today
                </h3>

                <a
                  href="#"
                  className="inline-block mt-2 md:mt-4 text-blue-600 text-base sm:text-lg md:text-xl font-medium hover:underline"
                >
                  Talk to Our Experts
                </a>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center mt-6 lg:mt-0">
                <Image
                  src="/call-center-woman.png"
                  alt="Consultation Expert"
                  width={500}
                  height={500}
                  className="w-[75%] sm:w-[60%] md:w-[50%] lg:w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-contain"
                />
              </div>

            </div>
          </div>

          {/* Decorative Dots (hide on mobile) */}
          <div className="absolute bottom-10 left-1/4 hidden md:block">
            <div
              className="w-20 h-10 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#3b82f6 2px, transparent 2px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* Decorative Triangle (hide on mobile) */}
          <div className="absolute left-6 top-1/3 hidden md:block w-0 h-0 border-l-[30px] md:border-l-[40px] border-l-blue-400 border-t-[20px] md:border-t-[25px] border-t-transparent border-b-[20px] md:border-b-[25px] border-b-transparent opacity-60" />

        </div>
      </div>
    </section>
  );
}