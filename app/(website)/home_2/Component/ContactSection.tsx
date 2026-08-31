"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, X, User, Mail as MailIcon, Phone as PhoneIcon, MessageSquare, Loader2, CheckCircle, FileText, Eye } from "lucide-react";
import Link from "next/link";
import BrochureModal from "@/app/Components/Shared/BrochureModal";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ clientName: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/queries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Home Contact Section" }),
      });
      const data = await res.json();
      if (res.ok && data.success) { setStatus("success"); }
      else { setStatus("error"); setError(data.message || "Submission failed."); }
    } catch { setStatus("error"); setError("Network error. Please try again."); }
  };

  const inp = "w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-md bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-gradient-to-r from-[#94cb3d] to-[#7ab532] px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-black">Contact Coral Group</h2>
            <p className="text-black/70 text-xs font-medium">We'll get back to you shortly</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-black/20 rounded-full transition-colors"><X className="text-black w-5 h-5" /></button>
        </div>
        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#94cb3d]/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="text-[#94cb3d] w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-sm mb-6">Our team will contact you within 24 hours. A confirmation has been sent to your email.</p>
              <button onClick={onClose} className="bg-[#94cb3d] text-black px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#7ab532] transition-all">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">{error}</div>}
              <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="text" required placeholder="Full Name *" value={form.clientName} onChange={e => setForm({ ...form, clientName: e.target.value })} className={`${inp} pl-10`} /></div>
              <div className="relative"><MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="email" required placeholder="Email Address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={`${inp} pl-10`} /></div>
              <div className="relative"><PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="tel" required placeholder="Phone Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={`${inp} pl-10`} /></div>
              <div className="relative"><MessageSquare className="absolute left-3 top-4 text-gray-600 w-4 h-4" /><textarea rows={3} placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inp} pl-10 resize-none`} /></div>
              <button type="submit" disabled={status === "submitting"} className="w-full bg-[#94cb3d] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#7ab532] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {status === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState<{ type: string; title: string } | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBrochureViewerOpen, setIsBrochureViewerOpen] = useState(false);
  const [viewingBrochure, setViewingBrochure] = useState<{ type: string; title: string; url: string } | null>(null);

  const handleBrochureClick = (type: string, title: string) => {
    setSelectedBrochure({ type, title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrochure(null);
  };

  const handleViewBrochure = (type: string, title: string, url: string) => {
    setViewingBrochure({ type, title, url });
    setIsBrochureViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsBrochureViewerOpen(false);
    setViewingBrochure(null);
  };

  return (
    <section className="relative w-[90vw] text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 px-6 py-2 border border-[#94cb3d]/40 text-[#94cb3d] tracking-widest text-xs">
          GET IN TOUCH
        </span>

        <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
          Let’s Build the Future
          <br />
          <span className="text-[#94cb3d] italic">Together</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
          Partner with Coral Group for your next venture. Experience excellence,
          innovation, and trust in every project.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="flex items-center justify-center gap-2 bg-[#94cb3d] text-black px-8 py-3 text-sm font-medium hover:opacity-90 transition">
            Contact Coral Group <ArrowRight size={16} />
          </a>
          <button
            onClick={() => handleBrochureClick("coral-skyline", "Coral Skyline")}
            className="px-8 py-3 text-sm font-medium border border-[#94cb3d]/50 text-[#94cb3d] hover:bg-[#94cb3d]/10 transition flex items-center gap-2"
          >
            <FileText size={16} /> Download Coral Skyline
          </button>
          <button
            onClick={() => handleBrochureClick("coral-studio", "Coral Studios")}
            className="px-8 py-3 text-sm font-medium border border-[#94cb3d]/50 text-[#94cb3d] hover:bg-[#94cb3d]/10 transition flex items-center gap-2"
          >
            <FileText size={16} /> Download Coral Studios
          </button>
        </div>

        {/* contact cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard icon={<Mail />} text="info@coral-group.in" />
          <ContactCard icon={<Phone />} text="(+91) 780-000-0097" />

          <Link
            href="https://www.google.com/search?q=Coral+Group&sca_esv=242b8d70d06588f5&sxsrf=AE3TifMcbp9fyGlQqmJLorKOJDFn5T_IhA%3A1766751744757&ei=AH5Oad35LfWcseMPpKGroQw&ved=0ahUKEwjd-ZuRn9uRAxV1TmwGHaTQKsQQ4dUDCBE&uact=5&oq=Coral+Group&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0NvcmFsIEdyb3VwMgQQIxgnMgoQIxiABBgnGIoFMgQQIxgnMhAQLhiABBhDGMcBGIoFGK8BMgUQABiABDIKEAAYgAQYQxiKBTILEC4YgAQYxwEYrwEyBRAuGIAEMgoQABiABBgUGIcCMgoQABiABBgUGIcCSKwOUIUEWIsGcAF4AJABAJgBvQGgAdgCqgEDMC4yuAEDyAEA-AEBmAIDoALnAsICCxAAGIAEGLADGKIEwgIIEAAYsAMY7wWYAwCIBgGQBgWSBwMxLjKgB6YjsgcDMC4yuAfkAsIHBTAuMS4yyAcLgAgA&sclient=gws-wiz-serp" target="_blank"
          >
            <ContactCard icon={<MapPin />} text="Varanasi, India" />
          </Link>

        </div>
      </div>

      {/* Brochure Modal */}
      {selectedBrochure && (
        <BrochureModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          brochureType={selectedBrochure.type}
          brochureTitle={selectedBrochure.title}
        />
      )}

      {/* Brochure Viewer Modal */}
      {isBrochureViewerOpen && viewingBrochure && (
        <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={handleCloseViewer}>
          <div className="relative w-full max-w-6xl h-[90vh] bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#94cb3d] to-[#7ab532] px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-black">{viewingBrochure.title} Brochure</h2>
                <p className="text-black/70 text-xs font-medium">Preview</p>
              </div>
              <button onClick={handleCloseViewer} className="p-1.5 hover:bg-black/20 rounded-full transition-colors"><X className="text-black w-5 h-5" /></button>
            </div>
            <div className="h-[calc(90vh-60px)]">
              <iframe
                src={viewingBrochure.url}
                className="w-full h-full"
                title={`${viewingBrochure.title} Brochure`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}

function ContactCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center border border-[#94cb3d]/40 text-[#94cb3d]">
        {icon}
      </div>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
}
