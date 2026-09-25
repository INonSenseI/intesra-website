import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryDisclaimer from "./components/GalleryDisclaimer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <GalleryDisclaimer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
