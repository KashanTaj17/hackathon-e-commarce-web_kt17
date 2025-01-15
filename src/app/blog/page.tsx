import Image from "next/image";
import Link from "next/link";

function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Image_18.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative flex flex-col items-center justify-center h-full">
          <Image
            src="/Logo_0.1.png"
            width={79}
            height={79}
            alt="logo"
            className="w-[79px] h-[79px]"
          />
          <h1 className="text-4xl font-bold text-black">Blog</h1>
          <p className="text-black mt-2">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
            <span>Blog</span>
          </p>
        </div>
      </section>

      <div className="bg-white min-h-screen">
        {/* Container */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header Section */}
          <header className="flex justify-between items-center py-4 border-b">
            <div className="text-2xl font-bold"></div>

            <div className="flex items-center border rounded px-3 py-1">
              <input
                type="text"
                placeholder="Search"
                className="border-none focus:outline-none px-2 py-1"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 011 13.93V21h-2v-3.07A7 7 0 1111 4z"
                />
              </svg>
            </div>
          </header>

          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 mt-8">
            {/* Blog Posts */}
            <div className="col-span-1 sm:col-span-9 space-y-8">
              {/* Post 1 */}
              <div className="bg-white rounded shadow p-4">
                <Image
                  src="/Image_41.png"
                  width={817}
                  height={500}
                  alt="Blog Image"
                  className="rounded"
                />
                <div className="mt-4">
                  <p className="text-[#9F9F9F] text-sm pb-3">
                    Admin | 20 Oct 2022 | Wood
                  </p>
                  <h2 className="text-2xl font-bold">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-[#9F9F9F] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    href="#"
                    className="text-black font-semibold mt-2 inline-block"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded shadow p-4">
                <Image
                  src="/Image_42.png"
                  width={817}
                  height={500}
                  alt="Blog Image"
                  className="rounded"
                />
                <div className="mt-4">
                  <p className="text-gray-500 text-sm pb-3">
                    Admin | 20 Oct 2022 | Handmade
                  </p>
                  <h2 className="text-2xl font-bold">
                    Exploring new ways of decorating
                  </h2>
                  <p className="text-[#9F9F9F] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    href="#"
                    className="text-black font-semibold mt-2 inline-block"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded shadow p-4">
                <Image
                  src="/Image_43.png"
                  width={817}
                  height={500}
                  alt="Blog Image"
                  className="rounded"
                />
                <div className="mt-4">
                  <p className="text-[#9F9F9F] text-sm pb-3">
                    Admin | 20 Oct 2022 | Wood
                  </p>
                  <h2 className="text-2xl font-bold">
                    Handmade pieces that took time to make
                  </h2>
                  <p className="text-[#9F9F9F] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                  <a
                    href="#"
                    className="text-black font-semibold mt-2 inline-block"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex space-x-3 justify-center mt-8">
                <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">
                  1
                </button>
                <button className="px-3 py-1 border rounded hover:bg-yellow-600">
                  2
                </button>
                <button className="px-3 py-1 border rounded hover:bg-yellow-600">
                  3
                </button>
                <button className="px-3 py-1 border rounded hover:bg-yellow-600">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="col-span-1 sm:col-span-3 mt-8 sm:mt-0">
              {/* Categories */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-7">
                  <li>
                    <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                      Wood
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                      Handmade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9F9F9F] hover:text-blue-500">
                      Others
                    </a>
                  </li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-4 rounded shadow mt-8">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-10">
                  <li>
                    <Image
                      src="/Image_44.png"
                      height={80}
                      width={80}
                      alt="Image44"
                      className="inline-block mr-2 rounded"
                    />
                    <span>Exploring new ways of decorating</span>
                  </li>
                  <li>
                    <Image
                      src="/Image_46.png"
                      height={80}
                      width={80}
                      alt="Image45"
                      className="inline-block mr-2 rounded"
                    />
                    <span>Exploring new ways of decorating</span>
                  </li>
                  <li>
                    <Image
                      src="/Image_47.png"
                      height={80}
                      width={80}
                      alt="Image47"
                      className="inline-block mr-2 rounded"
                    />
                    <span>Handmade pieces that took time to make</span>
                  </li>
                  <li>
                    <Image
                      src="/Image_50.png"
                      height={80}
                      width={80}
                      alt="Image50"
                      className="inline-block mr-2 rounded"
                    />
                    <span>Modern home in melan</span>
                  </li>
                  <li>
                    <Image
                      src="/Image_48.png"
                      height={80}
                      width={80}
                      alt="Image48"
                      className="inline-block mr-2 rounded"
                    />
                    <span>Colorful office redesign</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between p-8 sm:p-20 w-full mr-12 mb-5 h-[270px] items-center mt-12 bg-[#FAF3EA] text-center">
          <div className="flex w-full justify-around">
            {/* High Quality Section */}
            <div className="flex flex-col items-center">
              <Image
                src="/Trophy_22.png"
                height={60}
                width={60}
                alt="High Quality"
                className="w-[60px] h-[60px]"
              />
              <h4 className="font-bold">High Quality</h4>
              <p className="text-[#898989]">Crafted from top materials</p>
            </div>

            {/* Warranty Protection Section */}
            <div className="flex flex-col items-center">
              <Image
                src="/Warranty_23.png"
                height={60}
                width={60}
                alt="Warranty Protection"
                className="w-[60px] h-[60px]"
              />
              <h4 className="font-bold">Warranty Protection</h4>
              <p className="text-[#898989]">Over 2 years</p>
            </div>

            {/* Free Shipping Section */}
            <div className="flex flex-col items-center">
              <Image
                src="/Shipping_24.png"
                height={60}
                width={60}
                alt="Free Shipping"
                className="w-[60px] h-[60px]"
              />
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-[#898989]">Order over 150$</p>
            </div>

            {/* 24/7 Support Section */}
            <div className="flex flex-col items-center">
              <Image
                src="/Suppor_25.png"
                height={60}
                width={60}
                alt="24/7 Support"
                className="w-[60px] h-[60px]"
              />
              <h4 className="font-bold">24 / 7 Support</h4>
              <p className="text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
