import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-start pt-32 sm:pt-40">

      {/* 🔥 Background */}
      <div className="absolute inset-0">
        <Image
          src="/globenew.png"
          alt="bg"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-16 lg:px-24 text-left">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
          Connect. <span className="text-blue-500">Secure. Solve</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 text-white">
          Transforming Technology
        </h2>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1 text-white">
          Into <span className="text-blue-500">Business Growth</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
          We deliver end-to-end IT infrastructure, cloud, cybersecurity and software solutions that help organizations scale with confidence in a digital-first world.
        </p>

        {/* CTA Text (Fixed alignment + spacing) */}
        <p className="mt-6 text-base sm:text-lg md:text-2xl font-semibold text-white max-w-2xl leading-relaxed">
          Let’s Talk About Your Business Needs. Schedule a{" "}
          <span className="text-blue-400">FREE Consultation</span> and explore our solutions with a{" "}
          <span className="text-blue-400">FREE Trial</span>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full">
            Get Started
          </button>

          <button className="w-full sm:w-auto border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore Services
          </button>
        </div>

      </div>
    </section>
  );
}