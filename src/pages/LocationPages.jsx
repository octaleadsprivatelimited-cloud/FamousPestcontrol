import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

// Location-specific pages for better Google Maps visibility
const locations = [
  {
    name: 'Banjara Hills',
    slug: 'banjara-hills',
    title: 'Best Pest Control Services in Banjara Hills | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Banjara Hills, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control banjara hills, best pest control banjara hills, termite control banjara hills, cockroach control banjara hills, bed bug treatment banjara hills, rodent control banjara hills, mosquito control banjara hills, commercial pest control banjara hills, residential pest control banjara hills, emergency pest control banjara hills, pest control near me banjara hills, exterminator banjara hills, pest control company banjara hills, professional pest control banjara hills'
  },
  {
    name: 'Jubilee Hills',
    slug: 'jubilee-hills',
    title: 'Best Pest Control Services in Jubilee Hills | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Jubilee Hills, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control jubilee hills, best pest control jubilee hills, termite control jubilee hills, cockroach control jubilee hills, bed bug treatment jubilee hills, rodent control jubilee hills, mosquito control jubilee hills, commercial pest control jubilee hills, residential pest control jubilee hills, emergency pest control jubilee hills, pest control near me jubilee hills, exterminator jubilee hills, pest control company jubilee hills, professional pest control jubilee hills'
  },
  {
    name: 'Gachibowli',
    slug: 'gachibowli',
    title: 'Best Pest Control Services in Gachibowli | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Gachibowli, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control gachibowli, best pest control gachibowli, termite control gachibowli, cockroach control gachibowli, bed bug treatment gachibowli, rodent control gachibowli, mosquito control gachibowli, commercial pest control gachibowli, residential pest control gachibowli, emergency pest control gachibowli, pest control near me gachibowli, exterminator gachibowli, pest control company gachibowli, professional pest control gachibowli'
  },
  {
    name: 'HITEC City',
    slug: 'hitec-city',
    title: 'Best Pest Control Services in HITEC City | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in HITEC City, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control hitec city, best pest control hitec city, termite control hitec city, cockroach control hitec city, bed bug treatment hitec city, rodent control hitec city, mosquito control hitec city, commercial pest control hitec city, residential pest control hitec city, emergency pest control hitec city, pest control near me hitec city, exterminator hitec city, pest control company hitec city, professional pest control hitec city'
  },
  {
    name: 'Kondapur',
    slug: 'kondapur',
    title: 'Best Pest Control Services in Kondapur | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Kondapur, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control kondapur, best pest control kondapur, termite control kondapur, cockroach control kondapur, bed bug treatment kondapur, rodent control kondapur, mosquito control kondapur, commercial pest control kondapur, residential pest control kondapur, emergency pest control kondapur, pest control near me kondapur, exterminator kondapur, pest control company kondapur, professional pest control kondapur'
  },
  {
    name: 'Madhapur',
    slug: 'madhapur',
    title: 'Best Pest Control Services in Madhapur | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Madhapur, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control madhapur, best pest control madhapur, termite control madhapur, cockroach control madhapur, bed bug treatment madhapur, rodent control madhapur, mosquito control madhapur, commercial pest control madhapur, residential pest control madhapur, emergency pest control madhapur, pest control near me madhapur, exterminator madhapur, pest control company madhapur, professional pest control madhapur'
  },
  {
    name: 'Secunderabad',
    slug: 'secunderabad',
    title: 'Best Pest Control Services in Secunderabad | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Secunderabad, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control secunderabad, best pest control secunderabad, termite control secunderabad, cockroach control secunderabad, bed bug treatment secunderabad, rodent control secunderabad, mosquito control secunderabad, commercial pest control secunderabad, residential pest control secunderabad, emergency pest control secunderabad, pest control near me secunderabad, exterminator secunderabad, pest control company secunderabad, professional pest control secunderabad'
  },
  {
    name: 'Begumpet',
    slug: 'begumpet',
    title: 'Best Pest Control Services in Begumpet | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Begumpet, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control begumpet, best pest control begumpet, termite control begumpet, cockroach control begumpet, bed bug treatment begumpet, rodent control begumpet, mosquito control begumpet, commercial pest control begumpet, residential pest control begumpet, emergency pest control begumpet, pest control near me begumpet, exterminator begumpet, pest control company begumpet, professional pest control begumpet'
  },
  {
    name: 'Somajiguda',
    slug: 'somajiguda',
    title: 'Best Pest Control Services in Somajiguda | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Somajiguda, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control somajiguda, best pest control somajiguda, termite control somajiguda, cockroach control somajiguda, bed bug treatment somajiguda, rodent control somajiguda, mosquito control somajiguda, commercial pest control somajiguda, residential pest control somajiguda, emergency pest control somajiguda, pest control near me somajiguda, exterminator somajiguda, pest control company somajiguda, professional pest control somajiguda'
  },
  {
    name: 'Abids',
    slug: 'abids',
    title: 'Best Pest Control Services in Abids | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Abids, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control abids, best pest control abids, termite control abids, cockroach control abids, bed bug treatment abids, rodent control abids, mosquito control abids, commercial pest control abids, residential pest control abids, emergency pest control abids, pest control near me abids, exterminator abids, pest control company abids, professional pest control abids'
  },
  {
    name: 'Asif Nagar',
    slug: 'asif-nagar',
    title: 'Best Pest Control Services in Asif Nagar | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Asif Nagar, Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control asif nagar, best pest control asif nagar, termite control asif nagar, cockroach control asif nagar, bed bug treatment asif nagar, rodent control asif nagar, mosquito control asif nagar, commercial pest control asif nagar, residential pest control asif nagar, emergency pest control asif nagar, pest control near me asif nagar, exterminator asif nagar, pest control company asif nagar, professional pest control asif nagar'
  },
  {
    name: 'Khammam',
    slug: 'khammam',
    title: 'Best Pest Control Services in Khammam | Famous Pest Control',
    description: '🏆 #1 Pest Control Company in Khammam, Telangana. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. 30-day guarantee. Call +91 97002 99977',
    keywords: 'pest control khammam, best pest control khammam, termite control khammam, cockroach control khammam, bed bug treatment khammam, rodent control khammam, mosquito control khammam, commercial pest control khammam, residential pest control khammam, emergency pest control khammam, pest control near me khammam, exterminator khammam, pest control company khammam, professional pest control khammam'
  }
]

export default function LocationPages() {
  return (
    <div className="location-pages">
      <SEO
        title="Pest Control Services by Location | Famous Pest Control"
        description="Find the best pest control services in your area. We serve all major locations in Hyderabad and Khammam with professional pest control solutions."
        keywords="pest control by location, pest control hyderabad areas, pest control khammam areas, local pest control services"
        canonical="/locations"
      />
      
      <section className="page-header">
        <div className="container">
          <h1>Pest Control Services by Location</h1>
          <p>Find the best pest control services in your area. We serve all major locations in Hyderabad and Khammam with professional pest control solutions.</p>
        </div>
      </section>

      <section className="locations-grid">
        <div className="container">
          <div className="locations-list">
            {locations.map((location) => (
              <div key={location.slug} className="location-card">
                <h2>{location.name}</h2>
                <p>Professional pest control services in {location.name}</p>
                <div className="location-services">
                  <span>Termite Control</span>
                  <span>Cockroach Control</span>
                  <span>Bed Bug Treatment</span>
                  <span>Rodent Control</span>
                  <span>Mosquito Control</span>
                  <span>Commercial Pest Control</span>
                </div>
                <Link to={`/locations/${location.slug}`} className="btn btn-primary">
                  View Services in {location.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Individual location page component
export function LocationPage({ locationName }) {
  const location = locations.find(loc => loc.slug === locationName)
  
  if (!location) {
    return <div>Location not found</div>
  }

  return (
    <div className="location-page">
      <SEO
        title={location.title}
        description={location.description}
        keywords={location.keywords}
        canonical={`/locations/${location.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Famous Pest Control Services - ${location.name}`,
          "description": `Professional pest control services in ${location.name}`,
          "url": `https://famouspestcontrol.com/locations/${location.slug}`,
          "telephone": "+919700299977",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location.name,
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "serviceArea": {
            "@type": "City",
            "name": location.name
          }
        }}
      />
      
      <section className="page-header">
        <div className="container">
          <h1>Pest Control Services in {location.name}</h1>
          <p>Professional pest control solutions for {location.name} residents and businesses</p>
        </div>
      </section>

      <section className="location-services">
        <div className="container">
          <h2>Our Services in {location.name}</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Termite Control</h3>
              <p>Professional termite inspection and treatment in {location.name}</p>
            </div>
            <div className="service-item">
              <h3>Cockroach Control</h3>
              <p>Effective cockroach elimination and prevention in {location.name}</p>
            </div>
            <div className="service-item">
              <h3>Bed Bug Treatment</h3>
              <p>Complete bed bug removal services in {location.name}</p>
            </div>
            <div className="service-item">
              <h3>Rodent Control</h3>
              <p>Professional rat and mouse control in {location.name}</p>
            </div>
            <div className="service-item">
              <h3>Mosquito Control</h3>
              <p>Mosquito fogging and prevention in {location.name}</p>
            </div>
            <div className="service-item">
              <h3>Commercial Pest Control</h3>
              <p>Business pest management solutions in {location.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-cta">
        <div className="container">
          <h2>Need Pest Control in {location.name}?</h2>
          <p>Call us now for a free inspection and quote</p>
          <a href="tel:+919700299977" className="btn btn-primary">
            Call +91 97002 99977
          </a>
        </div>
      </section>
    </div>
  )
}
