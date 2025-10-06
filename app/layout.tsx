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
  title: "Nos dégustations",
  description: "Cette application permet de gérer nos dégustations de vin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-red-50 my-4 md:my-10 xl:mx-auto lg:max-w-screen-lg mx-2 min-[375px]:mx-4 md:border-1 rounded-2xl md:p-4 md:border-neutral-400`}
      >
        {children}
      </body>
    </html>
  );
}
