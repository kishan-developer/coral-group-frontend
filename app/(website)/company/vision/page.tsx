import AboutSection from '@/app/Components/Home_Components/AboutSection'
import FAQ from '@/app/Components/Shared/FAQ'
import React from 'react'

export default function page() {
  return (
    <div className=' w-full text-white'>
      
       <div className="flex items-center justify-center w-full h-[40vh] bg-cover bg-center bg-no-repeat z-80 bg-fixed"
        style={{ backgroundImage: "url('/banner_next_page.jpg')" }} >
        <div className="relative z-10  flex flex-col h-full items-center justify-center">
          <h1 className="text-white w-[100%] text-center mt-3 text-3xl font-semibold uppercase">
            Vision
          </h1>
        </div>
      </div>

      <AboutSection />

      <FAQ />
    </div>
  )
}
