import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BannerBox from "../Components/BannerBox";
import aboutBannerImage from "../assets/about-us-banner-img.png";

const About = () => {
  const breadcrumbs = [
    {
      name: "Home",
      path: "/",
    },
    {
      icon: faArrowRight,
    },
    {
      name: "About",
    },
  ];
  return (
    <>
      <section className="relative bg-[var(--color-lightgray)] h-[344px] lg:h-[540px] flex items-center justify-center">
        <div className="container">
          <BannerBox items={breadcrumbs} />;
        </div>
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <img
            src={aboutBannerImage}
            alt=""
            className="lg:w-[420px]  xl:w-[585px] 2xl:w-auto"
          />
        </div>
      </section>
    </>
  );
};

export default About;
