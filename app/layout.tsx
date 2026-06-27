import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/content/site";

const GADS_ID = "AW-18163036620";
const GADS_CONVERSION = `${GADS_ID}/H7CACIL3iMYcEMzj59RD`;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.meta.title,
  description: site.meta.description,
  keywords: site.meta.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.url,
    siteName: site.brand.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-cal"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GADS_ID}');
              window.addEventListener('message', function(e) {
                if (e.data.type === 'CAL:bookingSuccessful') {
                  gtag('event', 'conversion', {
                    'send_to': '${GADS_CONVERSION}',
                    'value': 30.0,
                    'currency': 'EUR'
                  });
                }
              });
            `,
          }}
        />
        <Script
          id="cal-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(C,A,L){let p=function(a,ar){a.q.push(ar)};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true}if(ar[0]===L){const api=function(){p(api,arguments)};const namespace=ar[1];api.q=[];if(typeof namespace==="string"){cal.ns[namespace]=api;p(api,ar);p(cal,[L,api])}else{p(cal,ar)}return}p(cal,ar)};})(window,"https://app.cal.com/embed/embed.js","init");
              Cal("init", {origin: "https://cal.com"});
            `,
          }}
        />
      </body>
    </html>
  );
}
