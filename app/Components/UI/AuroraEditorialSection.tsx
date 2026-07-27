"use client";

export default function AuroraEditorialSection() {
  return (
    <section className="w-full h-[70vh] bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto h-full flex gap-8 items-stretch">

        {/* LEFT VERTICAL TITLE */}
        <div className="hidden md:flex items-center">
          <h2 className="text-black text-lg tracking-widest rotate-180 [writing-mode:vertical-rl]">
            Aurora
          </h2>
        </div>

        {/* LEFT IMAGE */}
        <div className="flex-1 h-full rounded-xl overflow-hidden ">
          <img
            src="/Products/p3.jpeg"
            alt="Aurora Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 bg-[#c9cfcc] rounded-xl flex flex-col justify-center p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">
            61×5 м
          </h3>

          <p className="text-sm text-black/70 leading-relaxed max-w-sm mx-auto">
            Просторные панорамные окна создают ощущение свободы и наполняют
            пространство естественным светом, объединяя интерьер с природой.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 rounded-xl overflow-hidden relative">
          <img
            src="/Products/p3.jpeg"
            alt="Aurora Exterior"
            className="w-full h-full object-cover"
          />

          {/* Decorative Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border border-white/60 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
