"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WriteArticlePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [category, setCategory] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    // Clear the file input
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Category:', category);
    // Additional form handling would go here
  };
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/for-you" className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to For You</span>
        </Link>

        {/* Form */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Write New Article</h1>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-white font-medium mb-2">
                Article Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your article title"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-white font-medium mb-2">
                Category
              </label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-full min-h-[56px] px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-black border border-gray-700">
                  <SelectItem value="architecture" className="text-white hover:bg-gray-800">Architecture</SelectItem>
                  <SelectItem value="engineering" className="text-white hover:bg-gray-800">Engineering</SelectItem>
                  <SelectItem value="construction" className="text-white hover:bg-gray-800">Construction</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-white font-medium mb-2">
                Article Content
              </label>
              <textarea
                id="content"
                rows={12}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Write your article content here..."
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-white font-medium mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                id="tags"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="e.g., design, sustainability, innovation"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-white font-medium mb-2">
                Featured Image
              </label>
              <div className="space-y-4">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-500 file:text-black file:font-medium hover:file:bg-yellow-600"
                />
                {selectedImage && (
                  <div className="relative w-full max-w-md">
                    <p className="text-white text-sm mb-2">Preview:</p>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-700">
                      <Image
                        src={selectedImage}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                        type="button"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pt-6">
              <button
                type="submit"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Publish Article
              </button>
              <button
                type="button"
                className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
