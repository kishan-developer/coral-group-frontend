"use client";
import { FC } from "react";
import { Leaf, FileText, Target, Flower2 } from "lucide-react";

const AboutDeals_Black_theme: FC = () => {
  const cards = [
    {
      title: "Our Story",
      desc: "We launched Paleovalley with the belief that every ingredient is an opportunity to improve your health.",
      icon: <FileText className="w-5 h-5 text-[var(--charcoal)]" />,
    },
    {
      title: "Our Mission",
      desc: "Our mission is to create products that always prioritize health over profit.",
      icon: <Target className="w-5 h-5 text-[var(--charcoal)]" />,
    },
    {
      title: "100% Organic",
      desc: "Many products claimed that their products are 100% pure, but our products are 100% Original.",
      icon: <Flower2 className="w-5 h-5 text-[var(--charcoal)]0" />,
    },
  ];

  return (
    <section className="w-full relative py-20 bg-[#1e1e1e] text-white h-screen flex flex-col items-center justify-center">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Heading */}
        <p className="text-white tracking-[6px] font-semibold text-sm mb-3">
          ABOUT US
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Why Our Deals Are <br /> Best In The Market
          </h2>

          <p className="text-white text-lg leading-relaxed">
            At Paleovalley, our mission is to help people reclaim vibrant
            health. We provide products that prioritize nutrient density in an
            industry that prioritizes everything else. We believe that every
            dietary choice and every added ingredient is a powerful opportunity
            to love and care for oneself.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#0e0e0e] p-7 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Leaf Top Icon */}
              <Leaf className="absolute -top-4 left-6 w-7 h-7 text-black bg-white rounded-full p-1 shadow-sm" />

              {/* Title Row */}
              <div className="flex justify-between items-start mb-4 text-white">
                <h3 className="text-xl font-heading text-white">
                  {item.title}
                </h3>
                <span className="text-white">{item.icon}</span>
              </div>

              {/* Description */}
              <p className="text-white mb-5 leading-relaxed font-body">
                {item.desc}
              </p>

              {/* CTA */}
              <button className="font-cormorant text-white font-medium hover:underline">
                Learn more
              </button>
            </div>
          ))}

        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mt-5">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#0e0e0e] p-7 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2"
                >
              
              <Leaf className="absolute -top-4 left-6 w-7 h-7 text-black bg-white rounded-full p-1 shadow-sm" />

             
              <div className="flex justify-between items-start mb-4 text-white">
                <h3 className="text-xl font-heading text-white">
                  {item.title}
                </h3>
                <span className="text-white">{item.icon}</span>
              </div>

              
              <p className="text-white mb-5 leading-relaxed font-body">
                {item.desc}
              </p>

              
              <button className="font-cormorant text-white font-medium hover:underline">
                Learn more
              </button>
            </div>
          ))}

        </div> */}


      </div>
    </section>
  );
};

export default AboutDeals_Black_theme;
