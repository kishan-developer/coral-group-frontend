"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Globe,
    Target,
    Zap,
    Users,
    CheckCircle2,
    Globe2,
    Lightbulb,
    ShieldCheck,
    Cpu,
    Leaf,
    Play,
    ChevronDown,
    MapPin,
    Heart,
    Award,
    Info,
    Wind,
    Home,
    Star,
    Phone,
    Mail,
    MessageCircle,
    TrendingUp,
    Handshake,
    Briefcase,
    Hotel
} from "lucide-react";
import { Vertical, verticals } from "@/app/data/verticals";
import FeaturedProjects from "@/app/(website)/home_2/Component/FeaturedProjects";

const iconMap: { [key: string]: any } = {
    Building2, Globe, Target, Zap, Users, CheckCircle2, Globe2, Lightbulb, ShieldCheck, Cpu, Leaf, Play, MapPin, Heart, Award, Info, Wind, Home, TrendingUp, Handshake, Briefcase, Hotel
};

const BrandColor = "#94cb3d";

export default function VerticalDetailClient({ vertical }: { vertical: Vertical }) {
    const [activeSection, setActiveSection] = useState("hero");
    const containerRef = useRef(null);

    const sections = [
        { id: "hero", label: "Hero" },
        { id: "metrics", label: "Metrics" },
        { id: "mission", label: "Mission" },
        { id: "vision", label: "Vision" },
        { id: "video", label: "Video" },
        { id: "services", label: "Services" },
        { id: "impact", label: "Impact" },
        { id: "presence", label: "Global Reach" },
        { id: "innovation", label: "Innovation" },
        { id: "leadership", label: "Leadership" },
        { id: "cta", label: "Contact" },
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
        <div className="bg-[#1e1e1e] text-white selection:bg-[#94cb3d] selection:text-black min-h-screen font-sans">

            {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />


            {/* Sticky Navigator */}
            {/* <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center gap-4"
                    >
                        <div className={`h-px transition-all duration-500 ${activeSection === section.id ? "w-12 bg-[#94cb3d]" : "w-4 bg-white/20 group-hover:w-8 group-hover:bg-white/40"}`} />
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeSection === section.id ? "text-[#94cb3d] scale-110" : "text-white/20 opacity-0 group-hover:opacity-100 group-hover:text-white/60"}`}>
                            {section.label}
                        </span>
                    </button>
                ))}
            </div> */}


            {/* 1. Hero / Introduction Section */}
            <header id="hero" className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={vertical.heroImage}
                        alt={vertical.title}
                        className="w-full h-full object-contain scale-105 opacity-50"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="w-1 h-24 bg-[#94cb3d]"></div>
                        <div>
                            <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>
                            <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none uppercase">
                                {vertical?.title.split(" ").slice(0, 2).join(" ")}<br />
                                <span className='text-[#94cb3d]'>{vertical.title.split(" ").slice(2, 8).join(" ")}</span>
                            </h1>
                        </div>
                    </div>
                    <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
                        {vertical?.description.split(" ").slice(0, 30).join(" ")}
                    </p>
                </div>
            </header>



            <div className=" z-20 w-full  flex items-center justify-center ">
                <FeaturedProjects />
            </div>


            {/* 3. Deep Mission & Vision (Expanded) */}
            <section
                id="mission-vision-expanded"
                className="py-20 md:py-32  relative overflow-hidden"
            >

                {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="container mx-auto px-4  relative z-10 bg-[#1e1e1e]">

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Mission Section */}
                        <div className="lg:col-span-5 space-y-10">
                            <div className="relative group">
                                <div className="inline-flex p-4 bg-[#94cb3d]/10 rounded-2xl mb-6">
                                    <Target className="w-10 h-10 text-[#94cb3d]" />
                                </div>

                                <h2 className="text-4xl md:text-5xl font-serif font-medium uppercase tracking-tighter mb-6 group-hover:text-[#94cb3d] transition-colors">
                                    Our Mission
                                </h2>

                                <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
                                    <p>
                                        At Coral Group, our mission transcends the mere physical construction of assets. We deliver world-class infrastructure that elevates communities and drives economic progress.
                                    </p>
                                    <p>
                                        We uphold ethics, transparency, and excellence. By empowering our people, we solve complex engineering challenges and create long-term value globally.
                                    </p>
                                    <p>
                                        Every project is a pledge to the future — sustainable, innovative, and environmentally conscious.
                                    </p>
                                </div>
                            </div>

                            {/* Mission Image */}
                            {/* <div className="rounded-3xl overflow-hidden border border-gray-800 h-56 md:h-64">
                                <img
                                    src="/property/SK4.jpg"
                                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000"
                                    alt="Modern Architecture"
                                />
                            </div> */}
                        </div>

                        {/* Middle Decorative Accent */}
                        <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-6">
                            <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
                            <div className="text-[#94cb3d] font-black text-xs tracking-[0.5em] rotate-90 uppercase whitespace-nowrap">
                                Innovation & Purpose
                            </div>
                            <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
                        </div>

                        {/* Vision Section */}
                        <div className="lg:col-span-5 space-y-10 lg:mt-20">
                            <div className="relative group">
                                <div className="inline-flex p-4 bg-[#94cb3d]/10 rounded-2xl mb-6">
                                    <Globe className="w-10 h-10 text-[#94cb3d]" />
                                </div>

                                <h2 className="text-4xl md:text-5xl font-serif font-medium uppercase tracking-tighter mb-6 group-hover:text-[#94cb3d] transition-colors">
                                    Our Vision
                                </h2>

                                <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
                                    <p>
                                        Our vision is to be the world’s most trusted partner in transformative development, creating intelligent, sustainable, human-centric urban environments.
                                    </p>
                                    <p>
                                        We aim for global expansion backed by innovation, delivering projects that uplift communities and inspire progress worldwide.
                                    </p>
                                    <p>
                                        Coral Group builds for the next century — crafting a legacy of beauty, resilience, and impactful design.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Image */}
                            {/* <div className="rounded-3xl overflow-hidden border border-gray-800 h-56 md:h-64">
                                <img
                                    src="/property/SK3.jpg"
                                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000"
                                    alt="Global Technology"
                                />
                            </div> */}
                        </div>
                    </div>


                </div>
            </section>


            {/* 4. Strategic Vision */}
            <section id="vision" className="py-10 bg-[#1e1e1e]">
                {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="container mx-auto px-6">
                    
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Future Vision</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight uppercase tracking-tighter hover:text-[#94cb3d] transition-colors cursor-default">
                            {vertical.vision}
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed hover:text-[#94cb3d] transition-colors cursor-default">
                            {vertical.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Multimedia Focus */}
            {/* <section id="video" className=" bg-[#0f0f0f] relative overflow-hidden">
                <div className="container w-full mx-auto">
                    <div className="relative aspect-video  overflow-hidden group border border-white/5 shadow-2xl">
                        <video
                            src={vertical.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-60  transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-3xl font-black uppercase tracking-tighter">{vertical.title} Focus</h3>
                            <p className="text-[#94cb3d] font-bold uppercase tracking-widest text-xs">Cinematic Operations</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 6. Core Services Portfolio */}
            <section id="services" className="py-32 bg-[#1e1e1e]">
                {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                        <div>
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Key Business Segments</span>
                            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">Core <br />Services</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {vertical.services.map((service, idx) => {
                            const Icon = iconMap[service.icon] || Info;
                            return (
                                <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 hover:-translate-y-2">
                                    <Icon className="w-12 h-12 text-[#94cb3d] mb-6" />
                                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{service.title}</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{service.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. Competitive Edge Section */}
            {vertical.competitiveEdge && vertical.competitiveEdge.length > 0 && (
                <section id="competitive-edge" className="py-32 bg-[#1e1e1e]">
                    {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Strength</span>
                            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">Competitive <br /><span className="text-[#94cb3d]">Edge</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vertical.competitiveEdge.map((item, idx) => {
                                const Icon = iconMap[item.icon] || Info;
                                return (
                                    <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                        <Icon className="w-14 h-14 text-[#94cb3d] mb-6" />
                                        <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* 8. Future Growth Section */}
            {vertical.futureGrowth && vertical.futureGrowth.length > 0 && (
                <section id="future-growth" className="py-32 bg-[#1e1e1e]">
                    {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Vision & Future</span>
                            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">Future <br /><span className="text-[#94cb3d]">Growth</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {vertical.futureGrowth.map((item, idx) => (
                                <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-[#94cb3d]/10 rounded-full flex items-center justify-center group-hover:bg-[#94cb3d]/20 transition-all">
                                        <TrendingUp className="w-8 h-8 text-[#94cb3d]" />
                                    </div>
                                    <h4 className="text-lg font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 7. Impact & Success */}
            {/* <section id="impact" className="py-32 bg-[#0f0f0f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {vertical.impact.map((item, idx) => (
                            <div key={idx} className="p-16 bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#94cb3d]/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-[#94cb3d]/10 transition-all" />
                                <h3 className="text-6xl md:text-8xl font-black text-[#94cb3d] mb-4 tracking-tighter italic">{item.value}</h3>
                                <h4 className="text-2xl font-black uppercase mb-4">{item.title}</h4>
                                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 8. Global Presence */}
            {/* <section id="presence" className="py-32 bg-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <div className="bg-[#141414] p-12 md:p-24 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#94cb3d]/5 rounded-full blur-3xl -mr-48 -mt-48" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <Globe2 className="w-16 h-16 text-[#94cb3d] mb-8" />
                                <h2 className="text-5xl font-black mb-8 leading-none uppercase tracking-tighter italic">Global <br />Presence</h2>
                                <div className="space-y-10">
                                    {vertical.locations.map((loc, idx) => (
                                        <div key={idx} className="flex gap-8 group">
                                            <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-[#94cb3d] group-hover:bg-[#94cb3d] group-hover:text-black transition-all duration-500 shadow-2xl group-hover:shadow-[#94cb3d]/20">
                                                <MapPin className="w-8 h-8" />
                                            </div>
                                            <div className="pt-2">
                                                <h5 className="text-3xl font-black uppercase tracking-tight mb-2 flex items-center gap-3">
                                                    {loc.city}
                                                    <span className="w-2 h-2 rounded-full bg-[#94cb3d] animate-pulse"></span>
                                                </h5>
                                                <p className="text-[#94cb3d] font-black uppercase tracking-[0.3em] text-xs mb-4">
                                                    {loc.country}
                                                </p>
                                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium uppercase tracking-wide">
                                                    {loc.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-square overflow-hidden">
                                <Image src="/property/SK1.jpg" alt="Locations" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 9. Innovation & Tech */}
            {/* <section id="innovation" className="py-32 bg-[#0f0f0f]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Future Forward</span>
                        <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Innovation & <br />Engineering</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {vertical.innovation.map((item, idx) => (
                            <div key={idx} className="flex gap-8 p-10  bg-[#0a0a0a] border border-white/5 group hover:border-[#94cb3d]/30 transition-all">
                                <div className="text-4xl font-black text-white/10 group-hover:text-[#94cb3d]/20 transition-colors italic">0{idx + 1}</div>
                                <div>
                                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 10. Leadership Hub */}
            {/* <section id="leadership" className="py-32 bg-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-5xl font-black mb-20 text-center uppercase tracking-tighter">Sector <br /><span className="text-[#94cb3d]">Leadership</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {vertical.leadership.map((person, idx) => (
                            <div key={idx} className="group">
                                <div className="relative aspect-[3/4] overflow-hidden  border border-white/10 mb-8 bg-[#1a1a1a]">
                                    <Image
                                        src={person.img}
                                        alt={person.name}
                                        fill
                                        className="object-cover  group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tight">{person.name}</h4>
                                <p className="text-[#94cb3d] font-black uppercase tracking-[0.3em] text-[10px] mt-2">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 11. Vertical CTA */}
            {/* <section id="cta" className="py-32 bg-[#0f0f0f] container mx-auto px-6 ">
                <div className="bg-[#94cb3d] rounded-[4rem] p-16 md:p-24 text-black relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full -mr-64 -mt-64 transition-transform duration-1000 group-hover:scale-125"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter mb-8 italic italic">Partner <br />With {vertical.title.split(' ')[1] || 'Us'}</h2>
                            <p className="text-xl md:text-2xl font-bold opacity-70 leading-relaxed uppercase tracking-tight">
                                Explore collaborative opportunities in our {vertical.title.split(' ')[1] || 'division'}. Shaping the future together.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 w-full lg:w-auto">
                            <button className="bg-black text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-4">
                                INQUIRE NOW <ArrowRight className="w-6 h-6" />
                            </button>
                            <button className="bg-white/20 backdrop-blur-md border border-black/10 text-black px-12 py-6 rounded-full font-black text-xl hover:bg-black hover:text-[#94cb3d] transition-all">
                                VIEW CATALOG
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 12. Projects Section - Only for Coral Greens Buildtech */}
            {/* {vertical.projects && vertical.projects.length > 0 && (
                <section id="projects" className="py-32 bg-[#0f0f0f]">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                            <div>
                                <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Portfolio</span>
                                <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">Key <br />Projects</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {vertical.projects.map((project, idx) => (
                                <div key={idx} className="group bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 overflow-hidden">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.images[0]}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                                project.status === 'Ongoing' ? 'bg-[#94cb3d] text-black' : 
                                                project.status === 'Completed' ? 'bg-green-500 text-white' : 
                                                'bg-white/20 text-white'
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <p className="text-[#94cb3d] font-bold uppercase tracking-widest text-xs mb-2">{project.type}</p>
                                        <h4 className="text-2xl font-black uppercase mb-2 tracking-tight">{project.name}</h4>
                                        <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                                            <MapPin size={16} className="text-[#94cb3d]" /> {project.location}
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 13. Expertise Section - Only for Coral Greens Buildtech */}
            {/* {vertical.expertise && vertical.expertise.length > 0 && (
                <section id="expertise" className="py-32 bg-[#0a0a0a]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">What We Do</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Core <br />Expertise</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {vertical.expertise.map((item, idx) => {
                                const Icon = iconMap[item.icon] || Info;
                                return (
                                    <div key={idx} className="group p-8 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                        <Icon className="w-12 h-12 text-[#94cb3d] mb-6" />
                                        <h4 className="text-lg font-black uppercase mb-3 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-500 leading-relaxed text-xs uppercase tracking-wide">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 14. Benefits Section - Only for Coral Greens Buildtech */}
            {/* {vertical.benefits && vertical.benefits.length > 0 && (
                <section id="benefits" className="py-32 bg-[#0f0f0f]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Promise</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Why Choose <br />Coral Greens Buildtech</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vertical.benefits.map((item, idx) => {
                                const Icon = iconMap[item.icon] || Info;
                                return (
                                    <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 hover:-translate-y-2">
                                        <Icon className="w-14 h-14 text-[#94cb3d] mb-6" />
                                        <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 15. Process Flow Section - Only for Coral Greens Buildtech */}
            {/* {vertical.process && vertical.process.length > 0 && (
                <section id="process" className="py-32 bg-[#0a0a0a]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">How We Build</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Process <br />Flow</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vertical.process.map((item, idx) => {
                                const Icon = iconMap[item.icon] || Info;
                                return (
                                    <div key={idx} className="relative group">
                                        <div className="absolute -top-4 -left-4 text-[#94cb3d]/20 text-8xl font-black italic">0{item.step}</div>
                                        <div className="relative p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                            <Icon className="w-12 h-12 text-[#94cb3d] mb-6" />
                                            <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                            <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 16. Sustainability Section - Only for Coral Greens Buildtech */}
            {/* {vertical.sustainability && vertical.sustainability.length > 0 && (
                <section id="sustainability" className="py-32 bg-[#0f0f0f]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Green Building</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Sustainability <br />& Quality Standards</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vertical.sustainability.map((item, idx) => {
                                const Icon = iconMap[item.icon] || Info;
                                return (
                                    <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                        <Icon className="w-12 h-12 text-[#94cb3d] mb-6" />
                                        <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 17. Testimonials Section - Only for Coral Greens Buildtech */}
            {/* {vertical.testimonials && vertical.testimonials.length > 0 && (
                <section id="testimonials" className="py-32 bg-[#0a0a0a]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Client Stories</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">What Our <br />Clients Say</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vertical.testimonials.map((item, idx) => (
                                <div key={idx} className="p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="text-[#94cb3d] fill-[#94cb3d]" size={20} />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{item.content}"</p>
                                    <div>
                                        <h5 className="font-bold text-white text-lg">{item.name}</h5>
                                        <p className="text-[#94cb3d] font-bold uppercase tracking-widest text-xs">{item.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 18. Awards Section - Only for Coral Greens Buildtech */}
            {/* {vertical.awards && vertical.awards.length > 0 && (
                <section id="awards" className="py-32 bg-[#0f0f0f]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Recognition</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Awards & <br />Certifications</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {vertical.awards.map((item, idx) => (
                                <div key={idx} className="p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 group">
                                    <div className="flex items-start gap-6">
                                        <Award className="w-16 h-16 text-[#94cb3d] shrink-0" />
                                        <div>
                                            <h4 className="text-2xl font-black uppercase mb-2 tracking-tight group-hover:text-[#94cb3d] transition-colors">{item.title}</h4>
                                            <p className="text-[#94cb3d] font-bold uppercase tracking-widest text-xs mb-4">{item.year}</p>
                                            <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 19. Media Section - Only for Coral Greens Buildtech */}
            {/* {vertical.media && vertical.media.length > 0 && (
                <section id="media" className="py-32 bg-[#0a0a0a]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Press Coverage</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Media & <br />Press</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {vertical.media.map((item, idx) => (
                                <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                            item.type === 'Article' ? 'bg-white/20 text-white' : 
                                            item.type === 'Interview' ? 'bg-[#94cb3d] text-black' : 
                                            'bg-blue-500/20 text-blue-400'
                                        }`}>
                                            {item.type}
                                        </span>
                                        <span className="text-gray-500 text-xs uppercase tracking-widest">{item.date}</span>
                                    </div>
                                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight group-hover:text-[#94cb3d] transition-colors">{item.title}</h4>
                                    <a href={item.url} className="text-[#94cb3d] font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2">
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )} */}

            {/* 20. FAQ Section - Only for Coral Greens Buildtech */}
            {vertical.faq && vertical.faq.length > 0 && (
                <section id="faq" className="py-32 bg-[#1e1e1e]">
                    {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Support</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Frequently <br />Asked Questions</h2>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {vertical.faq.map((item, idx) => (
                                <div key={idx} className="p-8 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.question}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 21. Contact Section - Only for Coral Greens Buildtech */}
            {/* {vertical.contact && (
                <section id="contact" className="py-32 bg-[#0a0a0a]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Get In Touch</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Contact <br />& Inquiry</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <div className="p-8 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] rounded-full">
                                            <Globe className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Address</h4>
                                            <p className="text-lg font-bold">{vertical.contact.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] rounded-full">
                                            <Phone className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</h4>
                                            <p className="text-lg font-bold">{vertical.contact.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] rounded-full">
                                            <Mail className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Email</h4>
                                            <p className="text-lg font-bold">{vertical.contact.email}</p>
                                        </div>
                                    </div>
                                </div>
                                {vertical.contact.whatsapp && (
                                    <div className="p-8 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] rounded-full">
                                                <MessageCircle className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">WhatsApp</h4>
                                                <p className="text-lg font-bold">{vertical.contact.whatsapp}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="space-y-6">
                                <div className="p-10 bg-[#94cb3d] rounded-[2rem] text-black">
                                    <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">Send Inquiry</h3>
                                    <form className="space-y-4">
                                        <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-black/10 border border-black/20 rounded-full text-black placeholder-black/50 font-bold" />
                                        <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-black/10 border border-black/20 rounded-full text-black placeholder-black/50 font-bold" />
                                        <input type="tel" placeholder="Your Phone" className="w-full px-6 py-4 bg-black/10 border border-black/20 rounded-full text-black placeholder-black/50 font-bold" />
                                        <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 bg-black/10 border border-black/20 rounded-full text-black placeholder-black/50 font-bold resize-none" />
                                        <button type="submit" className="w-full bg-black text-white px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
                                            SEND MESSAGE
                                        </button>
                                    </form>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="bg-[#94cb3d] text-black px-8 py-6 rounded-full font-black text-lg hover:bg-black hover:text-[#94cb3d] transition-all border-2 border-[#94cb3d]">
                                        DOWNLOAD BROCHURE
                                    </button>
                                    <button className="bg-[#94cb3d] text-black px-8 py-6 rounded-full font-black text-lg hover:bg-black hover:text-[#94cb3d] transition-all border-2 border-[#94cb3d]">
                                        BOOK SITE VISIT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )} */}

            {/* 22. Related Verticals - Cross-links */}
            <section id="related" className="py-32 bg-[#1e1e1e]">
                {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Explore</span>
                        <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Related <br />Verticals</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {verticals.filter(v => v.slug !== vertical.slug).slice(0, 4).map((v, idx) => (
                            <a key={idx} href={`/verticals/${v.slug}`} className="group block">
                                <div className="relative aspect-square overflow-hidden border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 mb-4">
                                    <img
                                        src={v.heroImage}
                                        alt={v.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-[#94cb3d] transition-colors">{v.title}</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">{v.subtitle}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Scrollbar Styling */}
            <style jsx global>{`
                ::-webkit-scrollbar {
                    width: 6px;
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
}