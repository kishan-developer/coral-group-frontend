import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    const footerLinks: Record<string, string[]> = {
        Company: ["Directore Desk", "About US", "Our Mission", "Our Vision", "Our Team"],
        Verticals: ["CoralGreens Buildteach Pvt. Ltd", "Coral Fashion Emporio", "Coral Hotel and Resorts", "Coral Exports"],
        Team: ["About Us", "Contact", "Careers", "Gallery"],
        Support: ["Help Center", "FAQs", "Report Issue", "Community"],
    };

    return (
        <footer
            className="bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: "url('https://coral-group.in/images/footer-bg.png')" }}
        >
            {/* Dark overlay */}
            <div className="bg-[#000000c5] w-full mx-auto px-4 sm:px-6 lg:px-20 py-14">

                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-10">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="./brands_logo/CORALGREEN.JPG"
                                alt="logo"
                                className="rounded-lg w-28"
                            />
                        </div>

                        <p className="text-gray-300 text-[15px] leading-relaxed">
                            The Coral Group’s journey is a remarkable testament to vision, resilience,
                            and an unwavering commitment to excellence. Established in 1860, our
                            industrial conglomerate has navigated innovation and industry evolution with passion.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-green-400 mb-3 font-semibold uppercase tracking-wide">
                                {category}
                            </h3>

                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-white text-gray-300 transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2024 Coral Group. Developed by <b className="text-green-400">Kishan (Full Stack Developer)</b>
                    </p>

                    <div className="flex gap-6 text-gray-300 text-sm">
                        {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                            <a key={item} href="#" className="hover:text-white transition">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
