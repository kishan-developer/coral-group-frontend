"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Award,
  MapPin
} from 'lucide-react';
import FeaturedProjects from '../gallery/Components/FeaturedProjects';

const BrandColor = "#94cb3d";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function CoralGreensBuildtech() {
  const corePrinciples = [
    {
      title: "Smart & Efficient Space Utilization",
      desc: "Every square foot is designed for maximum functionality and comfort."
    },
    {
      title: "High-Grade Construction Materials",
      desc: "Premium materials and superior engineering ensure lasting quality."
    },
    {
      title: "Eco-Friendly Building Practices",
      desc: "Sustainable construction methods that respect our environment."
    },
    {
      title: "Strategic Locations",
      desc: "Projects in high-connectivity zones with strong future growth potential."
    },
    {
      title: "Long-Term Value Creation",
      desc: "Properties designed for appreciation and rental opportunities."
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      desc: "A customer-first approach with clear, ethical, and open communication from inquiry to possession."
    },
    {
      icon: Award,
      title: "Quality Execution",
      desc: "Durable materials, strong engineering, and attention to detail ensure long-lasting structures."
    },
    {
      icon: CheckCircle2,
      title: "Customer-Centric Approach",
      desc: "Personalized assistance throughout the buying process to ensure a smooth experience."
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      desc: "Commitment to eco-friendly building designs, green spaces, and responsible construction methods."
    },
    {
      icon: TrendingUp,
      title: "Strong Investment Value",
      desc: "Projects located in high-potential zones, ensuring appreciation, stability, and rental opportunities."
    }
  ];

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

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Office/AMN_4991.jpeg"
            className="w-full h-full object-cover scale-105 opacity-50"
            alt="Coral Greens Buildtech"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-1 h-24 bg-[#94cb3d]"></div>
            <div>
              <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Real Estate Excellence</p>
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none uppercase">
                Coral Greens <br />
                <span className='text-[#94cb3d]'>Buildtech</span>
              </h1>
            </div>
          </div>
          <p className="max-w-3xl text-gray-300 text-xl leading-relaxed ml-10">
            An innovative and growth-driven real estate development company dedicated to building sustainable, modern, and value-focused properties.
          </p>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed ml-10 mt-4">
            Founded by Khalid Ansari, the company has earned strong trust in the market through transparent operations, quality construction, and customer-first service.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="max-w-4xl"
          >
            <motion.div variants={item} className="mb-12">
              <h2 className="text-[#94cb3d] font-serif font-medium tracking-widest uppercase mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium uppercase leading-tight mb-8">
                Building Tomorrow's <span className="text-[#94cb3d]">Spaces</span>
              </h3>
              <div className="w-24 h-1 bg-[#94cb3d] mb-8"></div>
            </motion.div>

            <motion.div variants={item} className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                As a rapidly evolving real estate brand, Coral Greens Buildtech follows a development philosophy grounded in <span className="text-white font-medium">integrity</span>, <span className="text-white font-medium">quality craftsmanship</span>, and <span className="text-white font-medium">sustainable engineering</span>.
              </p>
              <p>
                Every project is strategically planned to offer high living standards and strong investment growth. With a mission to elevate urban living, Coral Greens Buildtech blends <span className="text-white font-medium">architectural excellence</span>, <span className="text-white font-medium">functional planning</span>, and <span className="text-white font-medium">future-ready design</span> to create residential and mixed-use spaces that deliver comfort, convenience, and long-term investment value.
              </p>
              <p>
                The company continues to expand its portfolio with well-planned residential and mixed-use projects designed for modern lifestyles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className=" z-20 w-full  flex items-center justify-center ">
        <FeaturedProjects />
      </div>

      {/* Core Development Principles */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item} className="text-center mb-16">
              <h2 className="text-[#94cb3d] font-serif font-medium tracking-widest uppercase mb-4">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium uppercase leading-tight">
                Core Development <span className="text-[#94cb3d]">Principles</span>
              </h3>
              <div className="w-24 h-1 bg-[#94cb3d] mx-auto mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="p-8 rounded-[1rem] bg-[#111] border border-gray-800 hover:border-[#94cb3d]/40 hover:bg-[#151515] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] mb-6 group-hover:scale-110 transition-transform">
                    <Building2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 leading-snug">{principle.title}</h4>
                  <p className="text-gray-500 text-sm">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Projects Section */}
      {/* <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item} className="text-center mb-16">
              <h2 className="text-[#94cb3d] font-serif font-medium tracking-widest uppercase mb-4">Our Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium uppercase leading-tight">
                Current <span className="text-[#94cb3d]">Projects</span>
              </h3>
              <div className="w-24 h-1 bg-[#94cb3d] mx-auto mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             
              <motion.div variants={item} className="group relative overflow-hidden rounded-[1rem] border border-gray-800">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src="/slider/coral_skyline.jpeg"
                    alt="Coral Skyline"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-3xl font-bold mb-2 uppercase">Coral Skyline</h4>
                  <p className="text-[#94cb3d] text-sm font-medium tracking-widest uppercase mb-4">Premium Residential Project</p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Crafted for urban families seeking comfort, luxury, and modern living. Features contemporary architecture, optimized layouts, and lifestyle amenities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Modern architectural elevation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Spacious and functional floor plans</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>High-quality fittings and interiors</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Secure gated community with surveillance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Lifestyle amenities for residents</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            
              <motion.div variants={item} className="group relative overflow-hidden rounded-[1rem] border border-gray-800">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src="/slider/coral_studio.jpeg"
                    alt="Coral Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-3xl font-bold mb-2 uppercase">Coral Studio</h4>
                  <p className="text-[#94cb3d] text-sm font-medium tracking-widest uppercase mb-4">Smart Living Spaces</p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    A vision for smart, compact, and efficient living spaces ideal for young professionals, entrepreneurs, and real estate investors. Designed with flexibility in mind.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Smart studio layouts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>High-efficiency space planning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Strong rental and investment value</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Modern, stylish interiors</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-[#94cb3d]" />
                      <span>Strategically located with excellent connectivity</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item} className="text-center mb-16">
              <h2 className="text-[#94cb3d] font-serif font-medium tracking-widest uppercase mb-4">Our Promise</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium uppercase leading-tight">
                Why Choose <span className="text-[#94cb3d]">Coral Greens Buildtech</span>
              </h3>
              <div className="w-24 h-1 bg-[#94cb3d] mx-auto mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((data, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="p-8 rounded-[1rem] bg-[#111] border border-gray-800 hover:border-[#94cb3d]/40 hover:bg-[#151515] transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#94cb3d]/10 flex items-center justify-center text-[#94cb3d] mb-6 group-hover:scale-110 transition-transform">
                    <data.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 leading-snug">{data.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{data.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="bg-[#94cb3d] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-black relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10 text-center">
              <motion.h2 variants={item} className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
                Invest In Your <span className="underline decoration-black/20">Future</span>
              </motion.h2>
              <motion.p variants={item} className="text-lg md:text-xl font-medium opacity-80 max-w-2xl mx-auto mb-8">
                Discover premium residential projects designed for modern living and strong investment returns.
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/company/projects"
                  className="bg-black text-white px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center"
                >
                  View Projects <MapPin className="ml-3 w-5 h-5" />
                </a>
                <a 
                  href="/company/contact"
                  className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-black text-lg hover:bg-black hover:text-[#94cb3d] transition-all"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}

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
}
