import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductCarousel from "../Products/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryProducts } from "../../redux/product";
import { ICategory, RootState } from "../../interfaces/product.interface";

const FeaturedProducts = () => {
  const jeweleryCarousel = useRef(null);
  const menWearCarousel = useRef(null);
  const womenWearCarousel = useRef(null);
  const electronicsCarousel = useRef(null);
  const elements: any[] = [
    jeweleryCarousel,
    menWearCarousel,
    womenWearCarousel,
    electronicsCarousel,
  ];

  const [error, setError] = useState<string | null>(null);
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  let observer = new IntersectionObserver(callback, options);

  const { jewelery, electronics, menWear, womenWear } = useSelector(
    (state: RootState) => state.products.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
   
    window.addEventListener("load", () => {
      elements.forEach((htmlElement) => {
        if (htmlElement.current) {
          observer.observe(htmlElement.current);
        }
      });
    });

    return () => {
      
      elements.forEach((htmlElement) => {
        if (htmlElement.current) {
          observer.unobserve(htmlElement.current);
        }
      });
    };
  }, []);

  function callback(entries: any) {
    entries.forEach(async (entry: any) => {
      if (entry.isIntersecting) {
        try {
          await getCategoryProduct(entry.target.id);
        } catch (err) {
          setError("Failed to load products. Please try again later.");
        }
      }
    });
  }

  async function getCategoryProduct(categoryName: keyof ICategory) {
    let Endpoint;

    if (categoryName === "womenWear") {
      Endpoint = "women's clothing";
    } else if (categoryName === "menWear") {
      Endpoint = "men's clothing";
    } else {
      Endpoint = categoryName;
    }
    try {
      const product = await axios.get(
        `https://fakestoreapi.com/products/category/${Endpoint}`
      );
      dispatch(
        updateCategoryProducts({ category: categoryName, data: product.data })
      );
    } catch (error) {
      throw new Error("Failed to fetch category products");
    }
  }

  return (
    <div className="bg-[#f8f8f8] p-8 text-center shadow-lg relative">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          Explore Our Featured Products
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div id="jewelery" ref={jeweleryCarousel} className="h-full">
          {jewelery && <ProductCarousel title="Jewelry" products={jewelery} />}
        </div>
        <div id="menWear" ref={menWearCarousel} className="h-full">
          {menWear && <ProductCarousel title="Men's Wear" products={menWear} />}
        </div>
        <div id="womenWear" ref={womenWearCarousel} className="h-full">
          {womenWear && (
            <ProductCarousel title="Women's Wear" products={womenWear} />
          )}
        </div>
        <div id="electronics" ref={electronicsCarousel} className="h-full">
          {electronics && (
            <ProductCarousel title="Electronics" products={electronics} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
