import Footer from "@/components/landing/Footer";
import Link from "next/link";
import LandingWrapper from "@/components/landing/LandingWrapper";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 border-b">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NG</span>
            </div>
            <span className="text-xl font-semibold text-purple-700">
              Nutri Genie AI
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

            <main className="flex-1">

        <LandingWrapper />
      </main>

      {/* Footer */}
      <Footer />  
    </div>
  );
}