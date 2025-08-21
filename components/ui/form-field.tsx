import React from "react"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Label } from "./label"

interface FormFieldProps {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "textarea" | "select"
  placeholder?: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  options?: { value: string; label: string }[]
  rows?: number
  className?: string
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  options = [],
  rows = 4,
  className = "",
}) => {
  const inputId = `form-${name}`

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={inputId} className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      
      {type === "textarea" ? (
        <Textarea
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className={`transition-all duration-200 ${
            error 
              ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
              : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
          }`}
        />
      ) : type === "select" ? (
        <select
          id={inputId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            error 
              ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
              : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
          }`}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`transition-all duration-200 ${
            error 
              ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
              : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
          }`}
        />
      )}
      
      {error && (
        <p className="text-sm text-red-600 flex items-center">
          <span className="mr-1">⚠</span>
          {error}
        </p>
      )}
    </div>
  )
} 