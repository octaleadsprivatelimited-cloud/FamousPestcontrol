import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className="modern-footer">
			<div className="container">
				{/* Main Footer Content */}
				<div className="footer-main">
					<div className="footer-grid">
						{/* Company Info */}
						<div className="footer-section company-info">
							<div className="footer-logo">
								<img src="/images/logo-transparent.png" alt="Famous Pest Control Services" className="footer-logo-img" />
								<p className="tagline">Professional Pest Management Solutions</p>
							</div>
							<p className="company-desc">
								Safe, effective, and reliable pest control services across Hyderabad. 
								Licensed professionals with 20+ years of experience.
							</p>
							<div className="contact-info">
								<div className="contact-item">
									<span className="icon">📞</span>
									<a href="tel:+919700299977">+91 9700299977</a>
								</div>
								<div className="contact-item">
									<span className="icon">✉️</span>
									<a href="mailto:famouspestcontrolservices77@gmail.com">famouspestcontrolservices77@gmail.com</a>
								</div>
								<div className="contact-item">
									<span className="icon">📍</span>
									<span>Hyderabad: H.no 12-1-331/82/B, Datteraya colony, Asif Nagar - 500028</span>
								</div>
								<div className="contact-item">
									<span className="icon">📍</span>
									<span>Khammam: H.no 14-3-106/1/A/1, Jayanagar colony, Road 10 - 507002</span>
								</div>
							</div>
						</div>

						{/* Services */}
						<div className="footer-section">
							<h4>Our Services</h4>
							<div className="services-grid">
								<div className="service-group">
									<h5>Residential</h5>
									<ul>
										<li><Link to="/services/termite-control">Termite Control</Link></li>
										<li><Link to="/services/cockroach-control">Cockroach Control</Link></li>
										<li><Link to="/services/bed-bug-control">Bed Bug Treatment</Link></li>
										<li><Link to="/services/rodent-control">Rodent Control</Link></li>
									</ul>
								</div>
								<div className="service-group">
									<h5>Commercial</h5>
									<ul>
										<li><Link to="/services/commercial-pest-control">Office Pest Control</Link></li>
										<li><Link to="/services/restaurant-pest-control">Restaurant Control</Link></li>
										<li><Link to="/services/warehouse-pest-control">Warehouse Control</Link></li>
										<li><Link to="/services/sanitization">Sanitization</Link></li>
									</ul>
								</div>
							</div>
						</div>

						{/* Quick Links */}
						<div className="footer-section">
							<h4>Quick Links</h4>
							<ul className="footer-links">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/services">All Services</Link></li>
								<li><Link to="/about">About Us</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
							<div className="business-hours">
								<h5>Business Hours</h5>
								<div className="hours">
								<div className="hours-item">
									<span>Mon-Sat:</span>
									<span>9:00 AM - 6:00 PM</span>
								</div>
									<div className="hours-item emergency">
										<span>Emergency:</span>
										<span>24/7</span>
									</div>
								</div>
							</div>
						</div>

						{/* Service Areas & Social */}
						<div className="footer-section">
							<h4>Service Areas</h4>
							<div className="service-areas-container">
								<div className="area-category">
									<h5>Hyderabad</h5>
									<div className="area-tags">
										<span className="area-tag">Jubilee Hills</span>
										<span className="area-tag">HITEC City</span>
										<span className="area-tag">Gachibowli</span>
										<span className="area-tag">Kondapur</span>
										<span className="area-tag">Secunderabad</span>
										<span className="area-tag">Kukatpally</span>
										<span className="area-tag">Madhapur</span>
										<span className="area-tag">Charminar</span>
										<span className="area-tag">Asif Nagar</span>
										<span className="area-tag">Uppal</span>
										<span className="area-tag">BHEL</span>
										<span className="area-tag">All Areas</span>
									</div>
								</div>
								<div className="area-category">
									<h5>Khammam</h5>
									<div className="area-tags">
										<span className="area-tag">Khammam City</span>
										<span className="area-tag">Jayanagar</span>
										<span className="area-tag">Kothagudem</span>
										<span className="area-tag">Bhadrachalam</span>
										<span className="area-tag">Paloncha</span>
										<span className="area-tag">Sathupally</span>
									</div>
								</div>
								<div className="area-category">
									<h5>Coverage</h5>
									<div className="area-tags">
										<span className="area-tag special">24/7 Service</span>
										<span className="area-tag special">Emergency</span>
										<span className="area-tag special">All Districts</span>
									</div>
								</div>
							</div>
							<div className="social-links">
								<h5>Follow Us</h5>
								<div className="social-icons">
									<a href="#" className="social-link" aria-label="Facebook">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
										</svg>
									</a>
									<a href="#" className="social-link" aria-label="X (Twitter)">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
										</svg>
									</a>
									<a href="#" className="social-link" aria-label="Instagram">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
										</svg>
									</a>
									<a href="https://wa.me/919700299977" className="social-link" aria-label="WhatsApp">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .08 5.425.08 12.05c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893A11.821 11.821 0 0020.885 3.488"/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="footer-bottom">
					<div className="footer-bottom-content">
						<div className="copyright">
							<p>&copy; 2024 Famous Pest Control Services. All rights reserved. | Developed by OctaLeads</p>
						</div>
						<div className="footer-links-bottom">
							<a href="/privacy">Privacy</a>
							<a href="/terms">Terms</a>
							<a href="/sitemap">Sitemap</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}