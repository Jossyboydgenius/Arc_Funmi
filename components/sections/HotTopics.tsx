"use client";

import { useState } from "react";
import { ArrowRight, Eye, Heart, MessageCircle, Share2 } from "lucide-react";

const categories = ["Architecture", "Engineering", "Construction"];

const articles = {
  Architecture: [
    {
      id: 1,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      views: "1.2k",
      likes: "24",
      comments: "8",
      image: "/assets/images/article-1.jpg",
    },
    {
      id: 2,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      views: "890",
      likes: "18",
      comments: "5",
      image: "/assets/images/article-2.jpg",
    },
  ],
  Engineering: [
    {
      id: 3,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      views: "2.1k",
      likes: "45",
      comments: "12",
      image: "/assets/images/article-3.jpg",
    },
    {
      id: 4,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      views: "1.5k",
      likes: "32",
      comments: "9",
      image: "/assets/images/article-4.jpg",
    },
  ],
  Construction: [
    {
      id: 5,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      views: "3.2k",
      likes: "67",
      comments: "18",
      image: "/assets/images/article-5.jpg",
    },
    {
      id: 6,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      views: "1.8k",
      likes: "41",
      comments: "14",
      image: "/assets/images/article-6.jpg",
    },
  ],
};

export default function HotTopics() {
  const [activeCategory, setActiveCategory] = useState("Architecture");

  return (
    <section className="bg-black text-white py-16">
      <div className="w-full">
        {/* Header - Full Width */}
        <div className="text-center mb-12 px-4">
          <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block font-bold text-xl mb-4">
            Hot Topics
          </div>
        </div>

        {/* Content Container - Max Width */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles[activeCategory as keyof typeof articles]?.map((article) => (
            <div
              key={article.id}
              className="bg-black border border-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 mb-4">
                <div 
                  className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800"
                  style={{
                    backgroundImage: `url('${article.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{article.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {article.description}
                </p>
                
                {/* Engagement buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center space-x-4">
                    {/* Views */}
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                    
                    {/* Likes */}
                    <button className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{article.likes}</span>
                    </button>
                    
                    {/* Comments */}
                    <button className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{article.comments}</span>
                    </button>
                    
                    {/* Share */}
                    <button className="flex items-center space-x-1 text-yellow-500 hover:text-yellow-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Articles Button - Right aligned */}
        <div className="text-right">
          <button className="inline-flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors group">
            <span className="font-medium">See all articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
} 