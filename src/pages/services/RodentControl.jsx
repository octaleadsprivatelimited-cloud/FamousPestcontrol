import { Link } from 'react-router-dom'

export default function RodentControl() {
	return (
		<div className="service-detail-page">
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Rodent Control Services</h1>
					<p>Professional rat and mouse elimination and prevention to protect your property from damage and disease</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Rodent Control Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Initial Inspection</h3>
							<p>Thorough examination to identify rodent species, entry points, and infestation levels</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Treatment Plan</h3>
							<p>Customized strategy using traps, baits, and exclusion methods for complete elimination</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Rodent Removal</h3>
							<p>Professional removal using humane and effective methods to eliminate all rodents</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Prevention Measures</h3>
							<p>Sealing entry points and implementing prevention strategies to keep rodents away</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Rodent Control Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with extensive experience in rodent control and elimination</p>
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
					<h2>Ready to Eliminate Rodents from Your Property?</h2>
					<p>Get professional rodent control treatment today. Our experts are ready to help you create a rodent-free environment.</p>
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