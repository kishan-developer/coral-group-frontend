interface Founder {
    title: string;
    name: string;
    image: string;
    description: string[];
}

interface FounderSectionProps {
    founders: Founder[];
}

export default function Black_Director_Section({ founders }: FounderSectionProps) {
    return (
        <section className="py-20 px-6 md:px-12 md:pt-50 lg:px-20 bg-[#0e0e0e]">

            <h1 className="text-2xl  mb-10 font-extrabold uppercase text-white text-center">
                Our Directors
            </h1>

            <div className="max-w-7xl mx-auto space-y-20">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* LEFT TEXT CONTENT */}
                        <div className="relative ">
                            <div className="absolute w-[90vw] inset-0 left-0 top-0 opacity-30 pointer-events-none">
                                {/* <img src="/footer-bg.png" alt="pattern"  className=" z-60"/> */}
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {founder.title}
                            </h3>

                            <h2 className="text-4xl font-bold text-white mb-6">
                                {founder.name}
                            </h2>

                            <div className="space-y-6 text-gray-200 leading-relaxed relative z-10">
                                {founder.description.map((para, pIndex) => (
                                    <p key={pIndex}>{para}</p>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}

                        {founder.image ? (
                            <div className="flex justify-center lg:justify-end z-80">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className={`rounded-xl shadow-lg ${index == 0 ? ("w-[100%]") : ("w-[60%]")} max-w-xl object-cover z-80`}
                                />
                            </div>
                        ) : (
                            ""
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
}
