import AboutSection from "../Components/AboutSection";
import Catagories from "../Components/Catagories";
import DiscountBanner from "../Components/DiscountBanner";
import FeaturedProducts from "../Components/FeaturedProducts";
import FeatureSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Testimonials from "../Components/Testimonials";
import TrendingProducts from "../Components/TrendingProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Catagories />
      <TrendingProducts />
      <DiscountBanner />
      <AboutSection />
      <FeatureSection />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
