import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to build with the best minds?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center group">
            <span>Explore Articles</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
} 