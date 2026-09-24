"use client";

import React, { useState, useEffect } from 'react';
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
    Leaf
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, useInView, animate } from 'framer-motion';
import { useRef } from 'react';
import BoardOfDirectors from '../../home_2/Component/BoardOfDirectors';
import AboutCoralGroupSection from '../../home_2/Component/AboutCoralGroupSection';

const BrandColor = "#94cb3d";

const Counter = ({ value }: { value: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            // Extract the numeric part of the value (e.g., "450+" -> 450)
            const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
            const suffix = value.replace(/[0-9]/g, "");

            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate(latest) {
                    setDisplayValue(Math.floor(latest));
                },
            });

            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayValue}
            {value.replace(/[0-9]/g, "")}
        </span>
    );
};

const App = () => {
    const [isVisible, setIsVisible] = useState({});
    const journeyRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: journeyRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Stats Data
    const stats = [
        { label: "Years Experience", value: "25+", icon: Clock },
        { label: "Projects Completed", value: "450+", icon: Building2 },
        { label: "Global Offices", value: "12", icon: Globe },
        { label: "Happy Clients", value: "300+", icon: Users },
    ];

    // Verticals Data
    const verticals = [
        {
            title: "Coral Buildtech",
            desc: "Premium real estate development through Coral Greens Buildtech since 2010.",
            icon: Building2
        },
        {
            title: "Coral Fashion",
            desc: "Emperio Private Limited — Heritage roots in Banarasi Saree, Carpets, and fine clothing.",
            icon: Briefcase
        },
        {
            title: "Global Exports",
            desc: "Robust and reliable Export-Import business with a legacy dating back to 1992.",
            icon: Globe
        },
        {
            title: "Coral Hospitality",
            desc: "Luxury SOK Hotels, Resorts, Brown Bakery, and the Masala Mist culinary brand.",
            icon: Heart
        },
        {
            title: "Coral Foundation",
            desc: "Committed to community welfare through medical camps, ashrams, and education.",
            icon: Heart
        },
        {
            title: "Coral Innovations",
            desc: "Bespoke services including Coral Interio, Skyline architecture, and Studios design.",
            icon: Zap
        },
    ];

    // Timeline Data
    const milestones = [
        {
            year: "1860",
            title: "The Beginning of a Legacy",
            desc: "The foundation of a business legacy rooted in Banarasi textiles, craftsmanship, trust, and entrepreneurial vision.",
        },
        {
            year: "1992",
            title: "Global Foundations",
            desc: "Launch of our flagship Export-Import business, establishing a presence in international trade.",

        },
        {
            year: "2010",
            title: "Real Estate Vision",
            desc: "Founding of Coral Greens Buildtech Private Limited (April 20), bringing luxury lifestyle to the forefront."
        },
        {
            year: "2015",
            title: "Coral Garden",
            desc: "Launch and approval of the iconic Coral Garden Project, setting new standards in premium residential spaces."
        },
        {
            year: "2018",
            title: "Coral Brown Bakery",
            desc: "Diving into the hospitality sector with the launch of Coral Brown Bakery."
        },
        {
            year: "2024",
            title: "Hotel - Resorts",
            desc: "Establishment of SOK Hotels & Resorts to redefine bespoke living."
        },
        {
            year: "2025",
            title: "Coral Skyline Innovations",
            desc: "Introduction of Masala Mist and the monumental Coral-Skyline project."
        },
        {
            year: "2026",
            title: "Coral Foundation",
            desc: "Dedicated to community welfare through large-scale medical camps and food donation drives."
        },
        {
            year: "2026",
            title: "Educational Initiative",
            desc: "Taking over a school to significantly improve educational standards and facilities."

        },
        {
            year: "2026",
            title: "Coral-Studios",
            desc: "Launching specialized studios focused on future-ready architectural and interior design."
        },
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
                            <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none uppercase">
                                About <br />
                                <span className='text-[#94cb3d]'>Us</span>
                            </h1>
                        </div>
                    </div>
                    <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
                        Founded in the heart of Taj State, Coral Group is a diversified conglomerate with heritage roots in Banarasi Saree, Carpets, and Global Trade—now shaping the skylines and lifestyles of tomorrow.
                    </p>
                </div>
            </header>



            <AboutCoralGroupSection />

            <div className="z-20 w-full h-fit flex items-center justify-center ">
                <BoardOfDirectors />
            </div>

            {/* 5. Our Journey / History */}
            <section id="journey" ref={journeyRef} className=" md:py-24  container mx-auto px-6 bg-[#1e1e1e]">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium mb-4">OUR JOURNEY</h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
                        From our humble beginnings to becoming a global force, explore the milestones that defined our heritage of excellence and innovation.
                    </p>
                </div>
                <div className="relative max-w-5xl mx-auto">
                    {/* Background Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>

                    {/* Animated "Fill" Line */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-[#94cb3d] hidden md:block origin-top z-10"
                        style={{ scaleY }}
                    />

                    <div className="space-y-12">
                        {milestones.map((m, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#94cb3d] shadow-[0_0_15px_#94cb3d] z-10"></div>
                                <div className="w-full md:w-1/2 text-center md:text-right px-8">
                                    <span className={`text-[#94cb3d] font-black text-4xl mb-2 block ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>{m.year}</span>
                                    <h6 className={`text-xl font-bold mb-2 ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>{m.title}</h6>
                                    <p className={`text-gray-500 text-sm ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>{m.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 3. Deep Mission & Vision (Expanded) */}
            <section
                id="mission-vision-expanded"
                className="py-20 md:py-32  relative overflow-hidden"
            >


                <div className="container mx-auto px-4  relative z-10">

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




            {/* NEW: 7.5 Why Choose Us Section */}
            <section id="why-choose-us" className="py-24 ">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[#94cb3d] font-serif font-medium tracking-widest uppercase mb-4">Core Strengths</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-medium uppercase leading-tight">
                            Why Choose <span className="text-[#94cb3d]">Coral Group</span>
                        </h3>
                        <div className="w-24 h-1 bg-[#94cb3d] mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[

                            {
                                title: "Luxury design standards",
                                icon: Award,
                                paragraph: "We combine elegant design, premium materials, and thoughtful craftsmanship to create sophisticated spaces that offer lasting comfort, beauty, and value."
                            },
                            {
                                title: "Transparent processes",
                                icon: ShieldCheck,
                                paragraph: "From planning to completion, we maintain clear communication, honest commitments, and complete transparency, helping our customers make confident, informed decisions."
                            },
                            {
                                title: "Industry expertise",
                                icon: Briefcase,
                                paragraph: "Our experienced professionals bring deep industry knowledge, strategic insight, and proven capabilities to successfully manage projects across multiple business sectors."
                            },
                            {
                                title: "On-time project delivery",
                                icon: Clock,
                                paragraph: "Strong planning, responsible execution, and efficient project management enable us to complete every development within the committed timeline without compromising quality."
                            },
                            {
                                title: "Sustainable innovation",
                                icon: Leaf,
                                paragraph: "We embrace environmentally responsible practices and modern technologies to create efficient, future-ready developments that support communities and protect natural resources."
                            },
                            { title: "Customer-first approach", icon: Users, paragraph: "Every decision begins with our customers. We understand their needs, provide dedicated support, and build lasting relationships through trust and satisfaction." }
                        ].map((s, i) => (
                            <div
                                key={i}
                                className={`p-8 rounded-1xl bg-[#111] border border-gray-800 hover:border-[#94cb3d]/40 hover:bg-[#151515] transition-all group ${i === 6 ? 'lg:col-span-2 lg:col-start-2' : ''}`}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] mb-6 group-hover:scale-110 transition-transform">
                                    <s.icon size={24} />
                                </div>
                                <h5 className="text-xl font-bold leading-snug">{s.title}</h5>
                                <p className="text-gray-500 text-sm mt-4  transition-opacity">
                                    {s.paragraph}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CSR & Commitment */}
            <section id="csr" className="py-24 bg-[#1e1e1e]">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 text-[#94cb3d]">
                            <Heart className="w-8 h-8" />
                            <span className="font-bold tracking-widest uppercase text-sm">Coral Foundation</span>
                        </div>
                        <h2 className="text-4xl font-serif font-medium mb-8 leading-tight uppercase">Giving Back to the Community</h2>
                        <p className="text-gray-400 text-lg mb-8 italic">
                            "We believe that true success is measured by the positive impact we leave on the communities we serve through the Coral Foundation."
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#94cb3d]/10 rounded-full flex items-center justify-center text-[#94cb3d] font-bold">01</div>
                                <p className="text-gray-300">Free Medical Camps in Underserved Regions</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#94cb3d]/10 rounded-full flex items-center justify-center text-[#94cb3d] font-bold">02</div>
                                <p className="text-gray-300">Regular Nutritious Food Donation Drives</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#94cb3d]/10 rounded-full flex items-center justify-center text-[#94cb3d] font-bold">03</div>
                                <p className="text-gray-300">Transforming local schools for better education</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/school.png"
                            className="rounded-1xl shadow-2xl  transition-all duration-700"
                            alt="school"
                        />
                    </div>
                </div>
            </section>

            {/* 9. Global Presence */}
            {/* <section id="presence" className="py-24 container mx-auto px-6">
                <div className="bg-[#1e1e1e] p-12 md:p-20 rounded-[3rem] border border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#94cb3d]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-black mb-8">GLOBAL REACH</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">With headquarters in Dubai and strategic offices across Asia, Europe, and the Americas, Coral Group operates at the heart of global development.</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-[#94cb3d]" size={18} />
                                    <span className="text-gray-300 font-bold">Dubai, UAE</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-[#94cb3d]" size={18} />
                                    <span className="text-gray-300 font-bold">London, UK</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-[#94cb3d]" size={18} />
                                    <span className="text-gray-300 font-bold">Singapore</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-[#94cb3d]" size={18} />
                                    <span className="text-gray-300 font-bold">New York, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full h-80 bg-gray-900/50 rounded-2xl flex items-center justify-center border border-gray-800 group overflow-hidden">
                            <img
                                src="/New_Banner_Images/CAM_3_FINAL_edited.jpg"
                                className="w-full h-full object-cover transition-all duration-700" alt="Map"
                            />

                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-20 hidden md:block md:py-32 container mx-auto px-2 md:px-6">
                <div className="bg-[#94cb3d] rounded-[2rem] md:rounded-[3rem] p-4 md:p-16 lg:p-20 text-black relative overflow-hidden">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Main Content & Buttons */}
                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
                                    BUILDING TRUST. <span className="underline decoration-black/20">CREATING LEGACIES.</span>


                                </h2>
                                <p className="text-lg md:text-xl font-medium opacity-80 max-w-xl">
                                    From landmark real estate developments to hospitality, fashion, and social initiatives, Coral Group builds meaningful experiences that create lasting value.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">

                                <a href="/contact" className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-black text-lg hover:bg-black hover:text-[#94cb3d] transition-all">
                                    CONNECT WITH CORAL GROUP
                                </a>
                            </div>
                        </div>

                        {/* Pointers Section */}
                        <div className="lg:col-span-5 bg-black/5 p-8 md:p-10 rounded-[2rem] backdrop-blur-sm border border-black/10">
                            <h4 className="text-2xl font-black mb-8 uppercase italic border-b border-black/20 pb-4">WHY CHOOSE CORAL GROUP?</h4>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Legacy of Excellence",
                                        desc: "A strong foundation built through years of quality, trust, and consistent performance.",
                                        icon: ShieldCheck,
                                    },
                                    {
                                        title: "Multiple Industries",
                                        desc: "Creating value across real estate, hospitality, fashion, and community initiatives.",
                                        icon: Globe,
                                    },
                                    {
                                        title: "Customer-First Approach",
                                        desc: "Understanding every customer’s needs and delivering experiences that exceed expectations.",
                                        icon: Zap,
                                    },
                                    {
                                        title: "Responsible Progress",
                                        desc: "Building sustainable businesses that benefit people, communities, and future generations.",
                                        icon: Leaf,
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-[#94cb3d] transition-colors">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg leading-tight">{item.title}</h5>
                                            <p className="text-sm opacity-70 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
            `}</style>
        </div>
    );
};

export default App;