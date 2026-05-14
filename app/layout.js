import '../styles/globals.css';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import CustomCursor from './components/CustomCursor';

export const metadata = {
  title: 'Luxury Growth Systems',
  description: 'Premium conversion agency'
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