import { Link } from 'react-router-dom'

const serviceImages = {
	'termite-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'cockroach-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'bed-bug-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'rodent-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'ant-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'mosquito-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'commercial-pest-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'restaurant-pest-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'warehouse-pest-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'hotel-pest-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'retail-pest-control': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
	'sanitization': 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop',
}

export default function ServiceCard({ title, excerpt, to, imageSrc }) {
	// Extract service slug from the 'to' prop
	const serviceSlug = to?.split('/').pop() || ''
	const defaultImage = serviceImages[serviceSlug] || 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop'
	
	return (
		<div className="service-card">
			<div className="service-image-container">
				<img 
					src={imageSrc || defaultImage} 
					alt={title} 
					className="service-image"
					loading="lazy"
				/>
				<div className="service-overlay">
					<div className="service-icon">
						{getServiceIcon(title)}
					</div>
				</div>
			</div>
			<div className="service-content">
				<h3>{title}</h3>
				<p>{excerpt}</p>
				<div className="actions">
					<Link to={to} className="btn btn-outline">
						<span className="btn-icon">→</span>
						Learn More
					</Link>
				</div>
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
