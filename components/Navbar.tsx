import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold" aria-label="Go to homepage">AETHERSCAN</a>
        </Link>
        <div className="hidden md:flex">
          <Link href="/features">
            <a className="mx-2 hover:text-blue-400 active:text-blue-500" role="link" tabIndex={0}>Features</a>
          </Link>
          <Link href="/about">
            <a className="mx-2 hover:text-blue-400 active:text-blue-500" role="link" tabIndex={0}>About</a>
          </Link>
          <Link href="/contact">
            <a className="mx-2 hover:text-blue-400 active:text-blue-500" role="link" tabIndex={0}>Contact</a>
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 transition-all ease-in-out duration-500" role="menu" aria-label="Mobile menu">
          <Link href="/features">
            <a className="block py-2 hover:text-blue-400 active:text-blue-500" role="menuitem" tabIndex={0}>Features</a>
          </Link>
          <Link href="/about">
            <a className="block py-2 hover:text-blue-400 active:text-blue-500" role="menuitem" tabIndex={0}>About</a>
          </Link>
          <Link href="/contact">
            <a className="block py-2 hover:text-blue-400 active:text-blue-500" role="menuitem" tabIndex={0}>Contact</a>
          </Link>
        </div>
      )}
    </nav>
  );
}
 