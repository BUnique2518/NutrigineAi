import Link from "next/link";
import Image from "next/image";
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
          <Image src="/images/nutrigenie.png" alt="NutriGenie Logo" width={64} height={64} className="w-16 h-16 rounded-lg" />
        </Link>
      </header>

      {/* Main Page Content (Signup or Login) */}
      <main>
        {children}
      </main>
    </div>
  );
}