import ProductCard from "./(productsCards)/ProductsCard";

const ProductsPage = async () => {

    const data = await fetch('https://dummyjson.com/products')
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