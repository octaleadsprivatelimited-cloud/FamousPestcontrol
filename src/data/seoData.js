// SEO data for all pages
export const seoData = {
  home: {
    title: 'Professional Pest Control Services in Hyderabad | Famous Pest Control',
    description: 'Expert pest control services in Hyderabad & Khammam. Termite control, cockroach treatment, bed bug removal, rodent control. 24/7 emergency service. Call +91 97002 99977',
    keywords: 'pest control hyderabad, termite control, cockroach control, bed bug treatment, rodent control, mosquito control, commercial pest control, residential pest control, emergency pest control, pest management hyderabad',
    canonical: '/',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Famous Pest Control Services",
      "description": "Professional pest control services in Hyderabad and Khammam district",
      "url": "https://famouspestcontrol.com",
      "telephone": "+919700299977",
      "email": "info@famouspestcontrol.com",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "H.no 12-1-331/82/B, Datteraya colony, Asif Nagar",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500028",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "H.no 14-3-106/1/A/1, Jayanagar colony, Road number 10",
          "addressLocality": "Khammam",
          "addressRegion": "Telangana",
          "postalCode": "507002",
          "addressCountry": "IN"
        }
      ],
      "serviceArea": [
        {
          "@type": "City",
          "name": "Hyderabad"
        },
        {
          "@type": "City",
          "name": "Khammam"
        }
      ],
      "openingHours": "Mo-Su 09:00-18:00",
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pest Control Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Termite Control",
              "description": "Professional termite inspection and treatment services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cockroach Control",
              "description": "Effective cockroach elimination and prevention"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bed Bug Treatment",
              "description": "Complete bed bug removal and prevention services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rodent Control",
              "description": "Professional rodent elimination and prevention"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Pest Control",
              "description": "Business pest management solutions"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    }
  },

  about: {
    title: 'About Us | Professional Pest Control Company in Hyderabad',
    description: 'Learn about Famous Pest Control Services - Hyderabad\'s trusted pest control company since 1992. Licensed technicians, eco-friendly treatments, 30-day guarantee.',
    keywords: 'about pest control hyderabad, pest control company, licensed pest control, eco-friendly pest control, pest control history, professional technicians',
    canonical: '/about',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Famous Pest Control Services",
        "foundingDate": "1992",
        "description": "Professional pest control services in Hyderabad and surrounding areas",
        "numberOfEmployees": "25-50",
        "areaServed": ["Hyderabad", "Khammam"]
      }
    }
  },

  services: {
    title: 'Pest Control Services in Hyderabad | Residential & Commercial',
    description: 'Complete pest control services in Hyderabad. Termite control, cockroach treatment, bed bug removal, rodent control, mosquito control. Residential & commercial solutions.',
    keywords: 'pest control services hyderabad, residential pest control, commercial pest control, termite control, cockroach control, bed bug treatment, rodent control, mosquito control',
    canonical: '/services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pest Control Services",
      "description": "Professional pest control services for residential and commercial properties",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Pest Control"
    }
  },

  contact: {
    title: 'Contact Us | Pest Control Services Hyderabad | Get Free Quote',
    description: 'Contact Famous Pest Control Services for free pest control quotes. Call +91 97002 99977 or visit our offices in Hyderabad & Khammam. 24/7 emergency service available.',
    keywords: 'contact pest control hyderabad, pest control quote, emergency pest control, pest control phone number, pest control address hyderabad',
    canonical: '/contact',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services",
        "telephone": "+919700299977",
        "email": "info@famouspestcontrol.com",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "H.no 12-1-331/82/B, Datteraya colony, Asif Nagar",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500028",
            "addressCountry": "IN"
          }
        ]
      }
    }
  },

  // Individual Service Pages
  termiteControl: {
    title: 'Termite Control Services in Hyderabad | Professional Treatment',
    description: 'Expert termite control services in Hyderabad. Professional inspection, treatment, and prevention. Licensed technicians, eco-friendly methods. Call +91 97002 99977',
    keywords: 'termite control hyderabad, termite treatment, termite inspection, termite prevention, subterranean termites, drywood termites, termite damage repair',
    canonical: '/services/termite-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Termite Control Services",
      "description": "Professional termite inspection, treatment, and prevention services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Termite Control"
    }
  },

  cockroachControl: {
    title: 'Cockroach Control Services in Hyderabad | Effective Treatment',
    description: 'Professional cockroach control in Hyderabad. German cockroach, American cockroach treatment. Safe, effective elimination. 30-day guarantee. Call +91 97002 99977',
    keywords: 'cockroach control hyderabad, cockroach treatment, german cockroach, american cockroach, cockroach elimination, cockroach prevention',
    canonical: '/services/cockroach-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cockroach Control Services",
      "description": "Professional cockroach elimination and prevention services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Cockroach Control"
    }
  },

  bedBugControl: {
    title: 'Bed Bug Treatment in Hyderabad | Professional Removal Services',
    description: 'Expert bed bug treatment in Hyderabad. Heat treatment, chemical treatment, inspection services. Complete elimination guaranteed. Call +91 97002 99977',
    keywords: 'bed bug treatment hyderabad, bed bug removal, bed bug inspection, heat treatment, bed bug elimination, hotel bed bug treatment',
    canonical: '/services/bed-bug-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Bed Bug Control Services",
      "description": "Professional bed bug inspection, treatment, and elimination services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Bed Bug Control"
    }
  },

  rodentControl: {
    title: 'Rodent Control Services in Hyderabad | Rat & Mouse Treatment',
    description: 'Professional rodent control in Hyderabad. Rat control, mouse control, rodent proofing. Safe, effective treatment. 24/7 emergency service. Call +91 97002 99977',
    keywords: 'rodent control hyderabad, rat control, mouse control, rodent proofing, rat extermination, mouse elimination, rodent prevention',
    canonical: '/services/rodent-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rodent Control Services",
      "description": "Professional rodent elimination and prevention services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Rodent Control"
    }
  },

  antControl: {
    title: 'Ant Control Services in Hyderabad | Professional Ant Treatment',
    description: 'Expert ant control in Hyderabad. Carpenter ant, fire ant, sugar ant treatment. Effective elimination and prevention. Call +91 97002 99977',
    keywords: 'ant control hyderabad, carpenter ant control, fire ant control, sugar ant control, ant elimination, ant prevention',
    canonical: '/services/ant-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ant Control Services",
      "description": "Professional ant elimination and prevention services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Ant Control"
    }
  },

  mosquitoControl: {
    title: 'Mosquito Control Services in Hyderabad | Professional Treatment',
    description: 'Professional mosquito control in Hyderabad. Fogging, larviciding, breeding site treatment. Dengue, malaria prevention. Call +91 97002 99977',
    keywords: 'mosquito control hyderabad, mosquito fogging, larviciding, dengue prevention, malaria prevention, mosquito breeding control',
    canonical: '/services/mosquito-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mosquito Control Services",
      "description": "Professional mosquito control and prevention services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Mosquito Control"
    }
  },

  commercialPestControl: {
    title: 'Commercial Pest Control in Hyderabad | Business Solutions',
    description: 'Professional commercial pest control in Hyderabad. Office, warehouse, retail pest management. Customized business solutions. Call +91 97002 99977',
    keywords: 'commercial pest control hyderabad, office pest control, warehouse pest control, business pest control, retail pest control',
    canonical: '/services/commercial-pest-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial Pest Control Services",
      "description": "Professional pest control solutions for commercial properties",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Commercial Pest Control"
    }
  },

  restaurantPestControl: {
    title: 'Restaurant Pest Control in Hyderabad | Food Service Solutions',
    description: 'Specialized restaurant pest control in Hyderabad. Food-safe treatments, FSSAI compliance, kitchen pest management. Call +91 97002 99977',
    keywords: 'restaurant pest control hyderabad, food service pest control, kitchen pest control, FSSAI compliance, food safe pest control',
    canonical: '/services/restaurant-pest-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Restaurant Pest Control Services",
      "description": "Specialized pest control solutions for restaurants and food service establishments",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Restaurant Pest Control"
    }
  },

  warehousePestControl: {
    title: 'Warehouse Pest Control in Hyderabad | Storage Facility Solutions',
    description: 'Professional warehouse pest control in Hyderabad. Storage pest management, inventory protection, customized solutions. Call +91 97002 99977',
    keywords: 'warehouse pest control hyderabad, storage pest control, inventory protection, warehouse fumigation, storage facility pest control',
    canonical: '/services/warehouse-pest-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Warehouse Pest Control Services",
      "description": "Professional pest control solutions for warehouses and storage facilities",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Warehouse Pest Control"
    }
  },

  hotelPestControl: {
    title: 'Hotel Pest Control in Hyderabad | Hospitality Solutions',
    description: 'Specialized hotel pest control in Hyderabad. Guest room treatment, common area management, hospitality pest solutions. Call +91 97002 99977',
    keywords: 'hotel pest control hyderabad, hospitality pest control, guest room pest control, hotel pest management, accommodation pest control',
    canonical: '/services/hotel-pest-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Hotel Pest Control Services",
      "description": "Specialized pest control solutions for hotels and hospitality establishments",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Hotel Pest Control"
    }
  },

  retailPestControl: {
    title: 'Retail Pest Control in Hyderabad | Store Solutions',
    description: 'Professional retail pest control in Hyderabad. Shopping center, store pest management, customer-friendly treatments. Call +91 97002 99977',
    keywords: 'retail pest control hyderabad, store pest control, shopping center pest control, retail pest management, mall pest control',
    canonical: '/services/retail-pest-control',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Retail Pest Control Services",
      "description": "Professional pest control solutions for retail establishments",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Retail Pest Control"
    }
  },

  sanitization: {
    title: 'Sanitization Services in Hyderabad | Professional Cleaning',
    description: 'Professional sanitization services in Hyderabad. Deep cleaning, disinfection, COVID-19 sanitization. Commercial & residential. Call +91 97002 99977',
    keywords: 'sanitization services hyderabad, deep cleaning, disinfection services, COVID-19 sanitization, commercial cleaning, residential sanitization',
    canonical: '/services/sanitization',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sanitization Services",
      "description": "Professional sanitization and disinfection services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Famous Pest Control Services"
      },
      "areaServed": ["Hyderabad", "Khammam"],
      "serviceType": "Sanitization"
    }
  },

  privacy: {
    title: 'Privacy Policy | Famous Pest Control Services',
    description: 'Privacy policy for Famous Pest Control Services. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, personal information, pest control privacy',
    canonical: '/privacy',
    noindex: true
  },

  terms: {
    title: 'Terms of Service | Famous Pest Control Services',
    description: 'Terms of service for Famous Pest Control Services. Read our terms and conditions for pest control services.',
    keywords: 'terms of service, terms and conditions, pest control terms, service agreement',
    canonical: '/terms',
    noindex: true
  },

  sitemap: {
    title: 'Sitemap | Famous Pest Control Services',
    description: 'Complete sitemap of Famous Pest Control Services website. Find all our pest control services and pages.',
    keywords: 'sitemap, website map, pest control pages, service directory',
    canonical: '/sitemap',
    noindex: true
  }
}

export default seoData
