"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Zane Sorell",
    role: "CEO",
    bio: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    image: "/property/SK1.jpg",
  },
  {
    name: "Maya Mathy",
    role: "Founder",
    bio: "Pop music lover, seeks joy and exciting pop concerts",
    image: "/property/SK1.jpg",
  },
  {
    name: "Alexis Jensen",
    role: "CTO",
    bio: "Bookworm, creative software developer with precision",
    image: "/property/SK1.jpg",
  },
  {
    name: "Keira Battye",
    role: "Product Designer",
    bio: "Creative painter capturing beauty with imaginative artwork",
    image: "/property/SK1.jpg",
  },
  {
    name: "Dominic Game",
    role: "3D Artist",
    bio: "Football enthusiast, enjoys movie nights with friends",
    image: "/property/SK1.jpg",
  },
  {
    name: "James Vial",
    role: "Head of Front-End",
    bio: "Culinary artist, explores diverse flavors, skilled in cooking",
   image: "/property/SK1.jpg",
  },
];


// bg-[#1e1e1e] text-[#94cb3d]

export default function TeamSection() {
  return (
    <div className="w-full py-20 max-w-7xl mx-auto px-6 bg-[#1e1e1e] ">
      <div className="text-center mb-10">
        <span className="text-purple-600 font-medium">Our team</span>
        <h2 className="text-4xl font-bold mt-2">Meet our team members</h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Complete the form below to send us a message. Our support team will promptly
          respond to your request.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button >Apply Now</button>
          <button>Contact Us →</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="rounded-2xl shadow-sm hover:shadow-md transition p-4">
              <div className="p-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-purple-600 text-sm font-medium">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-2">{member.bio}</p>

                  <div className="flex gap-3 mt-4 text-gray-500">
                    <Facebook size={18} className="cursor-pointer hover:text-purple-600" />
                    <Twitter size={18} className="cursor-pointer hover:text-purple-600" />
                    <Linkedin size={18} className="cursor-pointer hover:text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
