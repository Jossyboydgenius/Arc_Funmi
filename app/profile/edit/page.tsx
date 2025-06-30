"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "Olajide Funminiyi",
    email: "olajide@funminiyi.com",
    phoneNumber: "+234  123 4567 890",
    qualification: "Student"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQualificationChange = (qualification: string) => {
    setFormData(prev => ({
      ...prev,
      qualification
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const qualifications = ["Student", "OND", "HND", "BSC", "MSC", "PHD"];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-white">Edit Profile</h1>
          <button 
            type="submit"
            form="edit-profile-form"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            Save
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/assets/images/article-1.jpg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form */}
        <form id="edit-profile-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name */}
          <div>
            <label className="block text-white font-medium mb-3 text-lg">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-white border-0 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-3 text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-white border-0 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-white font-medium mb-3 text-lg">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-white border-0 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-white font-medium mb-6 text-lg">
              Qualification
            </label>
            <div className="space-y-4">
              {qualifications.map((qual) => (
                <label key={qual} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="qualification"
                    value={qual}
                    checked={formData.qualification === qual}
                    onChange={(e) => handleQualificationChange(e.target.value)}
                    className="w-5 h-5 text-yellow-500 border-2 border-gray-400 focus:ring-yellow-500 focus:ring-2"
                  />
                  <span className="ml-4 text-white text-lg">{qual}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Change Password Button */}
          <div className="pt-8">
            <button
              type="button"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
