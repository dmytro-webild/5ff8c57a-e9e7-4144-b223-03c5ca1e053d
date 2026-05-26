import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Willson - AI Systems Builder & Data Strategist',
  description: 'Portfolio of Willson, an AI Systems Builder, Data Strategist, and Cybersecurity-Focused Engineer. Showcasing precision, intelligence, and modern product vision.',
  keywords: ["AI Systems Builder, Data Strategist, Cybersecurity Engineer, Oracle APEX expert, Product Thinker, technologist, AI, analytics, cloud infrastructure, cybersecurity, MERN stack, portfolio"],
  openGraph: {
    "title": "Willson - AI Systems Builder & Data Strategist",
    "description": "Portfolio of Willson, an AI Systems Builder, Data Strategist, and Cybersecurity-Focused Engineer. Showcasing precision, intelligence, and modern product vision.",
    "url": "https://www.willson-portfolio.com",
    "siteName": "Willson's Portfolio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241207.jpg",
        "alt": "Abstract neural network background"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Willson - AI Systems Builder & Data Strategist",
    "description": "Portfolio of Willson, an AI Systems Builder, Data Strategist, and Cybersecurity-Focused Engineer. Showcasing precision, intelligence, and modern product vision.",
    "images": [
      "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241207.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
