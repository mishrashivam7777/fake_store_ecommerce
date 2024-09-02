import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { updateProductList } from "../redux/product";
import ProductCard from "../components/Base/ProductCard";

const ShopView = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.productsList);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("none");


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const productsData = response.data;
        dispatch(updateProductList({ data: productsData }));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getProducts();
  }, [dispatch]);

  const filteredProducts = products.filter((product: any) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    const matchesRating = product.rating.rate >= minRating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const sortedProducts = filteredProducts.slice().sort((a: any, b: any) => {
    if (sortOrder === "price-asc") {
      return a.price - b.price;
    } else if (sortOrder === "price-desc") {
      return b.price - a.price;
    } else {
      return 0; 
    }
  });

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Discover Our Exclusive Collection
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore the best products tailored just for you.
      </p>

      {/* Search Bar */}
      <motion.div
        className="relative max-w-[400px] mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 pl-10 rounded bg-white text-black border border-gray-400 focus:border-none w-full"
        />
        <span className="absolute top-[10px] left-0 flex items-center pl-3 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 0v0zM21 21l-4.35-4.35"
            />
          </svg>
        </span>
      </motion.div>

      {/* Filter Controls */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col">
          <label className="block text-gray-700">Categories</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded mt-[10px] border h-[42px] border-gray-400 bg-white text-black"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>

        <div className="">
          <label className="block text-gray-700">Price Range</label>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="p-2 rounded border border-gray-400 bg-white text-black"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="p-2 rounded border border-gray-400 bg-white text-black mt-[10px] ml-[15px]"
          />
        </div>

        <div>
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            placeholder="Min Rating"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="p-2 rounded border border-gray-400 bg-white text-black mt-[10px]"
            min="0"
            max="5"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-700">Sort By</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded mt-[10px] border h-[42px] border-gray-400 bg-white text-black"
          >
            <option value="none">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {sortedProducts.map((product: any) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ShopView;
