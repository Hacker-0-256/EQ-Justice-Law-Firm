"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionDivider } from "@/components/ui/section-divider"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Scale, Linkedin, Mail, Phone, ArrowLeft, ArrowRight, MapPin } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Uwimana",
    title: "Managing Partner",
    specialization: "Corporate Law & Investment",
    image: "/images/EQ-law-firm.png",
    bio: "Sarah leads our corporate practice with over 15 years of experience in investment law and corporate governance. She is known for her strategic insight and dedication to client success, having advised on major transactions and regulatory matters across Rwanda.",
    email: "eqjustice.rw@gmail.com",
    linkedin: "https://www.linkedin.com/in/sarah-uwimana-eqjustice",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    name: "Jean Baptiste Nkurunziza",
    title: "Senior Partner",
    specialization: "Litigation & ADR",
    image: "/images/EQ-law-firm.png",
    bio: "Jean Baptiste is a seasoned litigator with extensive experience in commercial disputes and alternative dispute resolution. He is recognized for his persuasive advocacy and commitment to achieving favorable outcomes for clients.",
    email: "eqjustice.rw@gmail.com",
    linkedin: "https://www.linkedin.com/in/jean-baptiste-nkurunziza-eqjustice",
    gradient: "from-red-600 to-pink-600",
  },
  {
    name: "Grace Mukamana",
    title: "Partner",
    specialization: "Labour, Employment & Immigration",
    image: "/images/EQ-law-firm.png",
    bio: "Grace specializes in labour law, employment law, and immigration matters, helping both individuals and corporations navigate complex regulatory frameworks. She is valued for her practical solutions and client-focused approach.",
    email: "eqjustice.rw@gmail.com",
    linkedin: "https://www.linkedin.com/in/grace-mukamana-eqjustice",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    name: "David Habimana",
    title: "Senior Associate",
    specialization: "Real Estate & Construction",
    image: "/images/EQ-law-firm.png",
    bio: "David brings expertise in real estate transactions and construction law, with a focus on large-scale development projects in Rwanda. He is known for his attention to detail and ability to facilitate complex deals.",
    email: "eqjustice.rw@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-habimana-eqjustice",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    name: "Aline Uwase",
    title: "Associate",
    specialization: "Banking & Finance",
    image: "/images/EQ-law-firm.png",
    bio: "Aline focuses on banking and financial services law, providing counsel on regulatory compliance and financial transactions. She is passionate about supporting innovation in Rwanda’s financial sector.",
    email: "eqjustice.rw@gmail.com",
    linkedin: "https://www.linkedin.com/in/aline-uwase-eqjustice",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    name: "Eric Nsengimana",
    title: "Associate",
    specialization: "Tax & Corporate Policy",
    image: "/images/EQ-law-firm.png",
    bio: "Eric specializes in taxation and corporate policy, helping clients navigate Rwanda's evolving regulatory landscape. He is dedicated to delivering value and clarity in every engagement.",
    email: "eqjustice.rw@gmail.com",
    linkedin: "https://www.linkedin.com/in/eric-nsengimana-eqjustice",
    gradient: "from-violet-600 to-purple-600",
  },
]

export default function TeamPage() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation currentPage="/team" />

      {/* Header */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/95"
            style={{
              backgroundImage: `url('/images/EQ-law-firm.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Button asChild variant="ghost" className="text-white/80 hover:text-amber-400 p-0 mr-4">
              <Link href="/">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-lora mb-8 leading-tight">
            Meet Our
            <span className="block text-gradient animate-glow">Expert Team</span>
          </h1>
                      <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Our diverse team of legal experts brings together decades of experience and a commitment to excellence in
            serving our clients across Rwanda and beyond.
          </p>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-lora mb-6 text-slate-800">Meet Our Team</h1>
                      <p className="text-lg text-slate-600 leading-relaxed">
            Through the expertise of our legal team, we offer clients in Rwanda efficient, timely, and results-driven legal services. Our commitment is to deliver the best possible outcomes for every client, guided by integrity, professionalism, and a passion for justice.
          </p>
        </div>
      </section>



            {/* Organizational Structure Flowchart */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-400/3 to-blue-400/3 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          
          {/* Flowchart */}
          <div className="relative">
            {/* Top Level - Managing Partner */}
            <div className="flex justify-center mb-20">
              <div className="relative">
                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 max-w-md border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-t-3xl">
                                              <img
                          src="/images/EQ-law-firm.png"
                          alt="EQ-Justice Law Firm"
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold font-lora text-slate-800 mb-3">Sarah Uwimana</h3>
                        <p className="text-lg font-medium text-amber-600 mb-4">Managing Partner</p>
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2 rounded-full text-sm font-medium">
                          Corporate Law & Investment
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-center text-base mb-6">Sarah leads our corporate practice with over 15 years of experience in investment law and corporate governance.</p>
                      
                      {/* Contact Buttons */}
                      <div className="flex justify-center space-x-4">
                        <Button size="sm" className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full shadow-lg">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-50 rounded-full">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Animated Arrow down */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-1.5 h-16 bg-gradient-to-b from-amber-500 to-transparent animate-pulse"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full mx-auto mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>

            {/* Second Level - Partners */}
            <div className="flex justify-center mb-20">
              <div className="flex space-x-32">
                <div className="relative">
                  <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 max-w-md border border-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-t-3xl">
                        <img
                          src="/images/EQ-law-firm.png"
                          alt="EQ-Justice Law Firm"
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">Jean Baptiste Nkurunziza</h3>
                          <p className="text-lg font-medium text-amber-600 mb-4">Senior Partner</p>
                          <Badge className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-0 px-6 py-2 rounded-full text-sm font-medium">
                            Litigation & ADR
                          </Badge>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-center text-sm mb-6">Jean Baptiste is a seasoned litigator with extensive experience in commercial disputes and alternative dispute resolution.</p>
                        
                        {/* Contact Buttons */}
                        <div className="flex justify-center space-x-4">
                          <Button size="sm" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-full shadow-lg">
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-400 text-red-600 hover:bg-red-50 rounded-full">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Animated Arrow down */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-red-500 to-transparent animate-pulse"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-2 animate-bounce"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 max-w-md border border-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-t-3xl">
                        <img
                          src="/images/EQ-law-firm.png"
                          alt="EQ-Justice Law Firm"
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">Grace Mukamana</h3>
                          <p className="text-lg font-medium text-amber-600 mb-4">Partner</p>
                          <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-6 py-2 rounded-full text-sm font-medium">
                            Labour, Employment & Immigration
                          </Badge>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-center text-sm mb-6">Grace specializes in labour law, employment law, and immigration matters, helping both individuals and corporations navigate complex regulatory frameworks.</p>
                        
                        {/* Contact Buttons */}
                        <div className="flex justify-center space-x-4">
                          <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full shadow-lg">
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Button>
                          <Button size="sm" variant="outline" className="border-emerald-400 text-emerald-600 hover:bg-emerald-50 rounded-full">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Animated Arrow down */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-emerald-500 to-transparent animate-pulse"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Level - Associates */}
            <div className="flex justify-center">
              <div className="flex space-x-16">
                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 max-w-md border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative">
                  <div className="relative overflow-hidden rounded-t-3xl">
                                            <img
                          src="/images/EQ-law-firm.png"
                          alt="EQ-Justice Law Firm"
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">David Habimana</h3>
                        <p className="text-lg font-medium text-amber-600 mb-4">Senior Associate</p>
                        <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 px-6 py-2 rounded-full text-sm font-medium">
                          Real Estate & Construction
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-center text-sm mb-6">David brings expertise in real estate transactions and construction law, with a focus on large-scale development projects in Rwanda.</p>
                      
                      {/* Contact Buttons */}
                      <div className="flex justify-center space-x-4">
                        <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full shadow-lg">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-50 rounded-full">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 max-w-md border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-t-3xl">
                                              <img
                          src="/images/EQ-law-firm.png"
                          alt="EQ-Justice Law Firm"
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                  <div className="p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">Aline Uwase</h3>
                        <p className="text-lg font-medium text-amber-600 mb-4">Associate</p>
                        <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 px-6 py-2 rounded-full text-sm font-medium">
                          Banking & Finance
                      </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-center text-sm mb-6">Aline focuses on banking and financial services law, providing counsel on regulatory compliance and financial transactions.</p>
                      
                      {/* Contact Buttons */}
                      <div className="flex justify-center space-x-4">
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-600 hover:bg-cyan-50 rounded-full">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 max-w-md border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-t-3xl">
                                              <img
                          src="/images/EQ-law-firm.png"
                          alt="EQ-Justice Law Firm"
                          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">Eric Nsengimana</h3>
                        <p className="text-lg font-medium text-amber-600 mb-3">Associate</p>
                        <Badge className="bg-gradient-to-br from-violet-600 to-purple-600 text-white border-0 px-6 py-2 rounded-full text-sm font-medium">
                          Tax & Corporate Policy
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-center text-sm mb-6">Eric specializes in taxation and corporate policy, helping clients navigate Rwanda's evolving regulatory landscape.</p>
                      
                      {/* Contact Buttons */}
                      <div className="flex justify-center space-x-4">
                        <Button size="sm" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-full shadow-lg">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline" className="border-violet-400 text-violet-600 hover:bg-violet-50 rounded-full">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Connecting Lines */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-72 h-1 bg-gradient-to-b from-transparent via-red-400 to-transparent"></div>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to work with Rwanda's leading legal team?</h2>
          <p className="mb-8 text-lg">Contact us to learn more about our team or to schedule a consultation with one of our legal experts.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold rounded-full px-10 py-4">
            <Link href="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Work With Our Expert Team</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Ready to discuss your legal needs? Our experienced team is here to provide the guidance and representation
            you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="/consultation">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/background-patterns/grid-pattern.png')] opacity-5" />

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
                  { href: "/practice-areas", label: "Practice Areas" },
                  { href: "/internship", label: "Internship" },
                  { href: "/consultation", label: "Consultation" },
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
              <h3 className="text-xl font-semibold mb-6 text-amber-400">Newsletter</h3>
              <p className="text-gray-300 mb-6">Stay updated with legal insights and firm news.</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                />
                <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold rounded-full">
                  Subscribe
                </Button>
              </div>
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
