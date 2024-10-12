import { Metadata } from "next";
import ProductCard from "./(productsCards)/ProductsCard";

export const metadata: Metadata = {
    title: {
        absolute:"Products Page"
    },
    description: "Products  page",
  };

const ProductsPage = async () => {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const posts = await data.json()
    return (
        <div className="body_padding">
            <div className="grid lg:grid-cols-3 lg:gap-8">
                {posts.products.map((post : object, idx: number) => (
                    <ProductCard product={post} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;