export default function D_2() {
  return (
    <section className="bg-[#1e1e1e] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white">
          <span className="text-6xl text-white/30 leading-none">“</span>

          <h2 className="mt-4 text-2xl md:text-3xl font-light leading-relaxed">
            Exceptional legal service, <br />
            exceeded expectations, <br />
            highly recommend their expertise.
          </h2>

          <p className="mt-6 text-white/60 max-w-md">
            Working with their team was a seamless experience. Their professionalism,
            attention to detail, and dedication truly set them apart.
          </p>

          <p className="mt-6 text-sm tracking-wide text-white/40 uppercase">
            Client Testimonial
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/Founders/Khalid_Ansari.jpg" // replace with your image path
            alt="Khalid_Ansari"
            className="rounded-lg object-cover w-full h-[420px]"
          />

          {/* Name Overlay */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-md shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900">
              Khalid_Ansari
            </h4>
            <p className="text-sm text-gray-600">
              Founder & Managing Director
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
