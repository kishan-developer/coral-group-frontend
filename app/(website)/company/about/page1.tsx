import AboutSection from '@/app/Components/Home_Components/AboutSection'
import FAQ from '@/app/Components/Shared/FAQ'
import React from 'react'
import AboutCoralGroupSection from '../../home_2/Component/AboutCoralGroupSection'
import BoardOfDirectors from '../../home_2/Component/BoardOfDirectors'
import ContactSection from '../../home_2/Component/ContactSection'
import AboutBanner from './Components/AboutBanner'
import Vision from './Components/Vision'

export default function page() {
  return (
    <div className=' w-full text-white bg-[#1e1e1e]'>
    
      <AboutBanner />

      <AboutCoralGroupSection />

      <div className=" z-20 w-full h-fit flex items-center justify-center ">
        <BoardOfDirectors />
      </div>

      <div className=" z-20 w-full h-fit flex items-center justify-center ">
        <FAQ />
      </div>

      <div className="sticky top-0 z-20 w-full h-screen bg-[#1e1e1e] flex items-center justify-center ">
        <ContactSection />
      </div>

    </div>
  )
}
