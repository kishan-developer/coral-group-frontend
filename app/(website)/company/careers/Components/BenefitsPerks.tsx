import React from "react";
import {
  Clock,
  HeartPulse,
  GraduationCap,
  Award,
} from "lucide-react";

export default function BenefitsPerks() {
  const perks = [
    {
      title: "Flexible Hours",
      description: "Work at your own pace with a schedule that suits you.",
      icon: <Clock className="w-12 h-12 text-white mx-auto mb-4" />,
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family.",
      icon: <HeartPulse className="w-12 h-12 text-white mx-auto mb-4" />,
    },
    {
      title: "Training & Development",
      description: "Continuous learning programs to grow your skills and career.",
      icon: <GraduationCap className="w-12 h-12 text-white mx-auto mb-4" />,
    },
    {
      title: "Performance Incentives",
      description: "Rewards and bonuses for achieving excellence in your work.",
      icon: <Award className="w-12 h-12 text-white mx-auto mb-4" />,
    },
  ];

  return (
    <section className="py-15 bg-[#1e1e1e]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#94cb3d]">Benefits & Perks</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We value our team and provide a range of benefits to ensure a
            productive and rewarding work environment.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {perk.icon}
              <h3 className="text-xl font-semibold text-[#94cb3d] mb-2">
                {perk.title}
              </h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
