"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
    Play,
    X,
    ChevronRight,
    ChevronLeft,
    Maximize2,
    Calendar,
    ArrowRight,
    Search,
    Filter,
    CirclePlay
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BrandColor = "#94cb3d";

interface GalleryItem {
    id: number;
    category: string;
    title: string;
    size: "tall" | "wide" | "small";
    img: string;
    type?: "image" | "video";
    videoUrl?: string;
}

const Page = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [beforeAfterValue, setBeforeAfterValue] = useState(50);
    const [searchQuery, setSearchQuery] = useState("");

    // Categories
    const categories = [
        "All",
        "Development",
        "Videos",
        "Infrastructure",
        "Corporate",
        "Hospitality",
        "Leadership",
        "Highlights",
        "Team"
    ];

    // Comprehensive Gallery Data
    const galleryItems: GalleryItem[] = [
        // Videos
        { id: 100, category: "Videos", title: "Coral Group Corporate", size: "wide", img: "/slider/Banner.jpg", type: "video", videoUrl: "/logos.mp4" },
        { id: 101, category: "Videos", title: "Project Overview", size: "small", img: "/property/SK1.jpg", type: "video", videoUrl: "/logos.mp4" },
        
        // Development
        { id: 1, category: "Development", title: "Luxury Lift Lobby", size: "wide", img: "/New_Banner_Images/CAM_1_LIFT_LOBBY_FINAL.jpg" },
        { id: 2, category: "Development", title: "Premium HR Suite", size: "tall", img: "/New_Banner_Images/CAM_2_HR_FINAL.jpg" },
        { id: 3, category: "Development", title: "Modern Bedroom Suite", size: "small", img: "/New_Banner_Images/modern-luxury-bedroom-suite-bathroom.jpg" },
        { id: 4, category: "Development", title: "Exterior Facade", size: "wide", img: "/New_Banner_Images/CAM_3_FINAL.jpg" },
        { id: 5, category: "Development", title: "Urban Living Space", size: "small", img: "/New_Banner_Images/CAM_5_FINAL.jpg" },
        { id: 6, category: "Development", title: "Skyline View", size: "tall", img: "/New_Banner_Images/CAM_6_NEW_FINAL.jpg" },

        // Infrastructure
        { id: 20, category: "Infrastructure", title: "Coral Garden", size: "wide", img: "/property/coral_garden.jpg" },
        { id: 21, category: "Infrastructure", title: "Skyline Phase 1", size: "small", img: "/property/SK1.jpg" },
        { id: 22, category: "Infrastructure", title: "Skyline Phase 2", size: "tall", img: "/property/SK2.jpg" },
        { id: 23, category: "Infrastructure", title: "Skyline Phase 3", size: "small", img: "/property/SK3.jpg" },
        { id: 24, category: "Infrastructure", title: "Studio Complex", size: "wide", img: "/property/SK4.jpg" },

        // Corporate
        { id: 30, category: "Corporate", title: "Main Reception", size: "wide", img: "/Office/AMN_4991.jpeg" },
        { id: 31, category: "Corporate", title: "Executive Office", size: "tall", img: "/Office/AMN_5010.jpg" },
        { id: 32, category: "Corporate", title: "Collaboration Hub", size: "small", img: "/Office/AMN_5697.jpg" },
        { id: 33, category: "Corporate", title: "Meeting Space", size: "small", img: "/Office/AMN_5716.jpg" },
        // { id: 34, category: "Corporate", title: "Modern Boardroom", size: "wide", img: "/Office/AMN_5738.jpg" },

       

        // Leadership
        // { id: 50, category: "Leadership", title: "Chairman's Portrait", size: "tall", img: "/Founders/khalid_sir.jpg" },
        // { id: 51, category: "Leadership", title: "Executive Director", size: "small", img: "/Founders/anas_sir.jpg" },
        // { id: 52, category: "Leadership", title: "Managing Director", size: "small", img: "/Founders/aamir_sir.jpg" },
        // { id: 53, category: "Leadership", title: "Leadership Team", size: "wide", img: "/Founders/rumana_ansari.jpg" },

        // Highlights
        // { id: 60, category: "Highlights", title: "Project Banner", size: "wide", img: "/slider/Banner.jpg" },
        // { id: 61, category: "Highlights", title: "Coral Skyline", size: "small", img: "/slider/coral_skyline.jpeg" },
        { id: 62, category: "Highlights", title: "Coral Studio", size: "tall", img: "/slider/coral_studio.jpeg" },
        // { id: 63, category: "Highlights", title: "Modern Architecture", size: "small", img: "/slider/5.jpg" },
        { id: 64, category: "Highlights", title: "Interior Concept", size: "wide", img: "/slider/CAM_11_Final.jpg" },

        // Team
        { id: 70, category: "Team", title: "Team Member Ananya", size: "small", img: "/team/ananya.png" },
        { id: 71, category: "Team", title: "Team Member Aarti", size: "small", img: "/team/aarti.png" },
        { id: 72, category: "Team", title: "Team Member Shahzad", size: "small", img: "/team/shahzad.png" },
    ];

    // Filter Logic
    const filteredItems = useMemo(() => {
        let items = activeFilter === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);

        if (searchQuery) {
            items = items.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return items;
    }, [activeFilter, searchQuery]);

    const handleNextItem = () => {
        if (!selectedItem) return;
        const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
    };

    const handlePrevItem = () => {
        if (!selectedItem) return;
        const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
    };

    return (
        <div className="bg-[#0f0f0f] relative text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

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
            <header className="relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Office/AMN_4991.jpeg"
                        fill
                        className="object-cover scale-105 opacity-50"
                        alt="Office"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="w-1 h-24 bg-[#94cb3d]"></div>
                        <div>
                            <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>
                            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none uppercase">
                                Our <br />
                                <span className='text-[#94cb3d]'>Gallery</span>
                            </h1>
                        </div>
                    </div>
                    <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
                        Explore the visual journey of Coral Group's landmark projects, corporate culture, and technical brilliance.
                    </p>
                </div>
            </header>




            {/* SEARCH AND FILTERS */}
            <section className="sticky top-0 z-40 bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-white/5 py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#94cb3d] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search gallery..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 outline-none focus:border-[#94cb3d]/50 focus:bg-white/10 transition-all text-sm"
                            />
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full lg:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${activeFilter === cat
                                        ? "bg-[#94cb3d] text-black shadow-lg shadow-[#94cb3d]/20"
                                        : "bg-white/5 text-gray-400 border border-white/5 hover:border-[#94cb3d]/30"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MASONRY GALLERY */}
            <section className="py-20 container mx-auto px-6">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onClick={() => setSelectedItem(item)}
                                className="relative group overflow-hidden cursor-pointer bg-[#1a1a1a] border border-white/5 hover:border-[#94cb3d]/40 transition-all duration-500 aspect-square"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                </div>

                                {/* Video Indicator */}
                                {item.type === "video" && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <div className="w-16 h-16 rounded-full bg-[#94cb3d]/15 backdrop-blur-xl border border-[#94cb3d]/60 flex items-center justify-center text-[#94cb3d] scale-90 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-[#94cb3d]/25">
                                            <CirclePlay className="w-8 h-8 fill-current" />
                                        </div>
                                    </div>
                                )}

                                {/* Category Badge - Always Visible */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-sm font-black uppercase tracking-tight leading-none text-white mb-2">{item.title}</h3>
                                        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#94cb3d] hover:text-white transition-colors">
                                            {item.type === "video" ? "Play Video" : "View Details"} <Maximize2 className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>

                                {/* Border Glow */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#94cb3d]/30 transition-all duration-500 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-40">
                        <p className="text-gray-500 text-xl">No items found matching your criteria.</p>
                        <button onClick={() => { setActiveFilter("All"); setSearchQuery(""); }} className="mt-4 text-[#94cb3d] underline hover:text-white transition-colors">Clear all filters</button>
                    </div>
                )}
            </section>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0  inset-0 z-[180] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:pt-35"
                    >
                        {/* Top Bar */}
                        <div className="absolute top-60 left-0 right-0 z-[110] flex items-center justify-between p-6 md:p">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#94cb3d] hover:text-black transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-2 z-140">
                                <button
                                    onClick={handlePrevItem}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#94cb3d] hover:text-black transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNextItem}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#94cb3d] hover:text-black transition-all"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center mt-16">
                            {selectedItem.type === "video" ? (
                                <div className="md:w-[80%] max-h-[50vh] aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-black relative">
                                    <video
                                        key={selectedItem.videoUrl}
                                        src={selectedItem.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="relative w-full h-[50vh]">
                                    <Image
                                        key={selectedItem.img}
                                        src={selectedItem.img}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain rounded-2xl drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Info Bar */}
                            <div className="mt-6 w-full max-w-4xl">
                                <div className="flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                    <div>
                                        <span className="text-[#94cb3d] font-bold tracking-[0.2em] uppercase text-[10px] mb-1 block">{selectedItem.category}</span>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter text-white">{selectedItem.title}</h4>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2024</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                        <span>{selectedItem.type === 'video' ? 'Video' : 'HD'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PREMIUM BEFORE / AFTER */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#94cb3d]/40 to-transparent"></div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center gap-12">
                        {/* Header */}
                        <div className="text-center max-w-3xl">
                            <span className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Project Evolution</span>
                            <h2 className="text-4xl md:text-6xl font-black leading-none uppercase tracking-tighter mb-6">
                                From Concept To <span className="text-gray-500">Reality</span>
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Witness the meticulous journey of our flagship projects. From architectural blueprints and construction phases to the final premium finish.
                            </p>
                        </div>

                        {/* Slider */}
                        <div className="relative w-full max-w-5xl h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/50 border border-white/5 hover:border-[#94cb3d]/20 transition-all duration-500">
                            {/* AFTER */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/New_Banner_Images/CAM_1_LIFT_LOBBY_FINAL.jpg"
                                    alt="After"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* BEFORE */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${beforeAfterValue}%`, borderRight: `3px solid ${BrandColor}` }}
                            >
                                <Image
                                    src="/slider/bg2.jpg"
                                    alt="Before"
                                    fill
                                    className="object-cover brightness-50"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* LABELS */}
                            <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-widest">
                                Construction Phase
                            </div>
                            <div className="absolute top-6 right-6 px-5 py-2 rounded-full bg-[#94cb3d] text-black text-[10px] font-black uppercase tracking-widest shadow-xl shadow-[#94cb3d]/20">
                                Final Finish
                            </div>

                            {/* SLIDER INPUT */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={beforeAfterValue}
                                onChange={(e) => setBeforeAfterValue(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                            />

                            {/* SLIDER HANDLE */}
                            <div
                                className="absolute top-0 bottom-0 pointer-events-none z-20"
                                style={{ left: `calc(${beforeAfterValue}% - 1.5px)` }}
                            >
                                <div className="h-full w-[3px] bg-[#94cb3d] relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-[#94cb3d] rounded-full flex items-center justify-center shadow-2xl shadow-[#94cb3d]/30 hover:scale-110 transition-transform">
                                        <div className="w-1 h-4 bg-[#94cb3d] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase Indicators */}
                        <div className="flex items-center justify-center gap-8 md:gap-16">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94cb3d] font-black italic">01</div>
                                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Design Innovation</p>
                            </div>
                            <div className="w-px h-8 bg-white/10"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94cb3d] font-black italic">02</div>
                                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Technical Precision</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 container mx-auto px-6">
                <div className="bg-[#94cb3d] rounded-[3rem] p-12 md:p-24 text-black relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-125"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl md:text-5xl font-black leading-none uppercase tracking-tighter mb-8 italic">
                                Ready to see <br />more?
                            </h2>
                            <p className="text-xl md:text-2xl font-bold opacity-70 leading-relaxed uppercase tracking-tight">
                                Our projects are better experienced in person. Schedule a site visit to witness architectural greatness firsthand.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 w-full lg:w-auto">
                            <a href="/company/projects" className="bg-black text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-4">
                               Our Projects <ArrowRight className="w-6 h-6" />
                            </a>
                            <a href="/contact" className="bg-white/20 backdrop-blur-md border border-black/10 text-black px-12 py-6 rounded-full font-black text-xl hover:bg-black hover:text-[#94cb3d] transition-all">
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Page;
