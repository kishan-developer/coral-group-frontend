"use client";

import { useState } from "react";
import { X, Mail, Phone, User, Download, Loader2, CheckCircle } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureType: string;
  brochureTitle: string;
  onAccessSuccess?: () => void;
}

export default function BrochureModal({ isOpen, onClose, brochureType, brochureTitle, onAccessSuccess }: BrochureModalProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    budget: "",
    projectType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";
      const response = await fetch(`${API_BASE_URL}/brochure/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          brochureType,
          brochureTitle,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        if (brochureType === "brochure-access" && onAccessSuccess) {
          setTimeout(() => {
            onAccessSuccess();
            onClose();
          }, 1500);
        }
      } else {
        setFormStatus("error");
        setErrorMessage(data.message || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleDownload = () => {
    // Open the PDF in new tab based on brochureType
    // Use Google Drive direct download URLs
    const pdfUrls: Record<string, string> = {
      "coral-skyline": "https://drive.google.com/uc?export=download&id=1IVD8q__Io08TimlRurNrIQgsMhhsEOCJ",
      "coral-studio": "https://drive.google.com/uc?export=download&id=1gz_gOW2VrNpEwvyMUqUuXtmJyGCZB34R",
      "coral-garden": "https://drive.google.com/uc?export=download&id=1IVD8q__Io08TimlRurNrIQgsMhhsEOCJ",
    };

    const pdfUrl = pdfUrls[brochureType];
    if (pdfUrl) {
      console.log('Downloading brochure from:', pdfUrl);
      window.open(pdfUrl, '_blank');
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full mt-20 max-w-md bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-gradient-to-r from-[#94cb3d] to-[#7ab532] px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-black">Download Brochure</h2>
            <p className="text-black/70 text-xs font-medium">{brochureTitle}</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-black/20 rounded-full transition-colors"><X className="text-black w-5 h-5" /></button>
        </div>
        <div className="p-6">
          {formStatus === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#94cb3d]/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="text-[#94cb3d] w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
              <p className="text-gray-400 text-sm mb-6">A confirmation has been sent to your email. You can now download the brochure.</p>
              <button onClick={handleDownload} className="w-full bg-[#94cb3d] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#7ab532] transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formStatus === "error" && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">{errorMessage}</div>}
              <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="text" required placeholder="Full Name *" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-10 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" /></div>
              <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="email" required placeholder="Email Address *" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-10 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" /></div>
              <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" /><input type="tel" required placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-10 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" /></div>
              <div className="relative"><input type="text" required placeholder="Address *" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" /></div>
              <div className="grid grid-cols-2 gap-3">
                <select required value={formData.projectType} onChange={e => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#94cb3d] outline-none transition-all">
                  <option value="">Project Type *</option>
                  <option value="2bhk">2BHK</option>
                  <option value="3bhk">3BHK</option>
                  <option value="4bhk">4BHK</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
                <select value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#94cb3d] outline-none transition-all">
                  <option value="">Budget</option>
                  <option value="10-30 lakhs">₹10-30L</option>
                  <option value="30-50 lakhs">₹30-50L</option>
                  <option value="50-1 crore">₹50L-1Cr</option>
                  <option value="1-3 crores">₹1-3Cr</option>
                  <option value="3+ crores">₹3+Cr</option>
                </select>
              </div>
              <button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#94cb3d] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#7ab532] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {formStatus === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit & Download"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
