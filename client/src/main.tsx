import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";

// Get the root element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Create a root and render the app with all providers
createRoot(rootElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
