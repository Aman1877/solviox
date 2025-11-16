import React, { useState, useEffect } from 'react';
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
        return <SolarRooftopPage />;
      case '/solar-street-light':
        return <SolarStreetLightPage />;
      case '/epc-projects':
        return <EPCProjectsPage />;
      case '/high-mast':
        return <HighMastPage />;
      case '/':
      default:
        return <App />;
    }
  };

  return <>{renderPage()}</>;
};

// Navigation helper function
export const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));

  // Ensure theme is applied after navigation
  setTimeout(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, 0);
};

export default Router;
