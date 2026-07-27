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
  Heart,
  ShieldCheck,
  Building2,
  Scale,
  Compass,
  Instagram,
  Facebook
} from "lucide-react";
import AchievementsAwards from "../components/AchievementsAwards";
import BusinessVerticals from "../../home_2/Component/BusinessVerticals";
import FeaturedProjects from "../../home_2/Component/FeaturedProjects";
import Link from "next/link";

const BrandColor = "#94cb3d";

export default function page() {
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(4);

  const milestones = [
    { year: "1990", title: "Inception", desc: "Founded the first coral textile unit with a vision for global scale." },
    { year: "2005", title: "Industrial Pivot", desc: "Diversification into heavy infrastructure and real estate development." },
    { year: "2015", title: "Global Presence", desc: "Established international hubs in Dubai and London." },
    { year: "2024", title: "Legacy Phase", desc: "Focusing on sustainable governance and philanthropic scaling." },
  ];

  const responsibilities = [
    "Global Strategy: Directing the group's entry into high-growth international markets.",
    "Corporate Governance: Maintaining the ethical and legal frameworks of all verticals.",
    "Philanthropic Oversight: Leading the Coral Foundation's social impact projects.",
    "Capital Allocation: Strategic oversight of multibillion-dollar global portfolios.",
    "Diplomatic Relations: Cultivating ties with international firms and government bodies.",
    "Executive Mentorship: Ensuring the leadership pipeline remains robust and visionary."
  ];

  const skills = [
    { name: "Global Governance", level: "100%" },
    { name: "Strategic Expansion", level: "100%" },
    { name: "Public Diplomacy", level: "95%" },
    { name: "Capital Management", level: "98%" },
  ];

  const events = [
    { date: "Nov 2023", title: "G20 Infrastructure Summit", location: "New Delhi", img: "/Gallery/AMN_4972.jpeg" },
    { date: "Feb 2024", title: "World Economic Forum", location: "Davos", img: "/property/SK2.jpg" },
    { date: "Sep 2023", title: "Coral Group 30 Year Legacy", location: "Global", img: "/Office/AMN_4991.jpeg" },
  ];

  const galleryImages = [
    { img: "/Beach/AMN_4957-2.jpeg", title: "Global Leadership Meet" },
    { img: "/Office/AMN_4991.jpeg", title: "Headquarters Inauguration" },
    { img: "/Gallery/AMN_4972.jpeg", title: "Cultural Heritage Project" },
    { img: "/property/SK1.jpg", title: "Skyline Milestone" },
    { img: "/Founders/khalid_sir.jpg", title: "Chairman Address" },
    { img: "/Beach/AMN_4957-3.jpeg", title: "Philanthropy Gala" },
    { img: "/property/SK2.jpg", title: "Industrial Park Launch" },
    { img: "/Office/AMN_4991.jpeg", title: "Governance Council" },
  ];

  const awards = [
    {
      title: "Industrialist of the Year",
      organization: "Global Business Federation",
      year: "2018",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783826278/Screenshot_2026-07-12_at_8.43.38_AM_jattwy.png"
    },
    {
      title: "Lifetime Achievement",
      organization: "Urban Development Council",
      year: "2022",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783826275/Screenshot_2026-07-12_at_8.44.19_AM_qfgxld.png"
    },
    {
      title: "Global Legacy Award",
      organization: "Business Leadership Forum",
      year: "2023",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783825486/WhatsApp_Image_2025-06-09_at_4.02.23_PM_chrwsb.jpg"
    },
    {
      title: "Urban Legacy Award",
      organization: "Infrastructure Excellence",
      year: "2023",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783826279/Screenshot_2026-07-12_at_8.42.37_AM_g16vrp.png"
    },
    {
      title: "Car rally",
      organization: "Industrial Management",
      year: "2021",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783827247/Screenshot_2026-04-07_105411_a9axc7.png"
    },
    {
      title: "Dallims",
      organization: "Philanthropy Council",
      year: "2022",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783827301/ROS_9406_jjfkml.jpg"
    },
    {
      title: "MSME Award",
      organization: "Small Business Association",
      year: "2022",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783827810/MSME_edit_glscxc.jpg"
    },
    {
      title: "Dainik jagran",
      organization: "Dainik jagran",
      year: "2022",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783827950/WhatsApp_Image_2025-11-15_at_3.04.57_PM_dgahg5.jpg"
    }
  ];

  const roadmap = [
    { phase: "2024-2025", goal: "Public-Private Integration", desc: "Strengthening ties with global governments for infrastructure development." },
    { phase: "2026-2028", goal: "Global Supply Chain Autonomy", desc: "Investing in next-gen logistics to ensure group-wide self-sufficiency." },
    { phase: "2029-2030", goal: "Legacy Philanthropy Scaling", desc: "Reaching 1 Million beneficiaries through Coral Foundation initiatives." },
  ];

  const achievementData = {
    metrics: {
      experience: "30+ Years",
      projects: "150+",
      sqft: "12M+",
      awardsCount: "25+"
    },
    awards: [
      { title: "Industrialist of the Year", organization: "Global Business Federation", year: "2018" },
      { title: "Lifetime Achievement", organization: "Urban Development Council", year: "2022" },
      { title: "Global Legacy Award", organization: "Business Leadership Forum", year: "2023" }
    ],
    press: [
      { title: "The Architect of a Conglomerate", publication: "Forbes Middle East", date: "Mar 2023" },
      { title: "30 Years of Coral Group", publication: "Economic Times", date: "Sep 2023" },
      { title: "Global Infrastructure Trends", publication: "Wall Street Journal", date: "Oct 2022" }
    ],
    honors: [
      { title: "Urban Legacy Award", field: "Infrastructure", year: "2023" },
      { title: "Honorary Fellowship", field: "Industrial Management", year: "2021" },
      { title: "Global Citizen Honor", field: "Philanthropy", year: "2022" }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783826278/Screenshot_2026-07-12_at_8.43.38_AM_jattwy.png"
            className="w-full h-full object-cover transition-all duration-1000"
            alt="Khalid Ansari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">

            <div className="w-16 h-1 bg-[#94cb3d] mb-8"></div>

            <h1 className="text-7xl md:text-9xl font-black mb-4 leading-none tracking-tighter">
              KHALID <br />
              <span className="text-[#94cb3d]">Ansari</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Chairman & Founder
            </p>

            <p className="text-gray-300 text-lg md:text-xl italic font-serif max-w-xl border-l-2 border-[#94cb3d] pl-6">
              "Foundation for a global legacy is built on integrity and a vision that spans generations."
            </p>

            <div className="flex gap-10 mt-10 z-40">
              <Link href="https://www.instagram.com/khalidansariunplugged/" target="_blank">
                <Instagram size={50} />
              </Link>

              <Link href="https://www.facebook.com/khalidunplugged" target="_blank" >
                <Facebook size={50} />
              </Link>

              

            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT & ROLES */}
      <section className="py-32 relative px-6 flex items-center justify-center bg-[#1e1e1e]">
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="grid grid-cols-1 max-w-7xl lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-6">Foundational Leadership</h2>
            <h3 className="text-2xl md:text-3xl font-black mb-10 italic uppercase">Mr. Khalid Ansari Founder & Managing Director, Coral Group </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Khalid Ansari, the visionary Founder and Managing Director of Coral Group, is widely recognized for
                his strategic insight and entrepreneurial leadership. With a commitment to innovation and a drive
                for excellence, he has been the cornerstone of Coral Group's transformation from a humble
                beginning into a globally diversified industrial conglomerate.
              </p>

              <p>
                His leadership has been marked by astute business acumen, guiding the company through complex
                markets and spearheading its growth across a variety of sectors. Khalid Ansari’s ability to anticipate
                industry trends and seize opportunities has been instrumental in the Coral Group’s continued
                success and expansion.
              </p>

              <p>
                Throughout his journey, Khalid Ansari has remained dedicated to upholding the highest standards of
                integrity and quality. He strongly believes in the power of ethical business practices, ensuring that
                the Coral Group’s growth is always aligned with social responsibility and environmental stewardship.
                His passion for sustainability has led the company to set new industry standards, with a focus on
                long-term positive impact.
              </p>

              <p>
                In addition to his corporate achievements, Khalid Ansari is deeply invested in philanthropy. He has
                launched numerous initiatives aimed at supporting education, healthcare, and the well-being of
                underserved communities. His charitable efforts reflect his deep-rooted commitment to making a
                meaningful difference beyond the business world.
              </p>
              <p>
                Khalid Ansari’s leadership style is characterized by his approachable nature and an innate ability to
                mentor others. He is deeply respected for his hands-on involvement and his talent for inspiring
                teams to achieve their best. Looking ahead, Khalid Ansari’s vision for Coral Group is one of sustained
                growth, innovation, and a commitment to leaving a lasting positive impact on both industry and
                society.
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
              <h4 className="text-xl font-black mb-8 uppercase tracking-tighter">Expertise Matrix</h4>
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
                Lifetime Legacy <br /> Achievement 2024
              </h4>
              <p className="text-sm font-bold opacity-70 italic">
                Awarded by the Global Council for Industrial Ethics.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* ACHIEVEMENTS & AWARDS SECTION */}
      {/* <AchievementsAwards {...achievementData} /> */}

      {/* 3. AWARDS AND RECOGNITION SECTION */}
      <section className="py-24 relative bg-[#1e1e1e]">
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Awards & <span className="text-[#94cb3d]">Recognition</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border border-gray-800 bg-[#111] hover:border-[#94cb3d]/40 transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={award.image}
                    className="object-cover w-full h-full transition-all duration-700"
                    alt={award.title}
                  />

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="z-30 w-full bg-[#1e1e1e] flex items-center justify-center ">
        <BusinessVerticals />
      </div>

      <div className=" z-20 w-full  flex items-center justify-center ">

        <FeaturedProjects />
      </div>



      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
      `}</style>
    </div >
  );
}
