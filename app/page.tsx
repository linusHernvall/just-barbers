import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OmOss from "@/components/OmOss";
import Tjanster from "@/components/Tjanster";
import Recensioner from "@/components/Recensioner";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <OmOss />
        <Tjanster />
        <Recensioner />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
