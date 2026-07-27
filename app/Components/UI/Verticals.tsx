import { Home } from "lucide-react";
import React from "react";

type VerticalData = {
  title: string;
  image: string;
  description: string;
};

export default function Verticals({ title, image, description }: VerticalData) {
  return (
    <div className="w-[33%] h-fit bg-gray-100 text-black rounded-lg flex flex-col py-3 items-center justify-center">
      {/* <img
        src={image}
        alt={title}
        className="w-full h-[40%]2"
      /> */}

      <div className="bg-black rounded-full p-4 w-fit h-fit ">
        <Home className="w-14 h-14 text-[#94cb3d]" />
      </div>

      <div className="content_section p-5 h-[60%] text-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{description}</p>
        <button className="mt-2 underline cursor-pointer py-2">Read More</button>
      </div>
    </div>
  );
}
