import Link from 'next/link';

export default function Home() {
  const products = [
    {
      id: 1,
      image: '/Image_06.png', 
      title: 'Syltherine',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      discountPrice: 'Rp 3.500.000',
      badge: '-30%',
    },
    {
      id: 2,
      image: '/Image_07.png',
      title: 'Leviosa',
      subtitle: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      badge: '',
    },
    {
      id: 3,
      image: '/Image_08.png',
      title: 'Lolito',
      subtitle: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      discountPrice: 'Rp 14.000.000',
      badge: '-50%',
    },
    {
      id: 4,
      image: '/Image_09.png',
      title: 'Respira',
      subtitle: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      badge: 'New',
    },
    {
      id: 5,
      image: '/Image_10.png',
      title: 'Grifo',
      subtitle: 'Night lamp',
      price: 'Rp 1.500.000',
      badge: '',
    },
    {
      id: 6,
      image: '/Image_11.png',
      title: 'Muggo',
      subtitle: 'Small mug',
      price: 'Rp 150.000',
      badge: 'New',
    },
    {
      id: 7,
      image: '/Image_12.png',
      title: 'Pingky',
      subtitle: 'Cute bed set',
      price: 'Rp 7.000.000',
      discountPrice: 'Rp 14.000.000',
      badge: '-50%',
    },
    {
      id: 8,
      image: '/Image_13.png',
      title: 'Potty',
      subtitle: 'Minimalist flower pot',
      price: 'Rp 500.000',
      badge: 'New',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
             <Link href="/cart" className="text-[#9F9F9F] flex items-center text-xl">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[285px] h-[301px] object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-sm text-gray-500">{product.subtitle}</p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-gray-800">{product.price}</span>
                    {product.discountPrice && (
                      <span className="text-sm line-through text-gray-400 ml-2">
                        {product.discountPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-center mt-8">
            <button className="w-full sm:w-[245px] h-[48px] bg-[#FFFFFF] text-[#B88E2F] font-bold border border-[#B88E2F] hover:border-[3px] justify-center mb-12 mx-auto">
            Show More
        </button>
        </div>

      </div>
    </div>
  );
}
