import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Highlights />
    </main>
  );
}
