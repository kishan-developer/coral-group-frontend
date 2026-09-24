"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Home,
    MapPinHouse,
    ServerIcon,
    Mail,
    Menu,
    X,
    ChevronDown,
    LucideNewspaper,
    MenuIcon,
    HomeIcon,
    BotOffIcon,
    CalendarSearch,
    User,
    Contact,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Twitter,
    Expand,
    Shrink,
} from "lucide-react";
import ThemeToggle from "@/app/ThemeToggle";


type NavItem = {
    icon: any;
    label: string;
    href?: string;
    submenu?: { label: string; href: string }[];
};

export default function Transparent_Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        if (!isFullscreen) {
            document.documentElement.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    // Listen for fullscreen changes (e.g., when user presses Esc)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const navItems: NavItem[] = [
        // { icon: Home, label: "Home", href: "/" },

        {
            icon: MapPinHouse,
            label: "Company",
            href: "/",
            submenu: [
                { label: "About Us", href: "/company/about" },
                { label: "Team Members", href: "/company/team_members" },
                { label: "Projects", href: "/company/projects" },
                { label: "Gallery", href: "/company/gallery" },
                // { label: "Events", href: "/news/events" },
                { label: "Blogs", href: "/blog" },
            ],
        },
        {
            icon: ServerIcon,
            label: "Verticals",
            href: "/verticals",
            submenu: [
                { label: "Coral Greens Buildtech", href: "/verticals/coral_greens_buildtech" },
                { label: "Coral Fashion Emporio", href: "/verticals/coral_fashion_emporio" },
                { label: "Coral Exports", href: "/verticals/coral_exports" },
                { label: "Coral Hotels and Resorts", href: "/verticals/coral_hotels_and_resorts" },
                { label: "Coral Foundation", href: "/verticals/coral_foundation" },
            ],
        },

        {
            icon: LucideNewspaper,
            label: "Directors",
            submenu: [
                // { label: "Mr. Anas Ansari", href: "/directors/anas_ansari" },
                { label: "Mr. Khalid Ansari", href: "/directors/khalid_ansari" },
                // { label: "Mrs. Aisha Ansari", href: "/directors/aisha_ansari" },
                // { label: "Mrs. Rumana Ansari", href: "/directors/rumana_ansari" },
                // { label: "Mrs. Aamir Ansari", href: "/directors/aamir_ansari" },
            ],
        },
        // { icon: Mail, label: "Contact", href: "/contact" },
        // { icon: Instagram, label: "Social Media", href: "/social_media" },
        // { icon: User, label: "Careers", href: "/company/careers" },
        { icon: Contact, label: "Contact", href: "/contact" },
    ];

    const toggleMobileSubmenu = (idx: number) => {
        setOpenSubmenu(openSubmenu === idx ? null : idx);
    };

    return (
        <header id="header" className="bg-[#1e1e1e]/80 md:bg-[#1e1e1e]/60 md:h-40 opacity-100  fixed w-full h-20 py-5 md:py-0 top-0 z-[200] cursor-pointer">

            <div className="hidden header text-white h-10 w-full md:flex items-center justify-around text-sm px-4">
                <div className="flex gap-4 mt-6">
                    <a href="https://www.facebook.com/coralgroupoff" className="w-10 h-10 bg-[#94cc3c]/70 rounded-lg flex items-center justify-center bg-[#94cc3c]/50 transition">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/coralgroupoff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-[#94cc3c]/70 rounded-lg flex items-center justify-center bg-[#94cc3c]/50 transition">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/coralgroupoff/posts/?feedView=all" className="w-10 h-10 bg-[#94cc3c]/70 rounded-lg flex items-center justify-center bg-[#94cc3c]/50 transition">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/@CoralGroupVns" className="w-10 h-10 bg-[#94cc3c]/70 rounded-lg flex items-center justify-center bg-[#94cc3c]/50 transition">
                        <Youtube className="w-5 h-5" />
                    </a>
                </div>
                <div className="flex">
                    Phone : (+91) 780-000-0097 | Email : info@coral-group.in
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex">
                <div className="flex items-center justify-between h-fit w-full  ">

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-2 text-white  cursor-pointer   w-[30%] ">

                    </div>

                    {/* Logo */}
                    <Link href="/" className=" flex flex-1 items-center justify-center  ">
                        <div className="p-2 flex items-center justify-center lg:w-[80%] w-full h-full ">
                            <img
                                // src="/Coral-Group-Logo.png"
                                src="/Coral_3.png"
                                alt="logo"
                                className="lg:w-[80%] md:w-[80%] w-[70%] h-auto  object-contain  "
                            />
                        </div>
                    </Link>


                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-end justify-end gap-4 w-[30%]">
                        {/* Fullscreen Toggle Button */}
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 text-white hover:text-[#94cb3d] hover:bg-white/10 rounded-lg transition-all"
                            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        >
                            {isFullscreen ? (
                                <Shrink className="w-5 h-5" />
                            ) : (
                                <Expand className="w-5 h-5" />
                            )}
                        </button>
                       
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-[#94cb3d] hover:bg-gray-100"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 relative">
                        {navItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="relative group">
                                    <Link
                                        href={item.href || "#"}
                                        className="flex items-center gap-2 text-gray-700 hover:text-[#94cb3d] transition"
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                        <span className="uppercase text-white">{item.label}</span>
                                        {item.submenu && (
                                            <ChevronDown className="w-4 h-4 mt-[2px] text-white" />
                                        )}
                                    </Link>

                                    {/* Desktop Submenu */}
                                    {item.submenu && (
                                        <div className="invisible md:w-[fit] lg:w-[20vw] px-5  opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-0 bg-[#1e1e1e] text-white  shadow-lg rounded-lg p-4 w-48 z-[200]">
                                            {item.submenu.map((sub, subIdx) => (
                                                <Link
                                                    key={`${item.label}-${subIdx}`}
                                                    href={sub.href}
                                                    className="block text-gray-300 hover:text-[#94cb3d] py-2"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>


                    {/* Mobile Menu Button */}
                    {/* <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-gray-900"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button> */}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#1e1e1e]/80 text-white w-full absolute left-0 top-full z-[150]">
                    <nav className="px-4 py-4">

                        {navItems.map((item, idx) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.label} className="mb-3 ">
                                    <button
                                        className="flex w-full items-center justify-between text-gray-300 hover:text-[#94cb3d] py-2 "
                                        onClick={() =>
                                            item.submenu ? toggleMobileSubmenu(idx) : setMobileMenuOpen(false)
                                        }
                                    >
                                        <span className="flex items-center gap-3 hover:text-[#94cb3d]">
                                            <Icon className="w-5 h-5" />
                                            {item.label}
                                        </span>

                                        {item.submenu && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition ${openSubmenu === idx ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </button>

                                    {/* Mobile Submenu */}
                                    {item.submenu && openSubmenu === idx && (
                                        <div className="pl-10 space-y-2 mt-2">
                                            {item.submenu.map((sub, subIdx) => (
                                                <Link
                                                    key={`${item.label}-${subIdx}`}
                                                    href={sub.href}
                                                    className="block text-gray-500 py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Direct Links */}
                                    {/* {!item.submenu && (
                                        <Link
                                            href={item.href || "#"}
                                            className="block ml-10 text-gray-600"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Open
                                        </Link>
                                    )} */}
                                </div>
                            );
                        })}


                    </nav>
                </div>
            )}
        </header>
    );
}
