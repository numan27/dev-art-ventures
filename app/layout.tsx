import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
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
import WhatsAppCTA from "components/common/whatsAppCTA";
import { ThemeProvider } from "./_shared/context/ThemeContext";
import "./_shared/styles/theme.scss";
import Script from "next/script";
import CustomTawkLauncher from "./_shared/components/common/customTawkLauncher/CustomTawkLauncher";

export const metadata: Metadata = {
  title: "Core IT Ventures",
  description:
    "Core IT Ventures is a software development company that provides software development services to businesses.",
  keywords:
    "Core IT Ventures, software development, software development services, software development company, software development agency, software development solutions, software development solutions company, software development solutions agency, software development solutions services, software development solutions company, software development solutions agency, software development solutions services",
  openGraph: {
    title: "Core IT Ventures",
    description:
      "Core IT Ventures is a software development company that provides software development services to businesses.",
    url: "https://noyr.store",
    siteName: "Noyr Store",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Core IT Ventures - Software Development Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core IT Ventures - Software Development Company",
    description:
      "Core IT Ventures is a software development company that provides software development services to businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://coreitventures.com",
  },
};

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={classNames(redHatDisplay.variable)}>
      <head>
        <link rel="icon" href="/fav.png" />
        <link rel="apple-touch-icon" href="/fav.png" />

        <style>{`
          /* Hide Tawk.to default launcher and powered by tag */
          iframe[src*="tawk.to"] ~ div[style*="z-index"] {
            display: none !important;
          }
          /* Hide powered by tawk tag inside iframe (best effort) */
          iframe[src*="tawk.to"] {
            pointer-events: none;
          }
        `}</style>

        {/* Meta Pixel Code */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2730615080467623');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        <Script
          id="tawkto-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/685bea5581f401190f6c6e5a/1iujgmnmg';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        <Script
          id="tawkto-disclaimer"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              Tawk_API.onLoad = function(){
                setTimeout(function(){
                  var disclaimer = document.createElement('div');
                  disclaimer.innerHTML = 'We use the information you provide to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our <a href="/privacy-policy" target="_blank">privacy policy</a>.';
                  disclaimer.style.fontSize = '12px';
                  disclaimer.style.padding = '10px';
                  disclaimer.style.background = '#f5f5f5';
                  disclaimer.style.textAlign = 'center';
                  disclaimer.style.borderTop = '1px solid #ddd';
                  disclaimer.style.color = '#333';
                  disclaimer.style.marginTop = '10px';
                  var tryAppend = function() {
                    var iframe = document.querySelector('iframe[title="chat widget"]');
                    if (iframe) {
                      try {
                        var doc = iframe.contentDocument || iframe.contentWindow.document;
                        var chatBody = doc.querySelector('.tawk-min-chat-box, .tawk-chat-header');
                        if (chatBody && !doc.getElementById('custom-disclaimer')) {
                          disclaimer.id = 'custom-disclaimer';
                          chatBody.parentNode.insertBefore(disclaimer, chatBody.nextSibling);
                          return true;
                        }
                      } catch (e) {}
                    }
                    return false;
                  };
                  var interval = setInterval(function() {
                    if (tryAppend()) clearInterval(interval);
                  }, 1000);
                }, 2000);
              };
            `,
          }}
        />
      </head>

      <body>
        {/* Meta Pixel NoScript Fallback */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2730615080467623&ev=PageView&noscript=1"
            alt=""
          />
        </noscript> */}

        <ThemeProvider>
          <CustomProvider>
            {children}
            {/* <WhatsAppCTA /> */}
            {/* <ScrollToTop /> */}
            <CustomTawkLauncher />
            <Script
              id="tawkto-hide-default-launcher"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  function hideTawkWidget() {
                    if (window.Tawk_API && typeof window.Tawk_API.hideWidget === 'function') {
                      window.Tawk_API.hideWidget();
                    } else {
                      setTimeout(hideTawkWidget, 500);
                    }
                  }
                  hideTawkWidget();

                  // MutationObserver to hide Tawk.to default launcher and powered by tag
                  function hideTawkElements() {
                    // Hide default launcher
                    const tawkLauncher = document.querySelector('iframe[src*="tawk.to"] ~ div[style*="z-index"]');
                    if (tawkLauncher) tawkLauncher.style.display = 'none';
                    // Try to hide powered by tag inside iframe
                    const tawkIframe = document.querySelector('iframe[src*="tawk.to"]');
                    if (tawkIframe) {
                      try {
                        const iframeDoc = tawkIframe.contentDocument || tawkIframe.contentWindow.document;
                        const poweredBy = iframeDoc.querySelector('[class*="powered"]');
                        if (poweredBy) poweredBy.style.display = 'none';
                      } catch (e) { /* cross-origin, can't access */ }
                    }
                  }
                  const observer = new MutationObserver(hideTawkElements);
                  observer.observe(document.body, { childList: true, subtree: true });
                  setInterval(hideTawkElements, 1000);
                `,
              }}
            />
          </CustomProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
