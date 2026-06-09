import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Catalog from "@/components/Catalog";
import Clients from "@/components/Clients";
import PublicContracting from "@/components/PublicContracting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Catalog />
<Clients />
        <PublicContracting />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
