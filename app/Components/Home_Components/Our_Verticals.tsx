import React from 'react'
import Verticals from '../UI/Verticals'
import { Home } from 'lucide-react'

export default function Our_Verticals() {
    const data = [
        {
            _id: 1,
            title: "Real Estate (CoralGreens Buildtech)",
            icon: Home,
            details: "Our real estate division is at the forefront of developing innovative and sustainable projects. We specialize in creating state-of-the-art residential, commercial, and industrial properties that meet the highest standards of quality and design. Our projects are characterized by their modern architecture, strategic locations, and commitment to environmental sustainability. We aim to create spaces that enhance the quality of life for residents and contribute to the growth and development of communities."
        },
        {
            _id: 2,
            title: "Textile Production (Coral Fashion)",
            icon: Home,
            details: "The Coral Group’s textile division is renowned for its top-tier production capabilities and commitment to quality. We produce a wide range of textiles, including fabrics, garments, and home textiles, that cater to both domestic and international markets. Our state-of-the-art manufacturing facilities are equipped with the latest technology, ensuring that we deliver products that meet the highest standards of excellence. We are dedicated to innovation, sustainability, and ethical practices in all aspects of our textile production."
        },
        {
            _id: 3,
            title: "International Export Ventures (Coral Export)",
            icon: Home,
            details: "Our international export ventures have positioned the Coral Group as a global leader in trade and commerce. We export a diverse range of products, including textiles, machinery, and consumer goods, to markets around the world. Our success in international trade is driven by our commitment to quality, reliability, and customer satisfaction. We have built strong relationships with partners and clients across the globe, enabling us to expand our reach and deliver exceptional value."
        },
        {
            _id: 4,
            title: "Innovation and Excellence (Coral F&B)le",
            icon: Home,
            details: "Across all our verticals, the Coral Group is committed to fostering innovation and maintaining the highest standards of excellence. We continuously invest in research and development to stay ahead of industry trends and deliver cutting-edge solutions. Our focus on quality, sustainability, and ethical practices ensures that we not only meet but exceed the expectations of our stakeholders."
        },
        {
            _id: 5,
            title: "Sustainability and Social Responsibility",
            icon: Home,
            details: "Sustainability and social responsibility are integral to our operations. We strive to minimize our environmental impact and contribute positively to the communities we serve. Our initiatives include sustainable building practices, eco-friendly manufacturing processes, and community development programs. We believe that our success is intertwined with the well-being of society and the environment, and we are dedicated to making a positive difference."
        },
        {
            _id: 6,
            title: "Future Growth",
            icon: Home,
            details: "Looking ahead, the Coral Group is poised for continued growth and expansion. We are committed to exploring new opportunities, entering new markets, and diversifying our portfolio. Our vision is to remain a leader in our industries, driving progress and innovation while upholding our values of integrity, excellence, and social responsibility."
        }
    ]
  return (
    <div className='h-fit bg-white flex flex-col items-center '>
        
        <h1>Our Verticals</h1>
        <p>The Coral Group is a diversified conglomerate with a strong presence in multiple industries. Our commitment to excellence and innovation drives us to lead the way in each of our verticals. From cutting-edge real estate projects to top-tier textile production and successful international export ventures, we continue to set new standards and achieve remarkable success.</p>
        <div className="grid_section grid grid-cols-3 grid-rows-2">
            {/* {data?.map((item,i)=> (
                <Verticals key={i} title={item.title} icon={item.icon} details={item.details} />
            ))} */}
        </div>
    </div>
  )
}
