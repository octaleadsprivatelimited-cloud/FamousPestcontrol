import { Link } from 'react-router-dom'

import SEO from '../components/SEO.jsx'
import { seoData } from '../data/seoData.js'

export default function Terms() {
	return (
		<div className="terms-page">
			<SEO {...seoData.terms} />
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Terms of Service</h1>
					<p>Please read these terms carefully before using our pest control services.</p>
				</div>
			</section>

			{/* Terms Content */}
			<section className="terms-content">
				<div className="container">
					<div className="terms-section">
						<h2>Service Agreement</h2>
						<p>By engaging our pest control services, you agree to the following terms and conditions:</p>
						<ul>
							<li>Services will be performed by licensed and certified technicians</li>
							<li>All treatments are safe for humans and pets when applied correctly</li>
							<li>Follow-up services may be required for complete pest elimination</li>
							<li>Client cooperation is essential for effective treatment</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Service Guarantee</h2>
						<p>We provide the following guarantees:</p>
						<ul>
							<li>30-day guarantee on most pest control treatments</li>
							<li>Free re-treatment if pests return within guarantee period</li>
							<li>Professional service with quality products</li>
							<li>24/7 emergency service availability</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Payment Terms</h2>
						<p>Payment terms and conditions:</p>
						<ul>
							<li>Payment is due upon completion of service</li>
							<li>We accept cash, card, and digital payments</li>
							<li>Commercial clients may be eligible for credit terms</li>
							<li>Late payment fees may apply after 30 days</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Cancellation Policy</h2>
						<p>Service cancellation terms:</p>
						<ul>
							<li>24-hour notice required for service cancellation</li>
							<li>Emergency services cannot be cancelled once dispatched</li>
							<li>Refunds processed within 5-7 business days</li>
							<li>Partial refunds may apply for incomplete services</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Liability and Insurance</h2>
						<p>Our liability coverage includes:</p>
						<ul>
							<li>Fully insured and bonded technicians</li>
							<li>General liability coverage up to ₹10,00,000</li>
							<li>Professional indemnity insurance</li>
							<li>Workers' compensation coverage</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Client Responsibilities</h2>
						<p>To ensure effective treatment, clients must:</p>
						<ul>
							<li>Provide access to all treatment areas</li>
							<li>Remove or cover food items during treatment</li>
							<li>Keep pets and children away during application</li>
							<li>Follow post-treatment instructions</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Limitation of Liability</h2>
						<p>Our liability is limited to the cost of services provided. We are not responsible for:</p>
						<ul>
							<li>Pre-existing pest damage</li>
							<li>Damage caused by client negligence</li>
							<li>Third-party property damage</li>
							<li>Consequential or indirect damages</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Dispute Resolution</h2>
						<p>Any disputes will be resolved through:</p>
						<ul>
							<li>Good faith negotiation first</li>
							<li>Mediation if negotiation fails</li>
							<li>Arbitration as final recourse</li>
							<li>Jurisdiction: Hyderabad, Telangana</li>
						</ul>
					</div>

					<div className="terms-section">
						<h2>Contact Information</h2>
						<p>For questions about these terms, contact us:</p>
						<div className="contact-info">
							<p><strong>Phone:</strong> +91 97002 99977</p>
							<p><strong>Email:</strong> info@famouspestcontrol.com</p>
							<p><strong>Address:</strong> Hyderabad, Telangana, India</p>
						</div>
					</div>

					<div className="terms-section">
						<h2>Updates to Terms</h2>
						<p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
						<p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
					</div>
				</div>
			</section>
		</div>
	)
}
