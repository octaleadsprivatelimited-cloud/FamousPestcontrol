import { useParams, Link } from 'react-router-dom'

const serviceContent = {
	'residential-pest-control': {
		title: 'Residential Pest Control',
		body: 'Comprehensive home pest control with kid- and pet-safe solutions. We treat kitchens, bathrooms, bedrooms and utility areas with targeted gels and residual sprays to eliminate cockroaches, ants and common household pests.'
	},
	'commercial-pest-control': {
		title: 'Commercial Pest Control',
		body: 'Integrated pest management for offices, restaurants, and warehouses. We provide scheduled servicing, documentation and audits tailored to your compliance needs.'
	},
	'termite-control': {
		title: 'Termite Control',
		body: 'Pre- and post-construction termite treatments and inspections. We use drilling and injection methods and soil barrier treatments to protect your property.'
	},
	'cockroach-control': {
		title: 'Cockroach Control',
		body: 'Odorless gel baits and residual sprays for lasting protection. Minimal disruption with long-lasting results.'
	},
	'bed-bug-control': {
		title: 'Bed Bug Control',
		body: 'Targeted treatment plans with follow-ups. We use a combination of steam and spray treatments to eliminate all life stages.'
	},
	'rodent-control': {
		title: 'Rodent Control',
		body: 'Trapping, baiting and proofing to stop rat and mouse infestations. We identify entry points and implement preventive measures.'
	},
	'mosquito-control': {
		title: 'Mosquito Control',
		body: 'Thermal fogging and larvicide treatments to reduce mosquito populations in and around your premises.'
	},
}

export default function ServiceDetail() {
	const { slug } = useParams()
	const content = serviceContent[slug]
	if (!content) {
		return (
			<div className="page container">
				<h1>Service Not Found</h1>
			</div>
		)
	}
	return (
		<div className="page service-detail container">
			<h1>{content.title}</h1>
			<p>{content.body}</p>
			<ul className="list">
				<li>Trained technicians with protective equipment</li>
				<li>Safe, odorless products where possible</li>
				<li>Service warranty with follow-up support</li>
			</ul>
			<div className="actions" style={{marginTop:12}}>
				<Link className="btn btn-primary" to="/contact">Request a Quote</Link>
				<a className="btn btn-outline" href="tel:+919985709009" style={{marginLeft:8}}>Call +91 99857 09009</a>
			</div>
		</div>
	)
}
