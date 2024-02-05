import { Inter } from "next/font/google";
import { Header } from "@/components/Shared/Header";
import { Footer } from '@/components/Shared/Footer';
import '@/sass/globals.sass'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'black' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
