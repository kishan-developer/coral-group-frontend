"use client";

import React, { useState, useEffect } from 'react';
import {
  Users,
  Award,
  ChevronRight,
  Mail,
  Linkedin,
  Twitter,
  Briefcase,
  Globe,
  Quote,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  BarChart3,
  HeartHandshake,
  UserCheck,
  Camera,
  Coffee,
  Sparkles,
  CheckCircle2,
  Trophy,
  Medal,
  ArrowUpRight,
  MessageSquare,
  PlayCircle,
  Grab,
  GitGraph,
  Building
} from 'lucide-react';
import { Play } from 'next/font/google';
import Link from 'next/link';

const BrandColor = "#94cb3d";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDept, setActiveDept] = useState('All');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const executiveBoard = [
    {
      name: "Mr. Anas Ansari",
      role: "Managing Director",
      bio: "Anas Ansari, the visionary behind Coral Group, is a dynamic leader committed to innovation and excellence. His strategic foresight has been pivotal in shaping the group’s success and global standing.",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783824489/anas_sir_jq6lde.jpg",
      isPrimary: true
    },
    {
      name: "Mr. Khalid Ansari",
      role: "Chairman & Founder",
      bio: "Widely recognized for his strategic insight and leadership, Mr. Khalid Ansari has been the cornerstone of Coral Group's transformation into a globally diversified industrial conglomerate.",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783826270/Screenshot_2026-07-12_at_8.39.10_AM_occpm6.png",
      isPrimary: true
    },
    {
      name: "Mrs. Aisha Ansari",
      role: "Director",
      bio: "Celebrated for her strategic vision and innovative approach, Aisha Ansari brings a global perspective to her role, effectively navigating diverse markets with her multi-lingual expertise.",
      image: "/Aisha.png"
    },
    {
      name: "Mrs. Rumana Ansari",
      role: "Director",
      bio: "A graduate of Lady Shri Ram College with a deep knowledge of design, Rumana Ansari prioritizes sustainability and quality, ensuring that the company consistently surpasses industry benchmarks.",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783824490/rumana_ansari_cvrz0k.jpg",
    },
    {
      name: "Mr. Aamir Ansari",
      role: "Director",
      bio: "With a BA Honours in Global Business Management from Coventry University London, Aamir Ansari brings an innovative mindset focused on technological advancement and international market strategy.",
      image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783824371/aamir_sir_eifect.jpg"
    }
  ];

  const departmentTeams: Record<string, any[]> = {
    "Director": [
      { name: "Mr. Anas Ansari", role: "Managing Director", icon: HeartHandshake, code: "CG-100", joiningDate: "Jan 2018", dob: "15/05/1985", division: "Corporate", vertical: "Coral-Green", image: "/Founders/anas_sir.jpg" },
      { name: "Mr. Khalid Ansari", role: "Chairman & Founder", icon: HeartHandshake, code: "CG-001", joiningDate: "Jan 2010", dob: "01/01/1965", division: "Corporate", vertical: "Corporate", image: "/Founders/khalid_sir.jpg" },
      { name: "Mrs. Aisha Ansari", role: "Director", icon: HeartHandshake, code: "CG-102", joiningDate: "Mar 2018", dob: "12/08/1988", division: "Corporate", vertical: "Coral-RealEstate", image: "/Founders/aisha_ansari.jpg" },
      { name: "Mrs. Rumana Ansari", role: "Director", icon: HeartHandshake, code: "CG-103", joiningDate: "Jun 2018", dob: "22/11/1990", division: "Corporate", vertical: "Coral-Designs", image: "/Founders/rumana_ansari.jpg" },
      { name: "Mr. Aamir Ansari", role: "Director", icon: HeartHandshake, code: "CG-104", joiningDate: "Jan 2020", dob: "05/02/1995", division: "Corporate", vertical: "Coral-Tech", image: "/Founders/aamir_sir.jpg" }
    ],
    "HR": [
      { name: "Mr. Manish Sharma", role: "HR Manager / Admin", icon: HeartHandshake, code: "CG-0037", joiningDate: "01/01/2019", dob: "10/10/1982", division: "Human Resources" },
    ],
    "Finance": [
      { name: "Mr. Rakesh Srivastava", role: "Accounts Department", icon: BarChart3, code: "CG-0013", joiningDate: "01/04/2004", dob: "25/12/1978", division: "Finance" },
    ],
    "Operations": [ 
      { name: "Shahil Khan", role: "Head of Operations", icon: Zap, code: "CG-0039", joiningDate: "01/01/2019", dob: "14/03/1992", division: "Operations" },
      { name: "Ankit Vishwakarma", role: "Logistics Manager", icon: Zap, code: "CG-0040", joiningDate: "01/01/2019", dob: "20/06/1994", division: "Logistics" },
      { name: "Mubarak Ali", role: "Site Supervisor", icon: Zap, code: "CG-403", joiningDate: "Aug 2021", dob: "05/09/1990", division: "Site Management" },
      { name: "Avadhesh Singh", role: "Site Supervisor", icon: Zap, code: "CG-404", joiningDate: "Sep 2021", dob: "12/12/1988", division: "Site Management" }
    ],
    "Social Media & Marketing": [
      { name: "Aarti Verma", role: "Social Media Manager", icon: Cpu, code: "CG-501", joiningDate: "Oct 2021", dob: "03/04/1996", division: "Marketing", image: "/team/aarti.png" },
    ],
    "IT": [
      { name: "Kishan Kumar Rai", role: "IT Incharge", icon: Globe, code: "CG-0117", joiningDate: "Jan 2024", dob: "12/01/1998", division: "Information Technology" },
    ]
  };

  const cultureImages = [ 
    {
      url: "/Office/AMN_5716.jpg",
      title: "Collaborative Design Sessions",
      tag: "Workspace"
    },
    {
      url: "/Office/AMN_4991.jpeg",
      title: "Weekly Innovation Briefs",
      tag: "Strategy"
    },
    {
      url: "/Office/AMN_5010.jpg",
      title: "Candid Moments",
      tag: "Social"
    },
    {
      url: "/Office/AMN_5697.jpg",
      title: "Team Building Retreat",
      tag: "Culture"
    }


  ];

  const employeeAchievements = [
    {
      name: "Aarti",
      type: "Social Media Manager",
      description: "A dynamic Social Media Manager at Coral Group, Aarti excels in digital storytelling and brand engagement, ensuring our innovative projects resonate with a global audience.",
      image: "/team/aarti.png",
      year: "2024"
    },
    {
      name: "Ananya Ojha",
      type: "Interior Designer",
      description: "Leading the aesthetic vision of our projects, Ananya is a specialist Interior Designer who blends luxury with functionality to create spaces that define the Coral Group standard.",
      image: "/team/ananya.png",
      year: "2024"
    },
    {
      name: "Mr. Shahzad Malik",
      type: "Real Estate & Team Lead",
      description: "An accomplished leader managing our real estate portfolio and core teams, Mr. Shahzad ensures operational excellence and strategic growth across all ventures.",
      image: "/team/shahzad.png",
      year: "2024"
    }
  ];

  const testimonials = [
    {
      name: "Aarti Verma",
      role: "Social Media Manager",
      quote: "Joining Coral Group wasn't just a career move; it was an entry into a community where 'impossible' isn't in the vocabulary. The support for creative risk-taking is unparalleled.",
      experience: "5 Years with Coral",
      image: "/team/aarti.png"
    },
    {
      name: "Ananya Ojha",
      role: "Interior Designer",
      quote: "The focus on environmental integrity here is genuine. I've been given the resources to implement renewable tech that other firms are still just talking about.",
      experience: "3 Years with Coral",
      image: "/team/ananya.png"
    },
    {
      name: "Mr. Shahzad Malik",
      role: "Operations Manager",
      quote: "Efficiency and empathy go hand-in-hand here. The leadership truly listens to the operational teams, making our site workflows incredibly fluid.",
      experience: "7 Years with Coral",
      image: "/team/shahzad.png"
    }
  ];


  const depts = ["All", ...Object.keys(departmentTeams)];

  return (
    <div className="min-h-screen relative text-gray-100 bg-[#1e1e1e] font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />





      {/* 1. Hero / Introduction Section */}
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
              <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none uppercase">Team <br /><span className='text-[#94cb3d]'>Members</span></h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Coral Group is a global leader in infrastructure and innovation, dedicated to shaping the skylines of tomorrow with integrity and precision.
          </p>
        </div>
      </header>


      {/* Leadership Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 ">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-[#94cb3d] text-sm font-bold tracking-[0.4em] uppercase mb-4 flex items-center">
              <UserCheck className="w-4 h-4 mr-2" /> Executive Board
            </h2>
            <h3 className="text-5xl font-light tracking-tight">Company Leadership</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest leading-loose">
            Architecting the future through strategic vision and a commitment to perfection.
          </p>
        </div>

        {/* Chairman & MD - Highlighted Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {executiveBoard
            .filter((member) => member.isPrimary)
            .map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative overflow-hidden aspect-[16/9] bg-[#1e1e1e]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Black background overlay on hover */}
                  {/* 30% black normally, 50% on hover */}
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Member content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-px bg-[#94cb3d] mb-6 group-hover:w-24 transition-all duration-700" />

                    <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter">
                      {member.name}
                    </h4>

                    <p className="text-[#94cb3d] text-xs uppercase tracking-[0.3em] font-bold mb-6">
                      {member.role}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.bio}
                    </p>

                    <div className="flex space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Linkedin className="w-5 h-5 text-white hover:text-[#94cb3d] cursor-pointer" />
                      <Twitter className="w-5 h-5 text-white hover:text-[#94cb3d] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Directors - Compact Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {executiveBoard.filter(e => !e.isPrimary).map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden aspect-[3/4] bg-[#111] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-[#94cb3d]/40 transition-all duration-500"></div>

                <div className="absolute inset-0 bg-black/90 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-gray-300 text-sm italic leading-relaxed text-center">
                    "{member.bio}"
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-medium tracking-tight mb-1">{member.name}</h4>
              <p className="text-[#94cb3d] text-[10px] uppercase tracking-[0.2em] font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Employee Achievements Section */}
      <section className="relative z-10 py-32  overflow-hidden relative">


        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-[#94cb3d] text-sm font-bold tracking-[0.4em] uppercase mb-4 flex items-center">
                <Trophy className="w-4 h-4 mr-2" /> Hall of Fame...
              </h2>
              <h3 className="text-5xl font-light tracking-tight">Recognizing Excellence</h3>
            </div>
            <p className="text-gray-500 max-w-sm text-[10px] uppercase tracking-[0.2em] leading-loose">
              Celebrating the visionaries and innovators who push the boundaries of what's possible at Coral Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {employeeAchievements.map((award, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-8 border border-gray-800 transition-all duration-500 group-hover:border-[#94cb3d]/50">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* Floating Year Tag */}
                  <div className="absolute top-6 right-6 px-4 py-1 border border-white/20 backdrop-blur-md text-[10px] font-bold tracking-widest text-white group-hover:border-[#94cb3d] group-hover:text-[#94cb3d] transition-all">
                    {award.year}
                  </div>

                  {/* Recognition Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                      <Medal className="text-[#94cb3d] w-10 h-10 mb-4" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94cb3d] mb-1">{award.type}</p>
                      <h4 className="text-2xl font-bold tracking-tight">{award.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>



        </div>
      </section>

      {/* Department-Wise Teams Section */}
      <section className="relative z-10 bg-[#1e1e1e] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#94cb3d] text-sm font-bold tracking-[0.4em] uppercase mb-4">The Infrastructure</h2>
            <h3 className="text-4xl font-light tracking-tight mb-12">Specialized Departments</h3>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {depts.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`text-xs uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-all duration-300 ${activeDept === dept ? 'border-[#94cb3d] text-[#94cb3d]' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                >
                  {dept} Team
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(departmentTeams).map(([deptName, members]) => {
              if (activeDept !== 'All' && activeDept !== deptName) return null;

              return members.map((member, mIdx) => (
                <div
                  key={`${deptName}-${mIdx}`}
                  className="bg-[#151515] p-8 border border-gray-800 hover:border-[#94cb3d]/40 transition-all duration-500 group relative overflow-hidden flex flex-col h-full "
                >
                  {/* Employee Code Badge */}
                  <div className="absolute top-4 right-4 bg-[#94cb3d]/10 text-[#94cb3d] px-3 py-1 rounded-full text-[9px] font-bold tracking-widest border border-[#94cb3d]/20 z-20">
                    #{member.code}
                  </div>

                  {/* <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-all pointer-events-none">
                    <member.icon className="w-24 h-24" />
                  </div> */}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Profile Photo */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-800 group-hover:border-[#94cb3d]/30 transition-all bg-[#0a0a0a]">
                        <img
                          src={member.image || "/team/placeholder.png"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + member.name + "&background=0a0a0a&color=94cb3d&bold=true";
                          }}
                        />
                      </div>
                      {/* <div className="absolute -bottom-2 -right-2 bg-[#151515] p-2 rounded-xl border border-gray-800 text-[#94cb3d] opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                        <member.icon size={14} />
                      </div> */}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-medium mb-1 group-hover:text-[#94cb3d] transition-colors tracking-tight">{member.name}</h4>
                      <p className="text-gray-500 text-xs mb-6 uppercase tracking-widest font-medium">{member.role}</p>

                      {/* Detailed Info Grid */}
                      <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-gray-800/50 pt-6 mt-auto">
                        <div>
                          <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold">Joining Date</p>
                          <p className="text-[11px] font-medium text-gray-300">{member.joiningDate}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold">Birth Date</p>
                          <p className="text-[11px] font-medium text-gray-300">{member.dob}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold">Division </p>
                          <p className="text-[11px] font-medium text-gray-300">{member.division || deptName}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold"> Vertical</p>
                          <p className="text-[11px] font-medium text-gray-300">{member.vertical || deptName}</p>
                        </div>
                      </div>
                    </div>

                    {/* Signature Area */}
                    <div className="mt-8 border-t border-gray-800/50 pt-6 flex justify-between items-end">
                      <div className=" transition-all duration-700">
                        <p className="text-[18px] text-gray-600 uppercase tracking-widest mb-3 font-bold">Signature</p>
                        {member.signature ? (
                          <img src={member.signature} alt="Signature" className="h-8 object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all" />
                        ) : (
                          <p className="text-sm font-serif border-b border-dashed border-[#94cb3d]/20 italic text-gray-400 select-none" style={{ fontFamily: "'Dancing Script', cursive" }}>{member.name}</p>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              ));
            })}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-32 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[#94cb3d] text-sm font-bold tracking-[0.4em] uppercase mb-4 flex items-center">
                <Camera className="w-4 h-4 mr-2" /> Life at Coral Group
              </h2>
              <h3 className="text-5xl font-light tracking-tight mb-6 italic">People Behind the Excellence</h3>
              <p className="text-gray-500 text-sm tracking-widest leading-loose uppercase">
                A glimpse into our collaborative ecosystem where creativity meets technical precision.
              </p>
            </div>
            <div className="flex space-x-12 mt-4">
              <div className="text-center">
                <Coffee className="w-5 h-5 text-[#94cb3d] mx-auto mb-2 opacity-50" />
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Shared Moments</p>
              </div>
              <div className="text-center">
                <Building className="w-5 h-5 text-[#94cb3d] mx-auto mb-2 opacity-50" />
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Growth Culture</p>
              </div>
            </div>
          </div>

          {/* Masonry-Style Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {cultureImages.map((img, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-[#111] transition-all duration-700 ${idx === 0 || idx === 1 || idx === 2 || idx === 3 ? 'md:col-span-2 md:row-span-2' :
                  idx === 3 ? 'md:col-span-2' : ''
                  }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent  transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] bg-[#94cb3d] text-black px-2 py-0.5 font-bold uppercase tracking-widest mb-2 inline-block">
                    {img.tag}
                  </span>
                  <h4 className="text-lg font-light tracking-tight">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/company/gallery" className="group text-[#94cb3d] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center mx-auto hover:tracking-[0.5em] transition-all duration-500">
              View Full Gallery <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>



      {/* Employee Testimonials Section */}
      <section className="bg-[#1e1e1e] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Video Testimonial / Sidebar Stories */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-[#94cb3d] text-sm font-bold tracking-[0.4em] uppercase mb-4 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" /> Voices of Coral
                </h2>
                <h3 className="text-5xl font-light tracking-tight mb-8">Work Experience Stories</h3>
              </div>

              {/* Video Spotlight Card */}
              <div className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer bg-neutral-900 border border-neutral-800">
                <img
                  src="/Office/AMN_5697.jpg"
                  className="w-full h-full object-cover opacity-60  group-hover:scale-105 transition-all duration-1000"
                  alt="Video thumbnail"
                />



              </div>

              {/* Stats / Highlight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#0f0f0f] border border-gray-900">
                  <p className="text-3xl font-light text-[#94cb3d] mb-1">94%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Employee Retention</p>
                </div>
                <div className="p-6 bg-[#0f0f0f] border border-gray-900">
                  <p className="text-3xl font-light text-[#94cb3d] mb-1">4.8/5</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Internal Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Quote Cards Column */}
            <div className="lg:col-span-7 space-y-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="relative p-10 bg-[#0f0f0f] border-l-2 border-gray-900 hover:border-[#94cb3d] transition-all duration-500 group">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-[#94cb3d] opacity-5 group-hover:opacity-10 transition-opacity" />

                  <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                    <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border border-gray-800 group-hover:border-[#94cb3d]/30 transition-colors">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover  transition-all duration-500" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-[#94cb3d] fill-[#94cb3d]" />)}
                      </div>
                      <p className="text-lg font-light leading-relaxed text-gray-300 mb-6 italic">
                        "{t.quote}"
                      </p>
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-tighter">{t.name}</h4>
                          <p className="text-[10px] text-[#94cb3d] font-bold uppercase tracking-[0.2em]">{t.role}</p>
                        </div>
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest border-b border-gray-800 pb-1">{t.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full py-6 bg-transparent border border-dashed border-gray-800 text-gray-500 text-xs font-bold uppercase tracking-[0.3em] hover:text-[#94cb3d] hover:border-[#94cb3d]/50 transition-all flex items-center justify-center group">
                Read All 42 Stories <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Achievements / Awards */}
      {/* <section className="max-w-7xl mx-auto px-6 py-32 bg-[#1e1e1e]" >
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>å
            <h2 className="text-[#94cb3d] text-sm font-bold tracking-[0.4em] uppercase mb-4">Milestones</h2>
            <h3 className="text-4xl font-light tracking-tight mb-8">Our Achievements</h3>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Recognition from the industry validates our pursuit of architectural perfection and our commitment to our people.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-default">
                <div className="p-3 bg-[#111] border border-gray-800 group-hover:border-[#94cb3d]">
                  <Award className="w-5 h-5 text-[#94cb3d]" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Global Architecture Award 2023</p>
                  <p className="text-xs text-gray-500">Excellence in Sustainable Design</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-default">
                <div className="p-3 bg-[#111] border border-gray-800 group-hover:border-[#94cb3d]">
                  <Star className="w-5 h-5 text-[#94cb3d]" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Top Employer 2024</p>
                  <p className="text-xs text-gray-500">Corporate Culture & Employee Wellness</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111] aspect-square flex flex-col items-center justify-center border border-gray-900 hover:border-[#94cb3d]/20 transition-all">
              <span className="text-4xl font-light text-[#94cb3d] mb-2">150+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Specialists</span>
            </div>
            <div className="bg-[#111] aspect-square flex flex-col items-center justify-center border border-gray-900 hover:border-[#94cb3d]/20 transition-all mt-8">
              <span className="text-4xl font-light text-[#94cb3d] mb-2">12</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Countries</span>
            </div>
          </div>
        </div>
      </section> */}



      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;