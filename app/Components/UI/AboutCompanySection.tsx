export default function AboutCompanySection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Top Heading + Stats */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Heading */}
          <div>
            <p className="text-sm text-gray-500 mb-3">About Our Company</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
              Innovative Influencer Marketing <br />
              to Boost Your Business
            </h2>
          </div>

          {/* Right Stats */}
          <div className="flex justify-between md:justify-end gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">10k+</h3>
              <p className="text-sm text-gray-500">Deal with Clients</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">1.5k+</h3>
              <p className="text-sm text-gray-500">Team Members</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">24.1k+</h3>
              <p className="text-sm text-gray-500">Completed Project</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/Products/p3.jpeg" // replace image path
              alt="Team Discussion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="grid gap-6">

            {/* Card 1 */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Ad Campaign Strategies
              </h4>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Our ad campaign strategies are designed to maximize your brand’s
                reach and impact, ensuring effective engagement and measurable results.
              </p>
              <button className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                Read More →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Content Strategy
              </h4>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Our content strategy focuses on creating engaging, relevant material
                that drives audience interaction and supports your business goals.
              </p>
              <button className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                Read More →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Business Scaling
              </h4>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Our expert strategies in business scaling help you expand operations
                efficiently and achieve sustainable long-term growth.
              </p>
              <button className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                Read More →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
