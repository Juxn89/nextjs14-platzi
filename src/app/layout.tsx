import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Shared/Footer';
import { Header } from "@/components/Shared/Header";
import '@/sass/globals.sass'

// https://www.fontpair.co/all
// weight: ["100", "300", "500", "700"],
const roboto = Roboto({
	subsets: ['latin'],
	weight: '100'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	console.log(roboto)

  return (
    <html lang="en">
      <body className={roboto.className} style={{ backgroundColor: '#13111a' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
