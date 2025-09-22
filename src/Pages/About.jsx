import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BannerBox from "../Components/BannerBox";
import aboutBannerImage from "../assets/about-us-banner-img.png";
import Aboutimage from "../assets/Aboutimage.png";

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
      <section className="relative bg-[var(--color-productBg)] h-[344px] lg:h-[540px] flex items-center justify-center">
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

      {/* about us section */}

      <section className="py-[70px] sm:py-[90px] md:py-[100px] lg:py-[100px] relative">
        <div className="container">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row-reverse gap-6">
            <div className="lg:w-6/12 w-full px-[50px]">
              <img
                src={Aboutimage}
                alt=""
                className="lg:absolute lg:bottom-0 lg:left-[18px] md:w-[500px] mx-auto xl:w-[600px] 2xl:w-auto lg:top-[110px] xl:top-[160px]  2xl:left-[118px]"
              />
            </div>
            <div className="lg:w-6/12 w-full lg:pl-[42px] lg:pr-[30px] xl:pt-[90px] px-[20px] 2xl:px-0 ">
              <h2 className="mb-[17px] text-center lg:text-left leading-[32px] text-[26px] xl:text-[45px]  sm:text-[36px] sm:leading-[46px]   mx-auto">
                We Give The Lowest Price on Grocery Items
              </h2>
              <p className="xl:text-[20px] lg:text-[18px]  sm:text-[18px] lg:leading-[30px] leading-[26px] font-normal  mb-[13px]  font-jost text-center lg:text-left">
                Neque porro quisquam est aui dolorem iesum ruia dolor sit amet,
                consectetur, adipisci velit, sed quia non numua eius modi
                tempora incidunt ut labore et dolore magnam volutatem
                exercitationem ullam.
              </p>
              <p className="xl:text-[20px] lg:text-[18px]  sm:text-[18px] lg:leading-[30px] leading-[26px] font-normal  mb-[13px]  font-jost text-center lg:text-left">
                Quis autem vel eum iure reprehenderit aui in ea voluptae velit
                esse quam nihil molestiae consequatur, vel illum rui dolorem eum
                fugiat quo voluptas excepteur deserunt veniam adipisicing do
                adipisicing adipisicing proident esse aud irure commodo mollit
                voluptate irure alorem consequat ullamco do laboris.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
