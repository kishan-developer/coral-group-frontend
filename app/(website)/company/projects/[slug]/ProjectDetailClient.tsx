"use client";

import React, { useState, useEffect } from 'react';
import {
    MapPin,
    ArrowLeft,
    CheckCircle2,
    Maximize2,
    Info,
    Calendar,
    Award,
    ShieldCheck,
    Zap,
    Globe,
    Compass,
    Activity,
    Layers,
    Layout,
    ChevronRight,
    Leaf,
    Clock,
    Download,
    Phone,
    X,
    Loader2,
    CheckCircle,
    User,
    Mail,
    Send
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/app/data/projects';
import BrochureModal from '@/app/Components/Shared/BrochureModal';

interface ProjectDetailClientProps {
    project: Project;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

function EnquiryModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');
    const [form, setForm] = useState({ clientName: '', email: '', phone: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setError('');
        try {
            const res = await fetch(`${API_BASE_URL}/queries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, propertyInterest: project.title, source: 'Project Page' }),
            });
            const data = await res.json();
            if (res.ok && data.success) { setStatus('success'); }
            else { setStatus('error'); setError(data.message || 'Submission failed.'); }
        } catch { setStatus('error'); setError('Network error. Please try again.'); }
    };

    const inp = 'w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-[#94cb3d] outline-none transition-all placeholder-gray-600';

    return (
        <div className='fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4' onClick={onClose}>
            <div className='relative w-full max-w-md bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden' onClick={e => e.stopPropagation()}>
                <div className='bg-gradient-to-r from-[#94cb3d] to-[#7ab532] px-6 py-4 flex items-center justify-between'>
                    <div>
                        <h2 className='text-lg font-bold text-black'>Enquire About This Project</h2>
                        <p className='text-black/70 text-xs font-medium'>{project.title}</p>
                    </div>
                    <button onClick={onClose} className='p-1.5 hover:bg-black/20 rounded-full transition-colors'><X className='text-black w-5 h-5' /></button>
                </div>
                <div className='p-6'>
                    {status === 'success' ? (
                        <div className='text-center py-6'>
                            <div className='w-16 h-16 bg-[#94cb3d]/20 rounded-full flex items-center justify-center mx-auto mb-4'><CheckCircle className='text-[#94cb3d] w-8 h-8' /></div>
                            <h3 className='text-xl font-bold text-white mb-2'>Enquiry Submitted!</h3>
                            <p className='text-gray-400 text-sm mb-6'>Our executive will contact you shortly. A confirmation has been sent to your email.</p>
                            <button onClick={onClose} className='bg-[#94cb3d] text-black px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#7ab532] transition-all'>Close</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            {status === 'error' && <div className='p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center'>{error}</div>}
                            <div className='relative'><User className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4' /><input type='text' required placeholder='Full Name *' value={form.clientName} onChange={e => setForm({ ...form, clientName: e.target.value })} className={`${inp} pl-10`} /></div>
                            <div className='relative'><Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4' /><input type='email' required placeholder='Email Address *' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={`${inp} pl-10`} /></div>
                            <div className='relative'><Phone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4' /><input type='tel' required placeholder='Phone Number *' value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={`${inp} pl-10`} /></div>
                            <textarea rows={3} placeholder='Your message or requirements...' value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inp} resize-none`} />
                            <button type='submit' disabled={status === 'submitting'} className='w-full bg-[#94cb3d] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#7ab532] transition-all disabled:opacity-50 flex items-center justify-center gap-2'>
                                {status === 'submitting' ? <><Loader2 className='w-4 h-4 animate-spin' /> Submitting...</> : 'Submit Enquiry'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({ project }) => {
    const [activeSection, setActiveSection] = useState('hero');
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    const [selectedBrochure, setSelectedBrochure] = useState<{ type: string; title: string } | null>(null);

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'stats', label: 'Stats' },
        { id: 'overview', label: 'Overview' },
        { id: 'vision', label: 'Vision' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'features', label: 'Features' },
        { id: 'specs', label: 'Specifications' },
        { id: 'amenities', label: 'Amenities' },
        { id: 'location', label: 'Connectivity' },
        { id: 'eco', label: 'Sustainability' },
        { id: 'timeline', label: 'Progress' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const handleBrochureClick = (type: string, title: string) => {
        setSelectedBrochure({ type, title });
        setIsBrochureModalOpen(true);
    };

    return (
        <div className="bg-[#0f0f0f] min-h-screen text-white font-sans selection:bg-[#94cb3d] selection:text-black overflow-hidden">


            {/* STICKY NAVIGATOR */}
            <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
                {sections.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className="group flex items-center justify-end gap-3 outline-none"
                    >
                        <span className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeSection === s.id ? 'opacity-100 text-[#94cb3d]' : 'opacity-0 group-hover:opacity-100 text-white'}`}>
                            {s.label}
                        </span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === s.id ? 'bg-[#94cb3d] scale-150 shadow-[0_0_10px_#94cb3d]' : 'bg-white/20 group-hover:bg-white/50'}`}></div>
                    </button>
                ))}
            </nav>

            {/* MOBILE NAVIGATOR */}
            <nav className="fixed top-20 inset-x-0 z-40 xl:hidden bg-black/60 backdrop-blur-xl border-b border-white/5 flex overflow-x-auto no-scrollbar py-4 px-6 gap-6">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${activeSection === s.id ? 'text-[#94cb3d]' : 'text-gray-500'}`}
                    >
                        {s.label}
                    </button>
                ))}
            </nav>

            {/* 01. CINEMATIC HERO */}
            <section id="hero" className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={project.image}
                        className="w-full h-full object-cover opacity-60"
                        alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href="/company/projects" className="inline-flex items-center gap-3 text-[#94cb3d] font-bold uppercase tracking-[0.2em] text-xs mb-6 group">
                                <div className="p-2 rounded-full border border-[#94cb3d]/30 group-hover:bg-[#94cb3d] group-hover:text-black transition-all">
                                    <ArrowLeft size={16} />
                                </div>
                                Back to Projects
                            </Link>


                            <h1 className="text-2xl md:text-7xl lg:text-8xl font-black uppercase mb-4 leading-none tracking-tighter">
                                {project.title}
                            </h1>
                            {/* <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                                Premium Living in {project.location.split(',')[0]}
                            </p> */}
                            <p className="text-white text-sm md:text-lg mb-8 max-w-xl">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => handleBrochureClick(project.slug, project.title)}
                                    className="flex-1 bg-[#94cb3d] text-black px-2 py-2 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-[#7ab532] transition-all flex items-center justify-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Brochure
                                </button>
                                <a
                                    href='/contact'
                                    className="flex-1 bg-transparent border-2 border-[#94cb3d] text-[#94cb3d] py-2 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-[#94cb3d] hover:text-black transition-all flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Contact Now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Scroll to explore</span>
                    <div className="w-px h-12 bg-white/20"></div>
                </motion.div>
            </section>

            {/* 02. PROJECT PULSE (STATS) */}
            <section id="stats" className="relative py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Maximize2, label: 'Total Area', value: project.area },
                            { icon: Layers, label: 'Project Type', value: project.type },
                            { icon: Activity, label: 'Current Status', value: project.status },
                            { icon: Globe, label: 'Location Hub', value: project.location }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#94cb3d]/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#94cb3d]/0 to-[#94cb3d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] mb-4 group-hover:bg-[#94cb3d] group-hover:text-black transition-all duration-300">
                                        <stat.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-gray-400 text-xs md:font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                                    <p className="text-sm md:text-md font-black uppercase tracking-tight text-white group-hover:text-[#94cb3d] transition-colors">{stat.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            {project.video && (
                <section id="video" className="relative py-16 md:py-24 bg-[#0a0a0a]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Project Tour</span>
                                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
                                    Experience <span className="text-[#94cb3d]">{project.title}</span>
                                </h2>
                            </div>
                            <div className="relative aspect-video rounded-lg md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <iframe
                                    src={`https://www.youtube.com/embed/${project.video.split('youtu.be/')[1]?.split('?')[0] || project.video.split('v=')[1]?.split('&')[0]}`}
                                    title={`${project.title} Video`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 03. THE NARRATIVE */}
            <section id="overview" className="py-10 md:py-32 overflow-hidden">
                <div className="container mx-auto px-2 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-10">
                            <div className="space-y-2 md:space-y-4">
                                <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs">Section 03</span>
                                <h2 className="text-2xl md:text-5xl font-black uppercase leading-none tracking-tighter">
                                    The <span className="text-[#94cb3d]">Narrative</span> <br />& Story
                                </h2>
                            </div>
                            <p className="text-gray-400 text-md md:text-2xl leading-relaxed font-light italic border-l-4 border-[#94cb3d] pl-8">
                                "{project.description}"
                            </p>
                            {/* <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                                {project.detailedDescription}
                            </p> */}
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="absolute -inset-10 bg-[#94cb3d]/10 rounded-full blur-[100px] -z-10"></div>
                            <img
                                src={project.gallery[0]}
                                className="w-full rounded-lg shadow-2xl border border-white/5"
                                alt="Side preview"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 04. ARCHITECTURAL VISION */}
            <section id="vision" className="py-10 md:py-32 bg-[#0a0a0a]">
                <div className="container mx-auto px-2 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <Compass className="w-12 h-12 text-[#94cb3d] mx-auto mb-6" />
                            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Architectural <span className="text-gray-500">Vision</span></h3>
                        </div>
                        <p className="text-2xl md:text-4xl text-white/90 leading-tight font-medium">
                            {project.vision || "Designing spaces that inspire movement and foster community connection through modular geometry."}
                        </p>
                        <div className="flex justify-center gap-2 md:gap-12 pt-8">
                            <div className="text-center">
                                <p className="text-md md:text-3xl font-black text-[#94cb3d]">MODERN</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Design Language</p>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-md md:text-3xl font-black text-[#94cb3d]">PRECISE</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 05. INTERACTIVE GALLERY */}
            <section id="gallery" className="py-10 md:py-32">
                <div className="container mx-auto px-2 md:px-6">
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">Visual <span className="text-[#94cb3d]">Showcase</span></h2>
                        <div className="hidden md:flex gap-4">
                            {/* Navigation could go here */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                        {project.gallery.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="relative group overflow-hidden rounded-2xl bg-black border border-white/5"
                            >
                                <img src={img} className="w-full h-full object-cover min-h-[400px] opacity-70 group-hover:opacity-100 transition-all duration-700" alt="Gallery" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#94cb3d]">Perspective 0{i + 1}</p>
                                    <h4 className="text-xl font-bold uppercase">{project.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 06. AMENITIES GRID */}
            <section id="amenities" className="py-32 bg-[#1a1a1a]/40 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#94cb3d]/5 rounded-full blur-[120px]"></div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-10">
                        <div className="lg:col-span-4 space-y-8">
                            <h3 className="text-lg md:text-4xl font-black uppercase leading-none tracking-tighter">Premium <span className="text-[#94cb3d]">Lifestyle</span> Amenities</h3>
                            <p className="text-gray-400">World-class amenities designed for comfort, convenience, and a modern lifestyle experience.</p>
                            <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#94cb3d] group">
                                View all amenities <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                        {project.amenities.map((amenity, i) => (
                            <div key={i} className="p-8 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-6 hover:border-[#94cb3d]/40 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <p className="text-lg font-bold text-gray-300 leading-tight">{amenity}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* 06. Connectivity */}
            <section id="amenities" className="py-32 bg-[#1a1a1a]/40 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#94cb3d]/5 rounded-full blur-[120px]"></div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-10">
                        <div className="lg:col-span-4 space-y-8">
                            <h3 className="text-4xl font-black uppercase leading-none tracking-tighter">Premium <span className="text-[#94cb3d]">connectivity</span></h3>
                            <p className="text-gray-400">Strategically located with excellent connectivity to major highways, airports, railway stations, and essential services.</p>
                            <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#94cb3d] group">
                                View all connectivity <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                        {project.connectivity?.map((connectivity, i) => (
                            <div key={i} className="p-8 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-6 hover:border-[#94cb3d]/40 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <p className="text-lg font-bold text-gray-300 leading-tight">{connectivity.landmark}</p>
                                <p className="text-sm text-gray-400">{connectivity.distance}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 03. THE NARRATIVE */}
            {/* <section id="overview" className="py-32 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-10">
                            <div className="space-y-4">
                                <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs">Section 03</span>
                                <h2 className="text-2xl md:text-5xl font-black uppercase leading-none tracking-tighter">
                                    The <span className="text-[#94cb3d]">Narrative</span> <br />& Story
                                </h2>
                            </div>
                            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light italic border-l-4 border-[#94cb3d] pl-8">
                                "{project.description}"
                            </p>
                            
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="absolute -inset-10 bg-[#94cb3d]/10 rounded-full blur-[100px] -z-10"></div>
                            <img 
                                src={project.gallery[4]} 
                                className="w-full rounded-lg shadow-2xl border border-white/5"
                                alt="Side preview"
                            />
                        </div>
                    </div>
                </div>
            </section> */}


            {/* 09. CONNECTIVITY HUB / LOCATION ADVANTAGE */}
            <section id="location" className="py-32 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs">Location Advantage</span>
                        <h2 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mt-4">
                            Proximity <span className="text-gray-500">& Travel</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <div className="space-y-4">
                                {[
                                    { icon: MapPin, title: "Head Office", content: "5th Floor, Tower C, Vinayak Plaza, Maldahiya, Varanasi 221002", link: "#" },
                                    { icon: Phone, title: "Phone", content: "+91 780-000-0097", link: "tel:+917800000097" },
                                    { icon: Mail, title: "Email", content: "info@coral-group.in", link: "mailto:info@coral-group.in" },
                                    { icon: Clock, title: "Office Hours", content: "Mon - Sat: 9:00AM - 7:00PM", link: null }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 rounded-md bg-white/[0.03] border-l-2 border-transparent hover:border-[#94cb3d] transition-all">
                                        <div className="w-12 h-12 bg-[#94cb3d]/10 rounded-full flex items-center justify-center text-[#94cb3d]">
                                            <item.icon size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{item.title}</p>
                                            {item.link ? (
                                                <a href={item.link} className="text-white font-bold text-sm hover:text-[#94cb3d] transition-colors">
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p className="text-white font-bold text-sm">{item.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-7 h-[500px] rounded-lg overflow-hidden bg-gray-900 border border-white/5 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40421.64841277028!2d82.95439067431634!3d25.324609599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2daff92d953b%3A0xd88bb9968e634f6e!2sCoralGroup!5e1!3m2!1sen!2sin!4v1783140587999!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>




            {showEnquiry && <EnquiryModal project={project} onClose={() => setShowEnquiry(false)} />}

            {/* Brochure Modal */}
            {selectedBrochure && (
                <BrochureModal
                    isOpen={isBrochureModalOpen}
                    onClose={() => setIsBrochureModalOpen(false)}
                    brochureType={selectedBrochure.type}
                    brochureTitle={selectedBrochure.title}
                />
            )}

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
};

export default ProjectDetailClient;
