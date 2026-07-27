"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  QrCode
} from "lucide-react";
import FAQ from "@/app/Components/Shared/FAQ";
import { queryApi } from "@/app/lib/api";

const ContactClient: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const response = await queryApi.submit({
        clientName: name,
        email,
        phone,
        message: `${subject}: ${message}`,
      });

      if (response.success) {
        setFormStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      }
    } catch (err: any) {
      setFormStatus("error");
      setErrorMessage(err.message || "Failed to submit query. Please try again.");
    }
  };

  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* HERO SECTION */}
      <header className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Office/AMN_4991.jpeg"
            className="w-full h-full object-cover scale-105 opacity-50"
            alt="Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-1 h-24 bg-[#94cb3d]"></div>
            <div>
              <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>
              <h1 className="text-2xl md:text-8xl font-black mb-4 leading-none uppercase">
                Contact <br />
                <span className='text-[#94cb3d]'>Us</span>
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            We're here to support your vision and answer any questions you may have.
          </p>
        </div>
      </header>

     

      {/* CONTACT FORM & MAP SECTION */}
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-2 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8">
            {/* CONTACT FORM */}
            <div className="bg-[#111] border border-gray-800 rounded-md p-2 md:p-8 relative overflow-hidden">
              {formStatus === "success" ? (
                <div className="bg-[#94cb3d]/10 border border-[#94cb3d]/30 p-8 rounded-md text-center">
                  <div className="w-16 h-16 bg-[#94cb3d] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-black" size={28} />
                  </div>
                  <h4 className="text-[#94cb3d] text-2xl font-medium mb-3 uppercase tracking-tighter">Message Received</h4>
                  <p className="text-gray-400 text-sm">Thank you for reaching out to Coral Group. Your query has been received by our team. An executive will contact you shortly.</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 bg-white/5 px-6 py-2.5 rounded-md text-white font-medium uppercase text-xs tracking-widest border border-white/10 hover:bg-white/10 transition-all"
                  >
                    Send New Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium mb-2 uppercase tracking-tighter">Send us a message</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">Our agents are ready to assist with your portfolio.</p>
                  </div>

                  {formStatus === "error" && (
                    <div className="mb-6 p-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs rounded-md uppercase tracking-widest text-center">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:border-[#94cb3d] outline-none text-sm font-medium transition-all"
                          placeholder="Executive Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 ml-1">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:border-[#94cb3d] outline-none text-sm font-medium transition-all"
                          placeholder="executive@domain.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 ml-1">Phone</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:border-[#94cb3d] outline-none text-sm font-medium transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 ml-1">Subject</label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:border-[#94cb3d] outline-none text-sm font-medium transition-all"
                        placeholder="Nature of Inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 ml-1">Message</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full bg-black border border-gray-800 rounded-md px-4 py-3 focus:border-[#94cb3d] outline-none resize-none text-sm font-medium transition-all"
                        placeholder="Detail your requirements..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="bg-[#94cb3d] text-black w-full px-8 py-3 rounded-md font-medium text-xs tracking-[0.3em] flex items-center justify-center hover:scale-105 disabled:opacity-50 transition-all uppercase shadow-lg shadow-[#94cb3d]/20"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={16} />
                          SYNCHRONIZING...
                        </>
                      ) : (
                        <>
                          SUBMIT MESSAGE
                          <Send className="ml-2" size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* MAP */}
            <div className="bg-[#111] border border-gray-800 rounded-md overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-black uppercase tracking-tighter">Find Us</h3>
                <p className="text-gray-500 text-xs mt-1">5th Floor, Tower C, Vinayak Plaza, Maldahiya, Varanasi 221002</p>
              </div>
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40421.64841277028!2d82.95439067431634!3d25.324609599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2daff92d953b%3A0xd88bb9968e634f6e!2sCoralGroup!5e1!3m2!1sen!2sin!4v1783140587999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CONTACT CARDS */}
      <section className="py-24 container mx-auto px-6 bg-[#1e1e1e]">
        <div className="text-center mb-16">
          <h2 className="text-[#94cb3d] font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Get in touch
          </h2>
          <h3 className="text-4xl font-medium uppercase tracking-tighter">How can we assist you?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: "Head Office",
              content:
                "5th Floor, Tower C, Vinayak Plaza, Maldahiya, Varanasi 221002",
              link: "#",
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+91 780-000-0097",
              link: "tel:+917800000097",
            },
            {
              icon: Mail,
              title: "Email",
              content: "info@coral-group.in",
              link: "mailto:info@coral-group.in",
            },
            {
              icon: Clock,
              title: "Office Hours",
              content: "Mon - Sat: 9:00AM - 7:00PM",
              link: null,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#151515] border border-gray-800 p-8 rounded-lg hover:border-[#94cb3d] transition-all flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-[#0f0f0f] rounded-2xl flex items-center justify-center mb-6">
                <card.icon className="text-[#94cb3d]" size={28} />
              </div>
              <h5 className="text-lg font-medium uppercase mb-3">{card.title}</h5>

              {card.link ? (
                <a
                  href={card.link}
                  target="_blank"
                  className="text-gray-500 hover:text-white transition-colors text-sm leading-relaxed"
                >
                  {card.content}
                </a>
              ) : (
                <p className="text-gray-500 text-sm leading-relaxed">{card.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* GMB QR & SOCIAL MEDIA SECTION */}
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GMB QR CODE */}
            <div className="bg-[#111] border border-gray-800 rounded-md p-6 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#94cb3d]/10 rounded-md flex items-center justify-center">
                  <QrCode className="text-[#94cb3d]" size={20} />
                </div>
                <div className="text-center ">
                  <h3 className="text-base font-black uppercase tracking-tighter">Google My Business</h3>
                  <p className="text-gray-500 text-xs">Scan to visit our GMB profile</p>
                  <p className="text-gray-500 text-xs">Type your thoughts and give a review</p> 
                </div>
              </div>
              <div className="bg-white p-3 rounded-md inline-block">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://share.google/Qm0XhSzjarr1gzx9e"
                  alt="GMB QR Code"
                  className="w-40 h-40"
                />
              </div>
              <a
                href="https://share.google/Qm0XhSzjarr1gzx9e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#94cb3d] text-xs font-bold uppercase tracking-widest hover:underline"
              >
                Open GMB Profile
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-[#111] border border-gray-800 rounded-md p-6">
              <h3 className="text-base font-black uppercase tracking-tighter mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.instagram.com/coralgroupoff/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-md p-3 hover:border-[#94cb3d] transition-all group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                    <Instagram className="text-white" size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/coralgroupoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-md p-3 hover:border-[#94cb3d] transition-all group"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                    <Facebook className="text-white" size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@coralgroupoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-md p-3 hover:border-[#94cb3d] transition-all group"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
                    <Youtube className="text-white" size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">YouTube</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/coralgroupoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-md p-3 hover:border-[#94cb3d] transition-all group"
                >
                  <div className="w-8 h-8 bg-blue-700 rounded-md flex items-center justify-center">
                    <Linkedin className="text-white" size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* SCROLLBAR */}
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
      `}</style>
    </div>
  );
};

export default ContactClient;
