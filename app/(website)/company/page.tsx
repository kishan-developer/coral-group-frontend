import FAQ from '@/app/Components/Shared/FAQ'
import React from 'react'

export default function page() {
  return (
    <div className='w-full text-white bg-[#1e1e1e] relative min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black'>
      
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
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none uppercase">
                Company
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Explore our diverse business verticals and discover the legacy of excellence that defines Coral Group.
          </p>
        </div>
      </header>

      <FAQ />
    </div>
  )
}
