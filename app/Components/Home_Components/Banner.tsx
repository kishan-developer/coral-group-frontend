import React from 'react'

export default function Banner() {
  return (
    <div
      className="w-[98%] lg:h-[97vh] h-[80vh] flex flex-col items-start justify-end border-[1px] border-white mx-2 my-3 pb-10 lg:px-20 md:px-14 px-7 rounded-[20px] bg-gray-100 bg-cover bg-center bg-no-repeat z-0"
      style={{ backgroundImage: "url('./property/SK3.jpg')" }}
    >
      <h1 className='lg:text-5xl md:text-3xl text-white text-1xl lg:w-[60%] md:w-[70%] w-[90%] mb-7 font-lato'>
        Elevating Indian Elegance Worldwide.
        <b style={{ color: "#94cb3d" }}>Coral Export</b>
      </h1>

      <div className="bg-white h-[2px] w-full"></div>

    </div>
  )
}
