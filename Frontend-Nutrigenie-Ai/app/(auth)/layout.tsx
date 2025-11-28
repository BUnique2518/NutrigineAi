import Link from "next/link";
import type React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="px-6 py-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
            {/* We'll use the initials for your app - here we add the logo of our app later */}
            <span className="text-white font-bold text-sm">NG</span>
          </div>
          <span className="text-xl font-semibold text-purple-700">
            Nutri Genie AI
          </span>
        </Link>
      </header>

      {/* Main Page Content (Signup or Login) */}
      <main>
        {children}
      </main>
    </div>
  );
}