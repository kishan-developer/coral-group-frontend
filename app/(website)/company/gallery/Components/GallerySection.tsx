"use client";

import React, { useState } from "react";
import { MapPin, IndianRupee } from "lucide-react";

interface Property {
  id: number;
  name: string;
  location: string;
  price?: string;
  image: string;
  category: string;
}

export default function GallerySection() {
  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Luxury",
    "Ongoing Projects",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const properties: Property[] = [
    {
      id: 1,
      name: "Luxury Villa",
      location: "Mumbai, India",
      price: "₹2.4 Cr",
      image: "/properties/villa-1.jpg",
      category: "Luxury",
    },
    {
      id: 2,
      name: "Modern Apartment",
      location: "Delhi, India",
      price: "₹90 Lakh",
      image: "/properties/apartment-1.jpg",
      category: "Residential",
    },
    {
      id: 3,
      name: "Corporate Office Tower",
      location: "Bangalore, India",
      price: "₹3.8 Cr",
      image: "/properties/commercial-1.jpg",
      category: "Commercial",
    },
    {
      id: 4,
      name: "Penthouse Suite",
      location: "Hyderabad, India",
      price: "₹4.1 Cr",
      image: "/properties/penthouse-1.jpg",
      category: "Luxury",
    },
    {
      id: 5,
      name: "Ongoing Smart City Project",
      location: "Pune, India",
      price: "₹1.6 Cr",
      image: "/properties/ongoing-1.jpg",
      category: "Ongoing Projects",
    },
  ];

  const filteredProperties =
    activeCategory === "All"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Property Gallery</h2>
          <p className="text-gray-600 mt-2">
            Explore our premium residential, commercial, and luxury properties.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {property.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-600 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>

                {property.price && (
                  <div className="flex items-center gap-1 mt-2 font-medium text-blue-700">
                    <IndianRupee className="w-4 h-4" />
                    <span>{property.price}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProperties.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No properties found in this category.
          </p>
        )}

      </div>
    </section>
  );
}
