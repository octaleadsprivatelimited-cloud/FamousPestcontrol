import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import GoogleAnalytics from './components/GoogleAnalytics.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Sitemap from './pages/Sitemap.jsx'
import NotFound from './pages/NotFound.jsx'
import { initAllAnimations } from './utils/animations.js'
// Service Pages
import TermiteControl from './pages/services/TermiteControl.jsx'
import CockroachControl from './pages/services/CockroachControl.jsx'
import BedBugControl from './pages/services/BedBugControl.jsx'
import RodentControl from './pages/services/RodentControl.jsx'
import AntControl from './pages/services/AntControl.jsx'
import MosquitoControl from './pages/services/MosquitoControl.jsx'
import CommercialPestControl from './pages/services/CommercialPestControl.jsx'
import RestaurantPestControl from './pages/services/RestaurantPestControl.jsx'
import WarehousePestControl from './pages/services/WarehousePestControl.jsx'
import HotelPestControl from './pages/services/HotelPestControl.jsx'
import RetailPestControl from './pages/services/RetailPestControl.jsx'
import Sanitization from './pages/services/Sanitization.jsx'

export default function App() {
	const location = useLocation();

	useEffect(() => {
		// Initialize all animations when component mounts
		initAllAnimations();
	}, []);

	// Scroll to top on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<HelmetProvider>
			<div className="app-root">
				<GoogleAnalytics />
				<Analytics />
				<SpeedInsights />
				<Header />
				<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/services/:slug" element={<ServiceDetail />} />
					{/* Individual Service Pages */}
					<Route path="/services/termite-control" element={<TermiteControl />} />
					<Route path="/services/cockroach-control" element={<CockroachControl />} />
					<Route path="/services/bed-bug-control" element={<BedBugControl />} />
					<Route path="/services/rodent-control" element={<RodentControl />} />
					<Route path="/services/ant-control" element={<AntControl />} />
					<Route path="/services/mosquito-control" element={<MosquitoControl />} />
					<Route path="/services/commercial-pest-control" element={<CommercialPestControl />} />
					<Route path="/services/restaurant-pest-control" element={<RestaurantPestControl />} />
					<Route path="/services/warehouse-pest-control" element={<WarehousePestControl />} />
					<Route path="/services/hotel-pest-control" element={<HotelPestControl />} />
					<Route path="/services/retail-pest-control" element={<RetailPestControl />} />
					<Route path="/services/sanitization" element={<Sanitization />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/sitemap" element={<Sitemap />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
			<FloatingButtons />
			</div>
		</HelmetProvider>
	)
}
