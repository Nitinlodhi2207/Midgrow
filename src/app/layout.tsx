import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css"; // Import the new comprehensive styles
import MobileHeader from "@/components/MobileHeader";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midgrow - Digital Marketing & Web Development",
  description: "Transform your business digitally with Midgrow. We offer SEO, digital marketing, web development, app development, and business automation services all over world from Indore, India.",
  keywords: "digital marketing, SEO, web development, app development, business automation, Indore, India, worldwide services",
  authors: [{ name: "Midgrow" }],
  openGraph: {
    title: "Midgrow",
    description: "Transform your business digitally with smart, affordable, and AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-gray-50`}>
        {/* Mobile Header - Only visible on mobile */}
        <MobileHeader />
        
        {/* Main Content Area */}
        <main className="flex-1 relative">
          {/* Mobile content with proper spacing for header, bottom nav, and footer */}
          <div className="md:hidden pt-14 pb-16">
            {children}
          </div>
          
          {/* Desktop content */}
          <div className="hidden md:block">
            {children}
          </div>
        </main>
        
        {/* Bottom Navigation - Only visible on mobile */}
        <BottomNavigation />
        
        {/* Mobile Footer - Only visible on mobile */}
        <div className="md:hidden">
          <MobileFooter />
        </div>
        
        {/* Desktop Footer - Only visible on desktop */}
        <div className="hidden md:block">
          <Footer />
        </div>
      </body>
    </html>
  );
}
