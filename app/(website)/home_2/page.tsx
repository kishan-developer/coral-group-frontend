import HeroSlider from '@/app/Components/Shared/HeroSlider'
import React from 'react'
import ProjectShowcase from './Component/ProjectShowcase'
import LogoSlider from '@/app/Components/Shared/LogoSlider'
import ProjectShowcase_2 from './Component/OurProjects'
import WhatWeDoSection from './Component/WhatWeDoSection'
import AboutCoralGroupSection from './Component/AboutCoralGroupSection'
import LeadershipSection from './Component/LeadershipSection'
import BusinessVerticals from './Component/BusinessVerticals'
import FeaturedProjects from './Component/FeaturedProjects'
import BoardOfDirectors from './Component/BoardOfDirectors'
import LegacySection from './Component/LegacySection'
import ContactSection from './Component/ContactSection'
import AboutExcellenceSection from './Component/AboutExcellenceSection'

export default function page() {
    return (
        <div className="flex flex-col items-center dark:bg-black bg-white dark:text-white tex-black justify-center font-sans">

            <div className="sticky top-0  w-full">
                <HeroSlider />
            </div>

            <div className="bg-transparent h-[10vh] w-full"></div>

             <div className="z-20 w-full h-fit">
                <LogoSlider />
            </div>

            <div className="sticky top-0 z-20 w-full h-screen ">
                <AboutCoralGroupSection />
            </div>

            <div className=" z-20 w-full  flex items-center justify-center ">
                {/* <LogoSlider /> */}
                 <FeaturedProjects />
            </div>

            <div className=" z-20 w-full h-fit flex items-center justify-center ">
                <BoardOfDirectors/>
            </div>

            <div className="z-30 w-full bg-[#1e1e1e] h-screen bg flex items-center justify-center ">
                <BusinessVerticals />
            </div>

             {/* <div className=" z-40 w-full h-screen bg-[#1e1e1e]  flex items-center justify-center ">
               <WhatWeDoSection />
            </div> */}

             <div className=" z-20 w-full  bg-[#1e1e1e]  flex items-center justify-center ">
                <LegacySection />
            </div>

              <div className="sticky top-0 z-20 w-full h-screen bg-[#1e1e1e] flex items-center justify-center ">
                <ContactSection />
            </div>

        </div>
    )
}
