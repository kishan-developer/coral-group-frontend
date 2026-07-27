import { Users } from "lucide-react";
import React from "react";

export default function CompanyCulture() {
  const culturePoints = [
    {
      title: "Innovative Environment",
      description:
        "We foster creativity and innovation in every project, encouraging our team to think outside the box.",
      icon: <Users />,
    },
    {
      title: "Team Collaboration",
      description:
        "Collaboration is at our core. Our team works closely to achieve the best results for our clients.",
      icon: <Users />,
    },
    {
      title: "Growth Opportunities",
      description:
        "We provide continuous learning and career growth opportunities for our employees.",
      icon: <Users />,
    },
    {
      title: "Community & Events",
      description:
        "Regular team events and community initiatives to keep our workplace engaging and lively.",
       icon: <Users />,
    },
  ];

  return (
    <section className="py-20 bg-[#1e1e1e]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#94cb3d]">
            Working With Us
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            At [Company Name], we value a positive and inspiring work culture.
            Here’s what makes our workplace unique and why you’ll love being part
            of our team.
          </p>
        </div>

        {/* Culture Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturePoints.map((point, index) => (
            <div
              key={index}
              className="bg-black p-6 flex flex-col gap-3 items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >

              <span>
                {point.icon}
              </span>
              {/* <img
                src={point.icon}
                alt={point.title}
                className="w-16 h-16 mx-auto mb-4"
              /> */}
              <h3 className="text-xl font-semibold text-[#94cb3d] mb-2">
                {point.title}
              </h3>
              <p className="text-gray-200">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Team Images / Gallery */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/images/team1.jpg"
            alt="Team Event"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/team2.jpg"
            alt="Office"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/team3.jpg"
            alt="Achievement"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="/images/team4.jpg"
            alt="Community Event"
            className="rounded-lg object-cover w-full h-48"
          />
        </div> */}
      </div>
    </section>
  );
}
