import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Transparent_Header from "../Components/Layout/Transparent_Header";
import { ThemeProvider } from "next-themes";
import BookNowButton from "../Components/Layout/Model/BookNowButton";
import { ArrowUp01, ArrowUpNarrowWide, ArrowUpNarrowWideIcon, Facebook, Instagram, Linkedin, LocationEdit, Twitter, Youtube, Phone } from "lucide-react";
import Link from "next/link";

const montserrat = ({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coral-Group",
  description: "coral-group",
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Transparent_Header />

        {/* <div className="fixed bottom-[25vh] right-[5vw]  z-120">
          <BookNowButton />
        </div> */}

        {children}

        {/* FOOTER */}
        <footer className="bg-[#1e1e1e] py-15 border-t border-[#94cb3d]">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <img
                // src="/Coral-Group-Logo.png"
                src="/Coral_3.png"
                width={300}
                height={100}
                alt="logo"
                className=""
              />
              <p className="text-gray-500 mt-5">
                The Coral Group’s journey is a remarkable testament to vision, resilience, and an unwavering commitment to excellence. Established in 1860.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#94cb3d]">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/company/about">
                    About Us
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/">
                    Team Members
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/">
                    Gallery
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/">
                    Events
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/">
                    Blogs
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/">
                    Careers
                  </Link>
                </li>

                <li className="hover:text-[#94cb3d] cursor-pointer">
                  <Link href="/">
                    Projects
                  </Link>
                </li>

              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#94cb3d]">Verticals</h4>
              <ul className="space-y-2 text-gray-400">
                <li>CoralGreens Buildtech</li>
                <li>Coral Fashion Emporio</li>
                <li>Coral Hotels and Resorts</li>
                <li>Coral Exports</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#94cb3d]">Contact</h4>

              <div className="details flex flex-col">
                <div className="address flex flex-col gap-2">
                  <h2 className="text-ld font-semibold text-white">Address <span> : 5th Floor, Tower C, Vinayak Plaza, Maldahiya, Varanasi 221002</span>
                  </h2>
                </div>
                <div className="address flex flex-col gap-2">
                  <h2 className="text-ld font-semibold text-white">Contact No 
                  <span> : (+91) 780-000-0097</span>
                  </h2>
                </div>
                <div className="address flex flex-col gap-2">
                  <h2 className="text-ld font-semibold text-white">Email 
                  <span> : info@coral-group.in</span>
                   </h2>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/coralgroupoff" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                
                <a href="https://www.instagram.com/coralgroupoff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/coralgroupoff/posts/?feedView=all" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@CoralGroupVns" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>

          <div className="text-start text-gray-600 mt-12 pt-6 border-t border-gray-800 flex items-center justify-between lg:px-30 px-10 ">
            <Link href={"https://www.linkedin.com/in/kishan-kumar-ray-372972234/"} target="_blank">

              <p className="hover:text-[#94cb3d] transition-colors  w-full text-center">
                © {new Date().getFullYear()} Coral Group. Developed By Kishan [ Full Stack Developer ]
              </p>
            </Link>

            {
            /* <div className="flex gap-8 mt-4 md:mt-0 uppercase font-bold tracking-widest text-xs">
              <a href="#" className="hover:text-[#94cb3d] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#94cb3d] transition-colors">Compliance</a>
              <a href="#" className="hover:text-[#94cb3d] transition-colors">Terms of Hire</a>
            </div> */
            }
          </div>
        </footer>

        <a href="https://wa.me/917800000097" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
          <button className="fixed bottom-[18vh] right-[5vw] z-120 hover:scale-110 transition-transform duration-300">
            <img
              // src="/Coral-Group-Logo.png"
              src="/whatsapp.png"
              width={50}
              height={50}
              alt="logo"
              className=""
            />
          </button>
        </a>

        <a href="tel:+917800000097" title="Call Us: 780-000-0097">
          <button className="fixed bottom-[11vh] right-[5vw] z-120 w-[50px] h-[50px] rounded-full bg-[#94cb3d] text-black flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#7ab532] transition-all duration-300">
            <Phone size={24} className="fill-black text-black" />
          </button>
        </a>

        <Link href="#header" title="Back to Top">
          <button className="fixed bottom-[4vh] right-[5vw] z-120 w-[50px] h-[50px] rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#94cb3d] hover:text-black transition-all duration-300">
            <ArrowUpNarrowWideIcon size={24} />
          </button>
        </Link>

      </body>
    </html >
  );
}
