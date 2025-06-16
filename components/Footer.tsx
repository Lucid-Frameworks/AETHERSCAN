export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>&copy; 2025 AETHERSCAN. All rights reserved. <Link href="/privacy-policy"><a className="text-blue-400 hover:underline">Privacy Policy</a></Link></p>
      <div className="mt-2 flex justify-center flex-wrap">
        <a
          href="https://twitter.com/AetherscanAI"
          className="mx-2 text-blue-400 hover:underline transition-transform transform hover:scale-110"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://discord.gg/samplelink"
          className="mx-2 text-blue-400 hover:underline transition-transform transform hover:scale-110"
        >
          <i className="fab fa-discord"></i>
        </a>
        <a
          href="https://github.com/Aetherscan"
          className="mx-2 text-blue-400 hover:underline transition-transform transform hover:scale-110"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/aetherscan"
          className="mx-2 text-blue-400 hover:underline transition-transform transform hover:scale-110"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:contact@aetherscan.io"
          className="mx-2 text-blue-400 hover:underline transition-transform transform hover:scale-110"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}
