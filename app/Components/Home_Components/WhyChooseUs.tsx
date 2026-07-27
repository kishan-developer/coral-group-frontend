import React from "react";
import { Home, Building, Leaf, Users, Globe, Shield, Award, Star } from "lucide-react";

interface BenefitItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  const benefits: BenefitItem[] = [
    { icon: Home, title: "Premium Properties", color: "text-blue-600" },
    { icon: Building, title: "Quality Construction", color: "text-gray-600" },
    { icon: Leaf, title: "Sustainable Solutions", color: "text-green-600" },
    { icon: Users, title: "Customer-Centric Service", color: "text-orange-600" },
    { icon: Globe, title: "Global Standards", color: "text-cyan-600" },
    { icon: Shield, title: "Reliable & Trusted", color: "text-indigo-600" },
    { icon: Award, title: "Award-Winning Projects", color: "text-pink-600" },
    { icon: Star, title: "Innovative Designs", color: "text-yellow-600" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 z-80 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">Why Choose Coral Group</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver premium properties with unmatched quality, sustainability, and customer-focused solutions.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <p className="text-gray-900 font-medium">{benefit.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
