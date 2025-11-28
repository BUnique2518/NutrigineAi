import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // Import the cn utility

// Setup the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Use --font-sans for shadcn
});

// Update metadata for your project
export const metadata: Metadata = {
  title: "NutriGenie.ai - Your Food & Fitness Companion",
  description: "Your all-in-one personalized nutrition and fitness platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}