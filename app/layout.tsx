import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-retro",
});

export const metadata: Metadata = {
  title: "Adeogun Oluwasemilogo | Software Engineer in Lagos",
  description:
    "Portfolio site for Adeogun Oluwasemilogo, a software engineer based in Lagos, building things that matter.",
  keywords: [
    "Adeogun Oluwasemilogo",
    "Adeogun Semilogo",
    "Software Engineer",
    "Software Engineer in Lagos",
    "Web Developer in Lagos",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="msvalidate.01" content="49CB0F9D0D5749ABFC3CD0F3E547D760" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${vt323.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
