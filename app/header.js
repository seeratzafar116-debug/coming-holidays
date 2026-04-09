"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    {/* LEFT LOGO */}
    <div className="flex-1">
      <img src="/logo.png" className="h-10" />
    </div>

    {/* CENTER NAVIGATION */}
    <nav className="flex-1 flex justify-center items-center gap-8 whitespace-nowrap text-gray-700 font-medium">
  <a href="/" className="hover:text-yellow-600">Home</a>
  <a href="/visa" className="hover:text-yellow-600">Visa Services</a>
  <a href="/holidays" className="hover:text-yellow-600">Holiday Packages</a>
  <a href="/flights" className="hover:text-yellow-600">Flights</a>
  <a href="/about" className="hover:text-yellow-600">About Us</a>
</nav>

    {/* RIGHT SIDE (EMPTY for balance) */}
    <div className="flex-1"></div>

  </div>

</header>
  );
}