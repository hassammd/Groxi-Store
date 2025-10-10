import AboutSection from "../Components/AboutSection";
import Catagories from "../Components/Catagories";
import DiscountBanner from "../Components/DiscountBanner";
import FeaturedProducts from "../Components/FeaturedProducts";
import FeatureSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Testimonials from "../Components/Testimonials";
import TrendingProducts from "../Components/TrendingProducts";

import quality from "../assets/quality.png";
import basket from "../assets/basket.png";
import Delivery from "../assets/delivery.png";
import onlineorder from "../assets/online-order.png";
import services from "../assets/24service.png";

const Home = () => {
  const whyUs = [
    {
      title: "Quality Products",
      content:
        "Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius modi incidunt",
      img: quality,
    },
    {
      title: "Fast Delivery",
      content:
        "Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius modi incidunt",
      img: Delivery,
    },
    {
      img: basket,
    },
    {
      title: "Online Order",
      content:
        "Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius modi incidunt",
      img: onlineorder,
    },
    {
      title: "24/7 Service",
      content:
        "Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius modi incidunt",
      img: services,
    },
  ];
  return (
    <>
      <Header />
      <Catagories />

      <TrendingProducts />
      <DiscountBanner />
      <AboutSection />
      <FeatureSection whyUs={whyUs} />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
};

export default Home;
