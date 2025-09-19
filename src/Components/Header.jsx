import NavBar from "./NavBar";
import bannerImg from "../assets/banner-img.png";

const Header = () => {
  return (
    <>
      <section className="bg-[var(--color-lightgray)] h-auto lg:h-[926px] relative">
        <NavBar />

        {/* Banner section */}
        <div>
          <div className="container">
            <div className="py-[55px] lg:flex lg:px-6 ">
              <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:pt-[200px]">
                <span
                  className="text-[var(--color-primary)] text-[20px] leading-[22px] mb-[14px] font-medium
                text-center block lg:text-left"
                >
                  Welcome To Our Grocery Store
                </span>
                <h1 className="text-[32px] leading-[38px] text-center mb-[15px] md:text-[45px] md:w-[60%] mx-auto md:leading-[54px] lg:text-[56px] lg:leading-[64px] lg:text-left lg:w-full">
                  Shop Online For Fresh Grocries
                </h1>
                <p className="leading-[24px] mb-[20px]  text-center md:w-[60%]  md:text-[20px] md:leading-[30px] lg:text-left  lg:w-[90%]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <button className="py-[11px] px-[35px] bg-[var(--color-primary)] text-[var(--color-secondary)]">
                    Shop Now
                  </button>
                  <button className="py-[11px] px-[35px] bg-[var(--color-green)] text-[var(--color-secondary)]">
                    Read More
                  </button>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 ">
                <figure className="xl:absolute xl:bottom-0  ">
                  <img src={bannerImg} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
