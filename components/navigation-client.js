"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function NavigationClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/50">
          <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-card/50 backdrop-blur-sm rounded-lg mx-4 mb-4">
            <Link
              href="/"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              عن المختبر
            </Link>
            <Link
              href="/services"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
