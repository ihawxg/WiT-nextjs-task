import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from "next";
import "./globals.scss";
import './fontawesome.min.css'
import Footer from '@/sections/Footer/footer';
import HeaderContainer from '@/sections/HeaderContainer/header-container';

import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  themeColor: "#e90101",
}

export const metadata: Metadata = {
  metadataBase: new URL("http://www.themezinho.net/aqum/"),
  authors: { name: "Themezinho" },
  description: 'For all kind of news and magazine website',
  keywords: [
    "aqum", "news", "updates", "gossip", "tv", "lifestyle", "travel", "post", "blog", "ads", "read", "author", "quote", "newspaper", "digital", "video", "comment"
  ],
  title: {
    default: "Aqum | Contemporary News and Magazine",
    template: `%s | Aqum | Contemporary News and Magazine`
  },
  openGraph: {
    description: "Aqum | Contemporary News and Magazine",
    images: ['https://themezinho.net/aqum/preview.png'],
    siteName: 'aqum',
    title: 'aqum',
    url: "http://www.themezinho.net/aqum"
  },
  twitter: {
    card: 'summary',
    site: '@aqum',
    creator: '@aqum',
    title: 'aqum',
    description: 'Aqum | Contemporary News and Magazine',
    images: ['http://www.themezinho.net/aqum/preview.png']
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body /*className={inter.className} */>
        <link href="/apple-touch-icon-144-precomposed.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/apple-touch-icon-114-precomposed.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/apple-touch-icon-72-precomposed.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/apple-touch-icon-57-precomposed.png" rel="apple-touch-icon" />
        <link href="/favicon.png" rel="shortcut icon" />
        <HeaderContainer></HeaderContainer>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
