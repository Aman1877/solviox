import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import SubsidyScheme from './components/sections/SubsidyScheme';
import BrandsWeTrust from './components/sections/BrandsWeTrust';
import SolarCarouselSection from './components/sections/SolarCarouselSection';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <main>
        <Header />
        <SolarCarouselSection />
        <Hero />
        <Services />
        <SubsidyScheme />
        <BrandsWeTrust />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
