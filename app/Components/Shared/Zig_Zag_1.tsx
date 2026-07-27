"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Zig_Zag_1() {
  return (
    <div className="w-full bg-white h-screen text-black flex flex-col md:flex-row items-center justify-center  ">

      {/* Left Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-[50%] flex items-center overflow-hidden justify-center h-[100vh] bg-blue-300 "
      >
        <img
          src="./property/SK1.jpg"
          alt="white_carpet"
          className="w-[80%] md:w-[100%] h-[100%]  shadow-lg hover:scale-120 duration-300"
        />
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-[50%] h-[100vh] bg-black text-white flex flex-col items-center px-20 justify-center md:items-start gap-5"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          A Vision of Modern Comfort and Style.
        </h2>

        <div className=" bg-[#94cb3d] h-1 w-30"></div>

        <p className="leading-7 text-gray-400 text-sm md:text-base">
          Coral Skyline in Rohaniya, Varanasi, offers luxurious 4 BHK sky villas, modern 1-3 BHK apartments, and premium commercial spaces. Crafted for contemporary living, it combines comfort and elegance with spacious layouts, secure parking, and lush greenery. Coral Skyline is where luxury and convenience redefine Varanasi’s skyline.

          <br /><br />
         Coral Skyline in Rohaniya, Varanasi, offers luxurious 4 BHK sky villas, modern 1-3 BHK apartments, and premium commercial spaces.

         <br/>
         Premium commercial spaces designed for business excellence. In addition to these offerings, Coral Skyline provides independent, spacious, and practical homes that embody modern simplicity, catering to today’s lifestyle

        </p>

        <button className="border-2 border-gray-500 hover:border-[#94cb3d] bg-black text-white rounded-xl px-6 py-2 text-sm md:text-base hover:bg-transparent hover:text-[#94cb3d] duration-300 cursor-pointer">
          Read More
        </button>
      </motion.div>
    </div>
  );
}
