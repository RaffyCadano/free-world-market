import '../styles/globals.css';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import CustomCursor from './components/CustomCursor';

const PRODUCTION_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://freeworldmarket.com';

export const metadata = {
  title: 'Growth Partnership Services | XiXi Marketing & Sales | Free World Market',
  description:
    'Done-for-you marketing and sales systems for CPAs and professional service firms. No equity. Predictable revenue. Book your free discovery call today.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: PRODUCTION_URL,
  },
  openGraph: {
    title: 'Growth Partnership Services | XiXi Marketing & Sales | Free World Market',
    description:
      'Done-for-you marketing and sales systems for CPAs and professional service firms. No equity. Predictable revenue. Book your free discovery call today.',
    url: PRODUCTION_URL,
    siteName: 'Free World Market',
    images: [
      {
        url: `${PRODUCTION_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Growth Partnership Services — Free World Market',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Partnership Services | Free World Market',
    description:
      'Done-for-you marketing and sales systems for CPAs and professional service firms.',
    images: [`${PRODUCTION_URL}/og-image.jpg`],
  },
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:wght@300;400;600&family=Josefin+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

      </head>

      <body>
        <Analytics />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}