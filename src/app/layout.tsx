import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
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
        className={`${hankenGrotesk.variable} antialiased`}
        style={{
          "--font-body": "var(--font-hanken-grotesk)",
          "--font-heading": "var(--font-hanken-grotesk)",
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
