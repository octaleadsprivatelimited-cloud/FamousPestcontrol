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
									<a href="#" className="social-link" aria-label="Facebook">📘</a>
									<a href="#" className="social-link" aria-label="Twitter">🐦</a>
									<a href="#" className="social-link" aria-label="Instagram">📷</a>
									<a href="https://wa.me/919700299977" className="social-link" aria-label="WhatsApp">💬</a>
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