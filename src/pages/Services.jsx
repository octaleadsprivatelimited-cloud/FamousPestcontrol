import ServiceCard from '../components/ServiceCard.jsx'

const residentialServices = [
	{ slug: 'termite-control', title: 'Termite Control', excerpt: 'Complete termite inspection and treatment for your home. Pre and post-construction solutions.' },
	{ slug: 'cockroach-control', title: 'Cockroach Control', excerpt: 'Effective cockroach elimination using gel baits and targeted treatments.' },
	{ slug: 'bed-bug-control', title: 'Bed Bug Treatment', excerpt: 'Professional bed bug removal using heat and chemical treatments.' },
	{ slug: 'rodent-control', title: 'Rodent Control', excerpt: 'Safe rat and mouse removal with trapping and proofing techniques.' },
	{ slug: 'ant-control', title: 'Ant Control', excerpt: 'Eco-friendly ant elimination and prevention services.' },
	{ slug: 'mosquito-control', title: 'Mosquito Control', excerpt: 'Mosquito fogging and larvicide treatments for your property.' },
]

const commercialServices = [
	{ slug: 'commercial-pest-control', title: 'Office Pest Control', excerpt: 'Regular pest management for office spaces and commercial buildings.' },
	{ slug: 'restaurant-pest-control', title: 'Restaurant Pest Control', excerpt: 'Food-safe pest control solutions for restaurants and food establishments.' },
	{ slug: 'warehouse-pest-control', title: 'Warehouse Pest Control', excerpt: 'Industrial pest management for warehouses and storage facilities.' },
	{ slug: 'hotel-pest-control', title: 'Hotel Pest Control', excerpt: 'Comprehensive pest management for hotels and hospitality businesses.' },
	{ slug: 'retail-pest-control', title: 'Retail Pest Control', excerpt: 'Pest control solutions for retail stores and shopping centers.' },
	{ slug: 'sanitization', title: 'Sanitization Services', excerpt: 'Deep cleaning and sanitization for commercial properties.' },
]

export default function Services() {
	return (
		<div className="services-page">
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Professional Pest Control Services</h1>
					<p>Comprehensive pest management solutions for residential and commercial properties across Hyderabad</p>
				</div>
			</section>

			{/* Residential Services */}
			<section className="services-section">
				<div className="container">
					<div className="section-header">
						<h2>Residential Pest Control Services</h2>
						<p>Protect your home and family with our safe, effective pest control solutions</p>
					</div>
					<div className="services-grid">
						{residentialServices.map(service => (
							<ServiceCard 
								key={service.slug} 
								title={service.title} 
								excerpt={service.excerpt} 
								to={`/services/${service.slug}`} 
							/>
						))}
					</div>
				</div>
			</section>

			{/* Commercial Services */}
			<section className="services-section commercial-services">
				<div className="container">
					<div className="section-header">
						<h2>Commercial Pest Control Services</h2>
						<p>Professional pest management for businesses, offices, and commercial properties</p>
					</div>
					<div className="services-grid">
						{commercialServices.map(service => (
							<ServiceCard 
								key={service.slug} 
								title={service.title} 
								excerpt={service.excerpt} 
								to={`/services/${service.slug}`} 
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="why-choose-section">
				<div className="container">
					<div className="section-header">
						<h2>Why Choose Our Pest Control Services?</h2>
						<p>We provide the most reliable and effective pest control solutions in Hyderabad</p>
					</div>
					<div className="features-grid">
						<div className="feature-item">
							<div className="feature-icon">🛡️</div>
							<h3>Safe & Eco-Friendly</h3>
							<p>All our treatments are safe for families, pets, and the environment</p>
						</div>
						<div className="feature-item">
							<div className="feature-icon">⚡</div>
							<h3>Quick Response</h3>
							<p>24/7 emergency service with same-day availability</p>
						</div>
						<div className="feature-item">
							<div className="feature-icon">🏆</div>
							<h3>Licensed Experts</h3>
							<p>Certified technicians with years of experience</p>
						</div>
						<div className="feature-item">
							<div className="feature-icon">💰</div>
							<h3>Affordable Rates</h3>
							<p>Competitive pricing with transparent, no-hidden-costs</p>
						</div>
						<div className="feature-item">
							<div className="feature-icon">🔒</div>
							<h3>Guaranteed Results</h3>
							<p>Service warranty with follow-up support</p>
						</div>
						<div className="feature-item">
							<div className="feature-icon">📱</div>
							<h3>Modern Technology</h3>
							<p>State-of-the-art equipment and treatment methods</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Need Professional Pest Control?</h2>
						<p>Get a free inspection and quote today. Our experts are ready to help you create a pest-free environment.</p>
						<div className="cta-actions">
							<a href="tel:+919700111999" className="btn btn-primary">
								<span className="btn-icon">📞</span>
								Call +91-9700111999
							</a>
							<a href="/contact" className="btn btn-secondary">
								<span className="btn-icon">📝</span>
								Get Free Quote
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
