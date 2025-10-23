import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
	const [open, setOpen] = useState(false)
	return (
		<header className="site-header">
			<div className="topbar">
				<div className="container topbar-inner">
					<div className="topbar-left">
						<a href="tel:+919700111999">📞 +91-9700111999</a>
						<a href="mailto:pestcontrolhyd365@gmail.com">✉ pestcontrolhyd365@gmail.com</a>
					</div>
					<div className="topbar-right">
						<a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">★ Facebook</a>
						<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">★ Instagram</a>
						<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">★ LinkedIn</a>
					</div>
				</div>
			</div>
			<div className="container header-inner">
				<Link to="/" className="logo">Pest Control Hyderabad</Link>
				<button className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(v => !v)}>
					<span />
					<span />
					<span />
				</button>
				<nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
					<NavLink to="/" end>Home</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<a href="/contact" className="cta">Request a Quote</a>
					<a href="tel:+919700111999" className="cta alt">Call Now</a>
				</nav>
			</div>
		</header>
	)
}
