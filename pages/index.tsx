import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AETHERSCAN - Blockchain Intelligence</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to AETHERSCAN</h1>
        <p className="mt-4">Real-time sentiment tracking & predictive analytics for digital assets.</p>
      </main>
    </>
  );
}
