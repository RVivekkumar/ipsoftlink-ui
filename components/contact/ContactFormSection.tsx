"use client";

import Image from "next/image";
import { Phone, MessageCircle, Plus } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function ContactFormSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <div className="grid grid-cols-3 gap-4">
            {[...Array(18)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
            ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-10 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
            ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimateOnView direction="up">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-6">
              We'd <span className="relative inline-block">
                Love To Hear
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-blue-600/20"></span>
                <span className="absolute bottom-1 left-0 w-1/2 h-[6px] bg-blue-600"></span>
              </span>
            </h2>
            <p className="text-[#6B7280] text-xl max-w-2xl leading-relaxed">
              Please let us know what you are looking for and we will get in touch with you
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <AnimateOnView direction="up" delay={0.1}>
              <ContactInfoBox 
                icon={<MessageCircle className="w-6 h-6" />}
                title="Chat to Business"
                description="Speak to our Friendly team."
                linkText="bd@IPsoftlink.com"
                href="mailto:bd@IPsoftlink.com"
              />
            </AnimateOnView>
            <AnimateOnView direction="up" delay={0.2}>
              <ContactInfoBox 
                icon={<MessageCircle className="w-6 h-6" />}
                title="Chat to With Us"
                description="We're here to help."
                linkText="careers@ipsoftlink.com"
                href="mailto:careers@ipsoftlink.com"
              />
            </AnimateOnView>
            <AnimateOnView direction="up" delay={0.3}>
              <ContactInfoBox 
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                description="Mon-Sat from 10 A.M to 7 P.M"
                linkText="+91 9003418834"
                href="tel:+919003418834"
              />
            </AnimateOnView>
          </div>

          {/* Center Column - Image */}
          <AnimateOnView direction="up" delay={0.4} className="lg:col-span-4 h-full">
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-[#F8FAFF] group">
              {/* Center Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-blue-300 font-medium p-12 text-center group-hover:scale-105 transition-transform duration-500">
                 <div className="space-y-4">
                    <p className="text-blue-500 font-bold">Cloudinary Image Here</p>
                    <p className="text-gray-400 text-sm">3 People working with Globe Background</p>
                 </div>
              </div>
               <Image
                src="https://res.cloudinary.com/drg82xgxc/image/upload/v1781102082/IP_logo2_1_1_1_ako1wn.png"
                alt="Team working"
                fill
                className="object-contain p-24 opacity-10"
              />
            </div>
          </AnimateOnView>

          {/* Right Column - Form */}
          <AnimateOnView direction="up" delay={0.5} className="lg:col-span-5 bg-white">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <InputField label="Full Name" type="text" placeholder="Enter your full name" required />
                <InputField label="E-Mail" type="email" placeholder="Enter your email address" required />
                <InputField label="Phone/Mobile" type="tel" placeholder="Enter your phone number" required />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <SelectField label="Select Country" options={["India", "USA", "UK", "Other"]} required />
                   <SelectField label="Select Services" options={["Software Development", "Mobile App Development", "IT Consulting", "Other"]} required />
                </div>

                <InputField label="Attach Document" type="file" />

                <div className="relative">
                   <label className="block text-sm font-bold text-[#1E1E1E] mb-3 uppercase tracking-wider">How can we help you ?</label>
                   <textarea 
                    rows={4}
                    placeholder="Tell us about your project or inquiry"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:outline-none focus:border-blue-600 transition-all resize-none placeholder:text-gray-300"
                   ></textarea>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="terms" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-all cursor-pointer" required />
                <label htmlFor="terms" className="text-sm text-[#6B7280] cursor-pointer">
                  I Agree to <a href="#" className="text-blue-600 font-medium hover:underline">terms of use</a> And <a href="#" className="text-blue-600 font-medium hover:underline">privacy policy</a>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#0052FF] hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit
              </button>
            </form>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}

function ContactInfoBox({ icon, title, description, linkText, href }: any) {
  return (
    <div className="p-8 bg-[#F8FAFF] rounded-[32px] border border-gray-50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
      <div className="mb-6 flex items-center gap-4">
         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600">
            {icon}
         </div>
         <div className="h-[2px] w-12 bg-blue-100 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300"></div>
      </div>
      <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">{title}</h3>
      <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">{description}</p>
      <a href={href} className="text-[#1E1E1E] font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
        {linkText}
        <span className="w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-current border-b-4 border-b-transparent group-hover:translate-x-1 transition-transform"></span>
      </a>
    </div>
  );
}

function InputField({ label, type, ...props }: any) {
  if (type === 'file') {
    return (
      <div className="relative">
        <label className="block text-sm font-bold text-[#1E1E1E] mb-3 uppercase tracking-wider">
          {label}
        </label>
        <div className="relative">
          <input 
            type="file" 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            {...props}
          />
          <div className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 flex items-center justify-between group">
            <span className="text-gray-300">Upload document</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Plus className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <label className="block text-sm font-bold text-[#1E1E1E] mb-3 uppercase tracking-wider">
        {label} {props.required && <span className="text-blue-600">*</span>}
      </label>
      <input 
        type={type}
        {...props}
        className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:outline-none focus:border-blue-600 transition-all placeholder:text-gray-300"
      />
    </div>
  );
}

function SelectField({ label, options, ...props }: any) {
  return (
    <div className="relative">
      <label className="block text-sm font-bold text-[#1E1E1E] mb-3 uppercase tracking-wider">
        {label} {props.required && <span className="text-blue-600">*</span>}
      </label>
      <select 
        {...props}
        className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:outline-none focus:border-blue-600 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23D1D5DB%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0_center] bg-no-repeat cursor-pointer text-[#1E1E1E]"
      >
        <option value="" disabled selected>{label}</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
