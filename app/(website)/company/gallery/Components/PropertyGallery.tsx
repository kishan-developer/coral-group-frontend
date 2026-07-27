"use client";
import React, { useState } from "react";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const galleryData: GalleryItem[] = [
  { 
    id: 1, 
    title: "Luxury Living Room", 
    category: "Living Room", 
    image: "/New_Banner_Images/CAM_1_LIFT_LOBBY_FINAL.jpg" 
  },
  { 
    id: 2, 
    title: "Modern Bedroom", 
    category: "Bedroom", 
    image: "/New_Banner_Images/CAM_2_HR_FINAL.jpg" 
  },
  { 
    id: 3, 
    title: "Premium Office Space", 
    category: "Office", 
    image: "/New_Banner_Images/CAM_2_LIFT_LOBBY_FINAL.jpg" 
  },
  { 
    id: 4, 
    title: "Construction Site", 
    category: "Construction", 
    image: "/New_Banner_Images/CAM_3_FINAL_edited.jpg" 
  },
  { 
    id: 6, 
    title: "Shopping Mall Interior", 
    category: "Commercial", 
    image: "/New_Banner_Images/CAM_3_FINAL.jpg"  
  },
  { 
    id: 7, 
    title: "Minimalist Kitchen", 
    category: "Kitchen", 
    image: "/New_Banner_Images/CAM_5_FINAL.jpg" 
  },
  { 
    id: 8, 
    title: "Luxury Bathroom", 
    category: "Bathroom", 
    image: "/New_Banner_Images/CAM_6_NEW_FINAL.jpg"  
  },
  { 
    id: 9, 
    title: "Modern Living Area", 
    category: "Living Room", 
    image: "/New_Banner_Images/CAM_8_NEW_FINAL.jpg" 
  },
  { 
    id: 10, 
    title: "Modern Meeting Room", 
    category: "Office", 
    image: "/New_Banner_Images/CAM_8B_FINAL.jpg"  
  },
  { 
    id: 11, 
    title: "Apartment Exterior", 
    category: "Exterior", 
    image: "/New_Banner_Images/CAM_9_NEW_FINAL.jpg" 
  }
  
];

export default function PropertyGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Auto-detect categories dynamically
  const categories = ["All", ...new Set(galleryData.map((item) => item.category))];

  const filteredItems =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 relative bg-[#1e1e1e] text-white">


       {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#94cb3d] uppercase">Gallery</h2>
          <p className="text-gray-600 mt-3">Browse images by category</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                ${
                  selectedCategory === cat
                    ? "bg-[#94cb3d] text-white shadow-md"
                    : "bg-white border text-gray-700 hover:text-white hover:bg-[#94cb3d]/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-t-lg hover:scale-105 transition-transform duration-500"
              />

              {/* <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.category}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-400 mt-10 text-lg">
            No images found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
