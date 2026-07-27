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
  Lightbulb,
  Workflow,
  Compass
} from "lucide-react";
import OurProjects from "../../home_2/Component/OurProjects";
import AchievementsAwards from "../components/AchievementsAwards";

const BrandColor = "#94cb3d";

export default function page() {
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(4);

  const milestones = [
    { year: "2010", title: "Director of Ops", desc: "Modernized the internal ERP across all group divisions." },
    { year: "2018", title: "Managing Director", desc: "Took charge of the day-to-day strategic operations of the conglomerate." },
    { year: "2022", title: "Smart City Initiative", desc: "Launched the first AI-integrated residential complex in India." },
  ];

  const responsibilities = [
    "Visionary Leadership: Driving innovation and setting new industry benchmarks.",
    "Real Estate Expertise: Pioneering quality and technology-driven developments.",
    "Sustainable Growth: Committed to environmental responsibility and community development.",
    "Strategic Foresight: Identifying opportunities and keeping Coral Group ahead.",
    "People-Centric Culture: Building a collaborative, creative, and high-performing team.",
    "Philanthropic Commitment: Supporting initiatives that create positive social impact."
  ];

  const skills = [
    { name: "Strategic Vision", level: "100%" },
    { name: "Industry Knowledge", level: "98%" },
    { name: "Leadership Excellence", level: "97%" },
    { name: "Innovation & Sustainability", level: "96%" },
  ];

  const events = [
    { date: "Dec 2023", title: "Smart City Expo", location: "Barcelona", img: "/property/SK2.jpg" },
    { date: "Mar 2024", title: "Industrial IoT Summit", location: "Munich", img: "/Office/AMN_4991.jpeg" },
    { date: "Jun 2023", title: "Coral Tech Lab Opening", location: "Mumbai", img: "/Gallery/AMN_4972.jpeg" },
  ];

  const galleryImages = [
    { img: "/Beach/AMN_4957-2.jpeg", title: "Strategic Operations Review" },
    { img: "/Office/AMN_4991.jpeg", title: "Smart Grid Center" },
    { img: "/Gallery/AMN_4972.jpeg", title: "Vertical Launch" },
    { img: "/property/SK1.jpg", title: "Urban Landmark" },
    { img: "/Founders/anas_sir.jpg", title: "Executive Summit" },
    { img: "/Beach/AMN_4957-3.jpeg", title: "STEM Grant Ceremony" },
    { img: "/property/SK2.jpg", title: "Logistics Automation" },
    { img: "/Office/AMN_4991.jpeg", title: "Design Thinking Lab" },
  ];

  const values = [
    {
      title: "VISION-LED AGILITY",
      desc: "In a constantly evolving industry, Anas Ansari’s ability to pivot with clarity and confidence keeps Coral Group ahead of emerging trends. His agile mindset ensures the company adapts quickly while maintaining uncompromised quality.",
      icon: <Compass size={24} />
    },
    {
      title: "PURPOSE-DRIVEN INNOVATION",
      desc: "For Anas Ansari, technology is not just adoption—it is meaningful transformation. He champions solutions that enhance real lives, integrating smart systems and modern practices that elevate the built environment.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "HUMAN-FIRST DEVELOPMENT",
      desc: "Every project under his leadership is rooted in empathy. From masterplanning to execution, he ensures that community well-being, comfort, and long-term sustainability remain at the heart of Coral Group’s developments.",
      icon: <Users size={24} />
    },
  ];

  const roadmap = [
    {
      phase: "2024-2025",
      goal: "PropTech Disruption",
      desc: "Launching integrated platforms for real-time facility and energy management."
    },
    {
      phase: "2026-2027",
      goal: "Autonomous Industrial Parks",
      desc: "Deploying fully automated energy and waste systems in our manufacturing zones."
    },
    {
      phase: "2028-2030",
      goal: "Net-Zero Urban Growth",
      desc: "Transitioning 100% of our real estate portfolio to self-sustaining green energy."
    },
  ];

  const achievementData = {
    metrics: {
      experience: "18+ Years",
      projects: "45+",
      sqft: "5.5M+",
      awardsCount: "12+"
    },
    awards: [
      { title: "Young Leader 40u40", organization: "Business World", year: "2019" },
      { title: "Excellence in Op-Tech", organization: "Industrial Summit", year: "2022" },
      { title: "PropTech Innovator", organization: "Realty Excellence", year: "2023" }
    ],
    press: [
      { title: "The Future of Smart Cities", publication: "Business World", date: "Jan 2024" },
      { title: "Industrial AI Pioneers", publication: "Tech Review", date: "Nov 2023" },
      { title: "Digital Transformation in Real Estate", publication: "Forbes India", date: "Sep 2023" }
    ],
    honors: [
      { title: "Smart City Pioneer", field: "Urban Tech", year: "2023" },
      { title: "AI Ethics Board", field: "Industrial AI", year: "2022" },
      { title: "Strategic Agility Honor", field: "Leadership", year: "2021" }
    ]
  };

  return (
    <div className="bg-[#1e1e1e] relative text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/Founders/anas_sir.jpg"
            className="w-full h-full object-cover object-top transition-all duration-1000"
            alt="Anas Ansari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-[#94cb3d] mb-8"></div>
            <h1 className="text-7xl md:text-9xl font-black mb-4 leading-none tracking-tighter">
              ANAS <br />
              <span className="text-[#94cb3d]">Ansari</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Managing Director
            </p>
            <p className="text-gray-300 text-lg md:text-xl italic font-serif max-w-xl border-l-2 border-[#94cb3d] pl-6">
              "Innovation is the bridge between a dream and reality, and we are the architects of that bridge."
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & ROLES */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-6">MANAGING DIRECTOR & FOUNDER</h2>
            <h3 className="text-2xl md:text-3xl font-black mb-10 italic uppercase">Mr. ANAS ANSARI – MANAGING DIRECTOR & FOUNDER, CORAL GROUP</h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Anas Ansari, the visionary behind Coral Group, has earned a reputation as a dynamic leader committed to innovation and excellence. His entrepreneurial spirit and strategic foresight have been pivotal in shaping Coral Group’s success story.
              </p>
              <p>
                Under his leadership, Coral Group has become known for its forward-thinking approach, particularly in the real estate sector, where quality and advanced technology are at the forefront. His clear direction has positioned the company as a respected name in the industry, consistently setting new benchmarks.
              </p>
              <p>
                Anas Ansari’s leadership is defined by a collaborative and creative work environment. He excels at recognizing market opportunities, which keeps Coral Group ahead of the curve. His dedication to sustainability and community development ensures that the company’s growth aligns with broader social and environmental goals.
              </p>
              <p>
                Beyond his professional achievements, Anas Ansari is deeply involved in philanthropic work, supporting a range of charitable initiatives that uplift communities. His contributions continue to make a meaningful impact, reflecting his commitment to not just building businesses but also building a better society.
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
              <h4 className="text-xl font-black mb-8 uppercase tracking-tighter">Vertical Mastery</h4>
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
            <div className="bg-[#94cb3d] p-10 rounded-[2.5rem] text-black">
              <Award size={40} className="mb-6" />
              <h4 className="text-2xl font-black mb-4 uppercase leading-none">
                Smart City <br /> Pioneer 2023
              </h4>
              <p className="text-sm font-bold opacity-70 italic">
                Awarded by the Urban Excellence Initiative.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ACHIEVEMENTS & AWARDS SECTION */}
      {/* <AchievementsAwards {...achievementData} /> */}

      {/* 3. EXECUTIVE VALUES SECTION */}
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Strategic <span className="text-[#94cb3d]">Ethos</span></h2>
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

      <OurProjects />

      {/* 4. EVENT SHOWCASE */}
      {/* <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 italic uppercase">Visionary Urban <span className="text-[#94cb3d]">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#111]">
              <div className="aspect-video relative overflow-hidden">
                <img src={e.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 rounded-full text-[10px] font-black text-[#94cb3d] uppercase tracking-widest">{e.date}</div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-black uppercase mb-2 tracking-tighter">{e.title}..</h4>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold">
                  <MapPin size={14} /> {e.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* 5. JOURNEY TIMELINE */}
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-black mb-20 italic uppercase">Professional Journey</h2>
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
              <Heart className="text-[#94cb3d] mb-8" size={48} />
              <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase leading-none">Empowering <span className="text-[#94cb3d]">Minds</span></h2>
              <p className="text-2xl text-gray-400 italic mb-10 leading-relaxed">
                "True leadership is not just about building structures,
                but about shaping the people who will define tomorrow."
              </p>
              <div className="p-10 border-l border-[#94cb3d] bg-black/20">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Coral STEM Scholarship</h4>
                <p className="text-gray-500 font-bold text-sm leading-relaxed uppercase tracking-widest">
                  Supporting over 1000 engineering and architecture students annually with full-tuition grants and direct corporate mentorship.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <img
                src="/property/SK2.jpg"
                className="object-cover w-full h-full transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#94cb3d]/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. STRATEGIC ROADMAP 2030 */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-20 text-center italic uppercase">Operational <span className="text-[#94cb3d]">Blueprint</span> 2030</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {roadmap.map((item, i) => (
            <div key={i} className="relative p-12 bg-[#111] border border-gray-800 rounded-[2.5rem]">
              <span className="text-[5rem] font-black text-white/5 absolute -top-10 left-6 italic">{i + 1}</span>
              <Lightbulb className="text-[#94cb3d] mb-12 relative z-10" size={32} />
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
              CONNECT WITH THE MD.
            </h2>
            <p className="text-xl font-bold opacity-80 max-w-lg italic font-serif">
              For high-level industrial partnerships and operational collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:md@coralgroup.in"
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
