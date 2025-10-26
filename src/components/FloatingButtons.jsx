import { trackPhoneCall } from './GoogleAnalytics.jsx'

export default function FloatingButtons() {
	const handlePhoneClick = () => {
		trackPhoneCall('+919700299977')
	}

	return (
		<div className="floating-contact-panel">
			{/* Call Button */}
			<a 
				href="tel:+919700299977" 
				className="contact-btn call-btn"
				aria-label="Call Us"
				title="Call +91 9700299977"
				onClick={handlePhoneClick}
			>
				<div className="contact-btn-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
					</svg>
				</div>
				<div className="contact-btn-content">
					<span className="contact-btn-title">Call Now</span>
					<span className="contact-btn-subtitle">+91 9700299977</span>
				</div>
			</a>

			{/* WhatsApp Button */}
			<a 
				href="https://wa.me/919700299977?text=Hi, I need pest control services" 
				className="contact-btn whatsapp-btn"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="WhatsApp"
				title="Chat on WhatsApp"
			>
				<div className="contact-btn-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
					</svg>
				</div>
				<div className="contact-btn-content">
					<span className="contact-btn-title">WhatsApp</span>
					<span className="contact-btn-subtitle">Quick Chat</span>
				</div>
			</a>

			{/* Hyderabad Location Button */}
			<a 
				href="https://maps.google.com/?q=H.no+12-1-331/82/B,+Datteraya+colony,+Asif+Nagar,+Hyderabad+-+500028" 
				className="contact-btn maps-btn hyderabad-btn"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Hyderabad Office"
				title="Find our Hyderabad office"
			>
				<div className="contact-btn-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="map-icon">
						<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
					</svg>
					<img src="/images/hyderabad2.jpg" alt="Hyderabad" width="20" height="20" className="location-image" />
				</div>
				<div className="contact-btn-content">
					<span className="contact-btn-title">Hyderabad</span>
					<span className="contact-btn-subtitle">Asif Nagar</span>
				</div>
			</a>

			{/* Khammam Location Button */}
			<a 
				href="https://maps.google.com/?q=H.no+14-3-106/1/A/1,+Jayanagar+colony,+Road+number+10,+Khammam+-+507002" 
				className="contact-btn maps-btn khammam-btn"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Khammam Office"
				title="Find our Khammam office"
			>
				<div className="contact-btn-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="map-icon">
						<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
					</svg>
					<img src="/images/khammam1.png" alt="Khammam" width="20" height="20" className="location-image" />
				</div>
				<div className="contact-btn-content">
					<span className="contact-btn-title">Khammam</span>
					<span className="contact-btn-subtitle">Jayanagar</span>
				</div>
			</a>
		</div>
	)
}
