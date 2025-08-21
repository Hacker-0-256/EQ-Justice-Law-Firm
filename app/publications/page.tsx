"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionDivider } from "@/components/ui/section-divider"
import { Badge } from "@/components/ui/badge"

import { NewsletterForm } from "@/components/ui/newsletter-form"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  FileText,
  Download,
  Search,
  Calendar,
  ArrowLeft,
  Eye,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BookOpen,
} from "lucide-react"

const publications = [
  {
    title: "Rwanda Investment Law: A Comprehensive Guide 2024",
    description: "An in-depth analysis of Rwanda's investment legal framework and opportunities for foreign investors.",
    category: "Investment Law",
    date: "2024-12-15",
    type: "PDF",
    downloadUrl: "#",
    author: "Sarah Uwimana",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "Employment Rights in Rwanda: What Every Employer Should Know",
    description: "Essential guide covering employment contracts, termination procedures, and worker rights in Rwanda.",
    category: "Labour & Employment",
    date: "2024-11-28",
    type: "PDF",
    downloadUrl: "#",
    author: "Grace Mukamana",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    title: "Corporate Governance Best Practices in East Africa",
    description: "Comparative analysis of corporate governance frameworks across East African countries.",
    category: "Corporate Law",
    date: "2024-10-20",
    type: "PDF",
    downloadUrl: "#",
    author: "Jean Baptiste Nkurunziza",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    title: "Real Estate Investment Opportunities in Kigali",
    description: "Market analysis and legal considerations for real estate investments in Rwanda's capital.",
    category: "Real Estate",
    date: "2024-09-15",
    type: "PDF",
    downloadUrl: "#",
    author: "David Habimana",
    gradient: "from-amber-600 to-orange-600",
  },
]






export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")




  const filteredPublications = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation currentPage="/publications" />

      {/* Publications Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-lora mb-6 text-slate-800">Publications & Resources</h1>
                      <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Stay informed with our latest legal insights, publications, and educational resources. Our team regularly publishes articles, guides, and publications to help clients and the legal community understand Rwanda's evolving legal landscape.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            From investment law guides to employment rights updates, our publications reflect our commitment to excellence and our deep expertise in Rwandan law.
          </p>
        </div>
      </section>

      {/* Search and Tabs */}
      <section className="relative py-16 bg-white">
        <SectionDivider variant="wave" className="text-slate-900 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 border-2 border-slate-200 focus:border-amber-400 rounded-full transition-colors duration-300"
              />
            </div>
          </div>

          <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPublications.map((publication, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${publication.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative p-8">
                      <div className="flex justify-between items-start mb-4">
                        <Badge
                          className={`bg-gradient-to-r ${publication.gradient} text-white border-0 px-4 py-2 rounded-full`}
                        >
                          {publication.category}
                        </Badge>
                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(publication.date).toLocaleDateString()}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold font-lora text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                        {publication.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed mb-6">{publication.description}</p>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-slate-500">By {publication.author}</div>
                        <div className="flex space-x-3">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-full"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-2 border-slate-200 hover:border-amber-400 rounded-full bg-transparent"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Legal Insights</h2>
                        <p className="mb-8 text-lg">Subscribe to our newsletter for the latest legal updates, publications, and insights from EQ-Justice Law Firm.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder-gray-300"
            />
            <Button className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Stay Updated</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Subscribe to our newsletter for the latest legal insights, publications, and updates on Rwanda's legal
            landscape.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="compact" className="flex-col sm:flex-row" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Scale className="h-10 w-10 text-amber-400" />
                <span className="ml-3 text-2xl font-bold font-lora">EQ-Justice Law Firm</span>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
                Redefining legal excellence in Rwanda since 2023. Where tradition meets innovation in the heart of East
                Africa.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+250 791 703 917" },
                  { icon: Mail, text: "eqjustice.rw@gmail.com" },
                  { icon: MapPin, text: "Prince House, Remera, Kigali, Rwanda" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-amber-400">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/team", label: "Our Team" },
                  { href: "/consultation", label: "Consultation" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-amber-400">Practice Areas</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Corporate & Commercial</li>
                <li className="text-gray-300">Litigation & ADR</li>
                <li className="text-gray-300">Investment Law</li>
                <li className="text-gray-300">Real Estate</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400">
                              &copy; 2025 EQ-Justice Law Firm. All rights reserved. | Crafted with excellence in Rwanda.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
