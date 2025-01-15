import Link from "next/link";
import Image from "next/image";
import { CiGrid41 } from "react-icons/ci";
import { FaVectorSquare } from "react-icons/fa";
import { BsViewList } from "react-icons/bs";

const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    image: "/Image_19.png",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: null,
    discount: null,
    image: "/Image_07.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image: "/Image_08.png",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: null,
    discount: "New",
    image: "/Image_09.png",
  },
  {
    name: "Grifo",
    description: "Modern dining table",
    price: "Rp 4.500.000",
    originalPrice: "Rp 6.000.000",
    discount: "-25%",
    image: "/Image_19.png",
  },
  {
    name: "Ergono",
    description: "Ergonomic office chair",
    price: "Rp 3.000.000",
    originalPrice: "Rp 4.000.000",
    discount: "-20%",
    image: "/image_21.png",
  },
  {
    name: "Aerona",
    description: "Stylish bookshelf",
    price: "Rp 1.500.000",
    originalPrice: "Rp 2.000.000",
    discount: "-25%",
    image: "/Image_08.png",
  },
  {
    name: "Bliss",
    description: "Luxury recliner",
    price: "Rp 8.000.000",
    originalPrice: "Rp 10.000.000",
    discount: "-20%",
    image: "/Image_09.png",
  },
  {
    name: "Fusion",
    description: "Modern coffee table",
    price: "Rp 2.800.000",
    originalPrice: "Rp 3.500.000",
    discount: "-20%",
    image: "/Image_19.png",
  },
  {
    name: "Nimbus",
    description: "Compact sofa",
    price: "Rp 6.500.000",
    originalPrice: "Rp 8.000.000",
    discount: "-18%",
    image: "/image_21.png",
  },
  {
    name: "Astro",
    description: "Outdoor lounger",
    price: "Rp 4.000.000",
    originalPrice: null,
    discount: "New",
    image: "/Image_08.png",
  },
  {
    name: "Orion",
    description: "Round dining table",
    price: "Rp 5.000.000",
    originalPrice: "Rp 6.500.000",
    discount: "-23%",
    image: "/Image_09.png",
  },
  {
    name: "Capri",
    description: "Minimalist armchair",
    price: "Rp 3.200.000",
    originalPrice: "Rp 4.200.000",
    discount: "-24%",
    image: "/Image_19.png",
  },
  {
    name: "Nova",
    description: "Corner sofa",
    price: "Rp 9.000.000",
    originalPrice: "Rp 11.000.000",
    discount: "-18%",
    image: "/image_21.png",
  },
  {
    name: "Halo",
    description: "Elegant pendant light",
    price: "Rp 1.800.000",
    originalPrice: null,
    discount: "New",
    image: "/Image_08.png",
  },
  {
    name: "Zenith",
    description: "Comfortable floor chair",
    price: "Rp 2.200.000",
    originalPrice: "Rp 3.000.000",
    discount: "-27%",
    image: "/Image_09.png",
  },
];

function ProductGrid() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full max-w-[100%] mx-auto h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Image_18.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative flex h-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black">Shop</h1>
          <p className="text-black mt-2">
            <Link href="/" className="font-bold ">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
            <span>Shop</span>
          </p>
        </div>
      </section>

      {/* Filter and Sorting */}
      <section className="p-4 bg-[#F9F1E7]">
        <div className="container mx-auto flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
          {/* Left: Filter Button */}
          <div className="flex flex-wrap items-center space-x-4">
            <button
              className="px-4 py-2 text-xl rounded hover:bg-gray-300"
              aria-label="Open filter options"
            >
              &#x2630; Filter
            </button>
            <CiGrid41 size={28} className="m-4 hover:bg-gray-300" />
            <FaVectorSquare size={22} className="m-5 hover:bg-gray-300" />
            <BsViewList size={28} className="m-4 hover:bg-gray-300" />
          </div>

          {/* Center: Results Count */}
          <div className="flex-grow text-center font-semibold">
            <p>
              Showing <span className="font-bold">1–16</span> of{" "}
              {products.length} results
            </p>
          </div>

          {/* Right: Show & Sort */}
          <div className="flex flex-wrap justify-end space-x-4 items-center">
            {/* Show */}
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Show</span>
              <input
                type="number"
                className="w-12 px-2 py-1 border rounded"
                defaultValue="16"
                aria-label="Number of products to show"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Sort by</span>
              <select
                className="px-2 py-1 border rounded"
                aria-label="Sort products"
              >
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[white] p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              href={
                product.name === "Leviosa" ? "/cart" : `/singleproduct/${index}`
              }
            >
              <div className="relative border rounded-lg shadow-sm overflow-hidden bg-[#F4F5F8] cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  height={301}
                  width={500}
                  className="w-full h-[301px] object-cover"
                />
                {product.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {product.discount}
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <div className="mt-2">
                    <span className="font-bold text-black">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-6 pb-10 pt-5">
          <button className="w-8 h-8 bg-yellow-500 text-white rounded-lg">
            1
          </button>
          <button className="w-8 h-8 hover:bg-yellow-500 bg-gray-200 rounded-lg">
            2
          </button>
          <button className="w-8 h-8  hover:bg-yellow-500 bg-gray-200 rounded-lg">
            3
          </button>
          <button className="px-4 py-1  hover:bg-yellow-500 bg-gray-200 rounded-lg">
            Next
          </button>
        </div>

        <div className="flex flex-wrap justify-between items-center p-20 w-full bg-[#F9F1E7]">
          <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/Trophy_22.png"
              width={60}
              height={60}
              alt="High Quality"
            />
            <div className="ml-4">
              <h4 className="font-bold">High Quality</h4>
              <p className="text-[#898989]">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/Warranty_23.png"
              width={60}
              height={60}
              alt="Warranty Protection"
            />
            <div className="ml-4">
              <h4 className="font-bold">Warranty Protection</h4>
              <p className="text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/Shipping_24.png"
              width={60}
              height={60}
              alt="Free Shipping"
            />
            <div className="ml-4">
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-[#898989]">Order over 150 $</p>
            </div>
          </div>
          <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/Suppor_25.png"
              width={60}
              height={60}
              alt="24/7 Support"
            />
            <div className="ml-4">
              <h4 className="font-bold">24 / 7 Support</h4>
              <p className="text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
