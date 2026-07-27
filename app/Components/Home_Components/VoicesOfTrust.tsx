"use client";

import { Star } from "lucide-react";
import Testimonial_slider_black_bg from "./Testimonial_slider_black_bg";


export default function VoicesOfTrust() {
    return (
        <section className="bg-[#0e0e0e] flex h-[screen] flex-col gap-10 items-center justify-center">



            <div className="max-w-[90%] mx-auto flex flex-row gap-8 h-[90%]">



                {/* LEFT CARD */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 w-[55%]">
                    {/* Background Image */}
                    <img
                        src="./property/SK3.jpg" // replace with your image
                        alt="Interior"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />

                    {/* Overlay */}
                    <div className="relative z-10 p-10 h-full flex flex-col justify-between bg-black/40 backdrop-blur-sm">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                                Voices Of Trust
                            </h2>
                            <p className="text-white/70 max-w-md leading-relaxed">
                                Hear from those who’ve turned their vision into reality with
                                us — honest words from clients, partners, and collaborators.
                            </p>
                        </div>

                        <button className="w-fit mt-10 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition">
                            Get in touch
                        </button>
                    </div>
                </div>




                {/* RIGHT TESTIMONIAL CARD */}
                <div className="flex flex-col w-[45%] h-full">
                    {/* <div className="rounded-2xl border border-white/15 p-10 w-[100%] flex flex-col h-[100%] justify-between bg-[#0E0E0E]">
                        <p className="text-white/90 text-lg leading-relaxed">
                            “Professional, responsive, and thoughtful. From our first
                            conversation to the final visit, they were attentive to every
                            detail. It’s rare to feel so supported and understood during such
                            an important process.”
                        </p>

                        <div className="mt-10">
                            <h4 className="text-white font-medium text-lg">Nina Scholz</h4>
                            <p className="text-white/50 text-sm mb-3">
                                Property Management
                            </p>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="fill-white text-white"
                                    />
                                ))}
                            </div>
                        </div>


                    </div> */}

                    {/* SLIDER DOTS */}
                    {/* <div className="flex justify-center mt-10 gap-3">
                        <span className="w-6 h-1 rounded-full bg-white"></span>
                        <span className="w-4 h-1 rounded-full bg-white/30"></span>
                        <span className="w-4 h-1 rounded-full bg-white/30"></span>
                        <span className="w-4 h-1 rounded-full bg-white/30"></span>
                    </div> */}

                    <Testimonial_slider_black_bg />
                </div>


               

            </div>

             <section className="relative w-[90%] h-[50vh] bg-white p-3 rounded-2xl overflow-hidden">

                    {/* BACKGROUND IMAGE */}
                    <img
                        src="./property/SK3.jpg" // replace with your image
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* CONTENT */}
                    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-end">

                        {/* FLOATING CARD */}
                        <div className="max-w-md w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-white shadow-2xl">

                            <p className="text-lg leading-relaxed mb-6">
                                “Incredibly smooth process from start to finish. I felt guided
                                every step of the way.”
                            </p>

                            <h4 className="font-medium text-lg">Anna Keller</h4>
                            <p className="text-white/80 text-sm mb-4">
                                Property Rental
                            </p>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="fill-white text-white"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

        </section>
    );
}
