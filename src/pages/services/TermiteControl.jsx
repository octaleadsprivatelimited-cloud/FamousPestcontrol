import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { trackServiceView } from '../../components/GoogleAnalytics.jsx'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function TermiteControl() {
	useEffect(() => {
		trackServiceView('Termite Control')
	}, [])
	return (
		<div className="service-detail-page">
			<SEO {...seoData.termiteControl} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Termite Control Services</h1>
					<p>Professional termite inspection, treatment, and prevention services to protect your property</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Termite Treatment Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Initial Inspection</h3>
							<p>Thorough examination of your property to identify termite species, activity levels, and damage assessment</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Treatment Plan</h3>
							<p>Customized treatment strategy based on inspection findings and property characteristics</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Treatment Application</h3>
							<p>Professional application of termiticides using industry-standard methods and equipment</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Follow-up Monitoring</h3>
							<p>Regular monitoring and maintenance to ensure long-term protection</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Termite Control Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with extensive experience in termite control and property protection</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔬</div>
							<div className="benefit-content">
								<h3>Advanced Technology</h3>
								<p>State-of-the-art equipment and treatment methods for maximum effectiveness and safety</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🌱</div>
							<div className="benefit-content">
								<h3>Eco-Friendly Solutions</h3>
								<p>Safe treatment options that protect your family, pets, and the environment</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📋</div>
							<div className="benefit-content">
								<h3>Detailed Reports</h3>
								<p>Comprehensive documentation of inspection findings and treatment procedures</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔄</div>
							<div className="benefit-content">
								<h3>Follow-up Service</h3>
								<p>Regular monitoring and maintenance to ensure long-term protection and peace of mind</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">💰</div>
							<div className="benefit-content">
								<h3>Competitive Pricing</h3>
								<p>Transparent pricing with no hidden costs or surprise charges for complete transparency</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<h2>Ready to Protect Your Property from Termites?</h2>
					<p>Get a free termite inspection and quote today. Our experts are ready to help you create a termite-free environment.</p>
					<div className="cta-buttons">
						<a href="tel:+919700299977" className="btn btn-primary">
							Call +91 9700299977
						</a>
						<Link to="/contact" className="btn btn-secondary">
							Get Free Quote
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
