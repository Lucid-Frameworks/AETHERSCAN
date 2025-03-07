import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>AETHERSCAN - Blockchain Intelligence</title>
        <meta name="description" content="AETHERSCAN provides real-time sentiment tracking, AI-powered analytics, and predictive insights for digital assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-4xl font-bold">Welcome to AETHERSCAN</h1>
        <p className="mt-4 max-w-lg">
          Real-time sentiment tracking, AI-powered analytics, and predictive insights for digital assets.
        </p>

        {/* Displaying real-time timestamp */}
        <div className="mt-4 text-sm text-gray-400">
          Last update: <span className="font-mono">{timestamp}</span>
        </div>

        <div className="mt-6 space-x-4">
          <a href="/about" className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition" aria-label="Learn more about AETHERSCAN">
            Learn More
          </a>
          <a href="/features" className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition" aria-label="Get started with AETHERSCAN">
            Get Started
          </a>
        </div>
      </main>
    </>
  );
}
