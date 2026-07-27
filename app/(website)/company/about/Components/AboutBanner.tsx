

"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/New_Banner_Images/CAM_8_NEW_FINAL.jpg",
    title: "PERFORMANCE, RECOVERY & PHYSICAL OPTIMISATION",
    desc: "Train like an athlete. Recover like one. Thrive beyond expectations."
  },
//   {
//     img: "/slider/6.jpg",
//     title: "BUILD A STRONGER, HEALTHIER VERSION OF YOU",
//     desc: "Smart training, personalised coaching, visible transformation."
//   },
//   {
//     img: "/slider/7.jpg",
//     title: "HOLISTIC WELLNESS & MINDFUL LIVING",
//     desc: "Balance your body, sharpen your mind, elevate your lifestyle."
//   },
//   {
//     img: "/New_Banner_Images/CAM_2_HR_FINAL.jpg",
//     title: "HOLISTIC WELLNESS & MINDFUL LIVING",
//     desc: "Balance your body, sharpen your mind, elevate your lifestyle."
//   }
];

export default function AboutBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 
          ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"}`}
        >
          <img
            src={slide.img}
            className={`w-full h-full object-cover
            transition-transform duration-[6000ms] ease-out
            ${index === current ? "scale-110" : "scale-100"}`}
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 border-2 border-white mx-10 mt-40 mb-5 rounded-lg  bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30" />

      {/* TEXT */}
      <div className="absolute z-40 
        bottom-16 sm:bottom-20 lg:bottom-24
        px-4 sm:px-8 lg:left-16
        w-full lg:w-[70%] max-w-3xl">

        <h1 className="text-white 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-semibold tracking-wide mb-4 leading-tight">
          {slides[current].title}
        </h1>

        <p className="text-gray-300 
          text-sm sm:text-base md:text-lg max-w-xl">
          {slides[current].desc}
        </p>
      </div>

      {/* ARROWS */}
      {/* <div className="absolute z-50 
        bottom-6 sm:bottom-8
        right-4 sm:right-8 lg:right-16
        flex gap-4 sm:gap-6">

        <button
          onClick={prev}
          className="p-2 sm:p-3 rounded-full border border-white/40 
          hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={next}
          className="p-2 sm:p-3 rounded-full border border-white/40 
          hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div> */}
    </div>
  );
}





// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     // img: "/slider/CAM_11_Final.jpg",
//     // img: "/New_Banner_Images/CAM_2_HR_FINAL.jpg",
//     img: "/New_Banner_Images/CAM_8_NEW_FINAL.jpg",
//     title: "PERFORMANCE, RECOVERY & PHYSICAL OPTIMISATION",
//     desc: "Train like an athlete. Recover like one. Thrive beyond expectations."
//   },
//   {
//     img: "/slider/6.jpg",
//     title: "BUILD A STRONGER, HEALTHIER VERSION OF YOU",
//     desc: "Smart training, personalised coaching, visible transformation."
//   },
//   {
//     img: "/slider/7.jpg",
//     title: "HOLISTIC WELLNESS & MINDFUL LIVING",
//     desc: "Balance your body, sharpen your mind, elevate your lifestyle."
//   },
//   {
//     // img: "/slider/8.jpg",
//     img: "/New_Banner_Images/CAM_2_HR_FINAL.jpg",
//     title: "HOLISTIC WELLNESS & MINDFUL LIVING",
//     desc: "Balance your body, sharpen your mind, elevate your lifestyle."
//   }


// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 10000);

//     return () => clearInterval(timer);
//   }, []);

//   const next = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prev = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">

//       {/* SLIDES */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 
//             ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"}`}
//         >
//           <img
//             src={slide.img}
//             className={`
//               w-full h-full object-cover
//               transition-transform duration-[6000ms] ease-out
//               ${index === current ? "scale-110" : "scale-100"}
//             `}
//           />
//         </div>
//       ))}

//       {/* DARK GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-30"></div>

//       {/* TEXT CONTENT */}
//       <div className="absolute bottom-24 left-16 z-40 w-[70%] max-w-3xl">
//         <h1
//           className="text-white text-4xl md:text-5xl font-semibold mb-4 tracking-wide
//           animate-fadeIn"
//         >
//           {slides[current].title}
//         </h1>

//         <p className="text-gray-300 text-lg animate-fadeIn delay-300">
//           {slides[current].desc}
//         </p>
//       </div>

//       {/* ARROWS */}
//       <div className="absolute bottom-10 right-16 flex gap-8 z-50">
//         <button
//           onClick={prev}
//           className="p-3 rounded-full border border-white/40 hover:bg-white/20 transition"
//         >
//           <ChevronLeft className="text-white" />
//         </button>
//         <button
//           onClick={next}
//           className="p-3 rounded-full border border-white/40 hover:bg-white/20 transition"
//         >
//           <ChevronRight className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// }
