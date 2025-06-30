"use client";

import { Edit, Users, Building, Coffee } from "lucide-react";

const features = [
  {
    icon: Edit,
    title: "Write and Publish Your Expertise",
    description: "Share your knowledge and insights with the built world community. Create articles, tutorials, and guides that help others learn.",
  },
  {
    icon: Users,
    title: "Learn From Professionals in Your Field",
    description: "Connect with experienced architects, engineers, and construction professionals. Learn from their expertise and best practices.",
  },
  {
    icon: Building,
    title: "Bridge Architecture, Engineering and Construction",
    description: "Explore the intersection of different disciplines in the built environment. Foster collaboration across fields.",
  },
  {
    icon: Coffee,
    title: "Grow Your Professional Voice",
    description: "Build your professional reputation by sharing valuable content. Establish yourself as a thought leader in your field.",
  },
];

export default function WhyArcFunmi() {
  return (
    <section className="bg-black text-white py-16">
      <div className="w-full">
        {/* Header - Full Width */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Arcfunmi?
          </h2>
        </div>
        
        {/* Content Container - Max Width */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                {/* Individual card with yellow background */}
                <div className="bg-yellow-500 rounded-2xl p-10 text-center text-black h-full min-h-[300px] flex flex-col justify-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center">
                      <feature.icon className="w-10 h-10 text-yellow-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 