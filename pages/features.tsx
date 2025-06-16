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

        {/* Added CTA buttons */}
        <div className="mt-8 flex space-x-4">
          <a href="/about" className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition" aria-label="Learn more about AETHERSCAN">
            Learn More
          </a>
          <a href="/sign-up" className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition" aria-label="Get started with AETHERSCAN">
            Get Started
          </a>
        </div>

        {/* Added testimonials */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold">What our users say:</h3>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300">"AETHERSCAN has transformed the way I approach digital asset investments. The sentiment tracking is a game-changer!"</p>
              <p className="mt-2 text-right font-semibold text-white">- Investor A</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300">"The AI-powered insights provided by AETHERSCAN have given me a clear edge in forecasting trends. Highly recommended!"</p>
              <p className="mt-2 text-right font-semibold text-white">- Investor B</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
  