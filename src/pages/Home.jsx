import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Home() {
	return (
		<div className="home-page">
			{/* Hero Section */}
			<section className="hero-section">
				<div className="hero-background">
					<div className="hero-overlay"></div>
				</div>
				<div className="container hero-content">
					<div className="hero-text">
						<h1>Professional Pest Control Services in Hyderabad</h1>
						<p className="hero-subtitle">Expert pest management solutions for homes and businesses. Safe, effective, and reliable pest control services across Hyderabad.</p>
						<div className="hero-actions">
							<a href="tel:+919700111999" className="btn btn-primary">
								<span className="btn-icon">📞</span>
								Call +91-9700111999
							</a>
							<Link to="/contact" className="btn btn-secondary">
								<span className="btn-icon">📅</span>
								Get Free Quote
							</Link>
						</div>
						<div className="hero-features">
							<div className="feature-item">
								<span className="feature-icon">✓</span>
								<span>24/7 Emergency Service</span>
							</div>
							<div className="feature-item">
								<span className="feature-icon">✓</span>
								<span>Eco-Friendly Solutions</span>
							</div>
							<div className="feature-item">
								<span className="feature-icon">✓</span>
								<span>Licensed & Insured</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="about-section">
				<div className="container">
					<div className="about-content">
						<div className="about-text">
							<h2>Why Choose Pest Control Hyderabad?</h2>
							<p className="about-description">
								We are Hyderabad's leading pest control company with over 20 years of experience in providing safe, effective, and reliable pest management solutions. Our certified technicians use state-of-the-art equipment and eco-friendly treatments to protect your property from all types of pests.
							</p>
							<div className="about-features">
								<div className="feature-card">
									<div className="feature-icon">🛡️</div>
									<h4>Safe & Effective</h4>
									<p>Eco-friendly treatments safe for families and pets</p>
								</div>
								<div className="feature-card">
									<div className="feature-icon">⚡</div>
									<h4>Quick Response</h4>
									<p>24/7 emergency service with same-day availability</p>
								</div>
								<div className="feature-card">
									<div className="feature-icon">🏆</div>
									<h4>Licensed Experts</h4>
									<p>Certified technicians with years of experience</p>
								</div>
								<div className="feature-card">
									<div className="feature-icon">💰</div>
									<h4>Affordable Rates</h4>
									<p>Competitive pricing with transparent costs</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="services-section">
				<div className="container">
					<div className="section-header">
						<h2>Our Professional Pest Control Services</h2>
						<p>Comprehensive pest management solutions for residential and commercial properties</p>
					</div>
					<div className="services-grid">
						<div className="service-category">
							<h3>Residential Services</h3>
							<div className="service-items">
								<ServiceCard title="Termite Control" excerpt="Complete termite inspection and treatment for your home" to="/services/termite-control" />
								<ServiceCard title="Cockroach Control" excerpt="Effective cockroach elimination and prevention" to="/services/cockroach-control" />
								<ServiceCard title="Bed Bug Treatment" excerpt="Professional bed bug removal and prevention" to="/services/bed-bug-control" />
								<ServiceCard title="Rodent Control" excerpt="Safe rat and mouse removal and prevention" to="/services/rodent-control" />
							</div>
						</div>
						<div className="service-category">
							<h3>Commercial Services</h3>
							<div className="service-items">
								<ServiceCard title="Office Pest Control" excerpt="Regular pest management for office spaces" to="/services/commercial-pest-control" />
								<ServiceCard title="Restaurant Pest Control" excerpt="Food-safe pest control for restaurants" to="/services/restaurant-pest-control" />
								<ServiceCard title="Warehouse Pest Control" excerpt="Industrial pest management solutions" to="/services/warehouse-pest-control" />
								<ServiceCard title="Mosquito Control" excerpt="Mosquito fogging and prevention services" to="/services/mosquito-control" />
							</div>
						</div>
					</div>
					<div className="services-cta">
						<Link to="/services" className="btn btn-outline">View All Services</Link>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="stats-section">
				<div className="container">
					<div className="stats-grid">
						<div className="stat-item">
							<div className="stat-number">20+</div>
							<div className="stat-label">Years Experience</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">5000+</div>
							<div className="stat-label">Happy Customers</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">1000+</div>
							<div className="stat-label">Properties Protected</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">24/7</div>
							<div className="stat-label">Emergency Service</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="testimonials-section">
				<div className="container">
					<div className="section-header">
						<h2>What Our Customers Say</h2>
						<p>Real testimonials from satisfied customers across Hyderabad</p>
					</div>
					<div className="testimonials-grid">
						<div className="testimonial-card">
							<div className="testimonial-content">
								<p>"Excellent service! The team was professional and thorough. No more cockroaches in our kitchen. Highly recommended!"</p>
							</div>
							<div className="testimonial-author">
								<div className="author-avatar">
									<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Ramesh Kumar" />
								</div>
								<div className="author-info">
									<h4>Ramesh Kumar</h4>
									<span>Homeowner, Gachibowli</span>
								</div>
								<div className="rating">⭐⭐⭐⭐⭐</div>
							</div>
						</div>
						<div className="testimonial-card">
							<div className="testimonial-content">
								<p>"Quick response and effective termite treatment. They saved our wooden furniture from further damage. Great value for money!"</p>
							</div>
							<div className="testimonial-author">
								<div className="author-avatar">
									<img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Priya Sharma" />
								</div>
								<div className="author-info">
									<h4>Priya Sharma</h4>
									<span>Business Owner, Kondapur</span>
								</div>
								<div className="rating">⭐⭐⭐⭐⭐</div>
							</div>
						</div>
						<div className="testimonial-card">
							<div className="testimonial-content">
								<p>"Professional bed bug treatment. The team was punctual, clean, and effective. Our family can sleep peacefully now!"</p>
							</div>
							<div className="testimonial-author">
								<div className="author-avatar">
									<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Anil Mehta" />
								</div>
								<div className="author-info">
									<h4>Anil Mehta</h4>
									<span>Resident, HITEC City</span>
								</div>
								<div className="rating">⭐⭐⭐⭐⭐</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Ready to Get Rid of Pests?</h2>
						<p>Get a free inspection and quote today. Our experts are ready to help you create a pest-free environment.</p>
						<div className="cta-actions">
							<a href="tel:+919700111999" className="btn btn-primary">
								<span className="btn-icon">📞</span>
								Call +91-9700111999
							</a>
							<Link to="/contact" className="btn btn-secondary">
								<span className="btn-icon">📝</span>
								Get Free Quote
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
