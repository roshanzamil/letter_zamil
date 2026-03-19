import "./globals.css";
import { getSiteUrl } from "../lib/site";

const siteUrl = getSiteUrl();
const title = "Roshan Zamil | websites, apps, and digital systems";
const description =
  "Personal portfolio of Roshan Zamil, a Dubai-based builder creating websites, apps, and digital systems that drive real outcomes.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Roshan Zamil",
  authors: [
    {
      name: "Roshan Zamil",
      url: "https://www.linkedin.com/in/roshan-zamil"
    }
  ],
  creator: "Roshan Zamil",
  publisher: "Roshan Zamil",
  keywords: [
    "roshan zamil",
    "zamil",
    "brocrypt",
    "web developer dubai",
    "software developer dubai",
    "website developer uae",
    "seo and web systems",
    "custom websites",
    "web applications"
  ],
  alternates: {
    canonical: "/"
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Roshan Zamil",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/roshan.gif",
        width: 800,
        height: 800,
        alt: "Roshan Zamil portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/roshan.gif"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
