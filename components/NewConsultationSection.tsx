"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimateOnView from "./ui/AnimateOnView";
import FormSubmitStatus, {
  FormSubmitStatusType,
} from "./ui/FormSubmitStatus";
import { CONSULTATION_RECIPIENT, submitWeb3Form } from "@/lib/web3forms";

export default function NewConsultationSection() {
  const [status, setStatus] = useState<FormSubmitStatusType>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dismissStatus = () => {
    setStatus("idle");
    setErrorMessage(null);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Form submitted!");
    setStatus("sending");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    const name = email.split("@")[0] || "Visitor"; // Get name from email
    console.log("Form data:", { name, email });

    const result = await submitWeb3Form(form, {
      subject: `Free Consultation Request from ${name}`,
      fromName: "IP Softlink Website",
      routeTo: CONSULTATION_RECIPIENT,
      formType: "consultation",
    });

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.message ?? "Something went wrong. Please try again.");
    }
  };

  return (
    
    <div className="p-10 rounded-[32px] bg-gray-50">
      <section className="relative overflow-hidden py-14">
      <FormSubmitStatus
        variant="toast"
        status={status}
        message={errorMessage}
        successMessage="Consultation request sent! Our expert will connect with you within 24 hours."
        onDismiss={dismissStatus}
      />
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/drxigvlxc/image/upload/v1783908229/20665_1_is69pg.png"
          alt="Background"
          fill
          className="object-cover rounded-[32px]"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          {/* Left triangle design */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
            <Image
              src="https://res.cloudinary.com/drxigvlxc/image/upload/v1783908436/Group_rwqdqs.png"
              alt="Triangle design"
              width={150}
              height={250}
              className="object-contain"
            />
          </div>

          <div className="bg-white rounded-[32px] shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* LEFT CONTENT */}
              <AnimateOnView direction="left">
                <div>
                  <h2 className="text-[32px] md:text-[48px] leading-tight font-bold text-black">
                    Schedule Your
                    <span className="text-[#0052FF]"> Free Consultation</span>
                  </h2>

                  <p className="mt-4 text-[#0052FF] text-base sm:text-lg font-medium">
                    Get a FREE 30-Day Trial of Our Software Solutions
                  </p>

                  <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                    Let's discuss your goals and find the right technology to grow your business
                  </p>

                  {/* Form */}
                  <form
                    onSubmit={onSubmit}
                    action="#"
                    method="post"
                    className="mt-10 space-y-4"
                  >
                    <FormSubmitStatus
                      status={status}
                      message={errorMessage}
                      onDismiss={dismissStatus}
                    />

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div className="flex-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="name@gmail.com"
                          required
                          className="w-full h-[54px] px-5 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-blue-100 transition-all text-base"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full sm:w-auto bg-[#0052FF] hover:bg-[#0040cc] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 h-[54px] rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 font-semibold text-sm sm:text-base shrink-0"
                      >
                        {status === "sending" ? "Sending..." : "Get Proposal"}
                        {status !== "sending" && <ArrowRight size={18} />}
                      </button>
                    </div>
                  </form>

                  <div className="mt-8">
                    <h3 className="text-lg sm:text-xl font-bold text-black">
                      Start Your Journey Today
                    </h3>
                    <p className="text-sm text-[#0052FF] mt-2">
                      Talk to Our Experts
                    </p>
                  </div>
                </div>
              </AnimateOnView>

              {/* RIGHT IMAGE */}
              <AnimateOnView direction="right" delay={0.2}>
                <div className="relative flex justify-center lg:justify-end">
                  <Image
                    src="https://res.cloudinary.com/drxigvlxc/image/upload/v1783908231/portrait-call-center-woman_1_eonzz5.png"
                    alt="Call center woman"
                    width={500}
                    height={600}
                    className="w-full max-w-[380px] sm:max-w-[450px] lg:max-w-[500px] h-auto object-contain"
                    priority
                  />
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
