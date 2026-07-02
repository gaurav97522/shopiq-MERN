import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getAllProducts } from "../../api/getAllProducts";
import { getProductCategories } from "../../api/getProductCategory";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8;
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = filteredProducts.slice(
        firstProductIndex,
        lastProductIndex
    );
    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getAllProducts();
                setProducts(productData.products);
                setFilteredProducts(productData.products);

                const categoryData = await getProductCategories();
                setCategories(categoryData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const filterProducts = (category) => {
        setSelectedCategory(category);

        if (category === "All") {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter(
            (product) => product.category === category
        );

        setFilteredProducts(filtered);
    };

    return (
        <main className="max-w-7xl mx-auto py-10 px-4">

            {/* Categories */}

            <div className="mb-10">

                <h2 className="text-3xl font-bold text-white mb-6">
                    Shop by Category
                </h2>

                <div className="flex flex-wrap gap-4">

                    {/* All Button */}

                    <button
                        onClick={() => filterProducts("All")}
                        className={`px-5 py-2 rounded-full transition font-medium ${selectedCategory === "All"
                            ? "bg-violet-600 text-white"
                            : "bg-zinc-800 text-gray-300 hover:bg-violet-600 hover:text-white"
                            }`}
                    >
                        All
                    </button>

                    {/* Dynamic Categories */}

                    {categories?.map((category) => (
                        <button
                            key={category.slug}
                            onClick={() => filterProducts(category.slug)}
                            className={`px-5 py-2 rounded-full transition font-medium ${selectedCategory === category.slug
                                ? "bg-violet-600 text-white"
                                : "bg-zinc-800 text-gray-300 hover:bg-violet-600 hover:text-white"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products */}

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                ) : (
                    <h2 className="text-white text-2xl col-span-full text-center">
                        No Products Found
                    </h2>
                )}
                </motion.div>
            </AnimatePresence>

            {/* </div> */}
            <div className="flex justify-center items-center gap-3 mt-10">

                {/* Previous Button */}
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-zinc-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-violet-600 transition"
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg transition ${currentPage === index + 1
                            ? "bg-violet-600 text-white"
                            : "bg-zinc-800 text-gray-300 hover:bg-violet-600 hover:text-white"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-zinc-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-violet-600 transition"
                >
                    Next
                </button>

            </div>

        </main>
    );
};

export default Home;