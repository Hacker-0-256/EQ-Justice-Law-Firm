"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionDivider } from "@/components/ui/section-divider"
import { FormField } from "@/components/ui/form-field"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  Send,
  ArrowRight,
  MessageCircle,
  Calendar,
  Users,
  Loader2,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { 
  validateEmail, 
  validatePhone, 
  validateRequired, 
  validateMinLength,
  submitContactForm,
  FormErrors 
} from "@/lib/form-utils"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate name
    const nameError = validateRequired(formData.name, "Name")
    if (nameError) newErrors.name = nameError

    // Validate email
    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    // Validate phone
    const phoneError = validatePhone(formData.phone)
    if (phoneError) newErrors.phone = phoneError

    // Validate subject
    const subjectError = validateRequired(formData.subject, "Subject")
    if (subjectError) newErrors.subject = subjectError

    // Validate message
    const messageError = validateMinLength(formData.message, 10, "Message")
    if (messageError) newErrors.message = messageError

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message,
        })
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setErrors({})
      } else {
        toast({
          title: "Submission Failed",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation currentPage="/contact" />

      {/* Contact Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
                          <h1 className="text-4xl font-bold font-lora mb-6 text-slate-800">Contact EQ-Justice Law Firm</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            We’re here to help with all your legal needs. Contact us for a confidential consultation or to learn more about our services. Our team is committed to providing timely, professional, and client-focused support.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-slate-700"><Phone className="h-5 w-5 text-amber-600" /> +250 788 456 789</div>
            <div className="flex items-center gap-2 text-slate-700"><Mail className="h-5 w-5 text-amber-600" /> info@eqjustice.rw</div>
            <div className="flex items-center gap-2 text-slate-700"><MapPin className="h-5 w-5 text-amber-600" /> KG 123 St, Kigali City Center, Rwanda</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 bg-white">
        <SectionDivider variant="wave" className="text-slate-900 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold font-lora text-slate-800 mb-8">Get in Touch</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We're here to help with all your legal needs. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    primary: "+250 788 123 456",
                    secondary: "+250 788 654 321",
                    tertiary: "Monday - Friday: 8:00 AM - 6:00 PM",
                    quaternary: "Saturday: 9:00 AM - 1:00 PM",
                    gradient: "from-blue-600 to-purple-600",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    primary: "info@eqjustice.rw",
                    secondary: "consultation@eqjustice.rw",
                    tertiary: "We respond within 24 hours",
                    gradient: "from-emerald-600 to-teal-600",
                  },
                  {
                    icon: MapPin,
                    title: "Office Address",
                    primary: "EQ-Justice Law Firm",
                    secondary: "Kigali City Center",
                    tertiary: "KG 11 Ave, Kigali",
                    quaternary: "Rwanda",
                    gradient: "from-amber-600 to-orange-600",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    primary: "Monday - Friday: 8:00 AM - 6:00 PM",
                    secondary: "Saturday: 9:00 AM - 1:00 PM",
                    tertiary: "Sunday: Closed",
                    quaternary: "Emergency consultations available 24/7",
                    gradient: "from-violet-600 to-purple-600",
                  },
                ].map((item, index) => (
                  <GlassCard key={index} className="p-8 group hover:scale-105 transition-all duration-500">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 flex-shrink-0`}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold font-lora text-slate-800 mb-3">{item.title}</h3>
                        <div className="space-y-1 text-slate-600">
                          <p className="font-medium">{item.primary}</p>
                          {item.secondary && <p className="font-medium">{item.secondary}</p>}
                          <p className="text-sm">{item.tertiary}</p>
                          {item.quaternary && (
                            <p
                              className={`text-sm ${item.title === "Business Hours" ? "text-amber-600 font-medium" : ""}`}
                            >
                              {item.quaternary}
                            </p>
                          )}
                        </div>
                        {item.title === "Office Address" && (
                          <Button
                            size="sm"
                            className="mt-4 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-full"
                          >
                            Get Directions
                          </Button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <GlassCard className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold font-lora text-slate-800 mb-4">Send us a Message</h3>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(value) => handleInputChange("name", value)}
                    error={errors.name}
                    required
                    placeholder="Enter your full name"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(value) => handleInputChange("email", value)}
                      error={errors.email}
                      required
                      placeholder="your.email@example.com"
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(value) => handleInputChange("phone", value)}
                      error={errors.phone}
                      required
                      placeholder="+250 788 123 456"
                    />
                  </div>

                  <FormField
                    label="Subject"
                    name="subject"
                    type="select"
                    value={formData.subject}
                    onChange={(value) => handleInputChange("subject", value)}
                    error={errors.subject}
                    required
                    placeholder="Select a subject"
                    options={[
                      { value: "general", label: "General Inquiry" },
                      { value: "consultation", label: "Legal Consultation" },
                      { value: "corporate", label: "Corporate Law" },
                      { value: "litigation", label: "Litigation" },
                      { value: "investment", label: "Investment Law" },
                      { value: "employment", label: "Employment Law" },
                      { value: "real-estate", label: "Real Estate" },
                      { value: "immigration", label: "Immigration" },
                      { value: "other", label: "Other" },
                    ]}
                  />

                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={(value) => handleInputChange("message", value)}
                    error={errors.message}
                    required
                    placeholder="Please describe your inquiry or legal matter in detail..."
                    rows={5}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Note */}
      <div className="max-w-2xl mx-auto px-4 mb-6 text-center">
        <p className="text-sm text-slate-500">All inquiries are confidential. We aim to respond within 24 hours.</p>
      </div>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Find Our Office</h2>
            <p className="text-xl text-slate-600">
              Located in the heart of Kigali, we're easily accessible and ready to serve you.
            </p>
          </div>

          <GlassCard className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
              <div className="text-center text-slate-600">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <p className="text-2xl font-bold font-lora text-slate-800 mb-2">Interactive Map</p>
                <p className="text-slate-600 mb-2">EQ-Justice Law Firm</p>
                <p className="text-slate-600">Kigali City Center, Rwanda</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-2xl animate-float" />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-24 bg-white relative">
        <SectionDivider variant="curve" className="text-slate-50 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Multiple Ways to Connect</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're committed to providing prompt and
              professional responses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant support during business hours",
                action: "Start Chat",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                description: "Book a consultation at your convenience",
                action: "Book Now",
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our team",
                action: "Call Now",
                gradient: "from-amber-600 to-orange-600",
              },
              {
                icon: Users,
                title: "Visit Office",
                description: "Meet us at our Kigali location",
                action: "Get Directions",
                gradient: "from-violet-600 to-purple-600",
              },
            ].map((option, index) => (
              <GlassCard key={index} className="p-8 text-center group hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">{option.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{option.description}</p>
                <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  {option.action}
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Ready to Get Legal Help?</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Don't let legal challenges hold you back. Contact our expert team today and take the first step towards
            resolving your legal matters with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="/consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/practice-areas">View Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prefer to speak directly?</h2>
          <p className="mb-8 text-lg">Call us at <span className="text-amber-400 font-semibold">+250 788 456 789</span> or book a consultation with our legal team today.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold rounded-full px-10 py-4">
            <Link href="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=Grid')] opacity-5" />

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
                  { href: "/publications", label: "Publications" },
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
                  placeholder="Your email"
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
