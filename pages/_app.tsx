import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFade(true);
    }, 1000); // Simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100"> {/* Added background color */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className={`transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}>
          <Component {...pageProps} />
        </div>
      )}
      <Footer />
    </>
  );
}
