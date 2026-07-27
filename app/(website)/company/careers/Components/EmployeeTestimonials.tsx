"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "Project Manager",
    image: "/team/amit.jpg",
    message:
      "Working at Coral Group has been a transformative journey. The leadership encourages innovation and gives us the freedom to execute ideas.",
  },
  {
    id: 2,
    name: "Priya Verma",
    position: "Sales Executive",
    image: "/team/priya.jpg",
    message:
      "The workplace culture is supportive and collaborative. The opportunities for growth have helped me advance my career rapidly.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    position: "Site Engineer",
    image: "/team/rajesh.jpg",
    message:
      "The team environment and work-life balance here are unmatched. It truly feels like working with a family.",
  },
];

export default function EmployeeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Employee Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Real experiences from our team members who make Coral Group a great workplace.
        </p>

        {/* Carousel Container */}
        <div className="relative w-full max-w-3xl mx-auto">

          {/* Testimonial Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center transition-all duration-500">
            <div className="flex justify-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
            </div>

            <p className="text-gray-700 text-lg italic mt-6">
              “{testimonials[currentIndex].message}”
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-blue-600 font-medium">
              {testimonials[currentIndex].position}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}
