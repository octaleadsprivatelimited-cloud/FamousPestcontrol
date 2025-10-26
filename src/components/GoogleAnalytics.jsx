import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Google Analytics component
export default function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-PLLVR3H8E2', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return null // This component doesn't render anything
}

// Utility function to track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Utility function to track conversions
export const trackConversion = (conversionId, value, currency = 'INR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    })
  }
}

// Utility function to track phone calls
export const trackPhoneCall = (phoneNumber) => {
  trackEvent('phone_call', 'contact', phoneNumber)
}

// Utility function to track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName)
}

// Utility function to track service page views
export const trackServiceView = (serviceName) => {
  trackEvent('view_service', 'services', serviceName)
}
