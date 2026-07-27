"use client";

import React, { useState, useEffect } from 'react';
import {
  Users,
  Target,
  Globe,
  Briefcase,
  ArrowRight,
  Heart,
  Zap,
  ShieldCheck,
  Star,
  Coffee,
  GraduationCap,
  ClipboardList,
  Search,
  Mail,
  Smartphone,
  MapPin
} from 'lucide-react';

const BrandColor = "#94cb3d";

const App = () => {
  const [filter, setFilter] = useState('All');

  const benefits = [
    { title: "Health & Wellness", desc: "Comprehensive insurance and mental health support for you and your family.", icon: Heart },
    { title: "Global Training", desc: "Access to international certifications and leadership development programs.", icon: GraduationCap },
    { title: "Hybrid Flexibility", desc: "Modern work-life balance with remote-first options for eligible roles.", icon: Coffee },
    { title: "Performance Bonus", desc: "Annual incentives and rewards for driving Coral Group's excellence.", icon: Star },
  ];

  const jobs = [
    { id: 1, title: "Senior Project Manager", dept: "Technical", loc: "Dubai, UAE", type: "Full-time" },
    { id: 2, title: "Renewable Energy Consultant", dept: "Operations", loc: "Singapore", type: "Full-time" },
    { id: 3, title: "UX/UI Designer", dept: "Marketing", loc: "Remote", type: "Contract" },
    { id: 4, title: "Finance Analyst", dept: "Finance", loc: "London, UK", type: "Full-time" },
    { id: 5, title: "HR Business Partner", dept: "HR", loc: "New York, USA", type: "Full-time" },
    { id: 6, title: "Junior Civil Engineer", dept: "Technical", loc: "Riyadh, KSA", type: "Intern" },
  ];

  const departments = ["All", "Technical", "Operations", "Finance", "HR", "Marketing"];

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.dept === filter);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* 1. Hero / Introduction Section */}
      <header className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            // src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
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
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none uppercase">
                Careers <br />
                {/* <span className='text-[#94cb3d]'>Coral-Group</span> */}
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Join a global leader in infrastructure and innovation, where every project shapes the skylines of tomorrow. At Coral Group, we believe in building more than structures — we build opportunities, growth, and a better future.
          </p>
        </div>
      </header>

      {/* 2. Why Work With Us */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[#94cb3d] font-bold tracking-widest uppercase mb-4">Why Coral Group?</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-12 leading-tight">An Environment Designed for Peak Performance.</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-1 bg-[#94cb3d]"></div>
                <h4 className="text-xl font-bold uppercase">Innovation First</h4>
                <p className="text-gray-500 text-sm">We give you the tools and the freedom to experiment with the latest construction technologies.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-1 bg-gray-800"></div>
                <h4 className="text-xl font-bold uppercase">Global Exposure</h4>
                <p className="text-gray-500 text-sm">Work on cross-continental projects that impact millions of lives across 12 countries.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-1 bg-gray-800"></div>
                <h4 className="text-xl font-bold uppercase">Growth Path</h4>
                <p className="text-gray-500 text-sm">Clear roadmap for leadership roles through our internal talent development program.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-1 bg-gray-800"></div>
                <h4 className="text-xl font-bold uppercase">Purpose Driven</h4>
                <p className="text-gray-500 text-sm">Every brick you lay and every strategy you build contributes to global sustainability.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#94cb3d]/10 blur-[100px] rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
              className="rounded-[3rem] relative z-10 border border-gray-800"
              alt="Office Workspace"
            />
          </div>
        </div>
      </section>

      {/* 3. Life at Coral Group */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4 uppercase italic">Life at Coral</h2>
              <p className="text-gray-500">Beyond the blueprints, we are a family of diverse thinkers who know how to celebrate success.</p>
            </div>
            <div className="text-[#94cb3d] font-bold">#BeyondTheBuild</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <div className="md:col-span-2 overflow-hidden rounded-3xl relative group">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Team Work" />
            </div>
            <div className="overflow-hidden rounded-3xl relative group">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Culture" />
            </div>
            <div className="overflow-hidden rounded-3xl relative group">
              <img src="https://images.unsplash.com/photo-152207182399e-b89e7df830c5?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Events" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Perks & Benefits */}
      <section className="py-32 border-y border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase">Perks & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-8 bg-[#111] rounded-3xl border border-gray-800 hover:border-[#94cb3d] transition-all group">
                <b.icon className="w-10 h-10 text-[#94cb3d] mb-6 group-hover:scale-110 transition-transform" />
                <h5 className="text-xl font-bold mb-3 uppercase tracking-tight">{b.title}</h5>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Job Openings */}
      <section id="openings" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 uppercase italic">Current Openings</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {departments.map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === d ? 'bg-[#94cb3d] text-black' : 'bg-[#1a1a1a] text-gray-500 hover:text-white border border-gray-800'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
          {filteredJobs.map(job => (
            <div key={job.id} className="group bg-[#0a0a0a] border border-gray-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#94cb3d] transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#94cb3d] text-[10px] font-black uppercase tracking-[0.2em] bg-[#94cb3d]/10 px-3 py-1 rounded-full">{job.dept}</span>
                  <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em] border border-gray-800 px-3 py-1 rounded-full">{job.type}</span>
                </div>
                <h4 className="text-2xl font-black group-hover:text-[#94cb3d] transition-colors">{job.title}</h4>
                <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                  <MapPin size={14} className="text-[#94cb3d]" /> {job.loc}
                </div>
              </div>
              <button className="bg-white text-black px-8 py-3 rounded-full font-black text-sm uppercase hover:bg-[#94cb3d] transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Application Process */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center uppercase italic tracking-widest">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Apply Online", icon: Smartphone },
              { step: "02", label: "Initial Screening", icon: ClipboardList },
              { step: "03", label: "Deep-Dive Interview", icon: Users },
              { step: "04", label: "Final Selection", icon: Target },
              { step: "05", label: "Onboarding", icon: Zap },
            ].map((p, i) => (
              <div key={i} className="relative group p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-[#151515] rounded-2xl flex items-center justify-center mx-auto border border-gray-800 group-hover:border-[#94cb3d] transition-all">
                    <p.icon className="text-[#94cb3d]" size={24} />
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-gradient-to-r from-gray-800 to-transparent z-0 -translate-y-1/2"></div>
                  )}
                </div>
                <p className="text-[#94cb3d] font-black text-xs mb-2">{p.step}</p>
                <h5 className="font-bold uppercase tracking-tighter">{p.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Call-to-Action / HR Contact */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#94cb3d] rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-black opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            {/* Left Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-none mb-6">
                WANT TO SHAPE THE WORLD?
              </h2>

              <p className="text-lg md:text-xl font-medium opacity-80 mb-8 md:mb-10 max-w-md">
                Can't find a role that fits? Send us your resume anyway and we'll keep you on our radar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-black text-[#94cb3d] px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg flex items-center justify-center w-full sm:w-auto hover:scale-105 transition-transform">
                  UPLOAD RESUME <ArrowRight className="ml-2 md:ml-3 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Contact Card */}
            <div className="bg-black/5 rounded-3xl p-8 md:p-10 border border-black/10 relative z-10">
              <h4 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-tight">
                Reach Our Talent Team
              </h4>

              <div className="space-y-6 md:space-y-8">

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#94cb3d]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black opacity-50 tracking-widest">Email Us</p>
                    <p className="font-bold text-sm md:text-base">careers@coralgroup.com</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#94cb3d]">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black opacity-50 tracking-widest">Follow for Updates</p>
                    <p className="font-bold text-sm md:text-base">@CoralGroupCareers</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94cb3d;
        }
      `}</style>
    </div>
  );
};

export default App;