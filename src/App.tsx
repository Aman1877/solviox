import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import BrandsWeTrust from "./components/sections/BrandsWeTrust";
import VideoHeroSection from "./components/sections/VideoHeroSection";

function App() {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <main>
        <Header />
        <VideoHeroSection />
        <Hero />
        <Services />
        <BrandsWeTrust />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
