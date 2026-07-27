"use client";

export default function AuroraSection() {
  return (
    <section className="relative w-full bg-[#0e1111] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGES */}
        <div className="relative">
          {/* Large Image */}
          <img
            src="/Products/p2.jpeg"
            alt="Luxury Villa"
            className="rounded-xl w-full h-[420px] object-cover"
          />

          {/* Small Floating Image */}
          <img
            src="/Products/p3.jpeg"
            alt="Interior View"
            className="absolute -bottom-10 -right-10 w-[260px] h-[180px] object-cover rounded-xl border border-white/10 shadow-xl hidden md:block"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-10 text-white">

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Aurora
          </h2>

          <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
            <li>• Panoramic architectural excellence</li>
            <li>• Seamless indoor–outdoor living spaces</li>
            <li>• Premium materials & modern aesthetics</li>
            <li>• Designed for luxury & timeless value</li>
            <li>• Smart layouts with natural light flow</li>
          </ul>

          {/* CTA */}
          <button className="mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition">
            Explore Project
            <span className="text-lg">→</span>
          </button>

        </div>
      </div>
    </section>
  );
}
