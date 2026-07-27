"use client";

const D_4 = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left */}
          <div>
            <p className="text-sm text-green-600 font-medium mb-3">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Empower Your Business’s <br />
              Financial Future Effortlessly
            </h2>

            <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition">
              Get Started
            </button>
          </div>

          {/* Right */}
          <div>
            <p className="text-gray-500 leading-relaxed">
              Take control of your business’s financial future with effortless
              strategies that ensure stability and growth. Empower your
              decisions with expert insights, streamlining your path to
              long-term success. Focus on what matters most—growing your
              business.
            </p>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Story Card */}
          <div className="relative lg:col-span-2 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/team-meeting.jpg" // replace with your image
              alt="Our Story"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Our Story</h3>
              <p className="text-sm text-gray-200">
                TechInnovate, a leading IT company, revolutionizes the industry
                with cutting-edge AI solutions, driving innovation and
                connectivity for businesses worldwide.
              </p>
            </div>
          </div>

          {/* Mission + Vision */}
          <div className="flex flex-col gap-8">

            {/* Mission */}
            <div className="bg-green-100 rounded-3xl p-8 h-full">
              <h4 className="text-xl font-semibold mb-4">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To deliver innovative IT solutions that empower businesses.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-green-700 rounded-3xl p-8 h-full text-white">
              <h4 className="text-xl font-semibold mb-4">
                Our Vision
              </h4>
              <p className="text-green-100">
                To lead in technology and shape a smarter, more connected
                future.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default D_4;
