"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionDivider } from "@/components/ui/section-divider"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import {
  Scale,
  Users,
  Building2,
  TrendingUp,
  FileText,
  Briefcase,
  Banknote,
  Gavel,
  Plane,
  Shield,
  Home,
  Truck,
  Hotel,
  GraduationCap,
  Search,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
} from "lucide-react"

const practiceAreas = [
  {
    icon: Users,
    title: "Labour, Employment & Immigration Law",
    description: "We represent clients in Rwanda in matters of labor, employment, and immigration including helping employers to get work permits, allegations of wrongful termination, and all immigration-related legal services. We also provide broad consultations in collective bargaining, negotiations, conciliation, arbitration and administrative proceeding. In addition, our firm advises employers on compliance issues under labour, employment, and immigration law.",
    gradient: "from-blue-600 to-purple-600",
    services: [
      "Employment contract drafting and review",
      "Work permit applications for employers and individuals",
      "Residence permit processing",
      "Visa applications and renewals",
      "Wrongful termination defense",
      "Collective bargaining and negotiations",
      "Conciliation and arbitration proceedings",
      "Employment law compliance advisory",
      "Workplace dispute resolution",
      "Administrative proceedings representation",
      "Expatriate legal support",
      "Immigration dispute resolution",
      "Corporate immigration advisory",
      "Citizenship applications",
    ],
    caseStudies: [
      "Successfully defended a major employer in wrongful termination allegations",
      "Negotiated collective bargaining agreement for 300+ employees in manufacturing sector",
      "Secured work permits for 75+ expatriate employees for multinational company",
      "Successfully processed residence permits for 50+ foreign investors",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Law",
    description: "We provide comprehensive legal support to local and foreign investors, including advisory on Rwanda's investment laws, business formation, regulatory compliance, tax planning, land acquisition, and dispute resolution, ensuring smooth and secure entry and operation in Rwanda's business environment.",
    gradient: "from-emerald-600 to-teal-600",
    services: [
      "Foreign investment structuring and advisory",
      "Rwanda investment law compliance",
      "Business formation and registration",
      "Regulatory compliance for investors",
      "Tax planning for investments",
      "Land acquisition for investors",
      "Investment dispute resolution",
      "Cross-border investment agreements",
    ],
    caseStudies: [
      "Structured $25M foreign direct investment in Rwanda's tech sector",
      "Advised on regulatory compliance for $15M manufacturing investment",
    ],
  },
  {
    icon: Building2,
    title: "Insolvency",
    description: "Offers expert legal guidance to businesses and individuals facing financial distress, including insolvency advisory, debt restructuring, liquidation proceedings, creditor representation, and legal compliance under Rwanda's insolvency laws, with a focus on protecting rights and preserving value.",
    gradient: "from-orange-600 to-red-600",
    services: [
      "Insolvency advisory and planning",
      "Debt restructuring negotiations",
      "Liquidation proceedings management",
      "Creditor rights and representation",
      "Asset protection and recovery",
      "Legal compliance under Rwanda's insolvency laws",
      "Corporate restructuring",
      "Financial distress advisory",
    ],
    caseStudies: [
      "Successfully restructured $8M debt for major retail business",
      "Managed complex liquidation process for manufacturing company with 200+ creditors",
    ],
  },
  {
    icon: FileText,
    title: "Corporate Policy and Legal Framework",
    description: "Our lawyers have served as independent consultants for government bodies, intergovernmental, and international organizations, companies providing expert support in restructuring, policy and legal development and review.",
    gradient: "from-violet-600 to-purple-600",
    services: [
      "Corporate policy development and review",
      "Legal framework advisory",
      "Government and intergovernmental consulting",
      "International organization support",
      "Corporate restructuring advisory",
      "Policy development and implementation",
      "Regulatory framework analysis",
      "Compliance program development",
    ],
    caseStudies: [
      "Developed corporate policy framework for major government agency",
      "Provided legal framework advisory for international development project",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate and Commercial",
    description: "EQ-Justice Law Firm provides services in Corporate and Commercial Law, including but not limited to: Drafting and Negotiation of Loan Agreements and related documentation, Drafting and Negotiation of syndicated Loan Offers and Agreements, Drafting, Negotiation and Registration of Security Documents such as Mortgases, Leases, Debentures, Caveats, Bonds, Equities and other Charges.",
    gradient: "from-blue-600 to-indigo-600",
    services: [
      "Loan agreement drafting and negotiation",
      "Syndicated loan offers and agreements",
      "Security document drafting and registration",
      "Mortgages, leases, and debentures",
      "Caveats, bonds, and equities",
      "Corporate formation and structuring",
      "Commercial contract negotiation",
      "Corporate governance advisory",
    ],
    caseStudies: [
      "Drafted and negotiated $20M syndicated loan agreement for regional bank",
      "Structured complex security documentation for $12M commercial property development",
    ],
  },
  {
    icon: Banknote,
    title: "Taxation",
    description: "We provide expert tax planning, compliance, and dispute resolution services. Our team advises on Rwandan tax law, assists with tax audits, represents clients in disputes with the Rwanda Revenue Authority, and offers guidance on international tax matters to ensure clients meet all regulatory obligations while optimizing their tax positions.",
    gradient: "from-yellow-600 to-orange-600",
    services: [
      "Tax planning and optimization",
      "Rwanda Revenue Authority compliance",
      "Tax audit representation",
      "Tax dispute resolution",
      "International tax advisory",
      "Corporate tax structuring",
      "VAT and customs compliance",
      "Transfer pricing advisory",
    ],
    caseStudies: [
      "Achieved $1.5M tax savings through strategic corporate restructuring",
      "Successfully resolved complex tax dispute with Rwanda Revenue Authority",
    ],
  },
  {
    icon: Gavel,
    title: "Litigation and Dispute Resolution",
    description: "Our lawyers have extensive experience in litigation and Alternative Dispute Resolution (ADR) mechanisms, particularly in the field of commercial transactions and labour disputes.",
    gradient: "from-red-600 to-pink-600",
    services: [
      "Commercial litigation",
      "Alternative Dispute Resolution (ADR)",
      "Commercial transaction disputes",
      "Labour dispute resolution",
      "Arbitration and mediation",
      "Contract dispute litigation",
      "Court representation",
      "Settlement negotiations",
    ],
    caseStudies: [
      "Successfully mediated complex commercial dispute worth $8M",
      "Won landmark labour dispute case for major employer",
    ],
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Our insurance law practice covers claims management, policy review, and risk assessment for both individuals and businesses. We assist clients in navigating insurance disputes, negotiating settlements, and ensuring compliance with Rwandan insurance regulations, providing peace of mind and robust legal protection.",
    gradient: "from-green-600 to-emerald-600",
    services: [
      "Insurance claims management",
      "Policy review and drafting",
      "Risk assessment and management",
      "Insurance dispute resolution",
      "Settlement negotiations",
      "Rwanda insurance regulation compliance",
      "Insurance litigation",
      "Reinsurance agreements",
    ],
    caseStudies: [
      "Recovered $3M in disputed insurance claims for major client",
      "Successfully negotiated settlement for complex insurance dispute",
    ],
  },

  {
    icon: Home,
    title: "Real Estate and Construction",
    description: "Our broad law practice is complemented by our extensive expertise in residential real estate matters and construction transaction. Our lawyers are high qualified in advising on drafting appropriate agreements to the acquisition of land, property, etc. We also represent brokers and individual buyers and sellers in real estate disputes. Real Estate and Construction Law means those litigations that relate to any kind of residential or commercial property transactions.",
    gradient: "from-amber-600 to-yellow-600",
    services: [
      "Residential real estate transactions",
      "Construction transaction advisory",
      "Land acquisition agreements",
      "Property transaction documentation",
      "Real estate dispute resolution",
      "Broker representation",
      "Commercial property transactions",
      "Construction contract drafting",
    ],
    caseStudies: [
      "Facilitated $15M commercial property development in Kigali",
      "Resolved complex land title dispute for major real estate developer",
    ],
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "If your business is involved in travel and commerce on the ground, in the air, or on the water, we as Lawyers can resolve legal issues like regulation of private and commercial vehicles, aircrafts, vessels, also we deal with transport safety standards. We can provide our clients with different legal services, even opinions, advice and research on all kind of our client demands such as cargo claims, matters of employment, and difficult dispute, personal injury claims and aircraft damage claims, support regarding seizure and arrest of regionally based assets.",
    gradient: "from-slate-600 to-gray-600",
    services: [
      "Transportation regulation compliance",
      "Private and commercial vehicle regulation",
      "Aircraft and vessel regulation",
      "Transport safety standards",
      "Cargo claims and disputes",
      "Personal injury claims",
      "Aircraft damage claims",
      "Regional asset seizure support",
    ],
    caseStudies: [
      "Advised on regulatory compliance for major logistics company",
      "Resolved complex cargo claim dispute worth $2M",
    ],
  },
  {
    icon: Banknote,
    title: "Financial and Banking",
    description: "We provide comprehensive legal support for financial institutions and clients in banking matters, including regulatory compliance, loan agreements, securities, and dispute resolution. Our expertise covers drafting and negotiation of financial documents, registration of securities, and guidance on Rwanda's financial regulations.",
    gradient: "from-indigo-600 to-blue-600",
    services: [
      "Banking regulatory compliance",
      "Financial document drafting and negotiation",
      "Securities registration",
      "Rwanda financial regulation guidance",
      "Loan agreement structuring",
      "Financial dispute resolution",
      "Banking litigation",
      "Financial product development",
    ],
    caseStudies: [
      "Structured $30M syndicated loan facility for regional bank",
      "Advised on regulatory compliance for innovative fintech product",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality and Tourism",
    description: "Legal services for Rwanda's thriving tourism industry including hotel operations, tourism regulations, and hospitality contracts. We provide comprehensive legal support for hospitality businesses, tourism operators, and investors in Rwanda's growing tourism sector.",
    gradient: "from-pink-600 to-rose-600",
    services: [
      "Hotel operations legal support",
      "Tourism regulation compliance",
      "Hospitality contract drafting",
      "Tourism investment advisory",
      "Hotel development agreements",
      "Tourism licensing and permits",
      "Hospitality employment law",
      "Tourism dispute resolution",
    ],
    caseStudies: [
      "Structured $25M hotel development project in Kigali",
      "Advised on tourism regulatory compliance for eco-tourism chain",
    ],
  },
  {
    icon: GraduationCap,
    title: "Professional Internship",
    description: "At EQ-Justice Law Firm, we offer a structured Professional Internship Program for young lawyers, providing hands-on experience, mentorship, and practical training in various areas of legal practice to prepare them for a successful and ethical legal career.",
    gradient: "from-purple-600 to-violet-600",
    services: [
      "Structured internship placements",
      "Hands-on legal experience",
      "Expert mentorship programs",
      "Practical training in legal practice",
      "Career preparation and guidance",
      "Ethical legal practice training",
      "Professional networking opportunities",
      "Continuing legal education",
    ],
    caseStudies: [
      "Graduated 30+ interns into successful legal careers",
      "Established partnerships with 8+ law schools across Rwanda",
    ],
  },
]

export default function PracticeAreasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState<number | null>(null)


  const filteredAreas = practiceAreas.filter(
    (area) =>
      area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation currentPage="/practice-areas" />

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
            Our Practice
            <span className="block text-gradient animate-glow">Areas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive legal services across 14+ specialized domains, providing expert guidance and
            innovative solutions for individuals and businesses.
          </p>
        </div>
      </section>

      {/* Practice Areas Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-lora mb-6 text-slate-800">At EQ, we provide:</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            At EQ-Justice Law Firm, we pride ourselves on our client-centered approach. We understand that every legal matter is unique, which is why we tailor our strategies to suit each client's specific goals and circumstances.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            You can count on us to give your legal issue the attention it truly deserves, efficiently, effectively, and cost-consciously.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="relative py-16 bg-white">
        <SectionDivider variant="wave" className="text-slate-900 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
              <Input
                placeholder="Search practice areas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 py-4 text-lg rounded-full border-2 border-slate-200 focus:border-amber-400 transition-colors duration-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedArea(selectedArea === index ? null : index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <area.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-lora text-slate-800 mb-4 text-center group-hover:text-slate-900 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-center mb-6">{area.description}</p>

                  {selectedArea === index && (
                    <div className="mt-8 space-y-6 border-t pt-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                          Our Services:
                        </h4>
                        <ul className="space-y-2">
                          {area.services.slice(0, 4).map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{service}</span>
                            </li>
                          ))}
                          {area.services.length > 4 && (
                            <li className="text-sm text-amber-600 font-medium">
                              +{area.services.length - 4} more services
                            </li>
                          )}
                        </ul>
                      </div>

                      {area.caseStudies.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <Award className="h-5 w-5 text-amber-600 mr-2" />
                            Recent Success:
                          </h4>
                          <p className="text-sm text-slate-600 italic bg-slate-50 p-3 rounded-lg">
                            "{area.caseStudies[0]}"
                          </p>
                        </div>
                      )}

                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/consultation">
                          Consult on {area.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}

                  {selectedArea !== index && (
                    <div className="text-center">
                      <Button
                        variant="ghost"
                        className="text-slate-600 hover:text-amber-600 font-medium group-hover:bg-white/50"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-white relative">
        <SectionDivider variant="curve" className="text-slate-50 absolute -top-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-lora text-slate-800 mb-6">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive approach and deep expertise across multiple practice areas ensure that you receive the
              best possible legal representation and advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scale,
                title: "Expert Knowledge",
                description:
                  "Deep expertise across 14+ practice areas with specialized knowledge in Rwanda's legal landscape.",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Tailored solutions that prioritize your unique needs and business objectives.",
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of successful outcomes and satisfied clients across all practice areas.",
                gradient: "from-orange-600 to-red-600",
              },
              {
                icon: Building2,
                title: "Innovation",
                description: "Modern approaches and technology-driven solutions for efficient service delivery.",
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="mb-8 text-lg">Contact us to discuss your specific legal needs and learn how our expertise can help you achieve your goals.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold rounded-full px-10 py-4">
            <Link href="/contact">Contact Us</Link>
          </Button>
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
                  { href: "/team", label: "Our Team" },
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
              <h3 className="text-xl font-semibold mb-6 text-amber-400">Top Practice Areas</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Corporate & Commercial</li>
                <li className="text-gray-300">Investment Law</li>
                <li className="text-gray-300">Litigation & ADR</li>
                <li className="text-gray-300">Real Estate</li>
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
