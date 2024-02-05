"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log('Hello world from main layout!')

  return (
    <html lang="en">
      <body className={inter.className} style={{ paddingBottom: '10px' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}