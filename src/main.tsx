import { createRoot } from "react-dom/client";
import Router from "./components/Router.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
