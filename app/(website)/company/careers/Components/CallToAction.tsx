export default function CallToAction() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Future With Us?
        </h2>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join a fast-growing real estate company that values innovation, teamwork,
          and professional growth. Be part of our mission to create remarkable
          living and business spaces.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

          <a
            href="#open-positions"
            className="bg-white text-blue-700 hover:bg-blue-100 font-semibold rounded-full px-8 py-3 shadow-lg transition"
          >
            Apply Now
          </a>

          <a
            href="mailto:hr@yourcompany.com"
            className="border border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-full px-8 py-3 transition"
          >
            Contact HR
          </a>

        </div>

      </div>
    </section>
  );
}
