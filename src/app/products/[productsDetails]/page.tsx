/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProductsDetailsPage = async ({ params }) => {
    const Id = params.productsDetails
    const data = await fetch(`https://dummyjson.com/products/${Id}`)
    const product = await data.json()


    return (
        <div className="container mx-auto p-6">
            {/* Product Image and Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-md">
                {/* Product Image */}
                <div className="relative h-96 w-full">
                    <img
                        src={product?.thumbnail}
                        alt={product?.title}
                        className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800">{product?.title}</h1>
                    <p className="text-gray-600 leading-relaxed">{product?.description}</p>

                    {/* Price and Availability */}
                    <div className="flex items-center space-x-4 mt-4">
                        <span className="text-3xl font-bold text-green-600">${product?.price}</span>
                        <span className={`text-sm ${product?.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {product?.availabilityStatus}
                        </span>
                    </div>

                    {/* Buy Button */}
                    <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition duration-200">
                        Buy Now
                    </button>

                    {/* Additional Info */}
                    <div className="text-sm text-gray-500 mt-6 space-y-1">
                        <p><strong>Brand:</strong> {product?.brand}</p>
                        <p><strong>SKU:</strong> {product?.sku}</p>
                        <p><strong>Warranty:</strong> {product?.warrantyInformation}</p>
                        <p><strong>Shipping:</strong> {product?.shippingInformation}</p>
                    </div>
                </div>
            </div>

            {/* Tags Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {product?.tags?.length > 0 ? (
                        product.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                                #{tag}
                            </span>
                        ))
                    ) : (
                        <span className="text-sm text-gray-500">No tags available</span>
                    )}
                </div>
            </div>

            {/* Product Dimensions */}
            {product?.dimensions && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Dimensions</h2>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <p><strong>Width:</strong> {product.dimensions.width} cm</p>
                        <p><strong>Height:</strong> {product.dimensions.height} cm</p>
                        <p><strong>Depth:</strong> {product.dimensions.depth} cm</p>
                        <p><strong>Weight:</strong> {product.weight} kg</p>
                    </div>
                </div>
            )}

            {/* Customer Reviews */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Customer Reviews</h2>
                {product?.reviews?.length > 0 ? (
                    <div className="space-y-6">
                        {product.reviews.map((review, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-800 font-semibold">{review.reviewerName}</p>
                                    <span className="text-gray-500 text-sm">{review.date.split('T')[0]}</span>
                                </div>

                                <div className="flex items-center mt-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.372 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No reviews available</p>
                )}
            </div>

            {/* Return Policy Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Return Policy</h2>
                <p className="text-gray-600 text-sm">{product?.returnPolicy}</p>
            </div>

            {/* Product Meta Section */}
            {product?.meta && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Meta</h2>
                    <div className="text-sm text-gray-600">
                        <p><strong>Barcode:</strong> {product.meta.barcode}</p>
                        <img
                            src={product.meta.qrCode}
                            alt="QR Code"
                            className="w-24 h-24 mt-2"
                        />
                        <p><strong>Created At:</strong> {new Date(product.meta.createdAt).toDateString()}</p>
                        <p><strong>Updated At:</strong> {new Date(product.meta.updatedAt).toDateString()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsDetailsPage;