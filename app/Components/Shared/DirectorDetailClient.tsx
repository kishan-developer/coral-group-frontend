"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Target,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Play,
  ChevronDown,
  MapPin,
  Award,
  Info,
  GraduationCap,
  Briefcase,
  Quote,
  Building2,
  Truck,
  Heart,
  Linkedin,
  Mail,
  Twitter,
  Zap,
  Leaf,
  Lock,
  Coins,
  Star
} from "lucide-react";
import { Director } from "@/app/data/directors";

const iconMap: { [key: string]: any } = {
  Building2, Globe, Target, Cpu, Play, MapPin, Award, Info, GraduationCap, Briefcase, Quote, Truck, Heart, Zap, Leaf, Lock, Coins, ShieldCheck, Star
};

export default function DirectorDetailClient({ director }: { director: Director }) {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", label: "Director’s Profile" },
    { id: "vision", label: "Vision & Mission" },
    { id: "message", label: "Message from the Director" },
    { id: "philosophy", label: "Leadership Philosophy" },
    { id: "journey", label: "Professional Journey" },
    { id: "roles", label: "Roles & Responsibilities" },
    { id: "achievements", label: "Key Achievements" },
    { id: "projects", label: "Projects Led" },
    { id: "awards", label: "Awards & Recognitions" },
    { id: "culture", label: "Team & Culture" },
    { id: "connect", label: "Contact & Connect" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-[#0f0f0f] text-white selection:bg-[#94cb3d] selection:text-black min-h-screen font-sans">
      
      {/* 1. Director’s Profile - STATIC HERO */}
      <section id="profile" className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src={director.image}
            alt={director.name}
            fill
            className="object-cover object-top opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#94cb3d] font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Executive Leadership</span>
            <h1 className="text-6xl md:text-[9rem] font-black mb-8 leading-[0.9] uppercase tracking-tighter">
              {director.name.split(' ').map((word, i) => {
                 const isGreen = i >= director.name.split(' ').length - 1;
                 return <span key={i} className={isGreen ? "text-[#94cb3d] block" : "block"}>{word} </span>
              })}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12 border-l-4 border-[#94cb3d] pl-8">
               <div className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#94cb3d]">{director.role}</div>
               <p className="text-lg md:text-xl text-gray-400 font-medium italic max-w-xl">
                  "{director.quote}"
               </p>
            </div>
            <div className="mt-16 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
               {director.bio}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission - STATIC CARDS */}
      <section id="vision" className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 md:p-20 bg-[#141414] border border-white/10 rounded-2xl relative overflow-hidden group">
               <Target className="w-12 h-12 text-[#94cb3d] mb-10" />
               <h3 className="text-4xl font-black uppercase mb-6 italic tracking-tight">Strategic Vision</h3>
               <p className="text-gray-400 leading-relaxed text-lg uppercase tracking-tight font-semibold">
                 {director.vision}
               </p>
            </div>
            <div className="p-12 md:p-20 bg-[#141414] border border-white/10 rounded-2xl relative overflow-hidden group">
               <Target className="w-12 h-12 text-[#94cb3d] mb-10" />
               <h3 className="text-4xl font-black uppercase mb-6 italic tracking-tight">Core Mission</h3>
               <p className="text-gray-400 leading-relaxed text-lg uppercase tracking-tight font-semibold">
                 {director.mission}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Message from the Director - CLEAN TYPOGRAPHY */}
      <section id="message" className="py-32 bg-[#0f0f0f] border-b border-white/5">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
              <Quote className="text-[#94cb3d] w-12 h-12 mb-10" />
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter italic">From the <span className="text-[#94cb3d]">Director's Desk</span></h2>
              <p className="text-xl md:text-3xl text-gray-300 leading-relaxed italic font-medium">
                {director.message}
              </p>
              <div className="mt-16 pt-12 border-t border-white/10">
                 <p className="font-black text-2xl uppercase">{director.name}</p>
                 <p className="text-[#94cb3d] text-xs font-black uppercase tracking-[0.4em] mt-2">{director.role}</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Leadership Philosophy - STATIC FOCUS */}
      <section id="philosophy" className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div>
                <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter italic">Leadership <br />Philosophy</h2>
                <div className="p-12 bg-[#141414] border border-[#94cb3d]/20 rounded-2xl">
                   <p className="text-2xl text-gray-300 leading-relaxed font-bold uppercase tracking-tight italic">
                     "{director.philosophy}"
                   </p>
                </div>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <video src={director.videoUrl} autoPlay muted loop className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Journey - STATIC TIMELINE */}
      <section id="journey" className="py-32 bg-[#0f0f0f] border-b border-white/5">
        <div className="container mx-auto px-6">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-center mb-24 italic">Professional <span className="text-[#94cb3d]">Journey</span></h2>
           <div className="max-w-4xl mx-auto relative border-l-2 border-white/10 pl-16 space-y-24">
              {director.journey.map((step, idx) => (
                <div key={idx} className="relative">
                   <div className="absolute -left-[71px] top-2 w-6 h-6 rounded-full bg-[#141414] border-4 border-[#94cb3d] shadow-[0_0_15px_#94cb3d]" />
                   <span className="text-[#94cb3d] font-black text-4xl italic mb-6 block tracking-tighter">{step.year}</span>
                   <h4 className="text-3xl font-black uppercase mb-4 tracking-tight">{step.title}</h4>
                   <p className="text-gray-400 font-bold uppercase tracking-widest text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Roles & Responsibilities - STATIC GRID */}
      <section id="roles" className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 italic">Roles & <span className="text-[#94cb3d]">Responsibilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {director.responsibilities.map((item, idx) => {
              const Icon = iconMap[item.icon] || Info;
              return (
                <div key={idx} className="p-12 bg-[#141414] border border-white/10 rounded-2xl hover:border-[#94cb3d]/40 transition-colors">
                  <Icon className="w-12 h-12 text-[#94cb3d] mb-8" />
                  <h4 className="text-2xl font-black uppercase mb-4 tracking-tight italic">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wider font-bold">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Key Achievements - BOLD STATIC STATS */}
      <section id="achievements" className="py-32 bg-[#0f0f0f] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {director.achievements.map((item, idx) => (
              <div key={idx} className="p-16 rounded-3xl bg-[#141414] border border-white/5 relative group">
                <h3 className="text-7xl md:text-9xl font-black text-[#94cb3d] mb-4 tracking-tighter italic">{item.value}</h3>
                <h4 className="text-3xl font-black uppercase mb-4 italic">{item.label}</h4>
                <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px] leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Projects Led - STATIC GALLERY */}
      <section id="projects" className="py-32 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl md:text-7xl font-black mb-20 uppercase tracking-tighter italic">Projects <span className="text-[#94cb3d]">Led</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {director.projects.map((project, idx) => (
                <div key={idx} className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
                   <Image src={project.image} alt={project.title} fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                   <div className="absolute bottom-12 left-12 right-12">
                      <span className="text-[#94cb3d] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">{project.category}</span>
                      <h4 className="text-4xl font-black uppercase tracking-tighter italic">{project.title}</h4>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 9. Awards & Recognitions - STATIC LIST */}
      <section id="awards" className="py-32 bg-[#0f0f0f] border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-8xl font-black mb-20 uppercase tracking-tighter italic">Awards & <span className="text-[#94cb3d]">Honors</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {director.awards.map((award, idx) => (
                <div key={idx} className="p-12 bg-[#141414] border border-white/10 rounded-2xl flex flex-col items-center">
                   <Star className="w-10 h-10 text-[#94cb3d] mb-6" />
                   <h5 className="text-2xl font-black uppercase tracking-tight mb-2 italic text-center">{award.title}</h5>
                   <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">{award.organization}</p>
                   <div className="px-4 py-1 bg-white/5 rounded-full text-white font-black text-sm italic">{award.year}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 10. Team & Culture - STATIC IMPACT */}
      <section id="culture" className="py-40 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-[#94cb3d] font-black uppercase tracking-[0.6em] text-[10px] mb-12 block underline decoration-2 underline-offset-8">Organizational Core</span>
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic uppercase underline decoration-[#94cb3d]/20 decoration-8 underline-offset-16">Team & Culture</h2>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-400 italic leading-relaxed font-black uppercase tracking-tighter">
              "{director.culture}"
            </p>
         </div>
      </section>

      {/* 11. Contact & Connect - CLEAN STATIC MODULE */}
      <section id="connect" className="py-32 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <div className="bg-[#94cb3d] rounded-[3rem] p-16 md:p-32 text-black flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter mb-8 italic">Contact & <br /><span className="text-black/30">Connect</span></h2>
              <p className="text-xl md:text-2xl font-bold opacity-80 leading-relaxed uppercase tracking-tighter italic">
                For strategic dialogue, high-level collaborations, and executive inquiries.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              {director.socials?.map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.link} 
                   className="flex items-center justify-between bg-black text-white px-10 py-6 rounded-2xl group active:scale-95 transition-all"
                 >
                   <div className="flex items-center gap-6">
                      {social.type === 'linkedin' ? <Linkedin className="w-8 h-8" /> : social.type === 'twitter' ? <Twitter className="w-8 h-8" /> : <Mail className="w-8 h-8" />}
                      <span className="text-xl font-black uppercase tracking-tighter italic">Connect on {social.type}</span>
                   </div>
                   <ArrowRight className="w-6 h-6 text-[#94cb3d]" />
                 </a>
              ))}
              <button className="w-full py-6 bg-white border border-black/10 rounded-2xl text-xl font-black uppercase tracking-tighter italic hover:bg-black hover:text-white transition-all">
                DOWNLOAD MEDIA KIT
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
      `}</style>
    </div>
  );
}
