import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
	return (
		<div className="app-root">
			<Header />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/services/:slug" element={<ServiceDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
			<FloatingButtons />
		</div>
	)
}
