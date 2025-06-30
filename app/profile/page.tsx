"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Eye, Heart } from "lucide-react";

export default function ProfilePage() {
  // Mock data - in a real app, this would come from an API
  const userStats = {
    monthlyViews: "12,345",
    likes: "12,345",
    followers: "2,345",
    articles: "12,345"
  };

  const userArticles = [
    {
      id: 1,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      image: "/assets/images/article-1.jpg",
      category: "Article",
      views: 1234,
      likes: 89
    },
    {
      id: 2,
      title: "Subheading",
      description: "Body text for whatever you'd like to expand on the main point",
      image: "/assets/images/article-2.jpg",
      category: "Case Study",
      views: 2345,
      likes: 156
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-start justify-between mb-12">
          <h1 className="text-4xl font-bold text-white">Personal Details</h1>
          <Link 
            href="/profile/edit"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            Edit Profile
          </Link>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-16">
          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src="/assets/images/article-1.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Olajide Funminiyi</h2>
            <p className="text-gray-400">Architecture, Bsc, Msc, PhD</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">Monthly Views</p>
              <p className="text-3xl font-bold text-white">{userStats.monthlyViews}</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">Likes</p>
              <p className="text-3xl font-bold text-white">{userStats.likes}</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">Followers</p>
              <p className="text-3xl font-bold text-white">{userStats.followers}</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">Articles</p>
              <p className="text-3xl font-bold text-white">{userStats.articles}</p>
            </div>
          </div>
        </div>

        {/* My Articles Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">My Articles</h2>
            <Link 
              href="/write-article"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
            >
              Write Article
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userArticles.map((article) => (
              <div key={article.id} className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{article.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{article.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
