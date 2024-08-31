import { useEffect, useRef } from "react";
import axios from "axios";
import ProductCarousel from "../Products/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateCategoryProducts } from "../../redux/product";
import { ICategory } from "../../interfaces/product.interface";

const FeaturedProducts = () => {
  const jeweleryCarousel = useRef(null);
  const menWearCarousel = useRef(null);
  const womenWearCarousel = useRef(null);
  const electronicsCarousel = useRef(null);
  const elements: any[] = [jeweleryCarousel, menWearCarousel, womenWearCarousel, electronicsCarousel];
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  let observer = new IntersectionObserver(callback, options);
  const [jewelry, setJewelery] = useSelector((state: RootState) => state.products.categories.jewelery);
  const [electronics, setElectronics] = useSelector((state: RootState) => state.products.categories.electronics);
  const [menWear, setMenWear] = useSelector((state: RootState) => state.products.categories.menWear);
  const [womenWear, setWomenWear] = useSelector((state: RootState) => state.products.categories.womenWear);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('load', () => {
      elements.forEach((htmlElement) => {
        observer.observe(htmlElement.current);
      });
    });
  }, []);

  function callback(entries: any) {
    entries.forEach(async (entry: any) => {
      if (entry.isIntersecting) {
        await getCategoryProduct(entry.target.id)
      }
    });
  }

  async function getCategoryProduct(categoryName: keyof ICategory) {
    const product = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    dispatch(updateCategoryProducts({category: categoryName, data: product.data}));
  }

  return (
    <div className="bg-[#f8f8f8] p-8 text-center shadow-lg relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          Explore Our Featured Products
        </h2>
        <div id="jewelery" ref={jeweleryCarousel} className="h-10">
          {jewelry && <ProductCarousel />}
        </div>
        <div id="menWear" ref={menWearCarousel} className="h-10">
          {menWear && <ProductCarousel />}
        </div>
        <div id="womenWear" ref={womenWearCarousel} className="h-10">
          {womenWear && <ProductCarousel />}
        </div>
        <div id="electronics" ref={electronicsCarousel} className="h-10">
          {electronics && <ProductCarousel />}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
