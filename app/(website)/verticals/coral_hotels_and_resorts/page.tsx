"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Globe,
  Users,
  MessageCircle,
  TrendingUp,
  ArrowUpRight,
  Play,
  Heart,
  Share2,
  ExternalLink,
  Star,
  MapPin,
  Phone,
  Mail,
  Utensils,
  Calendar,
  Award,
  ChefHat
} from "lucide-react";

// import InstagramReel from "@/app/(website)/social_media/InstagramReel";
// import ReelPlayerModal from "@/app/(website)/social_media/ReelPlayerModal";

const BrandColor = "#94cb3d";

const REEL_IDS = [
  "DXUl7r_AY-t", "DXRhAM0ge16", "DXMTjYegfOx", "DXKJkyoAbd8", "DXHe0_-AY0-", "DW9Jis7gVTq",
  "DW50ld3gXvz", "DW1LhG-ATPJ", "DWoXGRLgUZN", "DWjAUf2gdsh", "DWgX2iagQiK", "DWbcXz2gUrq",
];

const HOTEL_STATS = [
  { label: "Luxury Rooms", value: "150+", icon: <Star size={24} /> },
  { label: "Guest Reviews", value: "4.9★", icon: <Heart size={24} /> },
  { label: "Cuisines", value: "12+", icon: <Utensils size={24} /> },
  { label: "Events Hosted", value: "500+", icon: <Calendar size={24} /> },
];

const PLATFORMS = [
  { name: "Instagram", icon: <Instagram size={18} />, color: "#E4405F", link: "https://www.instagram.com/coralgroupoff/" },
  { name: "LinkedIn", icon: <Linkedin size={18} />, color: "#0077B5", link: "https://www.linkedin.com/company/coralgroupoff/" },
  { name: "Facebook", icon: <Facebook size={18} />, color: "#1877F2", link: "https://www.facebook.com/coralgroupoff/" },
  { name: "YouTube", icon: <Youtube size={18} />, color: "#FF0000", link: "https://www.youtube.com/@CoralGroupVns" },
];

const HOTEL_FEATURES = [
  { icon: <Star size={32} />, title: "5-Star Luxury", desc: "Premium accommodations with world-class amenities" },
  { icon: <Utensils size={32} />, title: "Fine Dining", desc: "Multi-cuisine restaurants with award-winning chefs" },
  { icon: <Calendar size={32} />, title: "Event Spaces", desc: "Grand ballrooms for weddings and corporate events" },
  { icon: <Award size={32} />, title: "Excellence Award", desc: "Recognized for exceptional hospitality standards" },
];

export default function HotelsPage() {
  const [selectedReelId, setSelectedReelId] = useState<string | null>(null);
  const [visibleReels, setVisibleReels] = useState(8);

  const loadMore = () => {
    setVisibleReels(prev => Math.min(prev + 4, REEL_IDS.length));
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black pt-20">

      {/* 1. LUXURY HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hotel_Images/hotel_hero.jpg"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            alt="Coral Hotels & Resorts"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#94cb3d] font-black tracking-[0.5em] uppercase text-xs mb-8 block">Premium Hospitality</span>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none uppercase tracking-tighter italic">
              CORAL <br />
              <span className="text-[#94cb3d]">HOTELS</span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl text-gray-500 font-medium leading-relaxed italic border-l-2 border-[#94cb3d] pl-8">
              "Experience luxury redefined. From exquisite dining to world-class accommodations, discover the art of hospitality at Coral Hotels & Resorts."
            </p>
          </motion.div>
        </div>

        {/* Floating Platform Anchors */}
        <div className="absolute bottom-12 left-0 w-full px-6 flex justify-center gap-4">
          {PLATFORMS.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#94cb3d]/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="group-hover:text-[#94cb3d] transition-colors">{p.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">{p.name}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 2. HOTEL METRICS */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {HOTEL_STATS.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-[#94cb3d] mb-6 flex justify-center opacity-40 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-[#94cb3d] transition-colors">{stat.value}</h2>
                <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-black">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOTEL FEATURES */}
      <section className="py-32 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#94cb3d] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Excellence</span>
            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">Premium <span className="text-[#94cb3d]">Features</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOTEL_FEATURES.map((feature, idx) => (
              <div key={idx} className="group p-10 bg-[#141414] border border-white/5 hover:border-[#94cb3d]/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-[#94cb3d] mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm uppercase tracking-wide">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REELS GRID */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div>
              <span className="text-[#94cb3d] font-black tracking-[0.4em] uppercase text-xs mb-4 block italic">Hotel Showcase</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">HOTEL <br /> <span className="text-[#94cb3d]">GALLERY</span></h2>
            </div>
            <div className="max-w-md text-right">
              <p className="text-gray-500 text-sm font-black uppercase tracking-widest leading-relaxed mb-6">
                Explore our luxurious accommodations, fine dining experiences, and event spaces through our visual gallery.
              </p>
              <button
                onClick={() => setSelectedReelId(REEL_IDS[0])}
                className="inline-flex items-center gap-3 text-[#94cb3d] font-black uppercase text-[10px] tracking-[0.3em] group/btn"
              >
                Watch Latest <div className="w-8 h-8 rounded-full border border-[#94cb3d]/30 flex items-center justify-center group-hover/btn:bg-[#94cb3d] group-hover/btn:text-black transition-all">
                  <Play size={12} className="fill-current" />
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* Instagram Reels component commented out - missing files */}
            {/* {REEL_IDS.slice(0, visibleReels).map((id) => (
              <InstagramReel
                key={id}
                reelId={id}
                onClick={(id) => setSelectedReelId(id)}
              />
            ))} */}
          </div>

          {visibleReels < REEL_IDS.length && (
            <div className="mt-20 flex justify-center">
              <button
                onClick={loadMore}
                className="group flex flex-col items-center gap-4 text-white/40 hover:text-[#94cb3d] transition-colors"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Load More Content</span>
                <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent group-hover:from-[#94cb3d]/40" />
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#94cb3d]/30">
                  <Play size={20} className="fill-current rotate-90" />
                </div>
              </button>
            </div>
          )}

          {/* Hotel CTA Ribbon */}
          <div className="mt-32 p-16 bg-[#94cb3d] rounded-[3rem] text-black relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none italic">BOOK YOUR <br />STAY TODAY.</h2>
                <p className="text-xl font-bold opacity-70 tracking-tight uppercase">Experience luxury hospitality at its finest.</p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="px-12 py-6 bg-black text-white rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center gap-4">
                  <Phone size={24} /> CALL NOW
                </button>
                <button className="px-12 py-6 bg-white/20 backdrop-blur-md border border-black/10 text-black rounded-full font-black text-xl hover:bg-black hover:text-[#94cb3d] transition-all flex items-center gap-4">
                  <Mail size={24} /> SEND INQUIRY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REEL PLAYER MODAL */}
      {/* <ReelPlayerModal
        isOpen={!!selectedReelId}
        onClose={() => setSelectedReelId(null)}
        reelId={selectedReelId}
      /> */}

      {/* Decorative Style */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
      `}</style>
    </div>
  );
}
