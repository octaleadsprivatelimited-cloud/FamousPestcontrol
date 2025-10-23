import { Link } from 'react-router-dom'

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="widget">
				<h5>Request a Quote</h5>
				<a className="btn btn-primary" href="/contact">Request a Quote</a>
			</div>
			<div className="widget">
				<h5>Services</h5>
				<ul className="list">
					<li><Link to="/services/residential-pest-control">Residential Pest Control</Link></li>
					<li><Link to="/services/commercial-pest-control">Commercial Pest Control</Link></li>
					<li><Link to="/services/termite-control">Termite Control</Link></li>
					<li><Link to="/services/cockroach-control">Cockroach Control</Link></li>
					<li><Link to="/services/bed-bug-control">Bed Bug Control</Link></li>
				</ul>
			</div>
		</div>
	)
}
