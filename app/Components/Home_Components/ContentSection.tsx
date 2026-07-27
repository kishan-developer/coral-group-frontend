import React from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Edit, Share2, Download, FunctionSquare, EarthIcon, BrainCog, PersonStanding, PercentSquareIcon, MailOpen, Instagram } from "lucide-react";

const ImageWithFallback = "https://adshelter.in/wp-content/uploads/2024/12/Ad_sltr_470x570_d.jpg"

interface FeatureItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ContentSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: Instagram,
      title: "Social Responsibility",
      description: "Access thousands of stock videos and footage",
    },
    {
      icon: BrainCog,
      title: "Innovation and Excellence",
      description: "Professional editing tools at your fingertips",
    },
    {
      icon: EarthIcon,
      title: "Global Leadership",
      description: "Share directly to all social platforms",
    },
    {
      icon: FunctionSquare,
      title: "Future Outlook",
      description: "Download in any format you need",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-gray-900 mb-6 text-2xl font-semibold">
              Everything You Need in One Place
            </h2>

            <p className="text-gray-600 mb-8">
              From creation to distribution, our all-in-one platform gives you
              the tools to succeed with Platform. No need for multiple
              subscriptions or complicated workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#94cb3d] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="./Hotel_Images/about-4.jpg"
                alt="Content Creation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContentSection