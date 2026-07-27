"use client";
import { motion, Variants } from "framer-motion";

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
        name: "Khalid Ansari",
        role: "Chairman & Managing Director",
        description:
            "Visionary leader with over 35 years of experience in real estate and infrastructure, driving sustainable growth and excellence.",
        image: "https://coralgroupwebsite.s3.eu-north-1.amazonaws.com/slider/khalid_sir.jpg",
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
const MainBoardOfDirector = () => {
    return (
        <section className="relative bg-[#1e1e1e] pb-10 md:pt-10 px-4 text-white w-[100%]">

            {/* GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* ================= HEADER ================= */}
                <motion.div variants={cardVariants} className="text-center mb-24">
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
                    className="relative mb-40"
                >

                    {/* CONTENT */}
                    <motion.div
                        variants={cardVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
                    >
                        {/* LEFT – IMAGE */}
                        <div className="relative">
                            <div className="relative h-auto md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783826270/Screenshot_2026-07-12_at_8.39.10_AM_occpm6.png"
                                    alt={managingDirectors[0].name}
                                    className="w-full h-full object-cover object-center"
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
                                Khalid Ansari, the visionary Founder and Managing Director of Coral Group, is widely recognized for his strategic insight and entrepreneurial leadership. With a commitment to innovation and a drive for excellence, he has been the cornerstone of Coral Group's transformation from a humble beginning into a globally diversified industrial conglomerate.
                            </p>

                            <blockquote className="border-l border-[#94cb3d]/40 pl-6 italic text-white/50 mb-8">
                                “True leadership is not about authority, but about responsibility and impact.”
                            </blockquote>

                            <div className="infor flex items-center justify-between">
                                <div className="data">
                                    <p className="text-[#94cb3d] text-xl font-medium tracking-wide">
                                        Mr. Khalid Ansari
                                    </p>

                                    <p className="text-white/40 mt-1 text-sm">
                                        Founder & Managing Director
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>




            </motion.div>
        </section>
    );
};

export default MainBoardOfDirector;
