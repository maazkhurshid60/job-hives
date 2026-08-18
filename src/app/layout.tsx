import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Job Marketplace",
  description: "Find your next worker or post a job opening.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{
          "--font-body": "var(--font-inter)",
          "--font-heading": "var(--font-inter)",
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
