"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

interface Project {
  id: string;
  title: string;
  Configuration: string;
  type: string;
  location: string;
  image: string;
  Status: string
  Total_Project_Area: string;
  Average_Price: string;
  Unit_Size: string;
  RERA_ID: string;
  
}

const projects: Project[] = [
  
  {
    id: "02",
    title: "Coral Skyline",
    Configuration: "Luxury Living Made Affordable",  //Luxury Living Made Affordable
    type: "2,3 BHK FLATS AND 4 BHK SKY VILLAS", // 2,3 BHK FLATS AND 4 BHK SKY VILLAS
    Status :"Ongoing",
    Total_Project_Area :"~2 Acres",
    Average_Price: "₹2.15 Cr onwards(approx.)",
    Unit_Size: "~5200 sq.ft",
    RERA_ID: "UPRERAPRJ7213",
     location: "Opp. Toyota Showroom Rohaniya, Mohansarai Varanasi, U.P 221002, India",
    image: "/slider/coral_skyline.jpeg",
  },
  {
    id: "03",
    title: "Coral Studios",
    Configuration: "First time ever in Varanasi", // First time ever in Varanasi
    type: "FULLY FURNISHED* STUDIO APARTMENTS", // FULLY FURNISHED* STUDIO APARTMENTS
    Status :"Ongoing",
    Total_Project_Area :"2 Acres",
    Average_Price: "₹2.15 Cr onwards(approx.)",
    Unit_Size: "5200 sq.ft",
    RERA_ID: "UPRERAPRJ7213",
     location: "Harahua Varanasi, U.P. 221010, India",
    image: "/slider/coral_studio.jpeg",
  },
  {
    id: "01",
    title: "Coral Garden",
    Configuration: "4 BHK Villas",
    type: "Residential Villas",
    Status :"Sold Out",
    Total_Project_Area :"~2 Acres",
    Average_Price: "₹2.15 Cr onwards(approx.)",
    Unit_Size: "~5200 sq.ft",
    RERA_ID: "UPRERAPRJ7213",
    location: "Babatpur, Varanasi, Uttar Pradesh – 221006",
    image: "/property/coral_garden.jpg",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="bg-[#1e1e1e] relative w-[100%] text-white md:py-32 py-10">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <motion.div variants={card} className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-20">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#94cb3d] mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium">
              Architectural <span className="text-[#94cb3d]">Excellence</span>
            </h2>
          </div>

          <a
            href="/company/projects"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm tracking-wide text-[#94cb3d] hover:gap-4 transition-all"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-[280px] md:h-[360px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6 w-full">

                <button className={`top-5 left-5 text-black font-bold px-4 py-2 rounded-lg text-sm font-medium mb-3 ${project.Status === 'Sold Out' ? 'bg-red-500 text-white'  : 'bg-[#94cb3d]'}`}>
                  {project.Status}
                </button>
                
                <div className="flex items-center gap-4 mb-3">
                  <span className="border border-[#94cb3d]/50 text-xs px-3 py-1 text-[#94cb3d] capitalize">
                    {project.Configuration}
                  </span>

                </div>

                <h3 className="text-xl font-medium mb-2">
                  {project.title}
                </h3>
                <h2 className="text-xs text-white/60 mb-2 uppercase">
                  {project.type}
                </h2>

                <p className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin size={14} className="text-[#94cb3d]" />
                  {project.location}
                </p>
              </div>

              {/* NUMBER */}
              <span className="absolute top-6 right-6 text-6xl font-serif text-white/5">
                {project.id}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
