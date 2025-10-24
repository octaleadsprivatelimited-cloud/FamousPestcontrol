import { Link } from 'react-router-dom'

export default function BedBugControl() {
	return (
		<div className="service-detail-page">
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Bed Bug Treatment Services</h1>
					<p>Professional bed bug elimination using heat treatment and chemical methods for complete removal</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Bed Bug Treatment Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Initial Inspection</h3>
							<p>Detailed examination to locate all bed bug hiding spots and assess infestation severity</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Treatment Plan</h3>
							<p>Customized strategy using heat treatment and chemical methods for complete elimination</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Heat Treatment</h3>
							<p>Advanced heat treatment technology to eliminate bed bugs at all life stages</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Follow-up Monitoring</h3>
							<p>Regular monitoring and maintenance to ensure complete elimination and prevent re-infestation</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Bed Bug Treatment Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with extensive experience in bed bug control and elimination</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔬</div>
							<div className="benefit-content">
								<h3>Advanced Technology</h3>
								<p>State-of-the-art heat treatment equipment and methods for maximum effectiveness</p>
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
					<h2>Ready to Eliminate Bed Bugs from Your Property?</h2>
					<p>Get professional bed bug treatment today. Our experts are ready to help you create a bed bug-free environment.</p>
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