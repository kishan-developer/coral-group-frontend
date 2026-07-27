"use client";

import { useState } from "react";
import CustomOrderModal from "./CustomOrderModal";
import { Form, HeartPlus, HelpCircle, HelpCircleIcon, MessageCircle, Phone } from "lucide-react";

export default function BookNowButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" bg-black text-white rounded-full p-3 text-black font-semibold hover:scale-105 transition"
      >
        {/* <Phone /> */}
        {/* <MessageCircle/> */}
        <Form/>
      </button>

      <CustomOrderModal open={open} setOpen={setOpen} />
    </>
  );
}
