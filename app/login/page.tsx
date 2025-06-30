import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-yellow-500 flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full h-full bg-cover bg-center rounded-r-[80px]"
          style={{
            backgroundImage: "url('/assets/images/auth-building.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Optional overlay for better image contrast */}
          <div className="absolute inset-0 bg-black/20 rounded-r-[80px]" />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <Image
                src="/assets/svgs/logo.svg"
                alt="Arcfunmi Logo"
                width={150}
                height={50}
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-8">
              Login to your account
            </h1>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-white border-2 border-black rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-6 py-4 bg-white border-2 border-black rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link href="/forgot-password" className="text-black hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors border-2 border-white"
              >
                Login
              </button>
            </div>
          </form>

          {/* Divider and Social Login */}
          <div className="space-y-6">
            {/* Sign up link */}
            <div className="text-center">
              <p className="text-black">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-semibold hover:underline">
                  Signup
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center">
              <div className="flex-1 border-t-2 border-black"></div>
              <span className="px-4 text-black font-semibold">or</span>
              <div className="flex-1 border-t-2 border-black"></div>
            </div>

            {/* Google Sign In */}
            <div className="flex justify-center">
              <button className="bg-white hover:bg-gray-50 rounded-full px-8 py-3 flex items-center space-x-3 transition-colors border-2 border-white">
                <FcGoogle className="w-6 h-6" />
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 