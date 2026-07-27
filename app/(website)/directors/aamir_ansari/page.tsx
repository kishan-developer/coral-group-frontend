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
  Cpu,
  Zap,
  Building2,
  Heart,
  Infinity,
  ShieldCheck,
  Plane
} from "lucide-react";
import AchievementsAwards from "../components/AchievementsAwards";

const BrandColor = "#94cb3d";

export default function page() {
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(4);

  const milestones = [
    { year: "2016", title: "Tech Strategy Lead", desc: "Implemented the group's first blockchain-based supply chain tracker." },
    { year: "2021", title: "Director of Innovation", desc: "Leading the R&D division for automated manufacturing and global fintech." }
  ];

  const responsibilities = [
    "Digital Infrastructure: Managing the group's cloud systems and cybersecurity.",
    "Fintech Integration: Overseeing international trade finance automation.",
    "R&D Leadership: Directing innovation labs for sustainable logistics.",
    "Global Tech Partnerships: Negotiating with top-tier Silicon Valley firms.",
    "Data Strategy: Implementing AI-driven predictive market modeling.",
    "Next-Gen Mobility: Researching electric drone corridors for cargo."
  ];

  const skills = [
    { name: "Automation & AI", level: "100%" },
    { name: "Fintech Architecture", level: "95%" },
    { name: "Global Tech Scaling", level: "90%" },
    { name: "Cybersecurity Governance", level: "98%" },
  ];

  const events = [
    { date: "Oct 2023", title: "Global AI Summit", location: "Dubai", img: "/property/SK1.jpg" },
    { date: "May 2024", title: "Future of Logistics", location: "London", img: "/Office/AMN_4991.jpeg" },
    { date: "Jan 2024", title: "Fintech Innovation Forum", location: "New York", img: "/Gallery/AMN_4972.jpeg" },
  ];

  const galleryImages = [
    { img: "/Beach/AMN_4957-2.jpeg", title: "Tech Strategy Meet" },
    { img: "/Office/AMN_4991.jpeg", title: "Innovation Lab" },
    { img: "/Gallery/AMN_4972.jpeg", title: "Emporio Launch" },
    { img: "/property/SK1.jpg", title: "Smart Build" },
    { img: "/Founders/aamir_sir.jpg", title: "Keynote Address" },
    { img: "/Beach/AMN_4957-3.jpeg", title: "Board Retreat" },
    { img: "/property/SK2.jpg", title: "Logistics Hub" },
    { img: "/Office/AMN_4991.jpeg", title: "Cybersecurity Unit" },
  ];

  const values = [
    { title: "Radical Transparency", desc: "Data should flow freely through the organization to empower decision-making.", icon: <ShieldCheck size={24} /> },
    { title: "Innovation First", desc: "Never settle for current efficiency; always look for the ultimate lever of progress.", icon: <Zap size={24} /> },
    { title: "Data-Driven Intuition", desc: "Hard data backs our decisions, but human market sentiment guides our timing.", icon: <TrendingUp size={24} /> },
  ];

  const roadmap = [
    { phase: "2024-2025", goal: "Quantum Logistics Integration", desc: "Deploying quantum computing for real-time supply chain optimization." },
    { phase: "2026-2027", goal: "Global Fintech Expansion", desc: "Launching automated trade finance platforms in 15 new countries." },
    { phase: "2028-2030", goal: "Autonomous Distribution", desc: "Achieving 80% autonomous cargo handling across all global ports." },
  ];

  const achievementData = {
    metrics: {
      experience: "10+ Years",
      projects: "30+",
      sqft: "3M+",
      awardsCount: "10+"
    },
    awards: [
      { title: "Young Tech Innovator", organization: "London Tech Week", year: "2022" },
      { title: "Digital Disruption Award", organization: "NASSCOM", year: "2023" },
      { title: "Supply Chain Excellence", organization: "Global Trade Forum", year: "2021" }
    ],
    press: [
      { title: "The High-Tech Future of Logistics", publication: "London Tech Review", date: "July 2022" },
      { title: "Integrating AI in Heavy Industry", publication: "Financial Times", date: "Jan 2023" },
      { title: "Data-First Conglomerates", publication: "Bloomberg", date: "Mar 2023" }
    ],
    honors: [
      { title: "AI Ethics Board Member", field: "Industrial AI", year: "2023" },
      { title: "BA Honours (Distinction)", field: "Coventry London", year: "2016" },
      { title: "Future Leader in Fintech", field: "Finance", year: "2022" }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/Founders/aamir_sir.jpg"
            className="w-full h-full object-cover object-top opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Aamir Ansari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-[#94cb3d] mb-8"></div>
            <h1 className="text-7xl md:text-9xl font-black mb-4 leading-none tracking-tighter">
              AAMIR <br />
              <span className="text-[#94cb3d]">Ansari</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Director of Innovation
            </p>
            <p className="text-gray-300 text-lg md:text-xl italic font-serif max-w-xl border-l-2 border-[#94cb3d] pl-6">
              "Technology is the ultimate lever for global progress and human empowerment."
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & ROLES */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-6">Execution & Oversight</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-10 italic uppercase">Architect of Autonomy</h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                With a BA Honours from Coventry London, Aamir Ansari brings an innovative mindset focused on technological advancement. He specializes in integrating cutting-edge technology and data-driven strategy into the group's core operations.
              </p>
              <p>
                Aamir leads the R&D division for automated manufacturing and global fintech, positioning Coral Group as a tech-first conglomerate in the global marketplace.
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
              <h4 className="text-xl font-black mb-8 uppercase tracking-tighter">Technology Stack</h4>
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

      {/* NEW: 3. EXECUTIVE VALUES SECTION */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Leadership <span className="text-[#94cb3d]">Philosophy</span></h2>
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

      {/* NEW: 4. EVENT SHOWCASE */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 italic uppercase">Executive <span className="text-[#94cb3d]">Engagements</span></h2>
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
          <h2 className="text-center text-4xl font-black mb-20 italic uppercase">Technological Journey</h2>
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

      {/* NEW: 6. PHILANTHropic LEGACY */}
      <section className="py-32 bg-[#111] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <Heart className="text-[#94cb3d] mb-8" size={48} />
              <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase leading-none">Coral <span className="text-[#94cb3d]">Impact</span></h2>
              <p className="text-2xl text-gray-400 italic mb-10 leading-relaxed">
                "Giving back is not an afterthought; it's a core metric of our success."
              </p>
              <div className="p-10 border-l border-[#94cb3d] bg-black/20">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Coding the Future</h4>
                <p className="text-gray-500 font-bold text-sm leading-relaxed uppercase tracking-widest">
                  Aamir mentors over 500 young tech enthusiasts annually through the Coral Coding Initiative, bridging the digital divide in rural sectors.
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

      {/* NEW: 7. STRATEGIC ROADMAP 2030 */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-20 text-center italic uppercase">Global <span className="text-[#94cb3d]">Roadmap</span> 2030</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {roadmap.map((item, i) => (
            <div key={i} className="relative p-12 bg-[#111] border border-gray-800 rounded-[2.5rem]">
              <span className="text-[5rem] font-black text-white/5 absolute -top-10 left-6 italic">{i + 1}</span>
              <Plane className="text-[#94cb3d] mb-12 relative z-10" size={32} />
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
        <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Moments & Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000">
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
              For high-level strategic technology inquiries and fintech partnerships.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:tech@coralgroup.in"
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
