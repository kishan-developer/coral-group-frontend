"use client";

import React, { useState } from "react";
import {
  Award,
  Target,
  Globe,
  Briefcase,
  ArrowRight,
  Linkedin,
  Mail,
  Calendar,
  CheckCircle2,
  Users,
  Quote,
  TrendingUp,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Languages,
  Zap,
  Building2,
  Compass
} from "lucide-react";
import AchievementsAwards from "../components/AchievementsAwards";

const BrandColor = "#94cb3d";

export default function page() {
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(4);

  const milestones = [
    { year: "2012", title: "Regional Lead", desc: "Managed the group's first cross-border advisory project in Southeast Asia." },
    { year: "2017", title: "Director of International", desc: "Architected the expansion strategy for Southeast Asia and Europe." },
    { year: "2023", title: "Global Connectivity Lead", desc: "Established the London Consultancy HQ for international corporate advisory." }
  ];

  const responsibilities = [
    "Global Partnerships: Building diplomatic and business ties with international firms.",
    "Market Strategy: Forecasting and navigating entry into new regional markets.",
    "Bilingual Advisory: Facilitating cross-cultural harmony in business negotiations.",
    "Regulatory Compliance: Ensuring adherence to international industrial standards.",
    "Expansion Governance: Directing regional offices in Europe and Asia.",
    "Strategic Foresight: Mapping international trade trends for the conglomerate."
  ];

  const skills = [
    { name: "Market Entry Strategy", level: "100%" },
    { name: "International Diplomacy", level: "95%" },
    { name: "Cross-Border Logistics", level: "92%" },
    { name: "Multilingual Negotiation", level: "98%" },
  ];

  const events = [
    { date: "Oct 2023", title: "World Economic Forum", location: "Davos", img: "/Office/AMN_4991.jpeg" },
    { date: "May 2024", title: "International Trade Expo", location: "Singapore", img: "/property/SK2.jpg" },
    { date: "Jan 2024", title: "Global Strategy Conclave", location: "London", img: "/Gallery/AMN_4972.jpeg" },
  ];

  const galleryImages = [
    { img: "/Beach/AMN_4957-3.jpeg", title: "Bali Hospitality Hub" },
    { img: "/Office/AMN_4991.jpeg", title: "London HQ Strategy" },
    { img: "/Gallery/AMN_4972.jpeg", title: "Paris Brand Launch" },
    { img: "/property/SK2.jpg", title: "Dubai Trade Center" },
    { img: "/Founders/aisha_ansari.jpg", title: "Global Keynote" },
    { img: "/Beach/AMN_4957-2.jpeg", title: "Regional Visit" },
    { img: "/property/SK1.jpg", title: "International Build" },
    { img: "/Office/AMN_4991.jpeg", title: "Corporate Advisory" },
  ];

  const values = [
    { title: "Inclusive Globalization", desc: "Expanding into new markets must be done with deep respect for local cultures and economic value.", icon: <Globe size={24} /> },
    { title: "Strategic Foresight", desc: "Predicting market shifts is the only way to maintain a competitive edge in global trade.", icon: <Target size={24} /> },
    { title: "Diplomatic Harmony", desc: "Business is built on relationships. Harmony across borders is the bedrock of our global expansion.", icon: <Users size={24} /> },
  ];

  const roadmap = [
    { phase: "2024-2025", goal: "European Hub Integration", desc: "Fully operationalizing the London and Paris offices for broader EU trade access." },
    { phase: "2026-2027", goal: "Multilingual Advisory Launch", desc: "Deploying a AI-driven multilingual support system for all international clients." },
    { phase: "2028-2030", goal: "Cross-Continental Logistics", desc: "Establishing a seamless logistics corridor between India, GCC, and Europe." },
  ];

  const achievementData = {
    metrics: {
      experience: "15+ Years",
      projects: "50+",
      sqft: "4 Regions",
      awardsCount: "12+"
    },
    awards: [
      { title: "Global Strategy Award", organization: "Intl Trade Forum", year: "2020" },
      { title: "Diplomatic Leadership", organization: "Global Business Council", year: "2022" },
      { title: "Cross-Border Excellence", organization: "Chamber of Commerce", year: "2023" }
    ],
    press: [
      { title: "Navigating Global Trade", publication: "International Business Times", date: "Jan 2024" },
      { title: "Multilingual Leadership", publication: "CEO World", date: "Nov 2023" },
      { title: "The Future of Cross-Border Trade", publication: "Economic Times", date: "Sep 2023" }
    ],
    honors: [
      { title: "Global Connectivity Specialist", field: "Intl Relations", year: "2022" },
      { title: "Board Member", field: "Global Trade Alliance", year: "2021" },
      { title: "Strategic Envoy", field: "Economic Diplomacy", year: "2023" }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/Founders/aisha_ansari.jpg"
            className="w-full h-full object-cover object-top opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Aisha Ansari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-[#94cb3d] mb-8"></div>
            <h1 className="text-7xl md:text-9xl font-black mb-4 leading-none tracking-tighter">
              AISHA <br />
              <span className="text-[#94cb3d]">Ansari</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Director of International Strategy
            </p>
            <p className="text-gray-300 text-lg md:text-xl italic font-serif max-w-xl border-l-2 border-[#94cb3d] pl-6">
              "Strategic foresight is the key to navigating global markets and building cross-cultural legacies."
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & ROLES */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-6">Global Governance</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-10 italic uppercase">Architect of Connectivity</h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Aisha Ansari brings a global perspective to her role, effectively navigating diverse markets with her multi-lingual expertise. Her focus is on establishing Coral Group as a cross-cultural industrial power.
              </p>
              <p>
                She facilitates global connectivity and operational harmony, ensuring that Coral Group's standards of excellence are maintained across every international border.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <CheckCircle2 className="text-[#94cb3d] shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-sm font-bold text-gray-300 leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#111] p-10 rounded-[2.5rem] border border-gray-800">
              <h4 className="text-xl font-black mb-8 uppercase tracking-tighter">Strategy Matrix</h4>
              <div className="space-y-8">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-widest text-gray-400">{skill.name}</span>
                      <span className="text-xs font-black text-[#94cb3d]">{skill.level}</span>
                    </div>
                    <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
                      <div className="h-full bg-[#94cb3d]" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & AWARDS SECTION */}
      {/* <AchievementsAwards {...achievementData} /> */}

      {/* 3. EXECUTIVE VALUES SECTION */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Global <span className="text-[#94cb3d]">Philosophy</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-12 bg-[#111] border border-gray-800 rounded-3xl hover:border-[#94cb3d]/40 transition-all">
                <div className="text-[#94cb3d] mb-6">{v.icon}</div>
                <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">{v.title}</h4>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENT SHOWCASE */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 italic uppercase">Global <span className="text-[#94cb3d]">Engagements</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#111]">
              <div className="aspect-video relative overflow-hidden">
                <img src={e.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 rounded-full text-[10px] font-black text-[#94cb3d] uppercase tracking-widest">{e.date}</div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-black uppercase mb-2 tracking-tighter">{e.title}</h4>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold">
                  <MapPin size={14} /> {e.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JOURNEY TIMELINE */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-black mb-20 italic uppercase">International Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>
            <div className="space-y-16">
              {milestones.map((m, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#94cb3d] shadow-[0_0_15px_#94cb3d] z-10"></div>
                  <div className={`w-full md:w-1/2 pl-10 md:px-12 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-[#94cb3d] font-black text-4xl mb-2 block">{m.year}</span>
                    <h5 className="text-xl font-bold mb-2 uppercase">{m.title}</h5>
                    <p className="text-gray-500 text-sm">{m.desc}</p>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHILANTHROPIC LEGACY */}
      <section className="py-32 bg-[#111] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <Compass className="text-[#94cb3d] mb-8" size={48} />
              <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase leading-none">Global <span className="text-[#94cb3d]">Legacy</span></h2>
              <p className="text-2xl text-gray-400 italic mb-10 leading-relaxed">
                "Connecting diverse economies is our way of building a more resilient vertical."
              </p>
              <div className="p-10 border-l border-[#94cb3d] bg-black/20">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Coral Global Foundation</h4>
                <p className="text-gray-500 font-bold text-sm leading-relaxed uppercase tracking-widest">
                  Aisha leads initiatives that provide educational scholarships for students in the group's international operating regions.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
              <img src="/Beach/AMN_4957-3.jpeg" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-[#94cb3d]/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. STRATEGIC ROADMAP 2030 */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-20 text-center italic uppercase">International <span className="text-[#94cb3d]">Roadmap</span> 2030</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {roadmap.map((item, i) => (
            <div key={i} className="relative p-12 bg-[#111] border border-gray-800 rounded-[2.5rem]">
              <span className="text-[5rem] font-black text-white/5 absolute -top-10 left-6 italic">{i + 1}</span>
              <Globe className="text-[#94cb3d] mb-12 relative z-10" size={32} />
              <span className="text-[#94cb3d] font-black text-xs uppercase tracking-[0.4em] mb-4 block leading-none">{item.phase}</span>
              <h4 className="text-2xl font-black uppercase mb-6 tracking-tighter leading-tight italic">{item.goal}</h4>
              <p className="text-gray-500 text-xs font-bold leading-loose uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. GALLERY WITH LOAD MORE */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Global Moments</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.slice(0, visibleGalleryCount).map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-3xl relative group aspect-square">
              <img
                src={item.img}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-[#94cb3d] text-black px-4 py-2 rounded-full font-black text-xs uppercase">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {visibleGalleryCount < galleryImages.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleGalleryCount(prev => prev + 4)}
              className="px-12 py-5 bg-[#94cb3d] text-black font-black uppercase tracking-tighter text-lg rounded-full hover:scale-105 transition-all"
            >
              LOAD MORE MOMENTS
            </button>
          </div>
        )}
      </section>

      {/* 9. CONNECT SECTION */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-[#94cb3d] rounded-[3rem] p-12 md:p-24 text-black flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mt-32"></div>
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
              CONNECT WITH THE DIRECTOR.
            </h2>
            <p className="text-xl font-bold opacity-80 max-w-lg italic font-serif">
              For high-level strategic international inquiries and cross-border partnerships.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:strategy@coralgroup.in"
              className="bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center"
            >
              OFFICE EMAIL <Mail className="ml-3" size={20} />
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex-1 bg-transparent border-2 border-black text-black px-8 py-5 rounded-full font-black text-lg hover:bg-black hover:text-[#94cb3d] transition-all flex items-center justify-center"
              >
                LINKEDIN <Linkedin className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
      `}</style>
    </div>
  );
}
