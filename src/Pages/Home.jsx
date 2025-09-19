import Catagories from "../Components/Catagories";
import DiscountBanner from "../Components/DiscountBanner";
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
    </>
  );
};

export default Home;
