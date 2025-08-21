"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { validateEmail, submitNewsletterForm } from "@/lib/form-utils"
import { Loader2, Mail } from "lucide-react"

interface NewsletterFormProps {
  className?: string
  variant?: "default" | "compact"
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  className = "", 
  variant = "default" 
}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    const emailError = validateEmail(email)
    if (emailError) {
      setError(emailError)
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitNewsletterForm(email)
      
      if (result.success) {
        toast({
          title: "Successfully Subscribed!",
          description: result.message,
        })
        setEmail("")
        setError("")
      } else {
        toast({
          title: "Subscription Failed",
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

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="flex-1 relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className={`pr-4 ${error ? "border-red-300 focus:border-red-500 focus:ring-red-200" : ""}`}
            disabled={isSubmitting}
          />
          {error && (
            <p className="absolute -bottom-6 left-0 text-xs text-red-600">
              {error}
            </p>
          )}
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="relative">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          className={`w-full ${error ? "border-red-300 focus:border-red-500 focus:ring-red-200" : ""}`}
          disabled={isSubmitting}
        />
        {error && (
          <p className="text-sm text-red-600 mt-1 flex items-center">
            <span className="mr-1">⚠</span>
            {error}
          </p>
        )}
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Subscribing...
          </>
        ) : (
          <>
            <Mail className="mr-2 h-5 w-5" />
            Subscribe to Newsletter
          </>
        )}
      </Button>
    </form>
  )
} 