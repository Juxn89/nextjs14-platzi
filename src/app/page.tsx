import { Description } from "./components/Home/Description";
import { Hero } from "./components/Home/Hero";
import { MainProducts } from "./components/Home/MainProducts";

export default function Home() {
  console.log('Hello world! :), main page')

  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
