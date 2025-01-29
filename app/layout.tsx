import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import localFont from "next/font/local";
import "./globals.css";

//const geistSans = localFont({
//  src: "./fonts/GeistVF.woff",
//  variable: "--font-geist-sans",
//  weight: "100 900",
//});
//const geistMono = localFont({
//  src: "./fonts/GeistMonoVF.woff",
//  variable: "--font-geist-mono",
//  weight: "100 900",
//});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OG Foundation",
  description: "OG Foundation 2025",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.ogfoundation.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
