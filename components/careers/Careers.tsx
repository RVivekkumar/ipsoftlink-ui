"use client";

import { Briefcase } from "lucide-react";

export default function CareerPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center max-w-xl">
        {/* Animated Icon */}
        <div className="flex justify-center mb-8">
          <div className="animate-bounce bg-blue-100 p-6 rounded-full">
            <Briefcase className="w-14 h-14 text-blue-600" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Careers
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-blue-600">
          No Openings Available Right Now
        </h2>

        <p className="mt-5 text-slate-600 leading-relaxed">
          We are not hiring at the moment, but we're always looking for
          talented people. Please check back later for future opportunities.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}