import { Inter } from "next/font/google";
import { Header } from "@/components/Shared/Header";
import { Footer } from '@/components/Shared/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ paddingBottom: '10px' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
