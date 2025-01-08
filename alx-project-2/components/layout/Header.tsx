import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between space-x-4">
        <Link href="/home" className="text-lg font-semibold hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-lg font-semibold hover:underline">
          About
        </Link>
        <Link href="/posts" className="text-lg font-semibold hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;

