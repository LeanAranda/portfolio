import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-lean-aranda.vercel.app"),
  title: {
    default: "Lean Aranda | Analista programador",
    template: "%s | Lean Aranda",
  },
  description:
    "Mi portfolio personal.",
  keywords: [
    "analista programador",
    "desarrollador web",
    "full stack",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Leandro Aranda" }],
  creator: "Leandro Aranda",
  openGraph: {
    title: "Lean Aranda | Analista programador",
    description: "Conocé mis proyectos y experiencia profesional.",
    url: "https://portfolio-lean-aranda.vercel.app/",
    siteName: "Portfolio de Lean Aranda",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Lean Aranda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Aranda | Analista programador",
    description: "Conocé mis proyectos y experiencia profesional.",
    images: ["/images/meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
