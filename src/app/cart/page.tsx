import Image from "next/image";
import Link from "next/link";

function Cart() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
            alt="logoo"
            className="w-[79px] h-[79px]"
          />
          <h1 className="text-4xl font-bold text-black">Cart</h1>
          <p className="text-black mt-2">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
            <span>Cart</span>
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <div className="container mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Table */}
          <div className="w-full lg:w-3/4 overflow-x-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap justify-between items-center border-b py-4 px-2 lg:hidden">
                <span className="text-lg font-semibold">Product</span>
                <span className="text-lg font-semibold">Price</span>
                <span className="text-lg font-semibold">Quantity</span>
                <span className="text-lg font-semibold">Subtotal</span>
                <span className="text-lg font-semibold">Remove</span>
              </div>
              <div className="border-t">
                <div className="p-4 flex flex-col lg:flex-row items-center gap-4 border-b">
                  <div className="w-full lg:w-[111px] h-[90px] flex-shrink-0">
                    <Image
                      src="/Image_36.png"
                      width={111}
                      height={90}
                      alt="Asgaard sofa"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <div className="w-full lg:w-1/4 text-gray-700">Rs. 250,000.00</div>
                  <div className="w-full lg:w-1/4">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-full lg:w-16 border border-gray-300 rounded text-center"
                    />
                  </div>
                  <div className="w-full lg:w-1/4 text-gray-700">Rs. 250,000.00</div>
                  <div className="w-full lg:w-1/4 flex justify-center">
                    <button>
                      <Image
                        src="/Image_37.png"
                        width={21}
                        height={21.88}
                        alt="Remove"
                        className="w-[21px] h-[21.88px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/4 bg-[#F9F1E7] p-6 rounded-lg shadow mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
              Cart Totals
            </h2>
            <div className="flex justify-between mb-4">
              <span className="text-black font-semibold">Subtotal</span>
              <span className="text-gray-700">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-black font-semibold">Total</span>
              <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
            </div>
            <Link
              href="/checkout"
              className="w-full py-2 bg-[#F9F1E7] text-black border border-black font-semibold rounded-lg hover:bg-amber-700 text-center block"
            >
              Check Out
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#FAF3EA] w-full py-16 mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { src: "/Trophy_22.png", title: "High Quality", desc: "crafted from top materials" },
              { src: "/Warranty_23.png", title: "Warranty Protection", desc: "Over 2 years" },
              { src: "/Shipping_24.png", title: "Free Shipping", desc: "Order over 150 $" },
              { src: "/Suppor_25.png", title: "24 / 7 Support", desc: "Dedicated support" },
            ].map((feature, idx) => (
              <div key={idx}>
                <Image src={feature.src} width={60} height={60} alt={feature.title} className="mx-auto" />
                <h4 className="font-bold mt-4">{feature.title}</h4>
                <p className="text-[#898989]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
