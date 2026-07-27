"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  MapPinHouse,
  ServerIcon,
  Mail,
  Menu,
  X,
  ChevronDown,
  LucideNewspaper,
} from "lucide-react";

type NavItem = {
  icon: any;
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const navItems: NavItem[] = [
    { icon: Home, label: "Home", href: "/" },

    {
      icon: MapPinHouse,
      label: "Company",
      href: "/company", 
      submenu: [
        { label: "About Us", href: "/company/about" },
        { label: "Founder & Managing Director", href: "/company/founder_&_managing_director" },
        { label: "team_members", href: "/company/team_members" },
        { label: "Vision", href: "/company/vision" },
        { label: "Mission", href: "/company/mission" },
         { label: "Gallery", href: "/company/gallery" },
         { label: "Career", href: "/company/career" },
      ],
    },

    {
      icon: ServerIcon,
      label: "Verticals",
      submenu: [
        { label: "Coral Greens Buildtech Pvt. Ltd.", href: "/verticals/coral_greens_buildtech" },
        { label: "Coral Fashion Emporio Pvt. Ltd.", href: "/verticals/coral_fashion_emporio" },
        { label: "Coral Hotels and Resorts", href: "/verticals/coral_hotels_and_resorts" },
        { label: "Coral Exports", href: "/verticals/coral_exports" },

        
      ],
    },
     {
      icon: LucideNewspaper,
      label: "News",
      submenu: [
        { label: "Blogs", href: "/news/blogs" },
        { label: "Events", href: "/news/events" },
        { label: "News Articals", href: "/news/news_articals" },
      ],
    },

    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  const toggleMobileSubmenu = (idx: number) => {
    setOpenSubmenu(openSubmenu === idx ? null : idx);
  };

  return (
    <header className="bg-white opacity-100 border-b border-gray-200 sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 ">
              <img
                src="/Coral-Group-Logo.png"
                width={160}
                height={60}
                alt="logo"
                className="bg-white p-2 rounded-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-2 text-gray-700 hover:text-[#94cb3d] transition"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="uppercase">{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 mt-[2px]" />
                    )}
                  </Link>

                  {/* Desktop Submenu */}
                  {item.submenu && (
                    <div className="invisible md:w-[20vw]  opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 bg-white border shadow-lg rounded-lg p-4 w-48 z-[200]">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block text-gray-600 hover:text-[#94cb3d] py-2"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* <Link
              href="/login"
              className="text-gray-900 hover:text-[#94cb3d]"
            >
              Login
            </Link> */}

            <button className="bg-[#94cb3d] text-white px-5 py-2 rounded-lg hover:bg-[#7eb52c] transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4">

            {navItems.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="mb-3">
                  <button
                    className="flex w-full items-center justify-between text-gray-700 py-2"
                    onClick={() =>
                      item.submenu ? toggleMobileSubmenu(idx) : setMobileMenuOpen(false)
                    }
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </span>

                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          openSubmenu === idx ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && openSubmenu === idx && (
                    <div className="pl-10 space-y-2 mt-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block text-gray-500 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Direct Links */}
                  {!item.submenu && (
                    <Link
                      href={item.href || "#"}
                      className="block ml-10 text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Open
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile Buttons */}
            <div className="pt-4 border-t mt-4">
              {/* <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-900"
              >
                Login
              </Link> */}

              <button className="w-full bg-[#94cb3d] text-white py-3 rounded-lg mt-2">
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
