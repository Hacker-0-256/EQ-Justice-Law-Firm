// Form validation utilities
export interface FormErrors {
  [key: string]: string
}

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) return "Email is required"
  if (!emailRegex.test(email)) return "Please enter a valid email address"
  return null
}

export const validatePhone = (phone: string): string | null => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
  if (!phone) return "Phone number is required"
  if (!phoneRegex.test(phone)) return "Please enter a valid phone number"
  return null
}

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim() === "") return `${fieldName} is required`
  return null
}

export const validateMinLength = (value: string, minLength: number, fieldName: string): string | null => {
  if (value.length < minLength) return `${fieldName} must be at least ${minLength} characters`
  return null
}

// Form submission utilities
export const submitContactForm = async (formData: any): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would send to your backend API
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate occasional failure for testing
    if (Math.random() < 0.1) {
      throw new Error("Network error")
    }
    
    return {
      success: true,
      message: "Message sent successfully! We'll get back to you within 24 hours."
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again or contact us directly."
    }
  }
}

export const submitConsultationForm = async (formData: any): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would send to your backend API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate occasional failure for testing
    if (Math.random() < 0.1) {
      throw new Error("Network error")
    }
    
    return {
      success: true,
      message: "Consultation request submitted successfully! We'll contact you within 24 hours to confirm your appointment."
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to submit consultation request. Please try again or contact us directly."
    }
  }
}

export const submitNewsletterForm = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would send to your backend API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return {
      success: true,
      message: "Successfully subscribed to our newsletter!"
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to subscribe. Please try again."
    }
  }
}

export const submitInternshipForm = async (formData: any): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would send to your backend API
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    return {
      success: true,
      message: "Internship application submitted successfully! We'll review your application and contact you within 5 business days."
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to submit application. Please try again or contact us directly."
    }
  }
} 