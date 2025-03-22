import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
    } else {
      setError(null);
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
        <form className="mt-4 max-w-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 mb-2"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 mb-2"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 mb-2"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-blue-500 px-4 py-2 text-white">Send</button>
        </form>
      </main>
    </>
  );
}
