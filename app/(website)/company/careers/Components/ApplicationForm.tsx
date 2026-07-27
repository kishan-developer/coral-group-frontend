"use client";
import React, { useState } from "react";
import { Send, Loader2, CheckCircle, User, Mail, Phone, Briefcase, FileText } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";

export default function ApplicationForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch(`${API_BASE_URL}/careers/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
        setErrorMessage(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  const inputClass = "w-full bg-black border border-gray-800 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600";
  const labelClass = "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block";

  return (
    <section className="w-full bg-[#0f0f0f] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#94cb3d] text-xs font-bold uppercase tracking-[0.3em] mb-3">Join Our Team</p>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-3">Submit Your Application</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">Fill out the form below and our HR team will review your application within 3–5 business days.</p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-[2rem] p-8 md:p-12">
          {formStatus === "success" ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-[#94cb3d]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-[#94cb3d] w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-3">Application Submitted!</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">Thank you for applying. We've sent a confirmation to your email. Our HR team will be in touch within 3–5 business days.</p>
              <button
                onClick={() => { setFormStatus("idle"); setFormData({ fullName: "", email: "", phone: "", position: "", experience: "", coverLetter: "" }); }}
                className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formStatus === "error" && (
                <div className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl text-center">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className={labelClass}>Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Your full name" className={`${inputClass} pl-11`} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className={`${inputClass} pl-11`} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={`${inputClass} pl-11`} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Position Applied For</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                  <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="e.g. Sales Executive" className={`${inputClass} pl-11`} />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Years of Experience</label>
                <select name="experience" value={formData.experience} onChange={handleChange} className={inputClass}>
                  <option value="">Select experience</option>
                  <option value="Fresher (0 years)">Fresher (0 years)</option>
                  <option value="1–2 years">1–2 years</option>
                  <option value="3–5 years">3–5 years</option>
                  <option value="5–10 years">5–10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Cover Letter (Optional)</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 text-gray-600 w-4 h-4" />
                  <textarea name="coverLetter" rows={4} value={formData.coverLetter} onChange={handleChange} placeholder="Tell us why you'd be a great fit..." className={`${inputClass} pl-11 resize-none`} />
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#94cb3d] text-black py-4 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-[#7ab532] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {formStatus === "submitting" ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Submit Application</>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
