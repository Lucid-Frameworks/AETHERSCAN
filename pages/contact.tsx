import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - AETHERSCAN</title>
      </Head>
      <main className="p-10 text-white">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form className="mt-4 max-w-lg">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-2" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-2" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-2"></textarea>
          <button className="bg-blue-500 px-4 py-2 text-white">Send</button>
        </form>
      </main>
    </>
  );
}
