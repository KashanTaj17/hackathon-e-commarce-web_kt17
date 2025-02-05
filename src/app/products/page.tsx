'use client';
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = createClient({
  projectId: "gsj8fux2",
  dataset: "production",
  apiVersion: "2025-01-23",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  tags: string[];
  slug: {
    _type: "slug";
    current: string;
  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags,
          slug
        }
      `;
      const data = await sanity.fetch(query);
      console.log("Fetched Data:", data);  // Debugging the fetched data
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-gray-800 text-3xl font-bold mt-12 mb-12">
        Products From API's Data
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/productsss/${product.slug?.current}`}>
           
                <Image
                  src={product.imageUrl || "/path/to/fallback/image.jpg"}
                  alt={product.title}
                  height={300}
                  width={300}
                  className="w-full h-48 object-cover rounded-md"
                />
             
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-gray-600 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-500">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-400 text-black px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-blue-700">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl || "/path/to/fallback/image.jpg"}
                  alt={item.title}
                  height={50}
                  width={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart Is Empty Please Add Products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
