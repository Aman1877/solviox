import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import App from '../App';
import SolarRooftopPage from '../pages/SolarRooftopPage';
import SolarStreetLightPage from '../pages/SolarStreetLightPage';
import EPCProjectsPage from '../pages/EPCProjectsPage';
import HighMastPage from '../pages/HighMastPage';

// Helper function to apply theme immediately
const applyThemeToDocument = (theme: string) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      // Ensure theme is applied after navigation
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        applyThemeToDocument(savedTheme);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Apply theme on initial load and path changes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyThemeToDocument(savedTheme);
    }
  }, [currentPath]);

  // Simple routing logic
  const renderPage = () => {
    switch (currentPath) {
      case '/solar-rooftop':
        return (
          <>
            <Helmet>
              <title>Solar Rooftop Systems | Residential & Commercial Solar Panels | Solviox Energy</title>
              <meta name="description" content="Install high-efficiency solar rooftop systems in India. Save up to 90% on electricity bills with 25+ year warranty. Government subsidies available. Get free consultation today." />
              <meta name="keywords" content="solar rooftop, solar panels India, residential solar, commercial solar, solar installation, rooftop solar systems, solar energy savings" />
              <link rel="canonical" href="https://www.solvioxenergy.com/solar-rooftop" />
              <meta property="og:title" content="Solar Rooftop Systems | Residential & Commercial Solar Panels | Solviox Energy" />
              <meta property="og:description" content="Install high-efficiency solar rooftop systems in India. Save up to 90% on electricity bills with 25+ year warranty." />
              <meta property="og:url" content="https://www.solvioxenergy.com/solar-rooftop" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Solar Rooftop Systems | Residential & Commercial Solar Panels" />
              <meta name="twitter:description" content="Install high-efficiency solar rooftop systems in India. Save up to 90% on electricity bills." />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Solar Rooftop Installation",
                  "description": "Professional solar rooftop system installation for residential and commercial properties",
                  "provider": {
                    "@type": "Organization",
                    "name": "Solviox Energy"
                  },
                  "areaServed": "India",
                  "serviceType": "Solar Energy Installation"
                })}
              </script>
            </Helmet>
            <SolarRooftopPage />
          </>
        );
      case '/solar-street-light':
        return (
          <>
            <Helmet>
              <title>Solar Street Lights | LED Street Lighting Solutions | Solviox Energy</title>
              <meta name="description" content="Advanced solar street lighting solutions for urban and rural areas. Energy-efficient LED lights with smart controls. 25+ year warranty. Government-approved installations." />
              <meta name="keywords" content="solar street lights, LED street lighting, solar lighting solutions, street light installation, energy efficient lighting, smart street lights" />
              <link rel="canonical" href="https://www.solvioxenergy.com/solar-street-light" />
              <meta property="og:title" content="Solar Street Lights | LED Street Lighting Solutions | Solviox Energy" />
              <meta property="og:description" content="Advanced solar street lighting solutions for urban and rural areas. Energy-efficient LED lights with smart controls." />
              <meta property="og:url" content="https://www.solvioxenergy.com/solar-street-light" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Solar Street Lights | LED Street Lighting Solutions" />
              <meta name="twitter:description" content="Advanced solar street lighting solutions for urban and rural areas." />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Solar Street Light Installation",
                  "description": "Professional solar street light installation and maintenance services",
                  "provider": {
                    "@type": "Organization",
                    "name": "Solviox Energy"
                  },
                  "areaServed": "India",
                  "serviceType": "Solar Lighting Installation"
                })}
              </script>
            </Helmet>
            <SolarStreetLightPage />
          </>
        );
      case '/epc-projects':
        return (
          <>
            <Helmet>
              <title>EPC Solar Projects | Engineering Procurement Construction | Solviox Energy</title>
              <meta name="description" content="Turnkey EPC solar projects for large-scale installations. Complete engineering, procurement, and construction services. Government tender expertise. MW-scale projects." />
              <meta name="keywords" content="EPC solar projects, solar EPC, turnkey solar solutions, large scale solar, solar project development, government solar tenders" />
              <link rel="canonical" href="https://www.solvioxenergy.com/epc-projects" />
              <meta property="og:title" content="EPC Solar Projects | Engineering Procurement Construction | Solviox Energy" />
              <meta property="og:description" content="Turnkey EPC solar projects for large-scale installations. Complete engineering, procurement, and construction services." />
              <meta property="og:url" content="https://www.solvioxenergy.com/epc-projects" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="EPC Solar Projects | Engineering Procurement Construction" />
              <meta name="twitter:description" content="Turnkey EPC solar projects for large-scale installations." />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "EPC Solar Projects",
                  "description": "Engineering, Procurement, and Construction services for large-scale solar energy projects",
                  "provider": {
                    "@type": "Organization",
                    "name": "Solviox Energy"
                  },
                  "areaServed": "India",
                  "serviceType": "Solar Project EPC"
                })}
              </script>
            </Helmet>
            <EPCProjectsPage />
          </>
        );
      case '/high-mast':
        return (
          <>
            <Helmet>
              <title>High Mast Lighting | Solar High Mast Towers | Solviox Energy</title>
              <meta name="description" content="Professional high mast lighting solutions for stadiums, highways, and large areas. Solar-powered high mast towers with advanced LED technology. 25+ year warranty." />
              <meta name="keywords" content="high mast lighting, solar high mast, stadium lighting, highway lighting, LED high mast, area lighting solutions" />
              <link rel="canonical" href="https://www.solvioxenergy.com/high-mast" />
              <meta property="og:title" content="High Mast Lighting | Solar High Mast Towers | Solviox Energy" />
              <meta property="og:description" content="Professional high mast lighting solutions for stadiums, highways, and large areas. Solar-powered high mast towers." />
              <meta property="og:url" content="https://www.solvioxenergy.com/high-mast" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="High Mast Lighting | Solar High Mast Towers" />
              <meta name="twitter:description" content="Professional high mast lighting solutions for stadiums, highways, and large areas." />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "High Mast Lighting Installation",
                  "description": "Professional high mast lighting installation for large areas and facilities",
                  "provider": {
                    "@type": "Organization",
                    "name": "Solviox Energy"
                  },
                  "areaServed": "India",
                  "serviceType": "High Mast Lighting Installation"
                })}
              </script>
            </Helmet>
            <HighMastPage />
          </>
        );
      case '/':
      default:
        return (
          <>
            <Helmet>
              <title>Solviox Energy | Solar Energy & Lighting Solutions India</title>
              <meta name="description" content="Solviox Energy provides advanced solar energy and lighting solutions for homes and businesses across India. Sustainable, efficient and reliable solar power systems with 25+ years warranty." />
              <meta name="keywords" content="Solviox Energy, solar energy company, solar panels India, renewable energy, solar solutions, solar installation, AC infrastructure, clean energy" />
              <link rel="canonical" href="https://www.solvioxenergy.com/" />
              <meta property="og:title" content="Solviox Energy | Solar Energy & Lighting Solutions" />
              <meta property="og:description" content="Clean and sustainable solar energy and lighting solutions by Solviox Energy. Save money, reduce your carbon footprint, and enjoy energy independence." />
              <meta property="og:url" content="https://www.solvioxenergy.com" />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="Solviox Energy" />
              <meta property="og:locale" content="en_IN" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Solviox Energy | Solar Energy Solutions" />
              <meta name="twitter:description" content="Clean and sustainable solar energy solutions by Solviox Energy." />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Solviox Energy",
                  "url": "https://www.solvioxenergy.com",
                  "logo": "https://www.solvioxenergy.com/solviox-favicon.svg",
                  "description": "Solviox Energy provides advanced solar energy and lighting solutions for homes and businesses across India.",
                  "areaServed": "India",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support"
                  }
                })}
              </script>
            </Helmet>
            <App />
          </>
        );
    }
  };

  return <>{renderPage()}</>;
};

export default Router;
