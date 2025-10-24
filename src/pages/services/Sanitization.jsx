import { Link } from 'react-router-dom'

export default function Sanitization() {
	return (
		<div className="service-detail-page">
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Sanitization Services</h1>
					<p>Professional deep cleaning and sanitization services for homes, offices, and commercial spaces</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Sanitization Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Initial Assessment</h3>
							<p>Comprehensive evaluation of your space to identify areas requiring sanitization</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Customized Plan</h3>
							<p>Tailored sanitization strategy designed for your specific needs and requirements</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Professional Treatment</h3>
							<p>Deep cleaning and sanitization using hospital-grade disinfectants and equipment</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Quality Assurance</h3>
							<p>Thorough inspection and verification to ensure complete sanitization</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Sanitization Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with extensive experience in sanitization and deep cleaning</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔬</div>
							<div className="benefit-content">
								<h3>Advanced Technology</h3>
								<p>State-of-the-art equipment and hospital-grade disinfectants for maximum effectiveness</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🌱</div>
							<div className="benefit-content">
								<h3>Safe Solutions</h3>
								<p>Safe sanitization options that protect your family, staff, and the environment</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📋</div>
							<div className="benefit-content">
								<h3>Detailed Reports</h3>
								<p>Comprehensive documentation of sanitization procedures and results</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔄</div>
							<div className="benefit-content">
								<h3>Follow-up Service</h3>
								<p>Regular monitoring and maintenance to ensure long-term cleanliness and hygiene</p>
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
					<h2>Ready to Sanitize Your Property?</h2>
					<p>Get professional sanitization services today. Our experts are ready to help you create a clean and safe environment.</p>
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