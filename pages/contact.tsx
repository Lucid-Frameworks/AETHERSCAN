import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
      // Submit form logic
    }
  };

  return (
    <>
      <Head>
        <title>Contact - AETHERSCAN</title>
      </Head>
      <main className="p-10 text-white">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Your message has been sent successfully!</p>}
        <form className="mt-4 max-w-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-blue-500 px-6 py-3 text-white rounded-lg hover:bg-blue-600 transition">Send</button>
        </form>
      </main>
    </>
  );
}
