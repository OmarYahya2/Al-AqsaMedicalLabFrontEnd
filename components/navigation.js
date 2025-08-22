import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import NavigationClient from "./navigation-client";

export default function Navigation() {
  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-serif font-bold text-foreground">
                  مختبر الأقصى الطبي
                </h1>
                <p className="text-sm text-muted-foreground font-sans">
                  Al-Aqsa Medical Lab
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              عن المختبر
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              الخدمات
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              اتصل بنا
            </Link>
          </div>

          {/* Mobile Navigation - Client Component */}
          <NavigationClient />
        </div>
      </div>
    </nav>
  );
}
