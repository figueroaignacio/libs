import type { Metadata } from "next";

// Styles
import "./globals.css";
import { geistMono, geistSans } from "./lib/fonts";

export const metadata: Metadata = {
  title: "I7A Libs",
  description:
    "A collection of useful hooks and utilities for React/Next.js projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
