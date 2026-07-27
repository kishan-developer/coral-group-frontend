"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Dot, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import BrochureModal from "./BrochureModal";

const slides = [
  {
    // img: "https://coralgroupwebsite.s3.eu-north-1.amazonaws.com/slider/CAM_2_HR_FINAL.jpg", // AWS S3 url
    img: "https://res.cloudinary.com/drmpv5vne/image/upload/f_auto,q_auto/CAM_2_HR_FINAL_high_quality_q100_lgitcg", // cloudinary url 
    title: "Building Sustainable Future Spaces",
    desc: "Coral Greens Buildtech delivers innovative real estate solutions focused on sustainability, modern architecture, and long-term value, creating smart living and commercial spaces that enhance lifestyles and communities.",
    pointer: [
      "Eco-friendly construction practices",
      "Modern residential & commercial projects",
      "Quality-driven infrastructure development"
    ],
    cta: "Explore Our Projects",
    link: "https://coral-group.in"
  },
  {
    // img: "https://coralgroupwebsite.s3.eu-north-1.amazonaws.com/slider/6.jpg",// AWS S3 url
    img: "https://res.cloudinary.com/drmpv5vne/image/upload/v1782220911/6_ut4ose.jpg",// cloudinary url
    title: "Redefining Style with Tradition",
    desc: "Coral Fashion Emporio blends traditional craftsmanship with contemporary fashion, offering premium clothing collections that celebrate culture, elegance, and global trends for modern customers seeking timeless style and quality.",
    pointer: [
      "Premium Banarasi & designer wear",
      "Fusion of traditional and modern styles",
      "High-quality fabrics and designs"
    ],
    cta: "Shop Latest Collection",
    link: "https://coral-group.in"
  },
  {
    // img: "https://coralgroupwebsite.s3.eu-north-1.amazonaws.com/slider/DSC_0254.JPG",
    img: "https://res.cloudinary.com/drmpv5vne/image/upload/v1782221865/DSC_0254_high_quality_q98_hjuqrh.jpg",// cloudinary url
    title: "Experience Luxury Comfort and Hospitality",
    desc: "Coral Hotels and Resorts offer exceptional hospitality experiences with luxurious accommodations, personalized services, and world-class amenities designed to provide comfort, relaxation, and unforgettable stays for every guest.",
    pointer: [
      "Premium hospitality services",
      "Luxury rooms and amenities",
      "Customer-focused experience",
    ],
    cta: "Book Your Stay",
    link: "https://coral-group.in"
  },
  {
    // img: "https://coralgroupwebsite.s3.eu-north-1.amazonaws.com/slider/7.jpg",
    img: "https://res.cloudinary.com/drmpv5vne/image/upload/v1782221366/slider_7_high_quality_q100_yqvkcg.jpg",// cloudinary url
    title: "Connecting Markets Across The Global",
    desc: "Coral Exports specializes in global trade, delivering high-quality products worldwide with reliable logistics, strong partnerships, and a commitment to excellence in international business and customer satisfaction.",
    pointer: [
      "Global import-export services",
      "Trusted international partnerships",
      "Quality assurance in every shipment"
    ],
    cta: "Explore Our Exports",
    link: "https://coral-group.in"
  },
  {
    img: "https://res.cloudinary.com/drmpv5vne/image/upload/v1782221654/p1_high_quality_q100_ftfxqq.jpg", // cloudinary url
    title: "Empowering Communities Creating Better Tomorrow",
    desc: "Coral Foundation is committed to social impact through education, sustainability, and community development initiatives, working to uplift lives and create meaningful change for a better and inclusive future.",
    pointer: [
      "Community development programs",
      "Education and awareness initiatives",
      "Sustainable social impact projects"
    ],
    cta: "Join Our Mission",
    link: "https://coral-group.in"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState<{ type: string; title: string } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleBrochureClick = (type: string, title: string) => {
    setSelectedBrochure({ type, title });
    setIsBrochureModalOpen(true);
  };

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
     

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 
          ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"}`}
        >
          <img
            src={slide.img}
            className={`w-full h-full object-cover
            transition-transform duration-[6000ms] ease-out
            ${index === current ? "scale-110" : "scale-100"}`}
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30" />

      {/* TEXT */}
      <div className="absolute z-40
        bottom-16 sm:bottom-20 lg:bottom-24
        px-4 sm:px-8 lg:left-16
        w-full lg:w-[70%] max-w-3xl">

          

          <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>

        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wide mb-4 leading-tight">
          {slides[current].title}
        </h1>

        <div className="flex">
          <p className="text-gray-200
            text-sm sm:text-base md:text-xl max-w-xl">
            {slides[current].desc}
          </p>
        </div>

        {slides[current].pointer && (
          <ul className="text-gray-300
            text-sm sm:text-base md:text-lg max-w-xl">
            {slides[current].pointer.map((pointer, index) => (
              <li key={index} className="list-disc flex items-center gap-2"><Dot className="w-10 h-10" /> {pointer}</li>
            ))}
          </ul>
        )}

        {/* buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="flex items-center justify-center gap-2 bg-[#94cb3d] text-black px-8 py-3 text-sm font-medium hover:opacity-90 transition">
            Contact Coral Group <ArrowRight size={16} />
          </a>
          <button
            onClick={() => handleBrochureClick("coral-skyline", "Coral Skyline")}
            className="px-4 py-3 text-sm font-medium border border-[#94cb3d]/50 text-[#94cb3d] hover:bg-[#94cb3d]/10 transition flex items-center gap-2"
          >
            <FileText size={16} /> Download Coral Skyline
          </button>
          <button
            onClick={() => handleBrochureClick("coral-studio", "Coral Studio")}
            className="px-4 py-3 text-sm font-medium border border-[#94cb3d]/50 text-[#94cb3d] hover:bg-[#94cb3d]/10 transition flex items-center gap-2"
          >
            <FileText size={16} /> Download Coral Studio
          </button>
        </div>

      </div>

      {/* ARROWS */}
      <div className="absolute z-50 
        bottom-6 sm:bottom-8
        right-4 sm:right-8 lg:right-16
        flex gap-4 sm:gap-6">

        <button
          onClick={prev}
          className="p-2 sm:p-3 rounded-full border border-white/40 
          hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={next}
          className="p-2 sm:p-3 rounded-full border border-white/40 
          hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Brochure Modal */}
      {selectedBrochure && (
        <BrochureModal
          isOpen={isBrochureModalOpen}
          onClose={() => setIsBrochureModalOpen(false)}
          brochureType={selectedBrochure.type}
          brochureTitle={selectedBrochure.title}
        />
      )}
    </div>
  );
}


