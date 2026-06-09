import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "ISANTEX | Uniformes y Confección Textil — Latacunga, Ecuador",
  description:
    "Empresa textil ecuatoriana especializada en uniformes corporativos, industriales, médicos y educativos. Bordado, sublimación, DTF y serigrafía. Latacunga, Cotopaxi.",
  keywords:
    "uniformes ecuador, uniformes latacunga, bordado computarizado, sublimacion, DTF, serigrafía, confeccion, isantex, empresa textil ecuador",
  authors: [{ name: "ISANTEX" }],
  creator: "ISANTEX",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://isantex.vercel.app",
    siteName: "ISANTEX",
    title: "ISANTEX | Uniformes y Confección Textil — Latacunga, Ecuador",
    description:
      "Empresa textil ecuatoriana especializada en uniformes corporativos, industriales, médicos y educativos. Bordado, sublimación, DTF y serigrafía.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "ISANTEX — Amamos vestirte bien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISANTEX | Uniformes y Confección Textil",
    description: "Empresa textil ecuatoriana. Bordado, sublimación, DTF, serigrafía. Latacunga, Ecuador.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2B2FB8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
