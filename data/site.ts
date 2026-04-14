export const siteConfig = {
  name: "Alberto Chines",
  title: "Alberto Chines | Official Website",
  description:
    "Official website of pianist Alberto Chines. Biography, repertoire, media, videos, concerts and contacts.",
  url: "https://www.albertochines.com",
  logoPath: "/branding/ac-logo-square.png",
  ogImagePath: "/branding/ac-logo-og.png",
  email: "mailto:info@albertochines.com",
  profession: "Pianist",
  locale: "it_IT",
  keywords: [
    "Alberto Chines",
    "Alberto Chines pianist",
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
        jobTitle: siteConfig.profession,
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
        sameAs: siteConfig.socialLinks,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.title,
        description: siteConfig.description,
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
        description: siteConfig.description,
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
