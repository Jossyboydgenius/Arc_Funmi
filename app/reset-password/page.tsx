import Link from "next/link";
import Image from "next/image";

export default function ResetPasswordPage() {
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
            <h1 className="text-3xl font-bold text-black mb-4">
              Reset Password
            </h1>
            <p className="text-black/70 mb-8">
              Enter your new password below.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* New Password Input */}
            <div>
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-6 py-4 bg-white border-2 border-black rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-6 py-4 bg-white border-2 border-black rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>

            {/* Reset Password Button */}
            <div>
              <Link href="/login">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors border-2 border-white"
                >
                  Reset Password
                </button>
              </Link>
            </div>
          </form>

          {/* Back to Login */}
          <div className="text-center">
            <p className="text-black">
              Remember your password?{" "}
              <Link href="/login" className="font-semibold hover:underline">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
