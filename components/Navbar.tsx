import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-xl font-bold">AETHERSCAN</a>
        </Link>
        <div>
          <Link href="/features"><a className="mx-2">Features</a></Link>
          <Link href="/about"><a className="mx-2">About</a></Link>
          <Link href="/contact"><a className="mx-2">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
