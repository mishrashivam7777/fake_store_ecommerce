import Banner from "../components/Home/Banner";
import HeroSection from "../components/Home/HeroSection";
import FeaturedProduct from "../components/Home/FeaturedSection";
import ContactUs from "../components/Base/Contactus";
const MainView = () => {

  return (
    <div>
      <HeroSection />
      <FeaturedProduct />
      <Banner />
      <ContactUs />
    </div>
  )


};
export default MainView;
