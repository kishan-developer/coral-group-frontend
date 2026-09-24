"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Award,
    Users,
    Building2,
    Target,
    Globe,
    CheckCircle2,
    TrendingUp,
    Briefcase,
    ArrowRight,
    Heart,
    MapPin,
    Clock,
    ShieldCheck,
    Zap,
    Leaf,
    ChevronLeft,
    ChevronRight,
    AreaChart,
    Layout,
    Expand
} from 'lucide-react';

import BoardOfDirectors from '../../home_2/Component/BoardOfDirectors';
import FeaturedProjects from '../gallery/Components/FeaturedProjects';
import OurProjects from '../../home_2/Component/OurProjects';
import { projects } from "@/app/data/projects";
import BrochureModal from "@/app/Components/Shared/BrochureModal";

import { motion, Variants, AnimatePresence } from "framer-motion";


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

const ProjectGallery = ({ project, className = "" }: { project: any, className?: string }) => {
    const images = [project.image, ...(project.gallery || [])];
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={`lg:col-span-7 relative group ${className}`}>
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-[#94cb3d]/5 rounded-[2rem] blur-2xl group-hover:bg-[#94cb3d]/10 transition-all duration-700"></div>

            {/* Main Image Slider */}
            <div className="relative aspect-[16/10] rounded-lg md:rounded-2xl overflow-hidden border border-gray-800 bg-black">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeIndex}
                        src={images[activeIndex]}
                        alt={project.title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay Gradients */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Slider Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-[#94cb3d] hover:text-black transition-all transform hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-[#94cb3d] hover:text-black transition-all transform hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Info Badges */}
                <div className="absolute bottom-2 md:bottom-8 left-2 md:left-8 flex items-center gap-6">
                    <div className="p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                        {/* <p className="text-[#94cb3d] text-sm font-bold uppercase tracking-widest mb-1">Total Area</p> */}
                        <p className="text-lg md:text-2xl font-black">{project.title}</p>
                    </div>
                    {/* <div className="p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                        <p className="text-[#94cb3d] text-sm font-bold uppercase tracking-widest mb-1">Status</p>
                        <p className="text-2xl font-black">{project.status}</p>
                    </div> */}
                </div>

                {/* Image Counter */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                    <p className="text-xs font-bold tracking-widest">{activeIndex + 1} / {images.length}</p>
                </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 mt-8 gap-4">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`relative aspect-square rounded-md md:rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeIndex === i
                            ? 'border-[#94cb3d] scale-105 shadow-lg shadow-[#94cb3d]/20'
                            : 'border-gray-800 opacity-60 hover:opacity-100 hover:border-gray-600'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`${project.title} thumb ${i}`}
                            className="w-full h-full object-cover"
                        />
                        {activeIndex === i && (
                            <div className="absolute inset-0 bg-[#94cb3d]/10 animate-pulse"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};



const BrandColor = "#94cb3d";

const Page = () => {
    const [isVisible, setIsVisible] = useState({});
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    const [selectedBrochure, setSelectedBrochure] = useState<{ type: string; title: string } | null>(null);

    // Stats Data
    const stats = [
        { label: "Years Experience", value: "25+", icon: Clock },
        { label: "Projects Completed", value: "450+", icon: Building2 },
        { label: "Global Offices", value: "12", icon: Globe },
        { label: "Happy Clients", value: "300+", icon: Users },
    ];

    // Verticals Data
    const verticals = [
        { title: "Infrastructure", desc: "Large-scale urban development and civil engineering projects.", icon: Building2 },
        { title: "Energy", desc: "Innovative renewable energy solutions and grid management.", icon: TrendingUp },
        { title: "Consultancy", desc: "Strategic business and technical advisory for global firms.", icon: Briefcase },
    ];

    // Timeline Data
    const milestones = [
        { year: "1999", title: "The Foundation", desc: "Coral Group started with a small team in Dubai." },
        { year: "2008", title: "Regional Expansion", desc: "Opening offices in Saudi Arabia and Qatar." },
        { year: "2015", title: "Innovation Peak", desc: "Launched our first sustainable 'Green City' initiative." },
        { year: "2024", title: "Global Presence", desc: "Awarded top developer status in international markets." },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleBrochureClick = (type: string, title: string) => {
        setSelectedBrochure({ type, title });
        setIsBrochureModalOpen(true);
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

            {/* 1. Hero / Introduction Section */}
            <header className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Office/AMN_4991.jpeg"
                        className="w-full h-full object-cover scale-105 opacity-50"
                        alt="Office"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="w-1 h-24 bg-[#94cb3d]"></div>
                        <div>
                            <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>
                            <h1 className="text-4xl md:text-7xl font-black mb-4 leading-none uppercase">
                                Explore Our All  <br />
                                <span className='text-[#94cb3d]'>Projects</span>
                            </h1>
                        </div>
                    </div>
                    <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-3 md:ml-10">


                        Coral Group is a global leader in infrastructure, engineering, and modern development—shaping the skylines of tomorrow with integrity, innovation, and precision.
                    </p>
                </div>
            </header>

            <OurProjects />

            {/* NEW: Project Deep Dive Section */}
            <section id="project-deep-dive" className="relative z-10  overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase mb-4">Portfolio Alpha</h2>
                        <h3 className="text-2xl md:text-5xl font-black uppercase mb-6">Detailed <span className="text-[#94cb3d]">Analysis</span></h3>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            A closer look at the technical specifications, architectural brilliance, and advanced integration that define Coral Group's signature developments.
                        </p>
                    </div>

                    <div className="space-y-40">
                        {projects.map((project, idx) => (
                            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12  gap-10 md:gap-16 items-center ">

                                <ProjectGallery
                                    project={project}
                                />

                                {/* Content Column */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div>
                                        <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Case Study</span>
                                        <h4 className="text-2xl md:text-4xl font-black mb-6 leading-tight uppercase">{project.title}</h4>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            {project.detailedDescription}
                                        </p>
                                    </div>
                                     <div className="pt-8">
                                        <Link
                                            href={`/company/projects/${project.slug}`}
                                            className="inline-flex items-center gap-4 text-[#94cb3d] font-black uppercase tracking-widest group"
                                        >
                                            Explore Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 gap-4">
                                        <p className="text-white font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                                            <Layout className="w-4 h-4 text-[#94cb3d]" /> Key Features
                                        </p>
                                        <div className="space-y-3">
                                            {project.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#94cb3d]/30 transition-all">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#94cb3d]"></div>
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Amenities Row */}
                                    <div className="pt-6 border-t border-gray-800">
                                        <p className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                                            <Expand className="w-4 h-4 text-[#94cb3d]" /> Premium Amenities
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.amenities.map((amenity, aIdx) => (
                                                <span key={aIdx} className="px-4 py-2 rounded-full bg-[#111] border border-gray-800 text-gray-400 text-xs font-bold uppercase tracking-wider">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => handleBrochureClick(project.slug, project.title)}
                                            className="flex-1 bg-[#94cb3d] text-black px-6 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#7ab532] transition-all flex items-center justify-center gap-2"
                                        >
                                            Download Brochure
                                        </button>
                                        <Link
                                            href="/contact"
                                            className="flex-1 bg-transparent border-2 border-[#94cb3d] text-[#94cb3d] px-2 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#94cb3d] hover:text-black transition-all flex items-center justify-center gap-2"
                                        >
                                            Contact Now
                                        </Link>
                                    </div>

                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Business Verticals */}
            {/* <section id="verticals" className="py-24 bg-[#1e1e1e]">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black mb-16 text-center">WHAT WE DO</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {verticals.map((v, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-[#0f0f0f] border border-gray-800 hover:border-[#94cb3d] transition-all hover:-translate-y-2">
                                <v.icon className="w-12 h-12 text-[#94cb3d] mb-6" />
                                <h5 className="text-2xl font-bold mb-4">{v.title}</h5>
                                <p className="text-gray-500 leading-relaxed mb-6">{v.desc}</p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-[#94cb3d] hover:underline">
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}


            {/* 10. Call To Action Section */}
            <section className="py-20 md:py-10 container mx-auto px-4 md:px-6">
                <div className="bg-[#94cb3d] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-10 text-black flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 relative overflow-hidden">

                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-black/10 rounded-full -mr-20 -mt-20 md:-mr-32 md:-mt-32"></div>

                    {/* Text Section */}
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-6xl lg:text-5xl font-black leading-tight mb-4 md:mb-6">
                            BUILD YOUR  FUTURE <br/> WITH US.
                        </h2>
                        <p className="text-lg md:text-xl font-medium opacity-80">
                            Whether it's a project proposal or a career inquiry, we want to hear from you.
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col sm:flex-col gap-4 relative z-10 w-full lg:w-auto">

                        {/* Work With Us Button */}
                        <a href="/company/projects/" className="bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg hover:scale-105 transition-transform flex items-center justify-center w-full sm:w-auto">
                            Our Projects <ArrowRight className="ml-2 md:ml-3 w-5 h-5" />
                        </a>

                        {/* Contact Us Button */}
                        <a href="/contact" className="bg-transparent border-2 border-black text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-black hover:text-[#94cb3d] transition-all w-full sm:w-auto">
                            CONTACT US
                        </a>

                    </div>

                </div>
            </section>

            {/* Global Custom Scrollbar Styling */}
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
                `}
            </style>

            {/* Brochure Modal */}
            {selectedBrochure && (
                <BrochureModal
                    isOpen={isBrochureModalOpen}
                    onClose={() => setIsBrochureModalOpen(false)}
                    brochureType={selectedBrochure.type}
                    brochureTitle={selectedBrochure.title}
                />
            )}
        </div >
    );
};

export default Page;