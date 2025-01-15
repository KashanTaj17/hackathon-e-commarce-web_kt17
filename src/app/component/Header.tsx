'use client'
import { useState } from "react"; // Import React state management
import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <div>
      <nav className="bg-[#FFFFFF] shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            <span>
              <Image
                src={"/Logo_01.png"}
                height={41}
                width={185}
                alt="Logo"
              />
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden text-black hover:text-yellow-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-14">
            <Link href="/" className="text-black hover:text-yellow-500">
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-yellow-500">
              Shop
            </Link>
            <Link href="/blog" className="text-black hover:text-yellow-500">
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-yellow-500">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-8 text-3xl">
            <Link href="#" className="text-black hover:text-yellow-500">
              <MdPersonOutline />
            </Link>
            <Link href="#" className="text-black hover:text-yellow-500">
              <CiSearch />
            </Link>
            <Link href="#" className="text-black hover:text-yellow-500">
              <GoHeart />
            </Link>
            <Link href="#" className="text-black hover:text-yellow-500">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white p-4 space-y-2`}
        >
          <Link
            href="/"
            className="block py-2 text-black hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block py-2 text-black hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-black hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-black hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
