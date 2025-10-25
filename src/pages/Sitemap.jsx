import { Link } from 'react-router-dom'

export default function Sitemap() {
	return (
		<div className="sitemap-page">
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Sitemap</h1>
					<p>Find all pages and services available on our website</p>
				</div>
			</section>

			{/* Sitemap Content */}
			<section className="sitemap-content">
				<div className="container">
					<div className="sitemap-grid">
						{/* Main Pages */}
						<div className="sitemap-section">
							<h2>Main Pages</h2>
							<ul className="sitemap-links">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About Us</Link></li>
								<li><Link to="/services">Services</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>

						{/* Pest Control Services */}
						<div className="sitemap-section">
							<h2>Pest Control Services</h2>
							<ul className="sitemap-links">
								<li><Link to="/services/termite-control">Termite Control</Link></li>
								<li><Link to="/services/cockroach-control">Cockroach Control</Link></li>
								<li><Link to="/services/bed-bug-control">Bed Bug Control</Link></li>
								<li><Link to="/services/rodent-control">Rodent Control</Link></li>
								<li><Link to="/services/ant-control">Ant Control</Link></li>
								<li><Link to="/services/mosquito-control">Mosquito Control</Link></li>
							</ul>
						</div>

						{/* Commercial Services */}
						<div className="sitemap-section">
							<h2>Commercial Services</h2>
							<ul className="sitemap-links">
								<li><Link to="/services/commercial-pest-control">Commercial Pest Control</Link></li>
								<li><Link to="/services/restaurant-pest-control">Restaurant Pest Control</Link></li>
								<li><Link to="/services/warehouse-pest-control">Warehouse Pest Control</Link></li>
								<li><Link to="/services/hotel-pest-control">Hotel Pest Control</Link></li>
								<li><Link to="/services/retail-pest-control">Retail Pest Control</Link></li>
								<li><Link to="/services/sanitization">Sanitization Services</Link></li>
							</ul>
						</div>

						{/* Service Areas */}
						<div className="sitemap-section">
							<h2>Service Areas</h2>
							<div className="service-areas">
								<h3>Hyderabad</h3>
								<ul className="area-links">
									<li>Banjara Hills</li>
									<li>Jubilee Hills</li>
									<li>Gachibowli</li>
									<li>HITEC City</li>
									<li>Kondapur</li>
									<li>Madhapur</li>
									<li>Secunderabad</li>
									<li>Begumpet</li>
									<li>Somajiguda</li>
									<li>Abids</li>
								</ul>
								
								<h3>Khammam District</h3>
								<ul className="area-links">
									<li>Khammam City</li>
									<li>Kothagudem</li>
									<li>Bhadrachalam</li>
									<li>Palvancha</li>
									<li>Wyra</li>
								</ul>
							</div>
						</div>

						{/* Legal Pages */}
						<div className="sitemap-section">
							<h2>Legal & Information</h2>
							<ul className="sitemap-links">
								<li><Link to="/privacy">Privacy Policy</Link></li>
								<li><Link to="/terms">Terms of Service</Link></li>
								<li><Link to="/sitemap">Sitemap</Link></li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="sitemap-section">
							<h2>Contact Information</h2>
							<div className="contact-details">
								<p><strong>Phone:</strong> +91 97002 99977</p>
								<p><strong>Email:</strong> info@famouspestcontrol.com</p>
								<p><strong>Emergency:</strong> 24/7 Available</p>
								<p><strong>Business Hours:</strong> 9:00 AM - 6:00 PM</p>
							</div>
						</div>
					</div>

					{/* Additional Information */}
					<div className="sitemap-info">
						<h2>About Our Services</h2>
						<p>Famous Pest Control Services has been serving Hyderabad and surrounding areas since 1992. We provide comprehensive pest control solutions for residential and commercial properties.</p>
						
						<h3>Our Expertise</h3>
						<ul>
							<li>Licensed and certified technicians</li>
							<li>Eco-friendly treatment methods</li>
							<li>24/7 emergency services</li>
							<li>30-day service guarantee</li>
							<li>Free follow-up treatments</li>
						</ul>

						<h3>Service Coverage</h3>
						<p>We provide pest control services across Hyderabad and Khammam district, ensuring comprehensive coverage for all your pest control needs.</p>
					</div>
				</div>
			</section>
		</div>
	)
}
