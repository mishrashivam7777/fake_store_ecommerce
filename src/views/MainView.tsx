import Banner from "../components/Home/Banner";
import HeroSection from "../components/Home/HeroSection";
import FeaturedProduct from "../components/Home/FeaturedSection";
import CustomerReviews from "../components/Home/CustomerReviews";
import ContactUs from "../components/Home/Contactus";
const MainView = () => {

  return (
    <div>
      <HeroSection />
      <FeaturedProduct />
      <Banner />
      <CustomerReviews />
      <ContactUs />
    </div>
  )


};
export default MainView;
