"use client";

import { Search, ChevronDown, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/svgs/logo.svg"
            alt="Arcfunmi Logo"
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 text-gray-800 hover:text-gray-900 font-medium">
                <span>Explore</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              <DropdownMenuItem asChild>
                <Link href="/for-you" className="flex cursor-pointer">
                  For You
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/featured" className="flex cursor-pointer">
                  Featured
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/trending" className="flex cursor-pointer">
                  Trending
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/categories" className="flex cursor-pointer">
                  Categories
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <User className="w-4 h-4 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px]">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex cursor-pointer px-3 py-2 text-gray-700 hover:bg-gray-100">
                    View Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/edit" className="flex cursor-pointer px-3 py-2 text-gray-700 hover:bg-gray-100">
                    Edit Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/notifications" className="flex cursor-pointer px-3 py-2 text-gray-700 hover:bg-gray-100">
                    Notifications
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-articles" className="flex cursor-pointer px-3 py-2 text-gray-700 hover:bg-gray-100">
                    My Articles
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex cursor-pointer px-3 py-2 text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button className="flex cursor-pointer w-full text-left px-3 py-2 text-red-600 hover:bg-red-50">
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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