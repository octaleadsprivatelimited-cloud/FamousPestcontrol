import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import SEO from '../components/SEO.jsx'
import { seoData } from '../data/seoData.js'

export default function Home() {
	return (
		<div className="home-page">
			<SEO {...seoData.home} />
			{/* Hero Section */}
			<section className="hero-section animate-on-scroll">
				<div className="hero-background">
					<div className="hero-overlay"></div>
				</div>
				<div className="container hero-content">
					<div className="hero-text">
						<div className="hero-welcome slide-up-fade">Welcome to</div>
						<h1 className="slide-up-fade">Famous Pest Control Services</h1>
						<div className="hero-tagline slide-up-fade">WE PROTECT YOUR HOME OR BUSINESS FROM UNWANTED GUESTS</div>
						<div className="hero-subtitle slide-up-fade">Quality Dependable Service Since 1992</div>
						<div className="hero-actions slide-up-fade">
							<a href="tel:+919700299977" className="btn btn-primary continuous-pulse">
								<span className="btn-icon">📞</span>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</section>


			{/* Services Section */}
			<section className="services-section animate-on-scroll">
				<div className="container">
					<div className="section-header slide-up-fade">
						<h2>Our Professional Pest Control Services</h2>
						<p>Comprehensive pest management solutions for residential and commercial properties</p>
					</div>
					<div className="services-grid-3x3 stagger-reveal">
						<ServiceCard title="Termite Control" excerpt="Complete termite inspection and treatment for your home" to="/services/termite-control" />
						<ServiceCard title="Cockroach Control" excerpt="Effective cockroach elimination and prevention" to="/services/cockroach-control" />
						<ServiceCard title="Bed Bug Treatment" excerpt="Professional bed bug removal and prevention" to="/services/bed-bug-control" />
						<ServiceCard title="Rodent Control" excerpt="Safe rat and mouse removal and prevention" to="/services/rodent-control" />
						<ServiceCard title="Ant Control" excerpt="Eco-friendly ant elimination and prevention" to="/services/ant-control" />
						<ServiceCard title="Mosquito Control" excerpt="Mosquito fogging and prevention services" to="/services/mosquito-control" />
						<ServiceCard title="Office Pest Control" excerpt="Regular pest management for office spaces" to="/services/commercial-pest-control" />
						<ServiceCard title="Restaurant Pest Control" excerpt="Food-safe pest control for restaurants" to="/services/restaurant-pest-control" />
						<ServiceCard title="Warehouse Pest Control" excerpt="Industrial pest management solutions" to="/services/warehouse-pest-control" />
					</div>
					<div className="services-cta slide-up-fade">
						<Link to="/services" className="btn btn-outline continuous-pulse">View All Services</Link>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="stats-section animate-on-scroll">
				<div className="container">
					<div className="stats-grid stagger-reveal">
						<div className="stat-item hover-lift continuous-glow">
							<div className="stat-number">20+</div>
							<div className="stat-label">Years Experience</div>
						</div>
						<div className="stat-item hover-lift continuous-glow">
							<div className="stat-number">5000+</div>
							<div className="stat-label">Happy Customers</div>
						</div>
						<div className="stat-item hover-lift continuous-glow">
							<div className="stat-number">1000+</div>
							<div className="stat-label">Properties Protected</div>
						</div>
						<div className="stat-item hover-lift continuous-glow">
							<div className="stat-number">24/7</div>
							<div className="stat-label">Emergency Service</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="why-choose-section animate-on-scroll">
				<div className="container">
					<div className="section-header slide-up-fade">
						<h2>Why Choose Famous Pest Control Services?</h2>
						<p>Discover what sets us apart as Hyderabad's leading pest control experts</p>
					</div>
					<div className="advantages-grid stagger-reveal">
						<div className="advantage-card hover-lift shimmer">
							<div className="advantage-icon continuous-float">🛡️</div>
							<h3>Safe & Eco-Friendly Solutions</h3>
							<p>All our treatments are completely safe for families, pets, and the environment while being highly effective against pests.</p>
						</div>
						<div className="advantage-card hover-lift shimmer">
							<div className="advantage-icon continuous-float">⚡</div>
							<h3>24/7 Emergency Response</h3>
							<p>Round-the-clock emergency service with same-day availability. We're always ready to help when you need us most.</p>
						</div>
						<div className="advantage-card hover-lift shimmer">
							<div className="advantage-icon continuous-float">🏆</div>
							<h3>Licensed & Certified Experts</h3>
							<p>Our certified technicians have years of experience and undergo regular training to stay updated with the latest techniques.</p>
						</div>
						<div className="advantage-card hover-lift shimmer">
							<div className="advantage-icon continuous-float">💰</div>
							<h3>Transparent Pricing</h3>
							<p>Competitive rates with completely transparent pricing. No hidden charges, surprise fees, or unexpected costs.</p>
						</div>
						<div className="advantage-card hover-lift shimmer">
							<div className="advantage-icon continuous-float">🔒</div>
							<h3>Guaranteed Results</h3>
							<p>We stand behind our work with comprehensive service warranties and follow-up support to ensure your complete satisfaction.</p>
						</div>
						<div className="advantage-card hover-lift shimmer">
							<div className="advantage-icon continuous-float">📱</div>
							<h3>Advanced Technology</h3>
							<p>State-of-the-art equipment and cutting-edge treatment methods for the most effective pest control solutions.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="testimonials-section animate-on-scroll">
				<div className="container">
					<div className="section-header slide-up-fade">
						<h2>What Our Customers Say</h2>
						<p>Real testimonials from satisfied customers across Hyderabad</p>
					</div>
					<div className="testimonials-grid stagger-reveal">
						<div className="testimonial-card hover-lift shimmer">
							<div className="testimonial-content">
								<p>"Excellent service! The team was professional and thorough. No more cockroaches in our kitchen. Highly recommended!"</p>
							</div>
							<div className="testimonial-author">
								<div className="author-info">
									<h4>Ramesh Kumar</h4>
									<span>Homeowner, Gachibowli</span>
								</div>
								<div className="rating continuous-glow">⭐⭐⭐⭐⭐</div>
							</div>
						</div>
						<div className="testimonial-card hover-lift shimmer">
							<div className="testimonial-content">
								<p>"Quick response and effective termite treatment. They saved our wooden furniture from further damage. Great value for money!"</p>
							</div>
							<div className="testimonial-author">
								<div className="author-info">
									<h4>Priya Sharma</h4>
									<span>Business Owner, Kondapur</span>
								</div>
								<div className="rating continuous-glow">⭐⭐⭐⭐⭐</div>
							</div>
						</div>
						<div className="testimonial-card hover-lift shimmer">
							<div className="testimonial-content">
								<p>"Professional bed bug treatment. The team was punctual, clean, and effective. Our family can sleep peacefully now!"</p>
							</div>
							<div className="testimonial-author">
								<div className="author-info">
									<h4>Anil Mehta</h4>
									<span>Resident, HITEC City</span>
								</div>
								<div className="rating continuous-glow">⭐⭐⭐⭐⭐</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section animate-on-scroll">
				<div className="container">
					<div className="cta-content slide-up-fade">
						<h2>Ready to Get Rid of Pests?</h2>
						<p>Get a free inspection and quote today. Our experts are ready to help you create a pest-free environment.</p>
						<div className="cta-actions stagger-reveal">
							<a href="tel:+919700299977" className="btn btn-primary continuous-pulse hover-lift">
								<span className="btn-icon">📞</span>
								Call +91 9700299977
							</a>
							<Link to="/contact" className="btn btn-secondary continuous-pulse hover-lift">
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
