import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header () {
    return (
        <div>
          <div>
            {/* <!-- Responsive Navbar --> */}
<nav className="bg-[#FFFFFF] shadow-md">
  <div className="container mx-auto flex items-center justify-between p-4">
   
    {/* <!-- Logo --> */}
    <Link href="#" className="text-2xl font-bold text-black">
      <span className="">
        <Image
        src={"/Logo_01.png"}
        height={41}
        width={185}
        alt="logoOne" />
      </span>
    </Link>

    {/* <!-- Menu Button for Mobile --> */}
    <button
      className="block md:hidden text-black hover:text-yellow-500 focus:outline-none"
      id="menu-toggle"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    {/* <!-- Nav Links --> */}
    <div
      className="hidden md:flex md:items-center md:space-x-14"
      id="menu-items"
    >
      <Link href="/" className="text-black hover:text-yellow-500">Home</Link>
      <Link href="/shop" className="text-black hover:text-yellow-500">Shop</Link>
      <Link href="/blog" className="text-black hover:text-yellow-500">Blog</Link>
      <Link href="/contact" className="text-black hover:text-yellow-500">Contact</Link>
    </div>


    {/* <!-- Icons --> */}
    <div className="hidden md:flex items-center space-x-8 text-3xl">
      <Link href="#" className="text-black hover:text-yellow-500">
        <i className="fas fa-search"> <MdPersonOutline /> </i>
      </Link>
      <Link href="#" className="text-black hover:text-yellow-500">
        <i className="fas fa-user"> <CiSearch /> </i>
      </Link>
      <Link href="#" className="text-black hover:text-yellow-500">
        <i className="fas fa-heart"> <GoHeart /></i>
      </Link>
      <Link href="#" className="text-black hover:text-yellow-500">
        <i className="fas fa-shopping-cart"> <AiOutlineShoppingCart /> </i>
      </Link>
    </div>
  </div>

  {/* <!-- Mobile Menu --> */}
  <div className="hidden md:hidden bg-white p-4" id="mobile-menu">
    <Link href="/" className="block py-2 text-black hover:text-yellow-500">Home</Link>
    <Link href="/shop" className="block py-2 text-black hover:text-yellow-500">Shop</Link>
    <Link href="/blog" className="block py-2 text-black hover:text-yellow-500">Blog</Link>
    <Link href="/contact" className="block py-2 text-black hover:text-yellow-500">Contact</Link>
  </div>
</nav>

        </div>
        </div>
    )
}
export default Header;