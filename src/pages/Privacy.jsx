import { Link } from 'react-router-dom'

import SEO from '../components/SEO.jsx'
import { seoData } from '../data/seoData.js'

export default function Privacy() {
	return (
		<div className="privacy-page">
			<SEO {...seoData.privacy} />
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Privacy Policy</h1>
					<p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
				</div>
			</section>

			{/* Privacy Content */}
			<section className="privacy-content">
				<div className="container">
					<div className="privacy-section">
						<h2>Information We Collect</h2>
						<p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
						<ul>
							<li>Name and contact information</li>
							<li>Service address and property details</li>
							<li>Payment information (processed securely)</li>
							<li>Communication preferences</li>
						</ul>
					</div>

					<div className="privacy-section">
						<h2>How We Use Your Information</h2>
						<p>We use the information we collect to:</p>
						<ul>
							<li>Provide and improve our pest control services</li>
							<li>Process payments and send service confirmations</li>
							<li>Communicate with you about your services</li>
							<li>Send important updates and notifications</li>
							<li>Comply with legal obligations</li>
						</ul>
					</div>

					<div className="privacy-section">
						<h2>Information Sharing</h2>
						<p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
						<ul>
							<li>To trusted service providers who assist us in operating our business</li>
							<li>When required by law or to protect our rights</li>
							<li>In connection with a business transfer or acquisition</li>
						</ul>
					</div>

					<div className="privacy-section">
						<h2>Data Security</h2>
						<p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
					</div>

					<div className="privacy-section">
						<h2>Your Rights</h2>
						<p>You have the right to:</p>
						<ul>
							<li>Access your personal information</li>
							<li>Correct inaccurate information</li>
							<li>Request deletion of your information</li>
							<li>Opt-out of marketing communications</li>
						</ul>
					</div>

					<div className="privacy-section">
						<h2>Contact Us</h2>
						<p>If you have any questions about this Privacy Policy, please contact us:</p>
						<div className="contact-info">
							<p><strong>Phone:</strong> +91 97002 99977</p>
							<p><strong>Email:</strong> info@famouspestcontrol.com</p>
							<p><strong>Address:</strong> Hyderabad, Telangana, India</p>
						</div>
					</div>

					<div className="privacy-section">
						<h2>Updates to This Policy</h2>
						<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
						<p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
					</div>
				</div>
			</section>
		</div>
	)
}
