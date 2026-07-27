"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Newspaper, 
  Award, 
  MapPin, 
  ArrowUpRight, 
  Calendar,
  Building2,
  CheckCircle2,
  Timer,
  LayoutGrid
} from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  index: number;
}

const MetricCard = ({ label, value, icon, index }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className="relative p-10 bg-[#111] border border-white/5 rounded-[2.5rem] group hover:border-[#94cb3d]/30 transition-all overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#94cb3d]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
    <div className="text-[#94cb3d] mb-6 relative z-10">{icon}</div>
    <div className="relative z-10">
      <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter group-hover:text-[#94cb3d] transition-colors">{value}</h3>
      <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-black">{label}</p>
    </div>
  </motion.div>
);

interface ListSectionProps {
  title: string;
  items: { title: string; subtitle?: string; date?: string }[];
  icon: React.ReactNode;
}

const ListSection = ({ title, items, icon }: ListSectionProps) => (
  <div className="p-10 bg-[#111]/50 border border-white/5 rounded-[2.5rem] backdrop-blur-sm">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-12 rounded-2xl bg-[#94cb3d] flex items-center justify-center text-black">
        {icon}
      </div>
      <h4 className="text-2xl font-black uppercase tracking-tighter italic">{title}</h4>
    </div>
    <div className="space-y-8">
      {items.map((item, i) => (
        <div key={i} className="group border-b border-white/5 last:border-0 pb-6 last:pb-0">
          <div className="flex justify-between items-start mb-2">
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">{item.date}</span>
            <ArrowUpRight size={14} className="text-[#94cb3d] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h5 className="text-lg font-bold text-white group-hover:text-[#94cb3d] transition-colors uppercase leading-tight mb-2 tracking-tight">
            {item.title}
          </h5>
          {item.subtitle && (
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest leading-relaxed">
              {item.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

interface AchievementsAwardsProps {
  metrics: {
    experience: string;
    projects: string;
    sqft: string;
    awardsCount: string;
  };
  awards: { title: string; organization: string; year: string }[];
  press: { title: string; publication: string; date: string }[];
  honors: { title: string; field: string; year: string }[];
}

export default function AchievementsAwards({ metrics, awards, press, honors }: AchievementsAwardsProps) {
  return (
    <section className="py-32 container mx-auto px-6 relative overflow-hidden">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="max-w-2xl">
          <span className="text-[#94cb3d] font-black tracking-[0.4em] uppercase text-xs mb-4 block italic">Distinctions & Impact</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
            ACHIEVEMENTS <br /> & <span className="text-[#94cb3d]">AWARDS</span>
          </h2>
        </div>
        <div className="max-w-md text-right hidden lg:block">
          <p className="text-gray-500 text-sm font-black uppercase tracking-widest leading-relaxed border-r-2 border-[#94cb3d] pr-6">
            A legacy carved in stone, recognized by global industry bodies and celebrated through iconic urban transformations.
          </p>
        </div>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <MetricCard label="Years of Excellence" value={metrics.experience} icon={<Timer size={32} />} index={0} />
        <MetricCard label="Projects Delivered" value={metrics.projects} icon={<LayoutGrid size={32} />} index={1} />
        <MetricCard label="Total Sq Ft Delivered" value={metrics.sqft} icon={<Building2 size={32} />} index={2} />
        <MetricCard label="Awards & Recognitions" value={metrics.awardsCount} icon={<Trophy size={32} />} index={3} />
      </div>

      {/* DETAILED LISTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ListSection 
          title="Industry Honors" 
          icon={<Award size={24} />} 
          items={honors.map(h => ({ title: h.title, subtitle: h.field, date: h.year }))} 
        />
        <ListSection 
          title="Press Mentions" 
          icon={<Newspaper size={24} />} 
          items={press.map(p => ({ title: p.title, subtitle: p.publication, date: p.date }))} 
        />
        <ListSection 
          title="Key recognitions" 
          icon={<CheckCircle2 size={24} />} 
          items={awards.map(a => ({ title: a.title, subtitle: a.organization, date: a.year }))} 
        />
      </div>
    </section>
  );
}
