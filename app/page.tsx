import { CarouselProjects } from "./components/CarouselProjects/CarouselProjects";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Stack } from "./components/Stack/Stack"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black/80">
      <Header />
      <main className="px-6 md:px-12 lg:px-24">
        <Hero />
        <CarouselProjects />
      </main>
      <Stack />
      <Footer />
    </div>
  );
}