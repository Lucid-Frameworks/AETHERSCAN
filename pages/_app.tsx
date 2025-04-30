import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFade(true);
    }, 1000); // Simulate loading delay

    // Check for user preference on dark mode
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Save user preference for dark mode
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {loading ? (
          <div
            className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-700"
            role="status"
            aria-live="polite"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 dark:border-blue-300"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div
            className={`transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            <Component {...pageProps} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
