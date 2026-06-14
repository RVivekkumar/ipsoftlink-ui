"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <Rocket className="w-20 h-20 text-blue-600 animate-bounce" />
        </div>

        <h1 className="text-7xl md:text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Page Coming Soon
        </h2>

        <p className="mt-4 text-slate-600">
          The page you're looking for is currently under development
          and will be available soon.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}