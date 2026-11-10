import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Compare from "@/components/Compare";
import Flavors from "@/components/Flavors";
import Steps from "@/components/Steps";
import Uses from "@/components/Uses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Compare />
        <Flavors />
        <Steps />
        <Uses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
