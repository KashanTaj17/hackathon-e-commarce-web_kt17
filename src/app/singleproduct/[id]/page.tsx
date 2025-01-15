import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function SingleProduct() {
  return (
    <div className="container w-[100%] mx-auto px-4 space-y-8 ">
      {/* Breadcrumb */}
      <nav className="bg-[#F9F1E7] py-12 w-full mb-8 ">
        <div className="flex items-center space-x-8 ">
          <Link
            href="/"
            className="text-[#9F9F9F] hover:underline flex items-center text-xl"
          >
            Home <MdKeyboardArrowRight size={26} />
          </Link>
          <Link
            href="/"
            className="text-[#9F9F9F] hover:underline flex items-center text-xl"
          >
            Shop <MdKeyboardArrowRight size={26} />
          </Link>
          <p className="text-center"> | </p>
          <Link href="/" className="text-xl font-semibold">
            {" "}
            Asgaard Sofa
          </Link>
        </div>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 mx-auto">
          <Image
            src="/Image_26.png"
            alt="Asgaard Sofa"
            height={300}
            width={553}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2 pb-4">Asgaard Sofa</h1>
          <p className="text-xl text-[#9F9F9F] font-semibold mb-2 pb-4">
            Rs. 250,000.00
          </p>
          <div className="flex items-center gap-1 text-yellow-400 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-gray-500 text-sm ml-2">
              {" "}
              | (5 Customer Reviews)
            </span>
          </div>
          <p className="text-gray-700 mb-4 pb-3">
            Setting the bar as one of the loudest speakers and its class the{" "}
            <br />
            Killburn is a compact stout-hearted hero with a well-balanced
            <br />
            audio with boates a clear midrange and extended highs for a <br />
            sound.
          </p>
          <div className="flex gap-4 mb-4">
            <div className="space-y-2 pb-4">
              <span className="font-semibold">Size:</span>
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className="text-[#9F9F9F] hover:bg-yellow-600 flex items-center text-xl"
                >
                  <Image
                    src="/Image_27.png"
                    height={30}
                    width={30}
                    alt="pic90"
                  />{" "}
                </Link>
                <Link
                  href="/"
                  className="text-[#9F9F9F] hover:bg-yellow-600 flex items-center text-xl"
                >
                  <Image
                    src="/Image_28.png"
                    height={30}
                    width={30}
                    alt="pic90"
                  />{" "}
                </Link>
                <Link
                  href="/"
                  className="text-[#9F9F9F] hover:bg-yellow-600 flex items-center text-xl"
                >
                  <Image
                    src="/Image-29.png"
                    height={30}
                    width={30}
                    alt="pic90"
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="space-y-2 pb-4">
              <span className="font-semibold">Color:</span>
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className="text-[#9F9F9F] flex items-center text-xl"
                >
                  <Image
                    src="/Image_30.png"
                    height={30}
                    width={30}
                    alt="pic90"
                  />{" "}
                </Link>
                <Link
                  href="/"
                  className="text-[#9F9F9F] flex items-center text-xl"
                >
                  <Image
                    src="/Image_31.png"
                    height={30}
                    width={30}
                    alt="pic90"
                  />{" "}
                </Link>
                <Link
                  href="/"
                  className="text-[#9F9F9F] flex items-center text-xl"
                >
                  <Image
                    src="/Image_32.png"
                    height={30}
                    width={30}
                    alt="pic90"
                  />{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center pb-10">
            <button className="px-6 py-2 bg-gray-100 text-black border border-black rounded hover:bg-gray-300">
              - 1 +
            </button>
            <Link
              href="/cart"
              className="text-[#9F9F9F] flex items-center text-xl"
            >
              <button className="px-6 py-2 bg-gray-100 text-black border border-black rounded hover:bg-gray-300">
                Add To Cart
              </button>
            </Link>
            <Link
              href="/compairision"
              className="text-[#9F9F9F] flex items-center text-xl"
            >
              <button className="px-6 py-2 bg-gray-100 text-black border border-black rounded hover:bg-gray-300">
                + Compare
              </button>
            </Link>
          </div>

          <div className="pt-10 space-y-2 pb-5">
            <p className="text-[#9F9F9F]">SKU: SS001</p>
            <p className="text-[#9F9F9F]">Category: Sofas</p>
            <p className="text-[#9F9F9F]">Tags: Sofa, Chair, Home, Shop</p>
            <p className="flex space-x-4 text-[#9F9F9F]">
              Share:
              <FaFacebook className="text-black" />
              <FaLinkedin className="text-black" />
              <FaTwitter className="text-black" />
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex border-b justify-center">
          <button className="py-2 px-4 text-black border-b-2 border-blue-600">
            Description
          </button>
          <button className="py-2 px-4 text-[#9F9F9F] hover:text-blue-600">
            Additional Information
          </button>
          <button className="py-2 px-4 text-[#9F9F9F] hover:text-blue-600">
            Reviews [5]
          </button>
        </div>
        <div className="p-4 mx-36 pt-4">
          <p className="text-[#9F9F9F]">
            Embodying the raw wayward spirit of rock n roll the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of
            Marshall unplugs the chords and takes the show on the road.
            <br /> <br />
            Weighing in under 7 pounds the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class the Kilburn is a compact stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-20">
          <Image
            src="/Image_33.png"
            height={348}
            width={605}
            alt="picsThirteen"
            className="mx-auto"
          />
          <Image
            src="/Image_38.png"
            height={348}
            width={605}
            alt="sofaaas"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-4 md:mx-24">
          <Link
            href="/singleproduct/id"
            className="text-[#9F9F9F] flex items-center text-xl"
          >
            <div className="border rounded-lg p-4 shadow-md space-y-2">
              <Image
                src="/Image_06.png"
                width={385}
                height={351}
                alt="Chair"
                className="w-full h-[301px] mb-2 rounded-lg"
              />
              <p className="text-black">Sylttherine</p>
              <p className="text-[#898989]">Stylish Cafe Chair</p>
              <p className="text-black">Rp 2,500,000</p>
            </div>
          </Link>
          <Link
            href="/singleproduct/id"
            className="text-[#9F9F9F] flex items-center text-xl"
          >
            <div className="border rounded-lg p-4 shadow-md space-y-2">
              <Image
                src="/image_21.png"
                width={385}
                height={351}
                alt="Chair"
                className="w-full h-[301px] mb-2 rounded-lg"
              />
              <p className="text-black">Leviosa</p>
              <p className="text-[#898989]">Stylish Cafe Chair</p>
              <p className="text-black">Rp 2,500,000</p>
            </div>
          </Link>
          <Link
            href="/singleproduct/id"
            className="text-[#9F9F9F] flex items-center text-xl"
          >
            <div className="border rounded-lg p-4 shadow-md space-y-2">
              <Image
                src="/Image_08.png"
                width={385}
                height={351}
                alt="Sofa"
                className="w-full h-[301px] mb-2 rounded-lg"
              />
              <p className="text-black">Lolito</p>
              <p className="text-[#898989]">Luxury Big Sofa</p>
              <p className="text-black">Rp 7,000,000</p>
            </div>
          </Link>
          <Link
            href="/singleproduct/id"
            className="text-[#9F9F9F] flex items-center text-xl"
          >
            <div className="border rounded-lg p-4 shadow-md space-y-2">
              <Image
                src="/Image_09.png"
                width={385}
                height={351}
                alt="Sofa"
                className="w-full h-[277px] mb-2 rounded-lg"
              />
              <p className="text-black">Respira</p>
              <p className="text-[#898989]">Outdoor Bar Table And Stool</p>
              <p className="text-black">Rp 500,000</p>
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center w-full space-y-12 pt-14">
          <button className="w-full md:w-1/4 bg-[#FFFFFF] text-[#B88E2F] text-center justify-between items-center text-bold border border-[#B88E2F] font-bold py-2 hover:bg-[#B88E2F] hover:text-white">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
