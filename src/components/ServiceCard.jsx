import { Link } from 'react-router-dom'

const serviceImages = {
	'termite-control': '/images/TERMITE CONTROL1.webp',
	'cockroach-control': '/images/COCKROACH CONTROL1.webp',
	'bed-bug-control': '/images/Bed Bug Treatment.avif',
	'rodent-control': '/images/RODENT CONTROL.webp',
	'ant-control': '/images/ANT CONTROL1.webp',
	'mosquito-control': '/images/Mosquito Control2.avif',
	'commercial-pest-control': '/images/Office Pest Control.webp',
	'restaurant-pest-control': '/images/Restaurant Pest Control.webp',
	'warehouse-pest-control': '/images/Warehouse Pest Control.webp',
	'hotel-pest-control': '/images/Hotel Pest Control.avif',
	'retail-pest-control': '/images/Retail Pest Control.avif',
	'sanitization': '/images/Sanitization Services.webp',
}

export default function ServiceCard({ title, excerpt, to, imageSrc }) {
	// Extract service slug from the 'to' prop
	const serviceSlug = to?.split('/').pop() || ''
	const defaultImage = serviceImages[serviceSlug] || '/images/Bed Bug Treatment.avif'
	
	return (
		<div className="service-card">
			<div className="service-card-header">
				<div className="service-icon">
					{getServiceIcon(title)}
				</div>
				<div className="service-image-container">
					<img 
						src={imageSrc || defaultImage} 
						alt={title} 
						className="service-image"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="service-card-body">
				<h3 className="service-title">{title}</h3>
				<p className="service-description">{excerpt}</p>
			</div>
			<div className="service-card-footer">
				<Link to={to} className="service-btn">
					<span className="btn-text">Learn More</span>
					<span className="btn-arrow">→</span>
				</Link>
			</div>
		</div>
	)
}

function getServiceIcon(title) {
	const iconMap = {
		'Termite Control': '🏠',
		'Cockroach Control': '🪳',
		'Bed Bug Treatment': '🛏️',
		'Rodent Control': '🐭',
		'Ant Control': '🐜',
		'Mosquito Control': '🦟',
		'Office Pest Control': '🏢',
		'Restaurant Pest Control': '🍽️',
		'Warehouse Pest Control': '🏭',
		'Hotel Pest Control': '🏨',
		'Retail Pest Control': '🛍️',
		'Sanitization Services': '🧽',
	}
	return iconMap[title] || '🛡️'
}
