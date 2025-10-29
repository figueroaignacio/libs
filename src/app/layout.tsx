import { cookies } from "next/headers";

// Components
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";

// Styles
import { fontSans } from "../lib/fonts";
import "./globals.css";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I7A Libs",
  description:
    "A collection of useful hooks and utilities for React/Next.js projects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value === "light" ? "light" : "dark";

  return (
    <html lang="en" suppressHydrationWarning className={theme}>
      <Providers>
        <body
          className={`${fontSans.className} antialiased mx-auto px-5 md:max-w-3xl lg:max-w-[1580px]`}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
