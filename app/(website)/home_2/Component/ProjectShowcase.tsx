"use client";

import Image from "next/image";

const ProjectShowcase = () => {
  return (
    <section className="relative w-full bg-[#1b1b1b] py-20 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Image */}
        <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden rounded-xl">
          <Image
            src="/property/SK1.jpg" // replace with your image
            alt="Project Image"
            fill
            className="object-cover "
            priority
          />
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>

        {/* Content Card */}
        <div className="relative md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2
          bg-[#d4b78f] max-w-md p-8 md:p-10 mt-8 md:mt-0 shadow-2xl">
          
          <h4 className="text-sm tracking-widest uppercase text-black mb-4">
            Project Description
          </h4>

          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
            Is Here !!
          </h2>

          <p className="text-black/80 text-sm leading-relaxed">
            It is a good idea to think of your PC as an office.
            It stores files, programs, pictures. This can be compared
            to an actual office’s files, machines and decorations.
            The operating system is the boss. With this image in mind,
            think of an office you have visited that was slow and inefficient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
