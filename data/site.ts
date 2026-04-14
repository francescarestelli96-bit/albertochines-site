export const siteConfig = {
  name: "Alberto Chines",
  title: "Alberto Chines",
  description: "Steinway Artist - Italian Pianist - Professor",
  longDescription:
    "Official website of Alberto Chines. Steinway Artist, Italian pianist and professor. Biography, repertoire, media, videos, concerts and contacts.",
  url: "https://www.albertochines.com",
  logoPath: "/branding/ac-logo-square.png",
  ogImagePath: "/branding/ac-logo-og.png",
  email: "mailto:info@albertochines.com",
  profession: "Steinway Artist",
  subtitle: "Steinway Artist - Italian Pianist - Professor",
  locale: "it_IT",
  keywords: [
    "Alberto Chines",
    "Alberto Chines pianist",
    "Steinway Artist",
    "Italian pianist",
    "Professor",
    "pianist",
    "classical piano",
    "concert pianist",
    "official website",
  ],
  socialLinks: [
    "https://www.youtube.com/@albertochines",
    "https://instagram.com/albertochines",
    "https://facebook.com/albertochines",
  ],
} as const;

export const siteRoutes = [
  "/",
  "/about",
  "/concerts",
  "/repertoire",
  "/media",
  "/media/video",
  "/contact",
] as const;

export function getHomeJsonLd() {
  const logoUrl = `${siteConfig.url}${siteConfig.logoPath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: logoUrl,
        description: siteConfig.subtitle,
        jobTitle: "Italian Pianist and Professor",
        award: "Steinway Artist",
        email: siteConfig.email,
        sameAs: siteConfig.socialLinks,
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 560,
          height: 560,
        },
        description: siteConfig.subtitle,
        sameAs: siteConfig.socialLinks,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.title,
        description: siteConfig.subtitle,
        inLanguage: ["it", "en"],
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.subtitle,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: logoUrl,
        },
      },
    ],
  };
}
