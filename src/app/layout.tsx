import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Shared/Footer';
import { Header } from "@/components/Shared/Header";
import '@/sass/globals.sass'

// https://www.fontpair.co/all
const roboto = Roboto({
	weight: ["100", "300", "500", "700"],
	subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} style={{ backgroundColor: 'black' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
