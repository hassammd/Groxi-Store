import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fiftypercent from "../assets/fifty-percent.png";

const DiscountBanner = () => {
  return (
    <>
      <section className="py-[50px] sm:py-[70px] md:py-[90px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="border-l-5 border-[var(--color-yellow)] lg:min-h-[222px] md:min-h-[156px] relative flex  flex-col md:flex-row md:justify-start items-center lg:gap-9 gap-3 md:gap-8 sm:gap-4 sm:min-h-auto sm:items-center sm:justify-center bg-[var(--color-primary)]  lg:pl-[60px] md:pl-[50px] py-[20px] sm:py-[20px] sm:px-[15px] ">
            <div>
              <div className="flex gap-2 justify-center sm:gap-2 lg:text-[60px] md:text-[28px] sm:text-[20px]  font-semibold lg:leading-[82px] uppercase">
                <span className="text-[var(--color-yellow)] italic">50%</span>
                <span className=" text-[var(--color-secondary)]">Off</span>
              </div>
              <div className="group">
                <span className="cursor-pointer uppercase lg:text-[21px] sm:text-[14px]  font-normal text-[var(--color-secondary)] group-hover:text-[var(--color-green)] ">
                  Shop Now
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[var(--color-secondary)] font-extrabold sm:text-[14px]  "
                />
              </div>
            </div>
            <div className="lg:w-[40%] md:w-[45%] sm:w-[40%] w-[80%] md:text-left text-center ">
              <span className="lg:text-[46px]   sm:text-[26px] md:text-[32px] text-[26px] leading-[30px] lg:leading-[57px] sm:leading-[30px] md:leading-[42px] font-semibold text-[var(--color-secondary)]">
                Popular and Trending Products
              </span>
            </div>
            <div className="absolute right-0 bottom-0">
              <figure className="lg:w-auto md:w-[230px] md:block hidden">
                <img src={fiftypercent} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountBanner;
