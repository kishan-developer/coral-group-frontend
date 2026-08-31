"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, MapPin, X, User, Mail, Phone, MessageSquare, Loader2, CheckCircle, ArrowLeft } from "lucide-react";

import FAQ from "../Components/Shared/FAQ";
import LogoSlider from "../Components/Shared/LogoSlider";
import HeroSlider from "../Components/Shared/HeroSlider";

import { } from "../ThemeToggle";

import AboutCoralGroupSection from "./home_2/Component/AboutCoralGroupSection";
import FeaturedProjects from "./home_2/Component/FeaturedProjects";
import BusinessVerticals from "./home_2/Component/BusinessVerticals";
import LegacySection from "./home_2/Component/LegacySection";
import ContactSection from "./home_2/Component/ContactSection";
import MainBoardOfDirector from "./home_2/Component/MainBoardOfDirector";
import { useEffect, useState, useCallback } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  image: string;
  project_url: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Coral Skyline",
    category: "Luxury Living Made Affordable",
    type: "2,3 BHK FLATS AND 4 BHK SKY VILLAS",
    location: "SITE OFFICE: Arazi No. 3113 Opp. Toyota Showroom Rohaniya, Mohansarai Varanasi, U.P 221002, India",
    image: "/slider/coral_skyline.jpeg",
    project_url: "/company/projects/coral-skyline/"

  },
  {
    id: "02",
    title: "Coral Studios",
    category: "First time ever in Varanasi",
    type: "FULLY FURNISHED* STUDIOS APARTMENTS",
    location: "Site Office - Arazi No. 194,195,196 Mauza Dhanesari, Harahua Varanasi, U.P. 221010, India",
    image: "/slider/coral_studio.jpeg",
    project_url: "/company/projects/coral-studios/"
  },

];


const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Home() {
  const [quaryModle, setQuaryModle] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({ clientName: "", email: "", phone: "", message: "" });

  const handleEnquire = (project: Project) => setSelectedProject(project);

  const handleFormSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProject) return;
    setFormStatus("submitting");
    setFormError("");
    try {
      const res = await fetch(`${API_BASE_URL}/queries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, propertyInterest: selectedProject.title, source: "Home Page" }),
      });
      const data = await res.json();
      if (res.ok && data.success) { setFormStatus("success"); }
      else { setFormStatus("error"); setFormError(data.message || "Submission failed."); }
    } catch { setFormStatus("error"); setFormError("Network error. Please try again."); }
  }, [selectedProject, formData]);

  const resetAndClose = () => {
    setQuaryModle(false);
    setSelectedProject(null);
    setFormStatus("idle");
    setFormData({ clientName: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuaryModle(true)
    }, 1000); // Show the query model after 1 second

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
    // setQuaryModle(true)
  }, [])

  return (
    <div className="flex flex-col items-center bg-[#1e1e1e] justify-center font-sans">


      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="sticky top-0 z-20 w-full">
        <HeroSlider />
      </div>

      <div className="bg-transparent h-[10vh] w-full"></div>

      <div className="z-20 w-full lg:h-fit">
        <LogoSlider />
      </div>

      {/* <Director_Section /> */}
      <div className="z-20  w-full bg-[#1e1e1e] flex items-center justify-center">
        <AboutCoralGroupSection />
      </div>

      <div className=" z-20 w-full  flex items-center justify-center ">
        <FeaturedProjects />
      </div>

      <div className="z-20 w-full  flex items-center justify-center ">

        <MainBoardOfDirector />
      </div>


      <div className="z-30 w-full bg-[#1e1e1e] flex items-center justify-center ">
        <BusinessVerticals />
      </div>

      <div className=" z-20 w-full  bg-[#1e1e1e] pt-20 flex items-center justify-center ">
        <LegacySection />
      </div>

      <FAQ />

      <div className=" z-30 w-full  bg-[#1e1e1e] flex items-center justify-center ">
        <ContactSection />
      </div>

      {
        quaryModle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={resetAndClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#94cb3d] to-[#5a8a1a] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedProject && (
                    <button onClick={() => { setSelectedProject(null); setFormStatus("idle"); setFormData({ clientName: "", email: "", phone: "", message: "" }); }} className="p-1.5 hover:bg-black/20 rounded-full transition-colors">
                      <ArrowLeft className="text-black w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h2 className="text-xl font-black text-black uppercase tracking-tight">
                      {selectedProject ? `Enquire: ${selectedProject.title}` : "Featured Projects"}
                    </h2>
                    <p className="text-black/70 text-xs font-medium">
                      {selectedProject ? selectedProject.location : "Explore our premium properties"}
                    </p>
                  </div>
                </div>
                <button onClick={resetAndClose} className="p-2 hover:bg-black/20 rounded-full transition-colors">
                  <X className="text-black w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-72px)]">

                {/* PROJECT CARDS VIEW */}
                {!selectedProject && (
                  <div className="p-6">
                    <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {projects.map((project) => (
                        <motion.div
                          key={project.id}
                          variants={card}
                          whileHover={{ scale: 1.01 }}
                          className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-[#94cb3d]/40 transition-all duration-300"
                        >
                          <div className="relative h-[200px] w-full overflow-hidden">
                            <img onClick={() => window.location.href = project.project_url} src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-95" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <span className="absolute top-4 right-4 text-5xl font-serif text-white/10 font-bold">{project.id}</span>
                            <span className="absolute bottom-4 left-4 bg-[#94cb3d] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">{project.category}</span>
                          </div>
                          <div className="p-5">
                            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">{project.title}</h3>
                            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{project.type}</p>
                            <div className="flex items-center gap-2 text-gray-500 mb-5">
                              <MapPin size={16} className="text-[#94cb3d]" />
                              <span className="text-xs">{project.location}</span>
                            </div>


                            <div className="flex gap-4">
                              <button
                                onClick={() => handleEnquire(project)}
                                className="inline-flex items-center gap-2 bg-[#94cb3d] hover:bg-[#7ab532] text-black px-5 py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-widest"
                              >
                                Get In Touch <ArrowUpRight size={14} />
                              </button>

                              <button
                                onClick={() => window.location.href = project.project_url}
                                className="inline-flex items-center gap-2 bg-[#94cb3d] hover:bg-[#7ab532] text-black px-5 py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-widest"
                              >
                                Explore Now <ArrowUpRight size={14} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="mt-6 pt-5 border-t border-white/5 text-center">
                      <button onClick={resetAndClose} className="text-gray-600 hover:text-gray-300 text-xs font-medium uppercase tracking-widest transition-colors">
                        Continue browsing website
                      </button>
                    </div>
                  </div>
                )}

                {/* ENQUIRY FORM VIEW */}
                {selectedProject && (
                  <div className="p-6 md:p-8">
                    {formStatus === "success" ? (
                      <div className="text-center py-10">
                        <div className="w-20 h-20 bg-[#94cb3d]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                          <CheckCircle className="text-[#94cb3d] w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase mb-3">Enquiry Submitted!</h3>
                        <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8">Our executive will contact you shortly. A confirmation has been sent to your email.</p>
                        <button onClick={resetAndClose} className="bg-[#94cb3d] text-black px-10 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#7ab532] transition-all">Close</button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4 max-w-lg mx-auto">
                        <p className="text-gray-500 text-sm mb-6 text-center">Fill in your details and our team will get back to you within 24 hours.</p>
                        {formStatus === "error" && (
                          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl text-center">{formError}</div>
                        )}
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                          <input type="text" required placeholder="Full Name *" value={formData.clientName} onChange={e => setFormData({ ...formData, clientName: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-11 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                          <input type="email" required placeholder="Email Address *" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-11 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                          <input type="tel" required placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-11 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600" />
                        </div>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 text-gray-600 w-4 h-4" />
                          <textarea rows={3} placeholder="Your message or requirements..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pl-11 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600 resize-none" />
                        </div>
                        <button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#94cb3d] text-black py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#7ab532] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                          {formStatus === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit Enquiry"}
                        </button>
                      </form>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )
      }

    </div>
  );
}
