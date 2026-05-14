export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prasantha Kumar V - Data Analyst & Gen AI",
  description: "Passionate Data Analyst & Gen AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
