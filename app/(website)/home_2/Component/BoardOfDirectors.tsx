"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/* ================= TYPES ================= */
interface Person {
  name: string;
  role: string;
  description: string;
  image: string;
}

/* ================= DATA ================= */
const managingDirectors: Person[] = [
  {
    name: "Mr. Khalid Ansari",
    role: "Chairman & Managing Director",
    description:
      "Visionary leader with over 35 years of experience in real estate and infrastructure, driving sustainable growth and excellence.",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783826270/Screenshot_2026-07-12_at_8.39.10_AM_occpm6.png",
    // image: "/Founders/Khalid_Ansari_1.jpg",
  },
];

const directors: Person[] = [
  {
    name: "Aisha Ansari",
    role: "Director",
    description:
      "Aisha Ansari is a dynamic Director at Coral Group, bringing a global perspective shaped by her education in Saudi Arabia. Fluent in Urdu, Arabic, and English, she plays a key role in supporting smooth operations and effective stakeholder engagement.",
    image: "/Aisha.png",
  },
  {
    name: "Rumana Ansari",
    role: "Director",
    description:
      "Rumana Ansari is a Director at Coral Group, known for her strategic insight, commitment to quality, and focus on sustainable growth. A graduate of Lady Shri Ram College, Delhi University, with a Diploma in German from the Goethe Institute, she brings a strong global and cross-cultural perspective.",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783824490/rumana_ansari_cvrz0k.jpg",
  },
  {
    name: "Aamir Ansari",
    role: "Director",
    description:
      "Aamir Ansari is a Director at Coral Group, bringing a strong global perspective through his BA (Hons) in Global Business Management from Coventry University, London. He focuses on innovation, sustainability, and technological advancement, helping steer the group toward future-ready growth through collaborative and forward-thinking leadership.",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783824371/aamir_sir_eifect.jpg",
  },
];

/* ================= ANIMATION ================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */
const BoardOfDirectors = () => {
  return (
    <section className="relative bg-[#1e1e1e] pb-10 md:pt-20 px-4 text-white w-[100%]">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] via-[#1e1e1e]/95 to-black"/> */}
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ================= HEADER ================= */}
        <motion.div variants={cardVariants} className="text-center mb-10 md:mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-[#94cb3d] mb-4">
            Leadership
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Board of <span className="text-[#94cb3d]">Directors</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Experienced leadership shaping Coral Group’s vision, strategy, and long-term growth.
          </p>

          <div className="mt-8 mx-auto w-12 h-[1px] bg-[#94cb3d]" />
        </motion.div>

        {/* ================= MANAGING DIRECTOR – LUXURY ================= */}
        <motion.section
          variants={containerVariants}
          className="relative md:mb-40"
        >
          {/* SECTION TITLE */}
          {/* <motion.div
            variants={cardVariants}
            className="text-center mb-24"
          >
            <h3 className="text-1xl md:text-2xl font-serif">
              Managing Director & Founder
              <span className="block text-[#94cb3d] mt-2">
                Coral Group
              </span>
            </h3>
            <div className="mt-10 mx-auto w-14 h-[1px] bg-[#94cb3d]" />
          </motion.div> */}

          {/* CONTENT */}
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-5 items-center"
          >
            {/* LEFT – IMAGE */}
            <div className="relative ">
              {/* Frame */}
              <div className="absolute -top-8 lg:-left-8 left-5 w-full h-full border border-[#94cb3d]/30 rounded-3xl" />

              {/* Image */}
              <div className="relative lg:h-[520px] h-[300px] w-80vw rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783824489/anas_sir_jq6lde.jpg"
                  // src="/Founders/Khalid_Ansari.jpeg"
                  alt="anas sir"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {/* RIGHT – TEXT */}
            <div className="relative">
              {/* Accent line */}
              <div className="absolute -left-6 top-2 h-24 w-[2px] bg-[#94cb3d]" />

              <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
                Leadership that defines
                <br />
                <span className="text-white/70">
                  vision, trust & legacy
                </span>
              </h4>

              <p className="text-white/60 max-w-xl mb-10 leading-relaxed">



                Mr. Anas Ansari, the visionary behind Coral Group, has earned a reputation as a dynamic leader
                committed to innovation and excellence. His entrepreneurial spirit and strategic foresight have been
                pivotal in shaping Coral Group’s success story.
              </p>

              <blockquote className="border-l border-[#94cb3d]/40 pl-6 italic text-white/50 mb-8">
                “True leadership is not about authority, but about responsibility and impact.”
              </blockquote>

              <div className="flex justify-between items-center">

                <div className="flex flex-col gap-2">
                  <p className="text-[#94cb3d] text-xl font-medium tracking-wide">
                    {/* — {managingDirectors[0].name} */}
                    Mr. Anas Ansari
                  </p>

                  <p className="text-white/40 mt-1 text-sm">
                    Managing Director and Founder, Coral Group
                  </p>
                </div>


                {/* <a href="/directors/anas_ansari" className="inline-flex items-center text-sm font-bold text-[#94cb3d] hover:underline">
                  View Leadership Profile <ArrowRight className="ml-2 w-4 h-4" />
                </a> */}

              </div>

            </div>
          </motion.div>
        </motion.section>

        {/* ================= MANAGING DIRECTOR ================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-2 md:mb-40 overflow-hidden w-full  py-10"
        >

          {/* ===== CONTENT WRAPPER ===== */}
          <div className="relative z-10 max-w-7xl mx-auto px-2 pt-5 md:px-6">
            {/* SECTION TITLE */}
            <motion.div
              variants={cardVariants}
              className="text-center md:mb-24 mb-2"
            >



            </motion.div>

            {/* GRID */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              {/* ===== LEFT CONTENT ===== */}
              <motion.div
                variants={cardVariants}
                className="relative"
              >
                {/* Vertical accent */}
                {/* <div className="absolute -left-6 top-2 h-28 w-[2px] bg-[#94cb3d]" /> */}

                <h4 className="text-2xl md:text-4xl lg:text-5xl font-serif md:leading-tight">
                  Leadership that builds
                  <br />
                  <span className="text-white/70">
                    trust & lasting value
                  </span>
                </h4>

                <div className="w-24 h-[2px] bg-[#94cb3d] my-3 md:my-10" />

                <p className="text-white/60 max-w-xl mb-12 leading-relaxed">
                  Mr. Khalid Ansari is the visionary Founder and Managing Director of Coral Group, known for his strategic leadership and entrepreneurial excellence. Under his guidance, the group has grown into a diversified organization driven by innovation, integrity, and sustainability.
                </p>

                <p className="text-white/60 max-w-xl mb-12 leading-relaxed">
                  He is deeply committed to ethical business practices, social responsibility, and philanthropy, while inspiring teams through his hands-on and approachable leadership style.
                </p>

                <blockquote className="border-l border-[#94cb3d]/40 pl-6 italic text-white/50 mb-8">
                  “Excellence driven by vision, strength, and commitment.”
                </blockquote>

                <div className="infor flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-between">
                  <div className="data">
                    <p className="text-[#94cb3d] text-xl font-medium tracking-wide">
                      {/* — {managingDirectors[0].name} */}
                      Mr. Khalid Ansari
                    </p>

                    <p className="text-white/40 mt-1 text-sm">
                      Founder & Managing Director
                    </p>
                  </div>




                  <a href="/directors/khalid_ansari" className="inline-flex items-center text-sm font-bold text-[#94cb3d] hover:underline">
                    View Leadership Profile <ArrowRight className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </motion.div>

              {/* ===== RIGHT IMAGE ===== */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="relative h-fit  md:h-[460px] w-full "
              >
                {/* Image frame */}
                {/* <div className="absolute -top-6 -right-6 w-full h-full border border-[#94cb3d]/30 rounded-3xl" /> */}

                <div className="relative w-full h-auto md:h-full rounded-lg md:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={managingDirectors[0]?.image}
                    alt={managingDirectors[0]?.name}


                    className="object-cover object-top "
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= DIRECTORS ================= */}
        <motion.div variants={containerVariants}>
          <motion.h3
            variants={cardVariants}
            className="text-2xl md:text-3xl font-serif md:mb-14 text-center"
          >
            Board <span className="text-[#94cb3d]">Directors</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {directors.map((director, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group bg-[#1e1e1e] border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#94cb3d]/40"
              >
                {/* IMAGE */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="object-cover object-top  transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h4 className="text-xl font-medium mb-1">
                    {director.name}
                  </h4>

                  <p className="text-xs tracking-widest uppercase text-[#94cb3d] mb-5">
                    {director.role}
                  </p>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {director.description}
                  </p>

                  <div className="mt-8 w-10 h-[1px] bg-[#94cb3d]" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default BoardOfDirectors;
