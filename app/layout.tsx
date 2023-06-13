import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComBack",
  description: "Application de location pour les metiers de bouch",
};

const font = localFont({
  src: [
    {
      path: "../public/fonts/HurmeGeometricSans4 Black.otf",
      weight: "400",
    },
  ],
  variable: "--font-Hurme",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={font.className}>{children}</body>

      <Script id="hotjar-matomo-script" strategy="afterInteractive">
        {`
          /* Matomo */

          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://comm-back.matomo.cloud/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='//cdn.matomo.cloud/comm-back.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();

          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-8F2W7S0C6S"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8F2W7S0C6S');
          </script>
         
        `}
      </Script>
    </html>
  );
}
