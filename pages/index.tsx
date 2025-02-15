import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AETHERSCAN - Blockchain Intelligence</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-4xl font-bold">Welcome to AETHERSCAN</h1>
        <p className="mt-4 max-w-lg">
          Real-time sentiment tracking, AI-powered analytics, and predictive insights for digital assets.
        </p>

        <div className="mt-6 space-x-4">
          <a href="/about" className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition">
            Learn More
          </a>
          <a href="/features" className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition">
            Get Started
          </a>
        </div>
      </main>
    </>
  );
}
