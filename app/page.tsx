import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}