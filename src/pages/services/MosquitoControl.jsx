import { Link } from 'react-router-dom'

export default function MosquitoControl() {
	return (
		<div className="service-detail-page">
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Mosquito Control Services</h1>
					<p>Professional mosquito fogging and prevention to protect your family from diseases</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Mosquito Control Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Initial Inspection</h3>
							<p>Thorough examination to identify breeding sites and mosquito activity levels</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Treatment Plan</h3>
							<p>Customized strategy using fogging, larviciding, and prevention methods</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Mosquito Treatment</h3>
							<p>Professional fogging and treatment to eliminate adult mosquitoes and larvae</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Prevention Measures</h3>
							<p>Ongoing prevention strategies to eliminate breeding sites and keep mosquitoes away</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Mosquito Control Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with extensive experience in mosquito control and prevention</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔬</div>
							<div className="benefit-content">
								<h3>Advanced Technology</h3>
								<p>State-of-the-art fogging equipment and treatment methods for maximum effectiveness</p>
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
					<h2>Ready to Eliminate Mosquitoes from Your Property?</h2>
					<p>Get professional mosquito control treatment today. Our experts are ready to help you create a mosquito-free environment.</p>
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