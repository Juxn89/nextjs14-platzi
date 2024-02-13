import { Metadata } from "next";
import { MainProducts } from "@/components/Home/MainProducts";

export const metadata: Metadata = {
	title: '✨ Future world',
	description: 'Welcome to the future world, an ecommerce from other century',
	keywords: [ 'ecommerce', 'future', 'world', 'technology' ]
}

export default function Home() {
  console.log('Hello world! :), main page (React Server Component)')

  return (
    <main>
      <MainProducts />
    </main>
  );
}
