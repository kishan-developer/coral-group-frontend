"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Globe, Building2, ShoppingBag, Truck, Plane, Heart, Info } from "lucide-react";
import { verticals } from "@/app/data/verticals";

export default function VerticalsLandingPage() {
  return (
    <div className="bg-[#1e1e1e] text-white selection:bg-[#94cb3d] selection:text-black min-h-screen relative font-sans">
      
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* HERO SECTION */}
      <header className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/New_Banner_Images/CAM_6_NEW_FINAL.jpg"
            alt="Verticals Hero"
            fill
            className="object-cover scale-105 opacity-50"
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
                Verticals
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Diversified excellence across Real Estate, Luxury Retail, International Trade, and Philanthropy.
          </p>
        </div>
      </header>

      {/* 2. Verticals Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {verticals.map((vertical, idx) => (
            <Link 
              key={vertical.slug} 
              href={`/verticals/${vertical.slug}`}
              className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#94cb3d]/20 transition-all duration-700 bg-[#141414]"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={vertical.heroImage}
                  alt={vertical.title}
                  fill
                  className="object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                <div className="mb-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[#94cb3d] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block opacity-0 group-hover:opacity-100 transition-opacity">Business Sector {idx + 1}</span>
                  <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#94cb3d] transition-colors">{vertical.title}</h2>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest leading-relaxed mb-8 line-clamp-2">
                    {vertical.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                  EXPLORE DEEP DIVE <ArrowRight className="w-5 h-5 text-[#94cb3d]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Global Stats Ribbon */}
      <section className="bg-[#0a0a0a] py-24 border-y border-white/5 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <h3 className="text-5xl font-black text-[#94cb3d] mb-2 tracking-tighter uppercase italic italic">50+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black">Global Offices</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-[#94cb3d] mb-2 tracking-tighter uppercase italic italic">25+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black">Vertical Assets</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-[#94cb3d] mb-2 tracking-tighter uppercase italic italic">12k+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black">Professionals</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-[#94cb3d] mb-2 tracking-tighter uppercase italic italic">15+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black">Retail Spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer CTA */}
      <section className="py-40 container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 italic italic">Join Our <br /> <span className="text-[#94cb3d]">Journey</span></h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 uppercase tracking-widest font-bold mb-16">
            Connecting industries, empowering communities, and shaping a sustainable future on a global scale.
          </p>
          <button className="bg-white text-black px-16 py-8 rounded-full font-black text-2xl hover:bg-[#94cb3d] transition-all hover:scale-105 active:scale-95 shadow-2xl">
            CONTACT GROUP HQ
          </button>
        </motion.div>
      </section>

      {/* Custom Styling */}
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
