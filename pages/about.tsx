import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - AETHERSCAN</title>
        <meta name="description" content="Learn more about AETHERSCAN, a blockchain intelligence platform providing cutting-edge insights for investors." />
        {/* Added Open Graph meta tags for social media preview */}
        <meta property="og:title" content="About - AETHERSCAN" />
        <meta property="og:description" content="Learn more about AETHERSCAN, a blockchain intelligence platform providing cutting-edge insights for investors." />
      </Head>
      <main className="p-10 text-white">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">AETHERSCAN is a blockchain intelligence platform designed to equip investors with cutting-edge insights.</p>
      </main>
    </>
  );
}
