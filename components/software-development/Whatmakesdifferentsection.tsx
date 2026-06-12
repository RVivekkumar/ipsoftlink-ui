"use client";

export default function WhatMakesDifferentSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            What Makes Our{" "}
            <span className="text-blue-600 italic">Software Different?</span>
          </h2>
        </div>

        {/* ── Top labels row ── */}
       

        {/* ── Flowchart image ── */}
        <div className="w-full flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781191664/Group_1686552801_l3zpez.png"
            alt="What makes our software different - flowchart showing 5 steps"
            className="w-full max-w-3xl object-contain"
          />
        </div>
       

      </div>
    </section>
  );
}