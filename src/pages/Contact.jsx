import { useState } from 'react'

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
                return
            }
            const subject = encodeURIComponent(`Pest Control Quote Request - ${form.service}`)
            const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage: ${form.message}`)
            window.location.href = `mailto:pestcontrolhyd365@gmail.com?subject=${subject}&body=${body}`
        } catch (err) {
            alert('Unable to submit the form right now. Please call us at +91-9700111999.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="contact-page">
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
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>Ready to solve your pest problems? Contact us today for professional pest control services in Hyderabad.</p>
                            
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">📞</div>
                                    <div className="method-content">
                                        <h3>Call Us</h3>
                                        <p><a href="tel:+919700111999">+91-9700111999</a></p>
                                        <span>24/7 Emergency Service</span>
                                    </div>
                                </div>
                                
                                <div className="contact-method">
                                    <div className="method-icon">✉️</div>
                                    <div className="method-content">
                                        <h3>Email Us</h3>
                                        <p><a href="mailto:pestcontrolhyd365@gmail.com">pestcontrolhyd365@gmail.com</a></p>
                                        <span>We'll respond within 2 hours</span>
                                    </div>
                                </div>
                                
                                <div className="contact-method">
                                    <div className="method-icon">📍</div>
                                    <div className="method-content">
                                        <h3>Visit Us</h3>
                                        <p>Babu Jagjivanram Colony, Malkajgiri, Hyderabad - 47</p>
                                        <span>Open 24/7 for emergencies</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-features">
                                <div className="feature">
                                    <span className="feature-icon">⚡</span>
                                    <span>Same-day service available</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">🆓</span>
                                    <span>Free inspection and quote</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">🛡️</span>
                                    <span>Licensed and insured</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>Request a Free Quote</h2>
                            <p>Fill out the form below and we'll get back to you within 2 hours with a free inspection and quote.</p>
                            
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
                                <div className="form-row">
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
                                </div>
                                
                                <div className="form-row">
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
                            <a href="tel:+919700111999" className="btn btn-primary">
                                <span className="btn-icon">📞</span>
                                Call +91-9700111999
                            </a>
                            <a href="https://wa.me/919700111999" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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
