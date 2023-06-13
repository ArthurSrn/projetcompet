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

          <!-- Hotjar Tracking Code for https://commback.fr/ -->
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3508851,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>

          <script>
              window.axeptioSettings = {
                clientId: "648830fbc138970094bb1987",
                cookiesVersion: "commback-fr",
              };
               
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0],e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");
          </script>
         
        `}
      </Script>
    </html>
  );
}
