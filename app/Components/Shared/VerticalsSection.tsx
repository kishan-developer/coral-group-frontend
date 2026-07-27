"use client";

import Link from "next/link";

const verticals = [
  {
    title: "Coral Greens",
    slug: "coral-greens",
    image: "./gallery/P1260245.jpg",
  },
  {
    title: "Coral Fashion",
    slug: "coral-fashion",
    image: "./gallery/P1260246.jpg",
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    image: "./gallery/P1260247.jpg",
  },
  {
    title: "Exports",
    slug: "exports",
    image: "./gallery/P1260248.jpg",
  },
  {
    title: "Interior",
    slug: "interior",
    image: "./gallery/P1260249.jpg",
  },
  {
    title: "Foundation",
    slug: "foundation",
    image: "./gallery/P1260250.jpg",
  },
];

export default function VerticalsSection() {
  return (
    <section className="py-20 bg-gray-50 h-screen">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black text-center mb-12">
        Our Verticals
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {verticals.map((item, i) => (
          <Link
            key={i}
            href={`/verticals/${item.slug}`}
            className="
              group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110 transition-transform duration-700
                "
              />
            </div>

            {/* Title */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <div className="flex h-full items-center justify-center">
                <p className="text-white text-2xl font-semibold tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
