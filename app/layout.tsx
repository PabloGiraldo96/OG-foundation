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

//export const metadata: Metadata = {
//  title: "OG Foundation",
//  description: "OG Foundation 2025",
//  icons: {
//    icon: "/favicon.ico",
//  },
//  metadataBase: new URL("https://oghouseweb.com/"),
//  alternates: {
//    canonical: "/",
//  },
//  robots: {
//    index: true,
//    follow: true,
//    googleBot: {
//      index: true,
//      follow: true,
//      "max-video-preview": -1,
//      "max-image-preview": "large",
//      "max-snippet": -1,
//    },
//  },
//};

export const metadata: Metadata = {
  title: "OG House - OG Fundacion ",
  description:
    "En OG HOUSE nos dedicamos a promover el consumo responsable a través de una variedad de iniciativas educativas y prácticas de cultivo en el hogar. Nuestro enfoque abarca desde conversatorios informativos hasta talleres educativos, que buscan proporcionar a nuestros clientes el conocimiento necesario para una experiencia saludable y enriquecedora.",
  metadataBase: new URL("https://oghouseweb.com/"),
  keywords: [
    "consumo",
    "iniciativas",
    "educativas",
    "cultivo",
    "talleres",
    "OG HOUSE",
  ],
  openGraph: {
    title:
      "Fundacion OG - Capacitar a las comunidades a traves de la educacion",
    description:
      "Unase a la Fundacion OG en nuestra mision de ofrecer oportunidades educativas y apoyo a las comunidades.",
    url: "https://oghouseweb.com/",
    siteName: "OG House",
    images: [
      {
        url: "https://ucarecdn.com/359d459f-984e-4a43-a5dd-93308e3d3ea5/_MG_4749.jpg",
        width: 1200,
        height: 630,
        alt: "Fundacion OG - Capacitar a traves de la educacion",
      },
    ],
    locale: "en_US",
    type: "website",
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
