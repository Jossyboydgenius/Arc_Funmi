"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Eye, Heart, ArrowLeft } from "lucide-react";

export default function MyArticlesPage() {
  // Mock data - in a real app, this would come from an API
  const userArticles = [
    {
      id: 1,
      title: "Modern Architecture Trends in 2024",
      description: "Exploring the latest trends in contemporary architecture and sustainable design practices",
      image: "/assets/images/article-1.jpg",
      category: "Article",
      views: 1234,
      likes: 89,
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Sustainable Building Materials",
      description: "A comprehensive study on eco-friendly materials revolutionizing the construction industry",
      image: "/assets/images/article-2.jpg",
      category: "Case Study",
      views: 2345,
      likes: 156,
      publishedAt: "2024-01-10"
    },
    {
      id: 3,
      title: "Smart Cities and Urban Planning",
      description: "How technology is reshaping urban landscapes and improving quality of life",
      image: "/assets/images/article-3.jpg",
      category: "Article",
      views: 3456,
      likes: 234,
      publishedAt: "2024-01-05"
    },
    {
      id: 4,
      title: "Green Building Certification",
      description: "Understanding LEED certification and its impact on sustainable construction",
      image: "/assets/images/article-4.jpg",
      category: "Case Study",
      views: 1876,
      likes: 123,
      publishedAt: "2023-12-28"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/profile" className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Profile</span>
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-white">My Articles</h1>
          <Link 
            href="/write-article"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            Write Article
          </Link>
        </div>

        {/* Articles Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{userArticles.length}</h3>
            <p className="text-gray-400">Total Articles</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {userArticles.reduce((sum, article) => sum + article.views, 0).toLocaleString()}
            </h3>
            <p className="text-gray-400">Total Views</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {userArticles.reduce((sum, article) => sum + article.likes, 0)}
            </h3>
            <p className="text-gray-400">Total Likes</p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userArticles.map((article) => (
            <div key={article.id} className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors">
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
                
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
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
                  
                  <div className="flex items-center space-x-2">
                    <button className="text-yellow-500 hover:text-yellow-400 text-sm font-medium">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-400 text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
