import { useState } from 'react'
import { trackFormSubmission, trackPhoneCall } from '../components/GoogleAnalytics.jsx'
import SEO from '../components/SEO.jsx'
import { seoData } from '../data/seoData.js'

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const services = [
        'Residential Pest Control',
        'Commercial Pest Control', 
        'Termite Control',
        'Cockroach Control',
        'Bed Bug Treatment',
        'Rodent Control',
        'Mosquito Control',
        'Emergency Service',
        'Other'
    ]

    function validate() {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!/^[0-9 +()-]{7,}$/.test(form.phone)) e.phone = 'Valid phone number required'
        if (form.email && !/.+@.+\..+/.test(form.email)) e.email = 'Please enter a valid email'
        if (!form.service) e.service = 'Please select a service'
        if (!form.message.trim()) e.message = 'Please describe your pest problem'
        setErrors(e)
        return Object.keys(e).length === 0
    }

    async function onSubmit(e) {
        e.preventDefault()
        if (!validate()) return
        const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
        const payload = { ...form, _subject: `Pest Control Quote Request - ${form.service}` }
        try {
            setSubmitting(true)
            if (formspreeEndpoint) {
                const res = await fetch(formspreeEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                if (!res.ok) throw new Error('Submission failed')
                setSuccess(true)
                setForm({ name: '', phone: '', email: '', service: '', message: '' })
                trackFormSubmission('contact_form')
                return
            }
            const subject = encodeURIComponent(`Pest Control Quote Request - ${form.service}`)
            const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage: ${form.message}`)
            window.location.href = `mailto:famouspestcontrolservices77@gmail.com?subject=${subject}&body=${body}`
        } catch (err) {
            alert('Unable to submit the form right now. Please call us at +91 9700299977.')
        } finally {
            setSubmitting(false)
        }
    }

	return (
		<div className="contact-page">
			<SEO {...seoData.contact} />
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our pest control experts for a free inspection and quote</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    {/* Contact Methods Grid */}
                    <div className="contact-methods-grid">
                        <div className="contact-card">
                            <div className="contact-card-icon">📞</div>
                            <h3>Call Us</h3>
                            <p><a href="tel:+919700299977">+91 9700299977</a></p>
                            <span>Mon-Sat: 9.00-18.00</span>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-card-icon">✉️</div>
                            <h3>Email Us</h3>
                            <p><a href="mailto:famouspestcontrolservices77@gmail.com">famouspestcontrolservices77@gmail.com</a></p>
                            <span>Response within 2 hours</span>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-card-icon">📍</div>
                            <h3>Hyderabad Office</h3>
                            <p>H.no 12-1-331/82/B, Datteraya colony, Asif Nagar - 500028</p>
                            <a href="https://maps.google.com/?q=H.no+12-1-331/82/B,+Datteraya+colony,+Asif+Nagar,+Hyderabad+-+500028" target="_blank" rel="noopener noreferrer" className="map-link">Get Directions</a>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-card-icon">📍</div>
                            <h3>Khammam Office</h3>
                            <p>H.no 14-3-106/1/A/1, Jayanagar colony, Road 10 - 507002</p>
                            <a href="https://maps.google.com/?q=H.no+14-3-106/1/A/1,+Jayanagar+colony,+Road+number+10,+Khammam+-+507002" target="_blank" rel="noopener noreferrer" className="map-link">Get Directions</a>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="contact-form-container">
                        <div className="form-header">
                            <h2>Request a Free Quote</h2>
                            <p>Fill out the form below and we'll get back to you within 2 hours with a free inspection and quote.</p>
                        </div>
                        
                        {success && (
                            <div className="success-message">
                                <div className="success-icon">✅</div>
                                <div>
                                    <h3>Thank you!</h3>
                                    <p>We've received your request and will contact you shortly.</p>
                                </div>
                            </div>
                        )}
                        
                        <form className="contact-form" onSubmit={onSubmit} noValidate>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input 
                                        id="name"
                                        type="text" 
                                        value={form.name} 
                                        onChange={e => setForm({ ...form, name: e.target.value })} 
                                        placeholder="Enter your full name"
                                        required 
                                    />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input 
                                        id="phone"
                                        type="tel" 
                                        value={form.phone} 
                                        onChange={e => setForm({ ...form, phone: e.target.value })} 
                                        placeholder="Enter your phone number"
                                        required 
                                    />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input 
                                        id="email"
                                        type="email" 
                                        value={form.email} 
                                        onChange={e => setForm({ ...form, email: e.target.value })} 
                                        placeholder="Enter your email (optional)"
                                    />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="service">Service Needed *</label>
                                    <select 
                                        id="service"
                                        value={form.service} 
                                        onChange={e => setForm({ ...form, service: e.target.value })}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {services.map(service => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                    {errors.service && <span className="error">{errors.service}</span>}
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Describe Your Pest Problem *</label>
                                <textarea 
                                    id="message"
                                    value={form.message} 
                                    onChange={e => setForm({ ...form, message: e.target.value })} 
                                    placeholder="Please describe the pest problem you're experiencing..."
                                    rows="4"
                                    required 
                                />
                                {errors.message && <span className="error">{errors.message}</span>}
                            </div>
                            
                            <button className="btn btn-primary" type="submit" disabled={submitting}>
                                {submitting ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        Sending Request...
                                    </>
                                ) : (
                                    <>
                                        <span className="btn-icon">📝</span>
                                        Get Free Quote
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Features Section */}
                    <div className="contact-features">
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h4>Same-day Service</h4>
                            <p>Quick response for urgent pest problems</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🆓</div>
                            <h4>Free Inspection</h4>
                            <p>No-cost assessment and detailed quote</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🛡️</div>
                            <h4>Licensed & Insured</h4>
                            <p>Professional and reliable service</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🕒</div>
                            <h4>24/7 Emergency</h4>
                            <p>Round-the-clock support available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need Immediate Help?</h2>
                        <p>For urgent pest problems, call us now for same-day service</p>
                        <div className="cta-actions">
                            <a href="tel:+919700299977" className="btn btn-primary">
                                <span className="btn-icon">📞</span>
                                Call +91 9700299977
                            </a>
                            <a href="https://wa.me/919700299977" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                <span className="btn-icon">💬</span>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
