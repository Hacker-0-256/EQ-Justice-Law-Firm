"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { SectionDivider } from "@/components/ui/section-divider"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  TrendingUp,
  ArrowLeft,
  CheckCircle,
  Building,
  Calendar,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"

const values = [
  {
    icon: Scale,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, delivering exceptional legal services that exceed client expectations.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We conduct our practice with unwavering honesty, transparency, and ethical standards in all our professional relationships.",
    gradient: "from-red-600 to-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We embrace modern legal technologies and innovative approaches to provide efficient and effective solutions.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Our clients are at the center of everything we do. We listen, understand, and tailor our services to meet their unique needs.",
    gradient: "from-orange-600 to-yellow-600",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We combine local expertise with international best practices to serve clients in Rwanda and beyond.",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    icon: Award,
    title: "Professional Development",
    description:
      "We invest in continuous learning and development to stay at the forefront of legal practice and industry trends.",
    gradient: "from-violet-600 to-purple-600",
  },
]

const milestones = [
  {
    year: "2023",
    title: "Firm Establishment",
            description: "EQ-Justice Law Firm was founded with a vision to redefine legal excellence in Rwanda.",
    icon: Building,
  },
  {
    year: "2023",
    title: "First Major Case",
    description: "Successfully represented a multinational corporation in a complex investment dispute.",
    icon: Scale,
  },
  {
    year: "2024",
    title: "Team Expansion",
    description: "Grew to a team of 15+ legal professionals across multiple practice areas.",
    icon: Users,
  },
  {
    year: "2024",
    title: "100+ Clients Milestone",
    description: "Reached the milestone of serving over 100 satisfied clients across various sectors.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Internship Program Launch",
    description: "Launched our comprehensive legal internship program to nurture the next generation of lawyers.",
    icon: Target,
  },
  {
    year: "2025",
    title: "Regional Expansion",
    description: "Planning to expand our services across East Africa while maintaining our Rwanda headquarters.",
    icon: Globe,
  },
]

const stats = [
  { number: 100, label: "Satisfied Clients", icon: Users, suffix: "+" },
  { number: 14, label: "Practice Areas", icon: Scale, suffix: "+" },
  { number: 15, label: "Legal Professionals", icon: Award, suffix: "+" },
  { number: 2, label: "Years of Excellence", icon: Calendar, suffix: "" },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation currentPage="/about" />

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
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-lora mb-8 leading-tight">
              About
                                <span className="block text-gradient animate-glow">EQ-Justice Law Firm</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Established in 2023, we are redefining legal excellence in Rwanda through innovation, integrity, and
              unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white">
        <SectionDivider variant="wave" className="text-slate-900 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-10 w-10 text-amber-400" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-lora text-slate-800 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide world-class legal services while fostering legal excellence in Rwanda and beyond. We are committed to delivering innovative solutions that meet the evolving needs of our clients and contribute to the development of Rwanda's legal landscape.",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be the leading law firm in East Africa, recognized for our innovation, integrity, and exceptional client service. We envision a future where legal excellence drives economic growth and social development across the region.",
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: Building,
                title: "Our Approach",
                description:
                  "We combine deep local knowledge with international best practices to deliver comprehensive legal solutions. Our client-centric approach ensures that every strategy is tailored to achieve optimal outcomes for our clients' unique circumstances.",
                gradient: "from-amber-600 to-orange-600",
              },
            ].map((item, index) => (
              <GlassCard key={index} className="p-8 text-center group hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-lora text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These fundamental principles guide every aspect of our practice and define who we are as a firm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-lora text-slate-800 group-hover:text-slate-900 transition-colors">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-24 bg-white relative">
        <SectionDivider variant="curve" className="text-slate-50 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From our founding in 2023 to our vision for the future, discover the milestones that have shaped EQ
              JUSTICE into the firm we are today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 to-amber-600 hidden md:block rounded-full"
            ></motion.div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    scale: 0.8
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.3
                  }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 md:pr-8">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        rotateY: index % 2 === 0 ? 5 : -5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <GlassCard
                        className={`p-8 ${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} group transition-all duration-500`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                          <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 text-lg font-bold px-4 py-2 rounded-full shadow-lg"
                          >
                          {milestone.year}
                          </motion.div>
                          <motion.div 
                            initial={{ scale: 0, rotate: 180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 5,
                              boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)"
                            }}
                            className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg"
                          >
                          <milestone.icon className="h-6 w-6 text-amber-400" />
                          </motion.div>
                        </div>
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                          viewport={{ once: true }}
                          className="text-xl font-bold font-lora text-slate-800 mb-3"
                        >
                          {milestone.title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.9 }}
                          viewport={{ once: true }}
                          className="text-slate-600 leading-relaxed"
                        >
                          {milestone.description}
                        </motion.p>
                    </GlassCard>
                    </motion.div>
                  </div>

                  {/* Animated Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.4,
                      type: "spring"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(251, 191, 36, 0.8)"
                    }}
                    className="hidden md:block w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"
                  ></motion.div>

                  <div className="flex-1 md:pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Why Choose EQ-Justice Law Firm?</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We stand out in Rwanda's legal landscape through our commitment to excellence, innovation, and client
                  success. Here's what sets us apart:
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Local Expertise, Global Standards",
                    description:
                      "Deep understanding of Rwanda's legal system combined with international best practices.",
                  },
                  {
                    title: "Comprehensive Service Portfolio",
                    description: "14+ practice areas covering all aspects of business and personal legal needs.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Tailored solutions that prioritize your unique needs and business objectives.",
                  },
                  {
                    title: "Innovation & Technology",
                    description: "Leveraging modern legal technologies for efficient and effective service delivery.",
                  },
                  {
                    title: "Commitment to Development",
                    description: "Actively contributing to legal education and professional development in Rwanda.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/EQ-law-firm.png"
                  alt="EQ-Justice Law Firm"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 z-20">
                <GlassCard className="p-8 text-center">
                  <div className="text-3xl font-bold font-lora text-slate-800 mb-2">2023</div>
                  <div className="text-slate-600 font-medium">Founded</div>
                </GlassCard>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white relative">
        <SectionDivider variant="wave" className="text-slate-50 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Our Location</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategically located in the heart of Kigali, we are easily accessible to serve clients across Rwanda and
              the East African region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <GlassCard className="p-10 group hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-lora text-slate-800">Visit Our Office</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    EQ-Justice Law Firm
                    <br />
                    Remera, Kigali
                    <br />
                    Rwanda
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Business Hours</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-amber-600" />
                      <span className="text-slate-600">+250 791 703 917</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-amber-600" />
                      <span className="text-slate-600">eqjustice.rw@gmail.com</span>
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Directions
                </Button>
              </div>
            </GlassCard>

            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="text-center text-slate-600">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-xl font-semibold font-lora text-slate-800 mb-2">Interactive Map</p>
                  <p className="text-slate-600">Prince House, Remera, Kigali, Rwanda</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-2xl animate-float" />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                            Experience the EQ-Justice Law Firm difference. Let our expert team help you navigate your legal challenges with
            confidence and achieve your goals.
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
                  { href: "/team", label: "Our Team" },
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
