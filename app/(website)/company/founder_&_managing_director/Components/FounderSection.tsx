interface Founder {
    title: string;
    name: string;
    image: string;
    description: string[];
}

interface FounderSectionProps {
    founders: Founder[];
}

export default function FounderSection({ founders }: FounderSectionProps) {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto space-y-20">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* LEFT TEXT CONTENT */}
                        <div className="relative">
                            <div className="absolute inset-0 -left-10 -top-10 opacity-10 pointer-events-none">
                                <img src="/patterns/dots.png" alt="pattern" />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                {founder.title}
                            </h3>

                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {founder.name}
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed relative z-10">
                                {founder.description.map((para, pIndex) => (
                                    <p key={pIndex}>{para}</p>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}

                        {founder.image ? (
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className={`rounded-xl shadow-lg ${index == 0 ? ("w-[100%]") : ("w-[60%]")} max-w-xl object-cover`}
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
