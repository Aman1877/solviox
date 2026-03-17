import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Router from "./components/Router.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </HelmetProvider>
);
