import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8F2W7S0C6S"
        strategy="afterInteractive"
        id="googleanalytics"
      ></Script>
      <Script strategy="afterInteractive">
        {`
            //Google tag (gtag.js)
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-8F2W7S0C6S');
        `}
      </Script>
      <Script
        src="https://www.googleoptimize.com/optimize.js?id=OPT-KM24Z4S"
        strategy="afterInteractive"
        id="googleoptimize"
      ></Script>
    </>
  );
};

export default GoogleAnalytics;
