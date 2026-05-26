import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const theme = createTheme({
  fontFamily: 'var(--font-sans), sans-serif',
  fontFamilyMonospace: 'var(--font-mono), monospace',
  primaryColor: 'indigo',
  defaultRadius: 'md',
});

export const metadata = {
  title: "DataVec — Web Workers Hosting. Native C Speed. Flat Rate.",
  description: "DataVec compiles your Web Workers JavaScript to native C and serves it at native speed on a flat rate. No request meters, no bandwidth overages, just fast, secure, and predictable hosting.",
  keywords: "web workers, serverless flat rate, cloudflare workers alternative, deno deploy, edge hosting, js to c compiler, hono hosting, hono, elysia",
  openGraph: {
    type: "website",
    url: "https://datavec.io/",
    title: "DataVec — Web Workers Hosting. Native C Speed. Flat Rate.",
    description: "Deploy Hono, Elysia, and itty-router apps natively compiled to C on a flat monthly bill. Zero cold starts, 300K+ requests/sec.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {/* Atmospheric Orbs */}
          <div className="orb orb-1" aria-hidden="true"></div>
          <div className="orb orb-2" aria-hidden="true"></div>
          <div className="orb orb-3" aria-hidden="true"></div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

