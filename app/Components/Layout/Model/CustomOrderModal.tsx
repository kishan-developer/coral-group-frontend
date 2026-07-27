"use client";

import { X } from "lucide-react";

export default function CustomOrderModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed top-0 inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white mt-20 dark:bg-black text-black dark:text-white w-full max-w-xl rounded-3xl p-8 z-10 shadow-2xl animate-scaleIn">

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">Contact Our Team</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Tell us your requirement and we’ll get back to you.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border dark:border-white/10 bg-transparent outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border dark:border-white/10 bg-transparent outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-xl border dark:border-white/10 bg-transparent outline-none"
          />

          <select className="w-full px-4 py-3 rounded-xl border dark:border-white/10 bg-transparent outline-none">
            <option>Select Service</option>
            <option>Custom Product</option>
            <option>Bulk Order</option>
            <option>Luxury Design</option>
          </select>

          <textarea
            placeholder="Describe your custom requirement"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border dark:border-white/10 bg-transparent outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#94cb3d] text-black font-semibold rounded-xl hover:opacity-90 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
