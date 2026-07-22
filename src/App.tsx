import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero2 />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
