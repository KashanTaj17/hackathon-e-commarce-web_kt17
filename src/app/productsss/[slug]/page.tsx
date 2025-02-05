// pages/products/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

// Sanity Query to fetch a single product by slug
async function getProduct(slug: string) {
  const query = groq`*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    price,
    description,
    "image": productImage.asset->url,
    tags
  }`;

  return client.fetch(query, { slug });
}

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="aspect-square">
          {product && product.image && (
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <p className="text-2xl font-semibold text-gray-800">${product?.price}</p>
          <p className="text-sm text-gray-600">{product?.description}</p>

          <div className="mt-4 flex gap-2">
            {product?.tags.map((tag:any, index:any) => (
              <span key={index} className="text-xs bg-gray-400 text-black px-2 py-1">
                {tag}
              </span>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
