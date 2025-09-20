import quality from "../assets/quality.png";
import basket from "../assets/basket.png";
import Delivery from "../assets/delivery.png";
import onlineorder from "../assets/online-order.png";
import services from "../assets/24service.png";

const FeatureSection = () => {
  return (
    <>
      <section className="py-[120px]">
        <div className="container">
          <div className="flex flex-col md:items-center justify-center lg:justify-between   md:flex-row flex-wrap gap-8">
            <div className="lg:w-[29.7%] md:w-[25.6%]  w-full flex flex-wrap flex-col sm:flex-row md:flex-col gap-10">
              <div className="flex flex-col sm:w-[45%] md:w-full items-center lg:gap-[15px]">
                <figure>
                  <img src={quality} alt="" />
                </figure>
                <h4 className="text-center">Quality Products</h4>
                <p className="lg:text-[20px] lg:leading-[28px] text-center">
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </div>
              <div className="flex flex-col sm:w-[45%] md:w-full items-center lg:gap-[15px]">
                <figure>
                  <img src={Delivery} alt="" />
                </figure>
                <h4 className="text-center">Fast Delivery</h4>
                <p className="lg:text-[20px] lg:leading-[28px] text-center">
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </div>
            </div>
            <div className="hidden lg:w-[34%]  md:w-[40%] md:flex flex-col items-center justify-center gap-10">
              <figure>
                <img src={basket} alt="" />
              </figure>
              <button
                className="uppercase bg-[var(--color-primary)] text-[var(--color-secondary)]
              md:text-[14px]
              md:leading-[14px]
              md:py-[12px]
              md:px-[30px]

              lg:text-[16px]
              lg:leading-[24px]
              lg:py-[14px]
              lg:px-[34px] cursor-pointer
              
              hover:bg-[var(--color-green)] duration-700"
              >
                Shop Now
              </button>
            </div>
            <div className="lg:w-[29.7%] md:w-[25.6%] w-full flex flex-wrap flex-col sm:flex-row md:flex-col gap-10">
              <div className="flex flex-col sm:w-[45%] md:w-full items-center lg:gap-[15px]">
                <figure>
                  <img src={onlineorder} alt="" />
                </figure>
                <h4 className="text-center">Online Order</h4>
                <p className="lg:text-[20px] lg:leading-[28px] text-center">
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </div>
              <div className="flex flex-col sm:w-[45%]  md:w-full items-center lg:gap-[15px]">
                <figure>
                  <img src={services} alt="" />
                </figure>
                <h4 className="text-center">24/7 Service</h4>
                <p className="lg:text-[20px] lg:leading-[28px] text-center">
                  Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci
                  eius modi incidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
