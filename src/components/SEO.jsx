import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const siteName = 'Famous Pest Control Services'
  const siteUrl = 'https://famouspestcontrol.com'
  const defaultImage = `${siteUrl}/images/og-image.jpg`
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const fullOgTitle = ogTitle || title || siteName
  const fullOgDescription = ogDescription || description
  const fullOgImage = ogImage || defaultImage
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  const robotsContent = []
  if (noindex) robotsContent.push('noindex')
  else robotsContent.push('index')
  if (nofollow) robotsContent.push('nofollow')
  else robotsContent.push('follow')

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={siteName} />
      <meta name="robots" content={robotsContent.join(', ')} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullOgTitle} />
      <meta property="og:description" content={fullOgDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullOgTitle} />
      <meta property="twitter:description" content={fullOgDescription} />
      <meta property="twitter:image" content={fullOgImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1a5f1a" />
      <meta name="msapplication-TileColor" content="#1a5f1a" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
