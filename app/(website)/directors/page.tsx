"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { directors } from "@/app/data/directors";

const BrandColor = "#94cb3d";

export default function DirectorsPage() {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen relative font-sans selection:bg-[#94cb3d] selection:text-black">
      
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
            src="/Gallery/AMN_4972.jpeg"
            alt="Board of Directors"
            fill
            className="object-cover scale-105 opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-1 h-24 bg-[#94cb3d]"></div>
            <div>
              <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none uppercase">
                Executive <br />
                <span className='text-[#94cb3d]'>Board</span>
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Innovation is led by vision. Meet the guardians of Coral Group's global legacy.
          </p>
        </div>
      </header>

      {/* Directors Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {directors.map((director, index) => (
            <motion.div
              key={director.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-[#1f2833]/30 border border-[#45a29e]/10 rounded-[2.5rem] overflow-hidden hover:border-[#94cb3d]/40 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent md:hidden"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[#94cb3d] font-bold tracking-widest text-[10px] uppercase mb-2 block">
                      {director.role}
                    </span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#94cb3d] transition-colors leading-none">
                      {director.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-4 font-medium leading-relaxed mb-6 italic">
                      "{director.quote}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                     <Link 
                        href={`/directors/${director.slug}`}
                        className="flex items-center justify-between bg-white/5 border border-white/10 px-6 py-4 rounded-full group-hover:bg-[#94cb3d] group-hover:text-black transition-all duration-500"
                     >
                        <span className="text-xs font-black uppercase tracking-widest">View Profile</span>
                        <ArrowUpRight size={18} />
                     </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Ribbon */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
         <div className="flex whitespace-nowrap gap-20 items-center opacity-20">
            {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex gap-20 items-center shrink-0">
                  <h4 className="text-5xl font-black italic uppercase tracking-tighter">Integrity</h4>
                  <div className="w-4 h-4 bg-[#94cb3d] rounded-full"></div>
                  <h4 className="text-5xl font-black italic uppercase tracking-tighter">Vision</h4>
                  <div className="w-4 h-4 bg-[#94cb3d] rounded-full"></div>
                  <h4 className="text-5xl font-black italic uppercase tracking-tighter">Excellence</h4>
                  <div className="w-4 h-4 bg-[#94cb3d] rounded-full"></div>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
