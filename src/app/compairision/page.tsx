import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ComparisonTable() {
  const information = [
    {
      general: {
        package: "1 sectional sofa",
        model_number: "TFCBUGRBL65RHS",
        secondary_material: "Solid Wood",
        configuration: "L-shaped",
        upholstery_material: "Fabric + Cotton",
        upholstery_color: "Bright Grey & Lion",
      },
      product: {
        filling_material: "Foam",
        finish_type: "Bright Grey & Lion",
        headrest: "No",
        max_load_capacity: 280,
        origin: "India",
      },
      dimension: {
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seat_height: "41.52 cm",
        leg_height: "5.46 cm",
      },
      warranty: {
        summary: "1 Year Manufacturing Warranty",
        service_type: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        covered: "Warranty Against Manufacturing Defect",
        not_covered: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        domestic: "1 Year",
      },
    },
    {
      general: {
        package: "1 Three Seater, 2 Single Seater",
        model_number: "DTUBUGRBL568",
        secondary_material: "Solid Wood",
        configuration: "L-shaped",
        upholstery_material: "Fabric + Cotton",
        upholstery_color: "Bright Grey & Lion",
      },
      product: {
        filling_material: "Matte",
        finish_type: "Bright Grey & Lion",
        headrest: "Yes",
        max_load_capacity: 300,
        origin: "India",
      },
      dimension: {
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "65 KG",
        seat_height: "41.52 cm",
        leg_height: "5.46 cm",
      },
      warranty: {
        summary: "1.2 Year Manufacturing Warranty",
        service_type: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
        covered: "Warranty of the product is limited to manufacturing defects only.",
        not_covered: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        domestic: "3 Months",
      },
    },
  ];

  return (
    <>
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
          <h1 className="text-4xl font-bold text-black">Product Comparison</h1>
          <p className="text-black mt-2">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
            <span>Comparison</span>
          </p>
        </div>
      </section>


{/* Navigation Section */}
<div className="container mx-auto px-4 py-8">
  <div className="flex flex-wrap justify-between items-center w-full">
    {/* Go to Product Section */}
    <div className="w-full md:w-1/4 mb-4 md:mb-0">
      <h2 className="text-lg font-semibold mb-5">Go to Product <br /> page for more <br /> Products</h2>
      <Link href="/products" className="text-[#727272] underline">
        View More
      </Link>
    </div>

    {/* Product Image 1 */}
    <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center">
      <Image src="/Image_40.png" width={300} height={200} alt="Asgaard Sofa" />
      <h3 className="mt-4 font-semibold">Asgaard Sofa</h3>
      <p>Rs. 250,000.00</p>
      <p className="text-yellow-500">4.7 ⭐⭐⭐⭐⭐</p>
    </div>

    {/* Product Image 2 */}
    <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center">
      <Image src="/Image_40.png" width={300} height={200} alt="Outdoor Sofa Set" />
      <h3 className="mt-4 font-semibold">Outdoor Sofa Set</h3>
      <p>Rs. 224,000.00</p>
      <p className="text-yellow-500">4.2 ⭐⭐⭐⭐</p>
    </div>

    {/* Choose a Product Button */}
    <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center">
  <h3 className="text-lg font-bold mb-2">Add a Product</h3>
  <button className="bg-[#B88E2F] text-white px-4 py-2 rounded hover:bg-yellow-700">
    Choose a Product
  </button>
</div>

  </div>
</div>

      
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        

        {/* General Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-semibold">Feature</div>
            {information.map((_, index) => (
              <div key={index} className="font-semibold">
                Product {index + 1}
              </div>
            ))}
            {Object.keys(information[0].general).map((key) => (
              <React.Fragment key={key}>
                <div className="font-medium capitalize">{key.replace(/_/g, " ")}</div>
                {information.map((item, index) => (
                  <div key={index}>{item.general[key as keyof typeof item.general]}</div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        

        {/* Product Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-semibold">Feature</div>
            {information.map((_, index) => (
              <div key={index} className="font-semibold">
                Product {index + 1}
              </div>
            ))}
            {Object.keys(information[0].product).map((key) => (
              <React.Fragment key={key}>
                <div className="font-medium capitalize">{key.replace(/_/g, " ")}</div>
                {information.map((item, index) => (
                  <div key={index}>{item.product[key as keyof typeof item.product]}</div>
                ))}
              </React.Fragment>
            ))}
            
          </div>
        </div>

        {/* Dimension Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dimension</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-semibold ">Feature</div>
            {information.map((_, index) => (
              <div key={index} className="font-semibold">
                Product {index + 1}
              </div>
            ))}
            {Object.keys(information[0].dimension).map((key) => (
              <React.Fragment key={key}>
                <div className="font-medium capitalize">{key.replace(/_/g, " ")}</div>
                {information.map((item, index) => (
                  <div key={index}>{item.dimension[key as keyof typeof item.dimension]}</div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Warranty Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Warranty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-semibold">Feature</div>
            {information.map((_, index) => (
              <div key={index} className="font-semibold">
                Product {index + 1}
              </div>
              
              
            ))}
            {Object.keys(information[0].warranty).map((key) => (
              <React.Fragment key={key}>
                <div className="font-medium capitalize">{key.replace(/_/g, " ")}</div>
                {information.map((item, index) => (
                  <div key={index}>{item.warranty[key as keyof typeof item.warranty]}
                  </div>
                  
                ))}
              </React.Fragment>
            ))}

            <button className="self-start bg-[#B88E2F] text-white hover:bg-yellow-700 mt-6 px-6 py-2 w-[7rem] rounded-md">
              Submit
            </button>

            <button className="self-start bg-[#B88E2F] text-white hover:bg-yellow-700 mt-6 px-6 py-2 w-[7rem] rounded-md">
              Submit
            </button>

            <button className="self-start bg-[#B88E2F] text-white hover:bg-yellow-700 mt-6 px-6 py-2 w-[7rem] rounded-md">
              Submit
            </button>
            
          </div>
             <div className="flex flex-wrap justify-between items-center mt-20 p-20 w-full bg-[#F9F1E7]">
            <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
              <Image src="/Trophy_22.png" width={60} height={60} alt="High Quality" />
              <div className="ml-4">
                <h4 className="font-bold">High Quality</h4>
                <p className="text-[#898989]">Crafted from top materials</p>
              </div>
            </div>
            <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
              <Image src="/Warranty_23.png" width={60} height={60} alt="Warranty Protection" />
              <div className="ml-4">
                <h4 className="font-bold">Warranty Protection</h4>
                <p className="text-[#898989]">Over 2 years</p>
              </div>
            </div>
            <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
              <Image src="/Shipping_24.png" width={60} height={60} alt="Free Shipping" />
              <div className="ml-4">
                <h4 className="font-bold">Free Shipping</h4>
                <p className="text-[#898989]">Order over 150 $</p>
              </div>
            </div>
            <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
              <Image src="/Suppor_25.png" width={60} height={60} alt="24/7 Support" />
              <div className="ml-4">
                <h4 className="font-bold">24 / 7 Support</h4>
                <p className="text-[#898989]">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
