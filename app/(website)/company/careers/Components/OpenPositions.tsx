import React from "react";

export default function OpenPositions() {
  const jobs = [
    {
      title: "Real Estate Sales Executive",
      location: "Varanasi, UP",
      type: "Full-time",
      description:
        "Responsible for client acquisition, property sales, and managing customer relationships.",
      applyLink: "mailto:hr@company.com?subject=Application%20for%20Sales%20Executive",
    },
    {
      title: "Marketing Manager",
      location: "Varanasi, UP",
      type: "Full-time",
      description:
        "Lead marketing campaigns, manage social media, and promote company projects.",
      applyLink: "mailto:hr@company.com?subject=Application%20for%20Marketing%20Manager",
    },
    {
      title: "Property Management Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Assist in property management tasks, documentation, and client coordination.",
      applyLink: "mailto:hr@company.com?subject=Application%20for%20Property%20Management%20Intern",
    },
  ];

  return (
    <section className="py-16 bg-[#1e1e1e]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#94cb3d]">Current Open Positions</h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Explore our current openings and join our growing real estate team.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-[#94cb3d]">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.location} | {job.type}</p>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <a
                    href={job.applyLink}
                    className="px-6 py-3 bg-[#94cb3d] text-white rounded-lg font-semibold hover:bg-[#94cb3d]/80 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
