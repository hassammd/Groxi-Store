import AboutSection from "../Components/AboutSection";
import Catagories from "../Components/Catagories";
import DiscountBanner from "../Components/DiscountBanner";
import FeatureSection from "../Components/FeaturesSection";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
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
    </>
  );
};

export default Home;
