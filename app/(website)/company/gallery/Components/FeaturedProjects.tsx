"use client";
import React, { useState } from "react";
import { MapPin, ArrowRight, X, Loader2, CheckCircle, User, Mail, Phone } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";

function ProjectEnquiryModal({ project, onClose }: { project: { title: string; location: string }; onClose: () => void }) {
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
        body: JSON.stringify({ ...form, propertyInterest: project.title, source: "Featured Projects" }),
      });
      const data = await res.json();
      if (res.ok && data.success) { setStatus("success"); }
      else { setStatus("error"); setError(data.message || "Submission failed."); }
    } catch { setStatus("error"); setError("Network error. Please try again."); }
  };

  const inp = "w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600";

  return (
    <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-md bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-gradient-to-r from-[#94cb3d] to-[#7ab532] px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-black">Enquire About Project</h2>
            <p className="text-black/70 text-xs font-medium">{project.title} · {project.location}</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-black/20 rounded-full transition-colors"><X className="text-black w-5 h-5" /></button>
        </div>
        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#94cb3d]/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="text-[#94cb3d] w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Enquiry Submitted!</h3>
              <p className="text-gray-400 text-sm mb-6">Our team will contact you shortly. A confirmation has been sent to your email.</p>
              <button onClick={onClose} className="bg-[#94cb3d] text-black px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#7ab532] transition-all">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">{error}</div>}
              <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="text" required placeholder="Full Name *" value={form.clientName} onChange={e => setForm({ ...form, clientName: e.target.value })} className={`${inp} pl-10`} /></div>
              <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="email" required placeholder="Email Address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={`${inp} pl-10`} /></div>
              <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="tel" required placeholder="Phone Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={`${inp} pl-10`} /></div>
              <textarea rows={3} placeholder="Your message or requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inp} resize-none`} />
              <button type="submit" disabled={status === "submitting"} className="w-full bg-[#94cb3d] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#7ab532] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {status === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<{ title: string; location: string } | null>(null);

  const featured = [
    {
      id: 1,
      title: "Skyline Heights",
      location: "Lucknow, Uttar Pradesh",
      description:
        "A premium high-rise residential project offering luxurious 3 & 4 BHK apartments with world-class amenities.",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Coral Business Park",
      location: "Varanasi, Uttar Pradesh",
      description:
        "A modern commercial hub designed for offices, showrooms, and retail shops in a prime location.",
      image:
        "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Green Valley Villas",
      location: "Prayagraj, Uttar Pradesh",
      description:
        "Luxury villas surrounded by nature, offering privacy, comfort, and an eco-friendly lifestyle.",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <p className="text-[#94cb3d] text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
              Explore our highlighted real estate developments offering premium design, comfort, and investment opportunities.
            </p>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <div
                key={project.id}
                className="bg-[#151515] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#94cb3d]/50 transition-all duration-300 group"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">{project.title}</h3>
                  <div className="flex items-center text-gray-500 mt-2 mb-3">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#94cb3d]" />
                    <span className="text-xs">{project.location}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject({ title: project.title, location: project.location })}
                    className="flex items-center gap-2 text-[#94cb3d] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {selectedProject && (
        <ProjectEnquiryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
