"use client";

import { Search, ChevronDown, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/svgs/logo.svg"
            alt="Arc Funmi Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-800 hover:text-gray-900 font-medium">
              <span>Explore</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <Link href="/about" className="text-gray-800 hover:text-gray-900 font-medium">
            About
          </Link>
          
          <Link href="/contact" className="text-gray-800 hover:text-gray-900 font-medium">
            Contact
          </Link>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/login" 
              className="bg-black text-yellow-500 px-4 py-2 rounded font-medium hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>
      </div>
    </header>
  );
} 