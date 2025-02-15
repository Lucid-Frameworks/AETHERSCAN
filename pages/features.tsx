import Head from "next/head";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - AETHERSCAN</title>
        <meta name="description" content="Discover AETHERSCAN's cutting-edge features, including real-time sentiment tracking, AI-powered analytics, and trend forecasting." />
      </Head>
      <main className="p-10 text-white">
        <h1 className="text-3xl font-bold">Features</h1>
        <p className="mt-4">AETHERSCAN provides advanced analytics to enhance your investment decisions.</p>
        <ul className="mt-6 space-y-3 list-disc pl-5">
          <li><strong>📊 Real-time Sentiment Tracking</strong> - Monitor market emotions in real-time.</li>
          <li><strong>🤖 AI-Powered Analytics</strong> - Gain deep insights with advanced machine learning.</li>
          <li><strong>📈 Trend Forecasting</strong> - Predict market movements with AI-driven models.</li>
          <li><strong>🔍 On-Chain Analysis</strong> - Track blockchain activity for enhanced transparency.</li>
        </ul>
      </main>
    </>
  );
}
