"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionDivider } from "@/components/ui/section-divider"
import { FormField } from "@/components/ui/form-field"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Clock,
  MapPin,
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Send,
  Star,
  Building,
  Target,
  Briefcase,
  Phone,
  Mail,
  Loader2,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { 
  validateEmail, 
  validatePhone, 
  validateRequired, 
  validateMinLength,
  submitInternshipForm,
  FormErrors 
} from "@/lib/form-utils"

const programFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "Structured learning program covering all aspects of legal practice in Rwanda and beyond.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "One-on-one guidance from experienced lawyers and partners throughout your internship.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Real Case Experience",
    description: "Work on actual cases and legal matters under supervision of senior attorneys.",
    gradient: "from-orange-600 to-red-600",
  },
  {
    icon: Building,
    title: "Professional Network",
    description: "Build connections with legal professionals, clients, and fellow interns.",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive official certification upon successful completion of the program.",
    gradient: "from-amber-600 to-yellow-600",
  },
  {
    icon: Target,
    title: "Career Placement",
    description: "Job placement assistance and career guidance for outstanding interns.",
    gradient: "from-cyan-600 to-blue-600",
  },
]

const programTracks = [
  {
    title: "Corporate Law Track",
    duration: "6 months",
    description: "Focus on corporate and commercial law, mergers & acquisitions, and business advisory.",
    requirements: ["Law degree or final year student", "Strong academic record", "Interest in corporate law"],
    outcomes: ["Corporate law expertise", "Business advisory skills", "M&A transaction experience"],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "Litigation Track",
    duration: "6 months",
    description: "Intensive training in litigation, dispute resolution, and courtroom advocacy.",
    requirements: ["Law degree or final year student", "Excellent communication skills", "Interest in litigation"],
    outcomes: ["Litigation skills", "Court procedure knowledge", "ADR expertise"],
    gradient: "from-red-600 to-pink-600",
  },
  {
    title: "Investment Law Track",
    duration: "4 months",
    description: "Specialized program focusing on investment law, foreign investment, and regulatory compliance.",
    requirements: ["Law degree", "Economics/Finance background preferred", "Language skills (English/French)"],
    outcomes: ["Investment law expertise", "Regulatory knowledge", "International law exposure"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "General Practice Track",
    duration: "3 months",
    description: "Broad exposure to various practice areas for comprehensive legal training.",
    requirements: ["Law student (any year)", "Basic legal knowledge", "Commitment to learning"],
    outcomes: ["Broad legal knowledge", "Practice area exposure", "Professional skills"],
    gradient: "from-purple-600 to-violet-600",
  },
]

const testimonials = [
  {
    name: "Marie Uwimana",
    position: "Associate at International Law Firm",
    year: "2024 Graduate",
    quote:
              "The EQ-Justice Law Firm internship program transformed my understanding of legal practice. The mentorship and real case experience prepared me for my current role.",
    rating: 5,
    image: "/images/EQ-law-firm.png",
  },
  {
    name: "Jean Claude Niyonzima",
    position: "Corporate Lawyer",
    year: "2023 Graduate",
    quote:
      "Working on actual M&A transactions during my internship gave me invaluable experience. I'm now leading similar deals at my firm.",
    rating: 5,
    image: "/images/EQ-law-firm.png",
  },
  {
    name: "Grace Mukamana",
    position: "Litigation Associate",
    year: "2024 Graduate",
    quote:
      "The litigation track provided hands-on courtroom experience that you can't get in law school. Highly recommend this program.",
    rating: 5,
    image: "/images/EQ-law-firm.png",
  },
]

const applicationRequirements = [
  "Current law student (final 2 years) or recent law graduate",
  "Strong academic record (minimum GPA 3.0)",
  "Proficiency in English and French",
  "Commitment to complete the full program duration",
  "Professional references from professors or employers",
  "Demonstrated interest in legal practice",
]

export default function InternshipPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    yearOfStudy: "",
    gpa: "",
    track: "",
    startDate: "",
    motivation: "",
    experience: "",
    references: "",
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

    // Validate university
    const universityError = validateRequired(formData.university, "University")
    if (universityError) newErrors.university = universityError

    // Validate year of study
    const yearOfStudyError = validateRequired(formData.yearOfStudy, "Year of Study")
    if (yearOfStudyError) newErrors.yearOfStudy = yearOfStudyError

    // Validate GPA
    const gpaError = validateRequired(formData.gpa, "GPA")
    if (gpaError) newErrors.gpa = gpaError

    // Validate track
    const trackError = validateRequired(formData.track, "Preferred Track")
    if (trackError) newErrors.track = trackError

    // Validate start date
    const startDateError = validateRequired(formData.startDate, "Start Date")
    if (startDateError) newErrors.startDate = startDateError

    // Validate motivation
    const motivationError = validateMinLength(formData.motivation, 50, "Motivation Statement")
    if (motivationError) newErrors.motivation = motivationError

    // Validate experience
    const experienceError = validateMinLength(formData.experience, 30, "Experience")
    if (experienceError) newErrors.experience = experienceError

    // Validate references
    const referencesError = validateRequired(formData.references, "References")
    if (referencesError) newErrors.references = referencesError

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
      const result = await submitInternshipForm(formData)
      
      if (result.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: result.message,
        })
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          university: "",
          yearOfStudy: "",
          gpa: "",
          track: "",
          startDate: "",
          motivation: "",
          experience: "",
          references: "",
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
      <Navigation currentPage="/internship" />

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

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl animate-glow">
              <GraduationCap className="h-12 w-12 text-slate-900" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-lora mb-8 leading-tight">
            Legal Internship
            <span className="block text-gradient animate-glow">Program</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            At EQ-Justice Law Firm, we offer a structured Professional Internship Program for young lawyers, providing hands-on experience, mentorship, and practical training in various areas of legal practice to prepare you for a successful and ethical legal career.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="#apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="#program-details">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program-details" className="relative py-24 bg-white">
        <SectionDivider variant="wave" className="text-slate-900 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Why Choose Our Internship Program?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive program is designed to bridge the gap between academic learning and professional
              practice, providing you with the skills and experience needed to excel in your legal career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-8 text-center">
                  <div className="mb-6">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-lora text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Internship Tracks</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our specialized tracks designed to match your interests and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programTracks.map((track, index) => (
              <GlassCard key={index} className="p-8 group hover:scale-105 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-lora text-slate-800">{track.title}</h3>
                  <Badge
                    className={`bg-gradient-to-r ${track.gradient} text-white border-0 px-4 py-2 rounded-full flex items-center`}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {track.duration}
                  </Badge>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{track.description}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {track.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Star className="h-5 w-5 text-amber-600 mr-2" />
                      Learning Outcomes:
                    </h4>
                    <ul className="space-y-2">
                      {track.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <SectionDivider variant="curve" className="text-slate-50 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">What Our Interns Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from our successful program graduates who are now thriving in their legal careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} className="p-8 group hover:scale-105 transition-all duration-500">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-amber-400"
                  />
                  <div>
                    <h4 className="text-lg font-bold font-lora text-slate-800">{testimonial.name}</h4>
                    <p className="text-amber-600 font-medium">{testimonial.position}</p>
                    <p className="text-sm text-slate-500">{testimonial.year}</p>
                  </div>
                </div>

                <p className="text-slate-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Application Requirements</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We seek motivated, academically strong candidates who are passionate about legal practice and
                  committed to professional excellence.
                </p>
              </div>

              <div className="space-y-4">
                {applicationRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>

              <GlassCard className="p-6">
                <h3 className="font-bold font-lora text-slate-800 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                  Application Deadlines
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-800">Spring Intake:</strong> Applications due March 1st (Program
                    starts April 1st)
                  </p>
                  <p>
                    <strong className="text-slate-800">Fall Intake:</strong> Applications due August 1st (Program starts
                    September 1st)
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/EQ-law-firm.png"
                  alt="EQ-Justice Law Firm"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 z-20">
                <GlassCard className="p-8 text-center">
                  <div className="text-3xl font-bold font-lora text-slate-800 mb-2">50+</div>
                  <div className="text-slate-600 font-medium">Successful Graduates</div>
                </GlassCard>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-white relative">
        <SectionDivider variant="wave" className="text-slate-50 absolute -top-16" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Apply for Our Internship Program</h2>
            <p className="text-xl text-slate-600">
              Take the first step towards an exceptional legal career. Complete the application form below.
            </p>
          </div>

          <GlassCard className="p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-lora text-slate-800 mb-3">Internship Application Form</h3>
              <p className="text-slate-600">
                Please fill out all required fields. We'll review your application and contact you within 2 weeks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-slate-800 font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-slate-800 font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-slate-800 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-800 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="university" className="text-slate-800 font-medium">
                    University/Law School *
                  </Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    required
                    className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="yearOfStudy" className="text-slate-800 font-medium">
                    Year of Study *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)}>
                    <SelectTrigger className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3rd-year">3rd Year</SelectItem>
                      <SelectItem value="4th-year">4th Year</SelectItem>
                      <SelectItem value="5th-year">5th Year</SelectItem>
                      <SelectItem value="graduate">Recent Graduate</SelectItem>
                      <SelectItem value="masters">Masters Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="gpa" className="text-slate-800 font-medium">
                    GPA/Academic Standing *
                  </Label>
                  <Input
                    id="gpa"
                    value={formData.gpa}
                    onChange={(e) => handleInputChange("gpa", e.target.value)}
                    required
                    className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                    placeholder="e.g., 3.5/4.0 or First Class"
                  />
                </div>
                <div>
                  <Label htmlFor="track" className="text-slate-800 font-medium">
                    Preferred Track *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("track", value)}>
                    <SelectTrigger className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl">
                      <SelectValue placeholder="Select track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Law Track</SelectItem>
                      <SelectItem value="litigation">Litigation Track</SelectItem>
                      <SelectItem value="investment">Investment Law Track</SelectItem>
                      <SelectItem value="general">General Practice Track</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="startDate" className="text-slate-800 font-medium">
                  Preferred Start Date *
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                  required
                  className="mt-2 border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <Label htmlFor="motivation" className="text-slate-800 font-medium">
                  Motivation Letter *
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  required
                  className="mt-2 min-h-[120px] border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  placeholder="Please explain why you want to join our internship program and how it aligns with your career goals..."
                />
              </div>

              <div>
                <Label htmlFor="experience" className="text-slate-800 font-medium">
                  Relevant Experience
                </Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  className="mt-2 min-h-[100px] border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  placeholder="Describe any relevant legal experience, internships, or extracurricular activities..."
                />
              </div>

              <div>
                <Label htmlFor="references" className="text-slate-800 font-medium">
                  References *
                </Label>
                <Textarea
                  id="references"
                  value={formData.references}
                  onChange={(e) => handleInputChange("references", e.target.value)}
                  required
                  className="mt-2 min-h-[80px] border-2 border-slate-200 focus:border-amber-400 rounded-xl"
                  placeholder="Please provide contact information for 2 professional or academic references..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                  required
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                  I consent to EQ-Justice Law Firm processing my personal data for the purpose of evaluating my internship
                  application. I understand that my information will be kept confidential and used only for this
                  purpose.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Questions About Our Program?</h2>
            <p className="text-xl text-slate-600">
              Our team is here to help you with any questions about the internship program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Program Coordinator",
                name: "Grace Mukamana",
                email: "internships@eqjustice.rw",
                phone: "+250 788 123 457",
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: MapPin,
                title: "Office Location",
                name: "EQ-Justice Law Firm",
                email: "Kigali City Center",
                phone: "KG 11 Ave, Kigali, Rwanda",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                icon: Calendar,
                title: "Information Sessions",
                name: "Monthly Info Sessions",
                email: "First Friday of each month",
                phone: "2:00 PM - 3:30 PM",
                gradient: "from-amber-600 to-orange-600",
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
                <h3 className="text-lg font-bold font-lora text-slate-800 mb-4">{item.title}</h3>
                <div className="space-y-2 text-slate-600">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm">{item.email}</p>
                  <p className="text-sm">{item.phone}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Ready to Start Your Legal Career?</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Join Rwanda's premier legal internship program and take the first step towards a successful career in law.
            Applications are reviewed on a rolling basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="#apply">
                Apply Now
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to start your legal career?</h2>
          <p className="mb-8 text-lg">Join our Professional Internship Program and take the first step toward a successful legal career with EQ-Justice Law Firm.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold rounded-full px-10 py-4">
            <Link href="#apply">Apply Now</Link>
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
                  { href: "/practice-areas", label: "Practice Areas" },
                  { href: "/team", label: "Team" },
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
              <h3 className="text-xl font-semibold mb-6 text-amber-400">Internship Program</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Corporate Law Track</li>
                <li className="text-gray-300">Litigation Track</li>
                <li className="text-gray-300">Investment Law Track</li>
                <li className="text-gray-300">General Practice Track</li>
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
