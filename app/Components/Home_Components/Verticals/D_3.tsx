"use client";

const D_3 = () => {
  return (
    <section
      className="
        relative w-full min-h-screen overflow-hidden
         text-black
        bg-[#1e1e1e] dark:text-white
        transition-colors duration-300
      "
    >
      {/* Dark Mode Overlay */}
      <div
        className="
          pointer-events-none absolute inset-0 z-0
          hidden dark:bg-[#1e1e1e]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto
          px-6 py-28
          grid grid-cols-1 lg:grid-cols-2
          items-center gap-16
        "
      >
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            Exceptional legal service
            <br />
            <span className="opacity-80">
              exceeded expectations
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-[#94cb3d] my-8" />

          <p className="max-w-xl mb-8 text-gray-600 dark:text-gray-400">
            Working with their team was a seamless experience. Their professionalism,
            attention to detail, and dedication truly set them apart.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="tel"
              placeholder="(+91) 780-000-0097"
              className="
                bg-transparent
                border border-gray-400 dark:border-gray-600
                px-6 py-4 rounded-full
                text-black dark:text-white
                placeholder-gray-400
                outline-none
                focus:border-[#94cb3d]
                transition
              "
            />

            <button
              className="
                bg-[#94cb3d] text-black
                px-8 py-4 rounded-full
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Founder & Managing Director
            </button>
          </div>

          {/* Quote */}
          <blockquote className="mt-12 italic text-gray-500 dark:text-gray-400 max-w-lg">
            “Exceptional legal service, exceeded expectations, highly recommend their expertise.”
          </blockquote>

          {/* Signature */}
          <p className="mt-4 text-gray-400 text-xl">
            — Khalid Ansari
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[50vh] w-full">
          <img
            src="/Founders/Khalid_Ansari.jpg"
            alt="Founder Khalid Ansari"
            className="
              w-full h-full object-cover
              rounded-xl shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default D_3;
