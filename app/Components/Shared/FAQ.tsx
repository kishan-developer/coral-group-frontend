"use client";

// components/FAQ.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}



const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services does Coral Group provide?",
      answer:
        "Coral Group offers a wide range of professional services including business consulting, project management, digital solutions, infrastructure development, and customized enterprise support. Our goal is to deliver reliable, sustainable, and result-oriented solutions to all clients.",
    },
    {
      question: "How can I contact Coral Group for business inquiries?",
      answer:
        "You can reach us through the Contact Us page on our website, submit the inquiry form, or email us directly. Our team will respond within 24–48 business hours.",
    },
    {
      question: "Does Coral Group provide customized solutions for businesses?",
      answer:
        "Yes. We tailor our services based on your company’s goals, industry type, and project requirements. Every solution is personalized to ensure maximum efficiency and long-term success.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
    },
    {
      question: "How do I get started with Coral Group?",
      answer:
        "Simply fill out the inquiry form or book a consultation call through our website. Our team will guide you through the next steps, understand your needs, and help you start your project smoothly.",
    },
    {
      question: "Are your projects approved by local authorities?",
      answer:
        "Yes. All Coral Group projects are fully approved and comply with the required government regulations, RERA guidelines, and safety standards.",
    },
  ];

  return (
    <section className="py-20 w-full min-h-[60vh] bg-[#1e1e1e] relative overflow-hidden z-20">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* PATTERN BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #94cb3d 1px, transparent 1px), radial-gradient(circle at 75% 75%, #94cb3d 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* DECORATIVE CIRCLES */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#94cb3d]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#94cb3d]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-[#94cb3d] mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
          <p className="text-gray-200">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-[#1e1e1e]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-[#94cb3d] px-6 py-4 text-left flex items-center justify-between transition-colors hover:bg-[#94cb3d]/5 cursor-pointer focus:outline-none"
              >
                <span className="text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#94cb3d] transition-transform ${openIndex === index ? "transform rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 bg-[#1e1e1e]">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
