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
          AETHERSCAN is a blockchain intelligence platform designed to equip investors with cutting-edge insights.
        </p>
      </main>
    </>
  );
}
 