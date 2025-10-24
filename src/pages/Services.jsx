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
					<h1>Our Services</h1>
					<p>Professional pest control solutions for your home and business</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="services-main">
				<div className="container">
					<div className="services-grid-3x3">
						{residentialServices.map(service => (
							<ServiceCard 
								key={service.slug} 
								title={service.title} 
								excerpt={service.excerpt} 
								to={`/services/${service.slug}`} 
							/>
						))}
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
						<p>Discover what sets us apart as Hyderabad's leading pest control experts</p>
					</div>
					<div className="advantages-grid">
						<div className="advantage-card">
							<div className="advantage-icon">🛡️</div>
							<h3>Safe & Eco-Friendly Solutions</h3>
							<p>All our treatments are completely safe for families, pets, and the environment while being highly effective against pests.</p>
						</div>
						<div className="advantage-card">
							<div className="advantage-icon">⚡</div>
							<h3>24/7 Emergency Response</h3>
							<p>Round-the-clock emergency service with same-day availability. We're always ready to help when you need us most.</p>
						</div>
						<div className="advantage-card">
							<div className="advantage-icon">🏆</div>
							<h3>Licensed & Certified Experts</h3>
							<p>Our certified technicians have years of experience and undergo regular training to stay updated with the latest techniques.</p>
						</div>
						<div className="advantage-card">
							<div className="advantage-icon">💰</div>
							<h3>Transparent Pricing</h3>
							<p>Competitive rates with completely transparent pricing. No hidden charges, surprise fees, or unexpected costs.</p>
						</div>
						<div className="advantage-card">
							<div className="advantage-icon">🔒</div>
							<h3>Guaranteed Results</h3>
							<p>We stand behind our work with comprehensive service warranties and follow-up support to ensure your complete satisfaction.</p>
						</div>
						<div className="advantage-card">
							<div className="advantage-icon">📱</div>
							<h3>Advanced Technology</h3>
							<p>State-of-the-art equipment and cutting-edge treatment methods for the most effective pest control solutions.</p>
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
							<a href="tel:+919700299977" className="btn btn-primary">
								<span className="btn-icon">📞</span>
								Call +91 9700299977
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
