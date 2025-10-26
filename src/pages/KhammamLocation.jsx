import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function KhammamLocation() {
  const seoData = {
    title: 'Best Pest Control Services in Khammam | Jayanagar Colony | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Khammam, Telangana. Located at Jayanagar Colony, Road 10. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control khammam, best pest control khammam, termite control khammam, cockroach control khammam, bed bug treatment khammam, rodent control khammam, mosquito control khammam, commercial pest control khammam, residential pest control khammam, emergency pest control khammam, pest control jayanagar khammam, pest control road 10 khammam, pest control kothagudem, pest control bhadrachalam, pest control palvancha, pest control wyra, pest control near me khammam, exterminator khammam, pest control company khammam, professional pest control khammam',
    canonical: '/khammam-location',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Famous Pest Control Services - Khammam",
      "description": "Professional pest control services in Khammam, Telangana",
      "url": "https://famouspestcontrol.com/khammam-location",
      "telephone": "+919700299977",
      "email": "info@famouspestcontrol.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "H.no 14-3-106/1/A/1, Jayanagar colony, Road 10",
        "addressLocality": "Khammam",
        "addressRegion": "Telangana",
        "postalCode": "507002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.2473",
        "longitude": "80.1514"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Khammam"
        },
        {
          "@type": "City",
          "name": "Kothagudem"
        },
        {
          "@type": "City",
          "name": "Bhadrachalam"
        },
        {
          "@type": "City",
          "name": "Palvancha"
        },
        {
          "@type": "City",
          "name": "Wyra"
        }
      ],
      "openingHours": "Mo-Su 09:00-18:00",
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pest Control Services in Khammam",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Termite Control Khammam",
              "description": "Professional termite inspection and treatment in Khammam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cockroach Control Khammam",
              "description": "Effective cockroach elimination and prevention in Khammam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bed Bug Treatment Khammam",
              "description": "Complete bed bug removal and prevention in Khammam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rodent Control Khammam",
              "description": "Professional rodent elimination and prevention in Khammam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mosquito Control Khammam",
              "description": "Mosquito fogging and breeding site treatment in Khammam"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "75"
      }
    }
  }

  return (
    <div className="khammam-location-page">
      <SEO {...seoData} />
      
      <section className="page-header">
        <div className="container">
          <h1>Pest Control Services in Khammam</h1>
          <p>Professional pest control solutions for Khammam residents and businesses</p>
          <div className="location-info">
            <p><strong>📍 Address:</strong> H.no 14-3-106/1/A/1, Jayanagar colony, Road 10, Khammam - 507002</p>
            <p><strong>📞 Phone:</strong> +91 97002 99977</p>
            <p><strong>🕒 Hours:</strong> 9:00 AM - 6:00 PM (7 days a week)</p>
          </div>
        </div>
      </section>

      <section className="location-services">
        <div className="container">
          <h2>Our Services in Khammam</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Termite Control in Khammam</h3>
              <p>Professional termite inspection and treatment services in Khammam and surrounding areas</p>
              <ul>
                <li>Subterranean termite control</li>
                <li>Drywood termite treatment</li>
                <li>Termite damage repair</li>
                <li>Preventive termite barriers</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h3>Cockroach Control in Khammam</h3>
              <p>Effective cockroach elimination and prevention in Khammam homes and businesses</p>
              <ul>
                <li>German cockroach control</li>
                <li>American cockroach treatment</li>
                <li>Kitchen cockroach elimination</li>
                <li>Commercial cockroach control</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h3>Bed Bug Treatment in Khammam</h3>
              <p>Complete bed bug removal and prevention services in Khammam</p>
              <ul>
                <li>Heat treatment for bed bugs</li>
                <li>Chemical bed bug treatment</li>
                <li>Hotel bed bug control</li>
                <li>Residential bed bug removal</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h3>Rodent Control in Khammam</h3>
              <p>Professional rat and mouse control in Khammam</p>
              <ul>
                <li>Rat control and elimination</li>
                <li>Mouse control services</li>
                <li>Rodent proofing</li>
                <li>Commercial rodent control</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h3>Mosquito Control in Khammam</h3>
              <p>Mosquito fogging and breeding site treatment in Khammam</p>
              <ul>
                <li>Mosquito fogging services</li>
                <li>Larviciding treatment</li>
                <li>Dengue prevention</li>
                <li>Malaria prevention</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h3>Commercial Pest Control in Khammam</h3>
              <p>Business pest management solutions in Khammam</p>
              <ul>
                <li>Office pest control</li>
                <li>Warehouse pest management</li>
                <li>Restaurant pest control</li>
                <li>Hotel pest control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-areas">
        <div className="container">
          <h2>Service Areas in Khammam District</h2>
          <div className="areas-grid">
            <div className="area-item">
              <h3>Khammam City</h3>
              <p>Complete pest control services in Khammam city including Jayanagar colony, Road 10 area</p>
            </div>
            <div className="area-item">
              <h3>Kothagudem</h3>
              <p>Professional pest control in Kothagudem and surrounding areas</p>
            </div>
            <div className="area-item">
              <h3>Bhadrachalam</h3>
              <p>Expert pest management services in Bhadrachalam</p>
            </div>
            <div className="area-item">
              <h3>Palvancha</h3>
              <p>Reliable pest control solutions in Palvancha</p>
            </div>
            <div className="area-item">
              <h3>Wyra</h3>
              <p>Comprehensive pest control services in Wyra</p>
            </div>
            <div className="area-item">
              <h3>Other Areas</h3>
              <p>We also serve other areas in Khammam district. Call us to check service availability</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-cta">
        <div className="container">
          <h2>Need Pest Control in Khammam?</h2>
          <p>Call us now for a free inspection and quote. We serve all areas in Khammam district with professional pest control solutions.</p>
          <div className="cta-buttons">
            <a href="tel:+919700299977" className="btn btn-primary">
              📞 Call +91 97002 99977
            </a>
            <Link to="/contact" className="btn btn-secondary">
              📝 Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="location-map">
        <div className="container">
          <h2>Find Us in Khammam</h2>
          <div className="map-info">
            <p><strong>Address:</strong> H.no 14-3-106/1/A/1, Jayanagar colony, Road 10, Khammam - 507002</p>
            <p><strong>Landmark:</strong> Near Jayanagar colony main road</p>
            <p><strong>Pincode:</strong> 507002</p>
            <a 
              href="https://maps.google.com/?q=H.no+14-3-106/1/A/1,+Jayanagar+colony,+Road+10,+Khammam+-+507002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
