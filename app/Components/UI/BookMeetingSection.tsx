"use client";

import { useState } from "react";

type ActiveTab = "inquiry" | "booking";

const BookMeetingSection = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("inquiry");

  return (
    <section className="w-full md:pt-40 bg-[#0e0e0e] py-2 px-4 h-[100%]">
      <div className="max-w-7xl mx-auto h-[100%]">
        <div className="bg-[#0e0e0e] rounded-3xl px-6 md:px-16 md:py-12 py-4 flex flex-col lg:flex-row gap-12 relative overflow-hidden h-[100%]">

          {/* Decorative Circles */}
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full"></div>

          {/* Left Content */}
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-[20px] md:text-5xl font-bold text-white mb-0">
              Let’s Talk <br /> About Your Project
            </h2>

            <p className="text-white/80 text-base leading-relaxed max-w-md md:block hidden">
              Whether you’re looking for custom carpets or want to discuss
              hospitality or B2B projects, our experts are ready to help you.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 w-full flex justify-center relative z-10 ">
            <div className="bg-white text-black rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md">

              {/* Tabs */}
              <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveTab("inquiry")}
                  className={`w-1/2 py-3 text-sm font-semibold transition ${
                    activeTab === "inquiry"
                      ? "bg-[#B4A077] text-white"
                      : "text-gray-600"
                  }`}
                >
                  Carpet Inquiry
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("booking")}
                  className={`w-1/2 py-3 text-sm font-semibold transition ${
                    activeTab === "booking"
                      ? "bg-[#B4A077] text-white"
                      : "text-gray-600"
                  }`}
                >
                  Book Meeting
                </button>
              </div>

              {/* Carpet Inquiry Form */}
              {activeTab === "inquiry" && (
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                  />

                  <input
                    type="text"
                    placeholder="Carpet Size (e.g. 8x10 ft)"
                    className="form-input"
                  />

                  <select className="form-input">
                    <option value="">Project Type</option>
                    <option value="residential">Residential</option>
                    <option value="hotel">Hotel / Resort</option>
                    <option value="commercial">Office / Commercial</option>
                    <option value="b2b">B2B / Trade</option>
                  </select>

                  <textarea
                    rows={3}
                    placeholder="Describe your carpet requirement"
                    className="form-input resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#B4A077] text-white py-3 rounded-lg font-semibold hover:bg-[#9c8a64] transition"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}

              {/* Booking Form */}
              {activeTab === "booking" && (
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                  />

                  <input
                    type="date"
                    className="form-input"
                  />

                  <select className="form-input">
                    <option value="virtual">Virtual Meeting</option>
                    <option value="office">Office Meeting</option>
                    <option value="call">Phone Call</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-[#B4A077] text-white py-3 rounded-lg font-semibold hover:bg-[#9c8a64] transition"
                  >
                    Book Meeting
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Input Style */}
      <style jsx>{`
        .form-input {
          width: 100%;
          background: #f3f4f6;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          outline: none;
          font-size: 0.875rem;
        }
        .form-input:focus {
          box-shadow: 0 0 0 2px rgba(180, 160, 119, 0.6);
        }
      `}</style>
    </section>
  );
};

export default BookMeetingSection;
