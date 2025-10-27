import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { Instrument_Sans } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import localFont from "next/font/local";
import classNames from "classnames";
import "./globals.css";
import "./styles.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "aos/dist/aos.css";
import CustomProvider from "_shared/provider";
import ScrollToTop from "components/common/scrollToTop";
// import WhatsAppCTA from "components/common/whatsAppCTA";
import { ThemeProvider } from "./_shared/context/ThemeContext";
import "./_shared/styles/theme.scss";
import Script from "next/script";
// import CustomTawkLauncher from "./_shared/components/common/customTawkLauncher/CustomTawkLauncher";
import { Images } from "./_assets/images";
export const metadata: Metadata = {
  title: "DevArt Ventures",
  description:
    "DevArt Ventures is a software development company that provides software development services to businesses.",
  keywords:
    "DevArt Ventures, software development, software development services, software development company, software development agency, software development solutions, software development solutions company, software development solutions agency, software development solutions services, software development solutions company, software development solutions agency, software development solutions services",
  openGraph: {
    title: "DevArt Ventures",
    description:
      "DevArt Ventures is a software development company that provides software development services to businesses.",
    url: "https://www.devartventures.com/",
    siteName: "DevArt Ventures",
    images: [
      {
        url: Images.Logo.src,
        width: 1200,
        height: 630,
        alt: "DevArt Ventures - Software Development Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevArt Ventures - Software Development Company",
    description:
      "DevArt Ventures is a software development company that provides software development services to businesses.",
    images: [Images.Logo.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://devartventures.com",
  },
};

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  display: "swap",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  display: "swap",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  display: "swap",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "./_assets/fonts/Satoshi-Variable.ttf",
      weight: "700, 600",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames(
        redHatDisplay.variable,
        instrumentSans.variable,
        satoshi.variable,
        rethinkSans.variable
      )}
    >
      <head>
        <link rel="icon" href={Images.Logo.src} />
        <link rel="apple-touch-icon" href={Images.Logo.src} />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MRQCFXT8');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) - GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JD88RVGNQH"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'G-JD88RVGNQH');
            `,
          }}
        />
        {/* End Google tag (gtag.js) - GA4 */}

        {/* hubSpot */}
        <Script
          id="hubspot-tracking"
          strategy="afterInteractive"
          src="//js-na2.hs-scripts.com/244144966.js"
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRQCFXT8" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <CustomProvider>
            {children}
            {/* <WhatsAppCTA /> */}
            <ScrollToTop />
          </CustomProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
