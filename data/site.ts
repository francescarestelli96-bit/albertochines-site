export const siteConfig = {
  name: "Alberto Chines",
  title: "Alberto Chines - official website",
  description: "Italian pianist, educator, Steinway Artist",
  longDescription:
    "Official website of Alberto Chines. Italian pianist, educator, Steinway Artist. Biography, repertoire, media, videos, concerts and contacts.",
  url: "https://www.albertochines.com",
  logoPath: "/branding/ac-logo-square.png",
  ogImagePath: "/branding/ac-logo-og.png",
  email: "mailto:info@albertochines.com",
  profession: "Steinway Artist",
  subtitle: "Italian pianist, educator, Steinway Artist",
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
        jobTitle: "Italian Pianist and Educator",
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
          width: 512,
          height: 512,
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
