import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">AETHERSCAN</a>
        </Link>
        <div className="hidden md:flex">
          <Link href="/features"><a className="mx-2">Features</a></Link>
          <Link href="/about"><a className="mx-2">About</a></Link>
          <Link href="/contact"><a className="mx-2">Contact</a></Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/features"><a className="block py-2">Features</a></Link>
          <Link href="/about"><a className="block py-2">About</a></Link>
          <Link href="/contact"><a className="block py-2">Contact</a></Link>
        </div>
      )}
    </nav>
  );
}
