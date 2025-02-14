import Head from "next/head";
export default function About() {
  return (
    <>
      <Head><title>About - AETHERSCAN</title></Head>
      <main className="p-10 text-white">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">AETHERSCAN is a blockchain intelligence platform designed to equip investors with cutting-edge insights.</p>
      </main>
    </>
  );
}