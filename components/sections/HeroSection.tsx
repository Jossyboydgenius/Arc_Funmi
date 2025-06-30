import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-[600px] flex items-center overflow-hidden px-4 py-16">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Background Image Container with curved cutout */}
        <div className="relative min-h-[500px] flex items-center overflow-hidden">
          {/* Main container with distinctive curved bottom-right cutout */}
          <div 
            className="relative w-full h-full flex items-center overflow-hidden rounded-3xl"
            style={{
              background: `linear-gradient(rgba(255, 181, 0, 0.1), rgba(255, 181, 0, 0.1)), url('/assets/images/hero-bg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Content Overlay */}
            <div className="relative z-10 max-w-2xl text-white p-8 md:p-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Where Built World
                <br />
                <span className="text-yellow-500">
                  Shares Ideas
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A knowledge hub for architects, engineers and construction pros to 
                read, write and share insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#articles" 
                  className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Explore Articles</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/signup" 
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 