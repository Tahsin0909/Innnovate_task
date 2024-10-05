/* eslint-disable @next/next/no-img-element */

import Link from "next/link";




const ProductCard = ({ product }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
            <div className="relative h-56 w-full">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full rounded-t-lg object-fill"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-green-600">${product.price}</span>
                    <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.availabilityStatus}
                    </span>
                </div>

                <div className="flex items-center mt-2">
                    {[...Array(Math.round(product.rating))].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.372 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{product.rating} Rating</span>
                </div>

                <Link href={`/products/${product.id}`} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                    Buy Now
                </Link>

                <div className="mt-4 text-xs text-gray-400">
                    <p>Warranty: {product.warrantyInformation}</p>
                    <p>Shipping: {product.shippingInformation}</p>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
