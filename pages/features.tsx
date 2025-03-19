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
        
        {/* Added section heading for better structure */}
        <h2 className="mt-6 text-2xl font-semibold">Our Key Features:</h2>
        
        <ul className="mt-4 space-y-3 list-disc pl-5">
          <li><strong>📊 Real-time Sentiment Tracking</strong> - Monitor market emotions in real-time.</li>
          <li><strong>🤖 AI-Powered Analytics</strong> - Gain deep insights with advanced machine learning.</li>
          <li><strong>📈 Trend Forecasting</strong> - Predict market movements with AI-driven models.</li>
          <li><strong>🔍 On-Chain Analysis</strong> - Track blockchain activity for enhanced transparency.</li>
        </ul>

        {/* Added detailed descriptions */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Real-time Sentiment Tracking</h3>
          <p>Our sentiment tracking allows you to monitor market emotions in real-time, giving you an edge in decision-making.</p>
          
          <h3 className="text-xl font-semibold mt-4">AI-Powered Analytics</h3>
          <p>Leverage advanced machine learning algorithms to gain deep insights into market trends and behavior.</p>
          
          <h3 className="text-xl font-semibold mt-4">Trend Forecasting</h3>
          <p>Utilize our AI-driven models to forecast future market movements, providing you with a predictive advantage.</p>
          
          <h3 className="text-xl font-semibold mt-4">On-Chain Analysis</h3>
          <p>Track blockchain activity and monitor real-time data for enhanced transparency in the crypto space.</p>
        </div>
      </main>
    </>
  );
}
