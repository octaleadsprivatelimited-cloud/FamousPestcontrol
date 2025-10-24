import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
	const [open, setOpen] = useState(false)
	return (
		<header className="site-header">
			{/* Top Header */}
			<div className="top-header">
				<div className="container top-header-inner">
					<div className="top-header-left">
						<div className="contact-item">
							<span className="icon">📞</span>
							<span className="text">+91 9700299977</span>
						</div>
						<div className="contact-item">
							<span className="icon">✉</span>
							<span className="text">famouspestcontrolservices77@gmail.com</span>
						</div>
					</div>
					<div className="top-header-right">
						<div className="location-item">
							<span className="icon">📍</span>
							<span className="text">Hyderabad: Datteraya colony, Asif Nagar - 500028</span>
						</div>
						<div className="location-item">
							<span className="icon">📍</span>
							<span className="text">Khammam: Jayanagar colony, Road 10 - 507002</span>
						</div>
					</div>
				</div>
			</div>
			
			{/* Main Header */}
			<div className="main-header">
				<div className="container main-header-inner">
					<Link to="/" className="logo">
						<img src="/images/logo-transparent.png" alt="Famous Pest Control Services" className="logo-img" />
					</Link>
					<nav className="nav">
						<NavLink to="/" end>Home</NavLink>
						<NavLink to="/about">About Us</NavLink>
						<NavLink to="/services">Services</NavLink>
						<NavLink to="/contact">Contact Us</NavLink>
					</nav>
					<div className="header-actions">
						<a href="/contact" className="cta-btn">Get Quote</a>
						<button className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(v => !v)}>
							<span />
							<span />
							<span />
						</button>
					</div>
					<nav id="primary-nav" className={`mobile-nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
						<NavLink to="/" end>Home</NavLink>
						<NavLink to="/about">About Us</NavLink>
						<NavLink to="/services">Services</NavLink>
						<NavLink to="/contact">Contact Us</NavLink>
						<div className="mobile-actions">
							<a href="/contact" className="cta-btn">Get Quote</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}
