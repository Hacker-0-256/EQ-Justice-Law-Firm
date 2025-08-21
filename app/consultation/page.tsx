"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionDivider } from "@/components/ui/section-divider"
import { FormField } from "@/components/ui/form-field"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowRight,
  Loader2,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { 
  validateEmail, 
  validatePhone, 
  validateRequired, 
  validateMinLength,
  submitConsultationForm,
  FormErrors 
} from "@/lib/form-utils"

const practiceAreas = [
  "Labour, Employment & Immigration",
  "Investment Law",
  "Insolvency",
  "Corporate Policy & Framework",
  "Corporate & Commercial",
  "Taxation",
  "Litigation & ADR",
  "Insurance",
  "Real Estate & Construction",
  "Transportation Law",
  "Financial & Banking Matters",
  "Hospitality & Tourism",
  "Other",
]

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    practiceArea: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    urgency: "",
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { toast } = useToast()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate first name
    const firstNameError = validateRequired(formData.firstName, "First Name")
    if (firstNameError) newErrors.firstName = firstNameError

    // Validate last name
    const lastNameError = validateRequired(formData.lastName, "Last Name")
    if (lastNameError) newErrors.lastName = lastNameError

    // Validate email
    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    // Validate phone
    const phoneError = validatePhone(formData.phone)
    if (phoneError) newErrors.phone = phoneError

    // Validate practice area
    const practiceAreaError = validateRequired(formData.practiceArea, "Practice Area")
    if (practiceAreaError) newErrors.practiceArea = practiceAreaError

    // Validate preferred date
    const preferredDateError = validateRequired(formData.preferredDate, "Preferred Date")
    if (preferredDateError) newErrors.preferredDate = preferredDateError

    // Validate preferred time
    const preferredTimeError = validateRequired(formData.preferredTime, "Preferred Time")
    if (preferredTimeError) newErrors.preferredTime = preferredTimeError

    // Validate message
    const messageError = validateMinLength(formData.message, 10, "Message")
    if (messageError) newErrors.message = messageError

    // Validate consent
    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms and conditions"
    }

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
      const result = await submitConsultationForm(formData)
      
      if (result.success) {
        toast({
          title: "Consultation Request Submitted!",
          description: result.message,
        })
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          practiceArea: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
          urgency: "",
          consent: false,
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
      <Navigation currentPage="/consultation" />

      {/* Consultation Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-lora mb-6 text-slate-800">Book a Consultation</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            Schedule a confidential consultation with our legal experts to discuss your legal needs. Our team is committed to providing personalized, professional advice tailored to your specific situation.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            Whether you need guidance on corporate law, employment matters, or any other legal issue, our experienced attorneys are here to help you navigate Rwanda's legal landscape.
          </p>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-lora text-center mb-12 text-slate-800">Our Consultation Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Schedule</h3>
              <p className="text-slate-600">Book your consultation at a time that works for you. We offer flexible scheduling options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Meet</h3>
              <p className="text-slate-600">Meet with our legal experts to discuss your case and explore potential solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Plan</h3>
              <p className="text-slate-600">Receive a clear action plan and next steps tailored to your specific legal needs.</p>
            </div>
          </div>
        </div>
      </section>

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
            Book a<span className="block text-gradient animate-glow">Consultation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Schedule a meeting with our expert legal team. We're here to understand your needs and provide tailored
            legal solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 bg-white">
        <SectionDivider variant="wave" className="text-slate-900 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-lora text-slate-800 mb-8">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Multiple ways to reach our team for your convenience.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    primary: "+250 788 123 456",
                    secondary: "Mon-Fri 8AM-6PM",
                    gradient: "from-blue-600 to-purple-600",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    primary: "info@eqjustice.rw",
                    secondary: "24/7 Response",
                    gradient: "from-emerald-600 to-teal-600",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    primary: "Kigali City Center",
                    secondary: "Rwanda",
                    gradient: "from-amber-600 to-orange-600",
                  },
                ].map((item, index) => (
                  <GlassCard key={index} className="p-6 group hover:scale-105 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold font-lora text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 font-medium">{item.primary}</p>
                        <p className="text-sm text-slate-500">{item.secondary}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <GlassCard className="p-6">
                <h3 className="text-xl font-bold font-lora text-slate-800 mb-4">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Initial Assessment",
                      description: "We'll review your case and provide initial guidance",
                    },
                    {
                      title: "Expert Advice",
                      description: "Receive tailored legal recommendations",
                    },
                    {
                      title: "Next Steps",
                      description: "Clear action plan for moving forward",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold font-lora text-slate-800 mb-4">Consultation Request Form</h3>
                  <p className="text-slate-600">
                    Please fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="First Name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(value) => handleInputChange("firstName", value)}
                      error={errors.firstName}
                      required
                      placeholder="Enter your first name"
                    />
                    <FormField
                      label="Last Name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(value) => handleInputChange("lastName", value)}
                      error={errors.lastName}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>

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
                    label="Company/Organization"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(value) => handleInputChange("company", value)}
                    error={errors.company}
                    placeholder="Enter your company name (optional)"
                  />

                  <FormField
                    label="Practice Area"
                    name="practiceArea"
                    type="select"
                    value={formData.practiceArea}
                    onChange={(value) => handleInputChange("practiceArea", value)}
                    error={errors.practiceArea}
                    required
                    placeholder="Select a practice area"
                    options={practiceAreas.map(area => ({ value: area, label: area }))}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="Preferred Date"
                      name="preferredDate"
                      type="text"
                      value={formData.preferredDate}
                      onChange={(value) => handleInputChange("preferredDate", value)}
                      error={errors.preferredDate}
                      required
                      placeholder="Select preferred date"
                    />
                    <FormField
                      label="Preferred Time"
                      name="preferredTime"
                      type="select"
                      value={formData.preferredTime}
                      onChange={(value) => handleInputChange("preferredTime", value)}
                      error={errors.preferredTime}
                      required
                      placeholder="Select preferred time"
                      options={timeSlots.map(time => ({ value: time, label: time }))}
                    />
                  </div>

                  <FormField
                    label="Urgency Level"
                    name="urgency"
                    type="select"
                    value={formData.urgency}
                    onChange={(value) => handleInputChange("urgency", value)}
                    error={errors.urgency}
                    placeholder="Select urgency level"
                    options={[
                      { value: "low", label: "Low - General inquiry" },
                      { value: "medium", label: "Medium - Within 1-2 weeks" },
                      { value: "high", label: "High - Within 1 week" },
                      { value: "urgent", label: "Urgent - ASAP" },
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
                    placeholder="Please describe your legal matter and any specific questions you have..."
                    rows={5}
                  />

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                      I consent to EQ-Justice Law Firm collecting and processing my personal data for the purpose of providing
                      legal consultation services. I understand that my information will be kept confidential and used
                      only for this purpose.
                    </Label>
                  </div>
                  {errors.consent && (
                    <p className="text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.consent}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Consultation
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
        <p className="text-sm text-slate-500">All consultations are confidential. We aim to respond to booking requests within 24 hours.</p>
      </div>

      {/* Urgent Matters Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Legal Assistance?</h2>
          <p className="mb-8 text-lg">For urgent legal matters, call us directly at <span className="font-semibold">+250 788 456 789</span> for immediate support.</p>
          <Button asChild size="lg" className="bg-white text-red-600 font-semibold rounded-full px-10 py-4 hover:bg-gray-100">
            <Link href="tel:+250788456789">Call Now</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Why Choose EQ-Justice Law Firm?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference of working with Rwanda's premier legal team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "15+ experienced legal professionals across multiple practice areas.",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                icon: Clock,
                title: "Quick Response",
                description: "24-hour response time for all consultation requests.",
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "100+ successful cases and satisfied clients across Rwanda.",
                gradient: "from-amber-600 to-orange-600",
              },
              {
                icon: Scale,
                title: "Comprehensive Service",
                description: "14+ practice areas covering all your legal needs.",
                gradient: "from-violet-600 to-purple-600",
              },
            ].map((item, index) => (
              <GlassCard key={index} className="p-8 text-center group hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-lora text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Don't wait to address your legal needs. Our expert team is standing by to provide the guidance and
            representation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="#consultation-form">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
                  { href: "/practice-areas", label: "Practice Areas" },
                  { href: "/team", label: "Team" },
                  { href: "/internship", label: "Internship" },
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
