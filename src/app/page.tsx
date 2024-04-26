import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/NavBar";
import Model from "@/components/Model";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}
