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
    title: "Write and Publish Your Expertise",
    description: "Build your professional reputation by sharing valuable content. Establish yourself as a thought leader in your field.",
  },
];

export default function WhyArcFunmi() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Arc Funmi?
          </h2>
        </div>
        
        <div className="relative">
          {/* Yellow glow effect */}
          <div className="absolute inset-0 bg-yellow-500/20 rounded-3xl blur-3xl" />
          
          {/* Container with particle border effect */}
          <div 
            className="relative bg-yellow-500 rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              background: `
                linear-gradient(45deg, #FFB000 0%, #FFB000 25%, transparent 25%, transparent 75%, #FFB000 75%, #FFB000),
                linear-gradient(45deg, #FFB000 0%, #FFB000 25%, transparent 25%, transparent 75%, #FFB000 75%, #FFB000),
                #FFB000
              `,
              backgroundSize: '20px 20px, 20px 20px, 100%',
              backgroundPosition: '0 0, 10px 10px, 0 0',
              animation: 'particleBorder 4s linear infinite'
            }}
          >
            {/* Inner content container */}
            <div className="relative bg-yellow-500 rounded-2xl p-8 md:p-12 -m-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center text-black">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-yellow-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-80"
                style={{
                  top: `${10 + (i * 12)}%`,
                  left: `${5 + (i % 2) * 90}%`,
                  animation: `floatParticle ${3 + (i * 0.5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes particleBorder {
          0% { background-position: 0 0, 10px 10px, 0 0; }
          100% { background-position: 20px 20px, 30px 30px, 0 0; }
        }
        
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
} 