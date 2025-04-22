import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - AETHERSCAN</title>
        <meta 
          name="description" 
          content="Learn more about AETHERSCAN, a blockchain intelligence platform providing cutting-edge insights for investors." 
        />
        <link rel="canonical" href="https://aetherscan.io/about" />
        
        {/* Open Graph meta tags for social media preview */}
        <meta property="og:title" content="About - AETHERSCAN" />
        <meta 
          property="og:description" 
          content="Learn more about AETHERSCAN, a blockchain intelligence platform providing cutting-edge insights for investors." 
        />
        <meta property="og:image" content="https://aetherscan.io/preview-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aetherscan.io/about" />

        {/* Twitter meta tags for better sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - AETHERSCAN" />
        <meta 
          name="twitter:description" 
          content="Learn more about AETHERSCAN, a blockchain intelligence platform providing cutting-edge insights for investors." 
        />
        <meta name="twitter:image" content="https://aetherscan.io/preview-image.jpg" />
      </Head>
      
      <main className="p-10 text-gray-900 dark:text-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">
          AETHERSCAN is a blockchain intelligence platform designed to equip investors with cutting-edge insights, powered by AI and blockchain technology.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Our Team</h2>
        <p className="mt-2">
          We are a team of passionate professionals with a background in blockchain, data science, and finance, committed to providing transparent and reliable insights.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">
          Our mission is to revolutionize blockchain analytics by providing investors with the tools they need to make data-driven decisions and stay ahead of market trends.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Our Values</h2>
        <ul className="mt-4 list-disc pl-5">
          <li>Transparency in data</li>
          <li>Innovation and continuous improvement</li>
          <li>Commitment to providing value to investors</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Our Timeline</h2>
        <ul className="mt-4 space-y-2">
          <li><strong>2021:</strong> AETHERSCAN was founded with the vision of improving blockchain transparency.</li>
          <li><strong>2022:</strong> Introduced real-time sentiment tracking and AI-powered analytics.</li>
          <li><strong>2023:</strong> Expanded to offer trend forecasting and on-chain analysis features.</li>
          <li><strong>2024:</strong> Became a leading platform for blockchain intelligence with over 100K users.</li>
        </ul>
      </main>
    </>
  );
}
