"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { SectionDivider } from "@/components/ui/section-divider"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  FileText,
  Gavel,
  Plane,
  Shield,
  Home,
  Truck,
  Banknote,
  Hotel,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const practiceAreas = [
  {
    icon: Users,
    title: "Labour, Employment & Immigration Law",
    description: "We represent clients in Rwanda in matters of labor, employment, and immigration including helping employers to get work permits, allegations of wrongful termination, and all immigration-related legal services. We also provide broad consultations in collective bargaining, negotiations, conciliation, arbitration and administrative proceeding. In addition, our firm advises employers on compliance issues under labour, employment, and immigration law.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Law",
    description: "We provide comprehensive legal support to local and foreign investors, including advisory on Rwanda’s investment laws, business formation, regulatory compliance, tax planning, land acquisition, and dispute resolution, ensuring smooth and secure entry and operation in Rwanda’s business environment.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: Building2,
    title: "Insolvency",
    description: "Offers expert legal guidance to businesses and individuals facing financial distress, including insolvency advisory, debt restructuring, liquidation proceedings, creditor representation, and legal compliance under Rwanda’s insolvency laws, with a focus on protecting rights and preserving value.",
    gradient: "from-orange-600 to-red-600",
  },
  {
    icon: FileText,
    title: "Corporate Policy and Legal Framework",
    description: "Our lawyers have served as independent consultants for government bodies, intergovernmental, and international organizations, companies providing expert support in restructuring, policy and legal development and review.",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: Briefcase,
    title: "Corporate and Commercial",
    description: "EQ-Justice Law Firm provides services in Corporate and Commercial Law, including but not limited to: Drafting and Negotiation of Loan Agreements and related documentation, Drafting and Negotiation of syndicated Loan Offers and Agreements, Drafting, Negotiation and Registration of Security Documents such as Mortgages, Leases, Debentures, Caveats, Bonds, Equities and other Charges.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Banknote,
    title: "Taxation",
    description: "We provide expert tax planning, compliance, and dispute resolution services. Our team advises on Rwandan tax law, assists with tax audits, represents clients in disputes with the Rwanda Revenue Authority, and offers guidance on international tax matters to ensure clients meet all regulatory obligations while optimizing their tax positions.",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    icon: Gavel,
    title: "Litigation and Dispute Resolution",
    description: "Our lawyers have extensive experience in litigation and Alternative Dispute Resolution (ADR) mechanisms, particularly in the field of commercial transactions and labour disputes.",
    gradient: "from-red-600 to-pink-600",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Our insurance law practice covers claims management, policy review, and risk assessment for both individuals and businesses. We assist clients in navigating insurance disputes, negotiating settlements, and ensuring compliance with Rwandan insurance regulations, providing peace of mind and robust legal protection.",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Home,
    title: "Real Estate and Construction",
    description: "Our broad law practice is complemented by our extensive expertise in residential real estate matters and construction transaction. Our lawyers are high qualified in advising on drafting appropriate agreements to the acquisition of land, property, etc. We also represent brokers and individual buyers and sellers in real estate disputes. Real Estate and Construction Law means those litigations that relate to any kind of residential or commercial property transactions.",
    gradient: "from-amber-600 to-yellow-600",
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "If your business is involved in travel and commerce on the ground, in the air, or on the water, we as Lawyers can resolve legal issues like regulation of private and commercial vehicles, aircrafts, vessels, also we deal with transport safety standards. We can provide our clients with different legal services, even opinions, advice and research on all kind of our client demands such as cargo claims, matters of employment, and difficult dispute, personal injury claims and aircraft damage claims, support regarding seizure and arrest of regionally based assets.",
    gradient: "from-slate-600 to-gray-600",
  },
  {
    icon: Banknote,
    title: "Financial and Banking",
    description: "We provide comprehensive legal support for financial institutions and clients in banking matters, including regulatory compliance, loan agreements, securities, and dispute resolution. Our expertise covers drafting and negotiation of financial documents, registration of securities, and guidance on Rwanda’s financial regulations.",
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    icon: Hotel,
    title: "Hospitality and Tourism",
    description: "Legal services for Rwanda's thriving tourism industry including hotel operations, tourism regulations, and hospitality contracts.",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Professional Internship",
    description: "At EQ-Justice Law Firm, we offer a structured Professional Internship Program for young lawyers, providing hands-on experience, mentorship, and practical training in various areas of legal practice to prepare them for a successful and ethical legal career.",
    gradient: "from-purple-600 to-violet-600",
  },
]

const stats = [
  { number: 2023, label: "Founded", suffix: "" },
  { number: 14, label: "Practice Areas", suffix: "+" },
  { number: 250, label: "Cases Won", suffix: "+" },
  { number: 50, label: "Corporate Clients", suffix: "+" },
]

const testimonials = [
  {
    name: "Dr. Emmanuel Ndayisaba",
    position: "Managing Director, Kigali Investment Group",
    content:
      "EQ-Justice Law Firm guided us through complex regulatory compliance during our regional expansion. Their expertise in investment law and corporate governance is unmatched in Rwanda.",
    rating: 5,
    image: "/images/EQ-law-firm.png",
  },
  {
    name: "Sarah Uwimana",
    position: "CEO, GreenTech Solutions Rwanda",
    content:
      "The team's deep understanding of employment law and corporate policy helped us build a compliant and sustainable business structure. Highly recommend their services.",
    rating: 5,
    image: "/images/EQ-law-firm.png",
  },
  {
    name: "Pierre Habimana",
    position: "Founder, East Africa Logistics Ltd",
    content:
      "Outstanding service in transportation law and corporate restructuring. EQ-Justice Law Firm delivered results that exceeded our expectations and saved us significant costs.",
    rating: 5,
    image: "/images/EQ-law-firm.png",
  },
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)


  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/95"
            style={{
              backgroundImage: `url('/images/hero-backgrounds/kigali-skyline-hero.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-lora mb-8 leading-tight">
              Leading Legal
              <span className="block text-gradient animate-glow">Excellence</span>
              <span className="block">in Rwanda</span>
            </h1>
            <p className="text-base md:text-lg mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Empowering businesses and individuals with world-class legal services. From corporate governance to investment law, 
              we navigate Rwanda's dynamic legal landscape with expertise, integrity, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
              >
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full transition-all duration-300 bg-transparent"
              >
                <Link href="#practice-areas">Explore Practice Areas</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
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
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold font-lora text-slate-800 mb-3">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-slate-600 font-medium text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">About EQ-Justice Law Firm</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Established in 2023, EQ-Justice Law Firm is a dynamic law firm in Rwanda, founded with a vision to cultivate a new generation of legal professionals—lawyers, attorneys, and advocates—who embody energy, integrity, and excellence in law practice. We are committed to delivering high-quality legal services that meet the evolving needs of individuals, families, and businesses across Rwanda and beyond.<br/><br/>
                  At EQ-Justice Law Firm, we pride ourselves on our client-centered approach. We understand that every legal matter is unique, which is why we tailor our strategies to suit each client’s specific goals and circumstances. You can count on us to give your legal issue the attention it truly deserves, efficiently, effectively, and cost-consciously.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Mission",
                    description:
                      "To provide exceptional legal services that drive Rwanda's economic growth while maintaining the highest standards of professional integrity and client service.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Vision",
                    description:
                      "To be East Africa's most trusted legal partner, known for innovative solutions, deep expertise, and unwavering commitment to client success.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Values",
                    description:
                      "Excellence, integrity, innovation, and commitment to Rwanda's legal and economic development.",
                    icon: CheckCircle,
                  },
                ].map((item, index) => (
                  <GlassCard key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
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
              <div className="absolute -bottom-8 -right-8 z-20">
                <GlassCard className="p-8 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <div className="text-slate-600 font-medium">Satisfied Clients</div>
                </GlassCard>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-24 bg-white relative">
        <SectionDivider variant="curve" className="text-slate-50 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Our Practice Areas</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive legal services across 14+ specialized domains, providing expert guidance for
              individuals and businesses with world-class expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-8 text-center">
                  <div className="mb-6">
                    <div
                      className={`mx-auto w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">{area.description}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/background-patterns/grid-pattern.png')] opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-white mb-6">Client Feedback</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trusted by leading businesses and individuals across Rwanda and East Africa
            </p>
          </div>

          <div className="relative">
            <GlassCard className="p-12 text-center max-w-4xl mx-auto">
              <Quote className="h-12 w-12 text-amber-400 mx-auto mb-8" />

              <div className="mb-8">
                <p className="text-lg text-white leading-relaxed font-light italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </div>

              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-amber-400"
                />
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-amber-400">{testimonials[currentTestimonial].position}</div>
                </div>
              </div>
            </GlassCard>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 hover:bg-white/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 hover:bg-white/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-amber-400 scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-400/10" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold font-lora text-white mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-gray-200 mb-12 leading-relaxed">
            Schedule a consultation with our expert legal team today and experience the EQ-Justice Law Firm difference. Your
            success is our commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="/consultation">
                Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
                  <div className="absolute inset-0 bg-[url('/images/background-patterns/grid-pattern.png')] opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Scale className="h-10 w-10 text-amber-400" />
                <span className="ml-3 text-2xl font-bold font-lora">EQ-Justice Law Firm</span>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
                Rwanda's premier law firm specializing in corporate law, investment guidance, and regulatory compliance. 
                Serving businesses and individuals with world-class legal expertise since 2023.
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
              <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
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
              <h3 className="text-lg font-semibold mb-6 text-amber-400">Newsletter</h3>
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
