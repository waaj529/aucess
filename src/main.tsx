import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadCriticalImages } from "./lib/imagePreloader";
import { initPerformanceMonitoring } from "./lib/performance";

// Preload critical images as early as possible
preloadCriticalImages();

// Initialize performance monitoring
initPerformanceMonitoring();

createRoot(document.getElementById("root")!).render(<App />);
