import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DiscountBanner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="bg-[var(--color-primary)] lg:py-[40px] lg:pl-[60px]">
            <div>
              <div className="text-[60px] font-semibold lg:leading-[82px] uppercase">
                <span className="text-[var(--color-yellow)]">50%</span>
                <span>Off</span>
              </div>
              <div>
                <span>Shop Now</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div>
              <span>Popular and Trending Products</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountBanner;
