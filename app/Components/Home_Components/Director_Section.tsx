
import Black_Director_Section from '@/app/(website)/company/founder_&_managing_director/Components/Black_Director_Section';
import FounderSection from '@/app/(website)/company/founder_&_managing_director/Components/FounderSection';
import AboutSection from '@/app/Components/Home_Components/AboutSection'
import FAQ from '@/app/Components/Shared/FAQ'
import React from 'react'





// Define TypeScript type for founder
interface Founder {
  title: string;
  name: string;
  image: string;
  description: string[];
}


const founderData = [
  {
    title: "Managing Director and Founder, Coral Group",
    name: "Mr. Anas Ansari",
    image: "/Founders/Anas_Ansari.jpg",
    description: [
      "Anas Ansari, the visionary behind Coral Group, has earned a reputation as a dynamic leader committed to innovation and excellence. His entrepreneurial spirit and strategic foresight have been pivotal in shaping Coral Group’s success story.",
      "Under his leadership, Coral Group has become known for its forward-thinking approach, particularly in the real estate sector, where quality and advanced technology are at the forefront. His clear direction has positioned the company as a respected name in the industry, consistently setting new benchmarks.",
      "Anas Ansari’s leadership is defined by a collaborative and creative work environment. He excels at recognizing market opportunities, which keeps Coral Group ahead of the curve. His dedication to sustainability and community development ensures that the company's growth aligns with broader social and environmental goals.",
      "Beyond his professional achievements, Anas Ansari is deeply involved in philanthropic work, supporting a range of charitable initiatives that uplift communities. His contributions continue to make a meaningful impact, reflecting his commitment to not just building businesses but also building a better society."
    ]
  },
  {
    title: "Founder & Managing Director",
    name: "Mr. Khalid Ansari",
    image: "/Founders/Khalid_Ansari.jpg",
    description: [
      "Khalid Ansari, the visionary Founder and Managing Director of Coral Group, is widely recognized for his strategic insight and entrepreneurial leadership. With a commitment to innovation and a drive for excellence, he has been the cornerstone of Coral Group's transformation from a humble beginning into a globally diversified industrial conglomerate.",
      "His leadership has been marked by astute business acumen, guiding the company through complex markets and spearheading its growth across a variety of sectors. Khalid Ansari’s ability to anticipate industry trends and seize opportunities has been instrumental in the Coral Group’s continued success and expansion.",
      "Throughout his journey, Khalid Ansari has remained dedicated to upholding the highest standards of integrity and quality. He strongly believes in the power of ethical business practices, ensuring that the Coral Group’s growth is always aligned with social responsibility and environmental stewardship. His passion for sustainability has led the company to set new industry standards, with a focus on long-term positive impact.",
      "In addition to his corporate achievements, Khalid Ansari is deeply invested in philanthropy. He has launched numerous initiatives aimed at supporting education, healthcare, and the well-being of underserved communities. His charitable efforts reflect his deep-rooted commitment to making a meaningful difference beyond the business world.",
      "Khalid Ansari’s leadership style is characterized by his approachable nature and an innate ability to mentor others. He is deeply respected for his hands-on involvement and his talent for inspiring teams to achieve their best. Looking ahead, Khalid Ansari’s vision for Coral Group is one of sustained growth, innovation, and a commitment to leaving a lasting positive impact on both industry and society.",
    ]
  },
//   {
//     title: "Director",
//     name: "Aisha Ansari",
//     image: "",
//     description: [
//       "Aisha Ansari, Director of Coral Group, is a leader celebrated for her strategic vision and innovative approach to business. Having earned her degree from Saudi Arabia, she brings a global perspective to her role, effectively navigating diverse markets and cultures. Fluent in Urdu, Arabic, and English, Aisha Ansari connects with a wide range of stakeholders. She provides a much needed support for the smooth functioning of the company with her insights.",
//       "Aisha Ansari fosters a collaborative work environment that promotes excellence and continuous improvement. Beyond her professional achievements, she is dedicated to philanthropy, particularly in education and healthcare, reflecting Coral Group’s commitment to social responsibility and making a meaningful impact in the community.",
     
//     ]
//   },
//   {
//     title: "Director",
//     name: "Rumana Ansari",
//     image: "/Founders/Rumana_Ansari.jpg",
//     description: [
//       "Rumana Ansari, Director of Coral Group, with her strategic insight and unwavering commitment to excellence. She has played a vital role in shaping Coral Group’s growth trajectory. Her leadership style prioritizes sustainability, quality, and community development, ensuring that the company consistently surpasses industry benchmarks.",
//       "Rumana Ansari’s educational background is impressive, having topped her 12th board exams, and earning her graduation from Lady Sri Ram College, Delhi University. Additionally, she holds a Diploma in German Language from the Goethe Institute (Max Muller Bhawan), New Delhi. This diverse educational experience reflects her dedication to cross-cultural communication and a global business perspective.",
//       "Her collaborative approach fosters teamwork and continuous improvement, enabling the organization to navigate complex challenges and identify new opportunities for growth. Furthermore, her strong knowledge of interior design enriches her creative contributions, allowing her to elevate project outcomes.",
//       "Beyond her professional accomplishments, Rumana Ansari is passionate about philanthropy, actively supporting initiatives focused on education and social welfare. Her commitment to corporate social responsibility is evident in her efforts to make a meaningful impact on the community, reinforcing Coral Group’s dedication to positive change.",
//     ]
//   },
//   {
//     title: "Director",
//     name: "Aamir Ansari",
//     image: "/Founders/Amir_Ansari.jpg",
//     description: [
//       "Aamir Ansari, a Director at Coral Group, brings a diverse and global perspective to the company’s leadership team. With a BA Honours in Global Business Management from Coventry University London, Aamir Ansari’s academic background has given him a deep understanding of international markets and strategic decision-making, which has been instrumental in shaping Coral Group's future direction.",
//       "His leadership is defined by a proactive and innovative mindset, focusing on sustainability, technological advancement, and adaptability in an ever-evolving marketplace. Aamir Ansari’s global exposure allows him to skillfully navigate business challenges, positioning Coral Group for continued growth and development.",
//       "Aamir Ansari is also deeply committed to professional growth, regularly engaging in industry forums and learning initiatives to stay ahead of emerging trends. His leadership style emphasizes teamwork and knowledge-sharing, earning him respect both within Coral Group and among industry peers."
//     ]
//   }
];


export default function Director_Section() {

  return (
    <div className=' w-full text-white'>
{/*       
       <div className="bg-[#0e0e0e] flex  items-center justify-center w-full h-[40vh]  bg-cover bg-center bg-no-repeat z-80 bg-fixed"
        style={{ backgroundImage: "url('/banner_next_page.jpg')" }} 
        >
        <div className="relative z-10  flex flex-col h-full items-center justify-center">
          <h1 className="text-white w-[100%] text-center mt-3 text-3xl font-semibold uppercase">
            Founder & Managing Director
          </h1>
        </div>
      </div> */}


      

      {/* <FounderSection founders={founderData} /> */}

      <Black_Director_Section founders={founderData}  />


    
    </div>
  )
}
