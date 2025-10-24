import { Link } from 'react-router-dom'

export default function HotelPestControl() {
	return (
		<div className="service-detail-page">
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Hotel Pest Control Services</h1>
					<p>Professional pest management solutions for hotels, resorts, and hospitality establishments</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Hotel Pest Control Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Initial Inspection</h3>
							<p>Comprehensive assessment of your hotel to identify pest issues and guest safety risks</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Guest-Safe Plan</h3>
							<p>Customized pest management strategy that won't disrupt guest experience or comfort</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Discrete Treatment</h3>
							<p>Professional pest control treatments that are safe for guests and staff</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Regular Monitoring</h3>
							<p>Ongoing inspections and maintenance to ensure your hotel remains pest-free</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Hotel Pest Control Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with extensive experience in hospitality pest control</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔬</div>
							<div className="benefit-content">
								<h3>Advanced Technology</h3>
								<p>State-of-the-art equipment and treatment methods for maximum effectiveness</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🌱</div>
							<div className="benefit-content">
								<h3>Guest-Safe Solutions</h3>
								<p>Safe treatment options that protect your guests, staff, and the environment</p>
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
					<h2>Ready to Protect Your Hotel from Pests?</h2>
					<p>Get professional hotel pest control treatment today. Our experts are ready to help you maintain a pest-free hospitality environment.</p>
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