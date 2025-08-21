"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/team", label: "Team" },
    { href: "/internship", label: "Professional Internship" },
    { href: "/publications", label: "Publications" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <div className="flex items-center group flex-shrink-0">
              <div className="relative">
                <Scale className="h-9 w-9 text-slate-800 group-hover:text-amber-600 transition-colors duration-300" />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="ml-3 text-xl font-bold font-lora text-slate-800">EQ-Justice Law Firm</span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-8 mx-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition-colors duration-300 font-medium text-sm py-2 group ${
                    currentPage === item.href
                      ? "text-amber-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ${
                      currentPage === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Consultation Button and Mobile Menu */}
            <div className="flex items-center">
              <Button
                asChild
                className="hidden lg:flex bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-8 py-2.5 font-medium text-sm mr-4"
              >
                <Link href="/consultation">Book Consultation</Link>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors duration-300 font-medium py-2 text-sm ${
                    currentPage === item.href
                      ? "text-amber-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="w-full mt-4 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-lg font-medium text-sm"
              >
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
