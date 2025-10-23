import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<div className="not-found-page">
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Page Not Found</h1>
					<p>The page you're looking for doesn't exist or has been moved</p>
				</div>
			</section>

			{/* 404 Content */}
			<section className="not-found-content">
				<div className="container">
					<div className="not-found-inner">
						<div className="error-code">
							<h2>404</h2>
							<div className="error-icon">🕵️</div>
						</div>
						
						<div className="error-message">
							<h3>Oops! Page Not Found</h3>
							<p>
								The page you're looking for might have been removed, had its name changed, 
								or is temporarily unavailable. But don't worry - we can help you find what you need!
							</p>
						</div>

						<div className="helpful-links">
							<h4>Here are some helpful links:</h4>
							<div className="links-grid">
								<Link to="/" className="help-link">
									<span className="link-icon">🏠</span>
									<div>
										<h5>Home</h5>
										<p>Back to our main page</p>
									</div>
								</Link>
								
								<Link to="/services" className="help-link">
									<span className="link-icon">🛡️</span>
									<div>
										<h5>Our Services</h5>
										<p>View all pest control services</p>
									</div>
								</Link>
								
								<Link to="/about" className="help-link">
									<span className="link-icon">ℹ️</span>
									<div>
										<h5>About Us</h5>
										<p>Learn more about our company</p>
									</div>
								</Link>
								
								<Link to="/contact" className="help-link">
									<span className="link-icon">📞</span>
									<div>
										<h5>Contact Us</h5>
										<p>Get in touch with our experts</p>
									</div>
								</Link>
							</div>
						</div>

						<div className="cta-section">
							<h4>Need Immediate Help?</h4>
							<p>For urgent pest problems, call us now for same-day service</p>
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
				</div>
			</section>
		</div>
	)
}
