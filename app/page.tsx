

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <Link href="/" className="logo">Al-Falah Events</Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about"target="_blank">About</Link>
          <Link href="/contact"target="_blank">Contact</Link>
          <Link href="/service"target="_blank">Service</Link>
         <Link href="/contact/contact-us">Nested Page</Link>
        </div>
      </nav>

      
      <h1 className="red"> This is our Home Page </h1>
    </div>
  );
}