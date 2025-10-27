import type { Metadata } from "next";

// Styles
import { Header } from "@/components/header";
import { geistMono, geistSans } from "../lib/fonts";
import "./globals.css";

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
        className={`${geistSans.className} ${geistMono.className} antialiased mx-auto  px-5 md:max-w-3xl lg:max-w-[1580px]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
