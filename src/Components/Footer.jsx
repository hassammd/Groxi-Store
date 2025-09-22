import newslogo1 from "../assets/news-logo1.png";
import newslogo2 from "../assets/news-logo2.png";
import newslogo3 from "../assets/news-logo3.png";
import newslogo4 from "../assets/news-logo4.png";
import blogfooter from "../assets/blog-footer.png";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const brnads = [
    {
      logo: newslogo1,
    },
    {
      logo: newslogo2,
    },
    {
      logo: newslogo3,
    },
    {
      logo: newslogo4,
    },
  ];
  return (
    <>
      {/* logo section */}

      <section className="logo_section lg:py-[100px] py-[90px] md:pb-[100px] lg:pb-[200px] ">
        <div className="container">
          <ul className="flex gap-8 lg:gap-16px items-center justify-center md:justify-end">
            {brnads.map((items) => {
              return (
                <li>
                  <img
                    src={items.logo}
                    alt=""
                    className="w-[100px] lg:w-auto"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* footer section */}

      <section className="relative bg-[var(--color-green)] ">
        <div className="container">
          {/* news letter */}

          <div className="  relative top-[-50px] gap-0 p-[20px] md:p-[40px]  lg:top-[-120px] md:flex bg-[var(--color-primary)] justify-between ">
            <div className="hidden md:block md:w-4/12 lg:w-5/12">
              <figure className="md:w-[380px] lg:w-auto absolute top-[-300px] left-[-70px] xl:top-[-260px] md:top-[-140px] md:left-[-60px] lg:left-[-130px] lg:top-[-220px]">
                <img src={blogfooter} alt="" className="" />
              </figure>
            </div>
            <div className="lg:w-7/12 md:w-7/12">
              <h2 className="md:mb-[10px]  text-center md:text-left text-[24px] md:text-[32px]  text-[var(--color-secondary)]">
                Subscribe To Newsletter
              </h2>

              <div>
                <form
                  action=""
                  className="flex flex-col md:flex-row gap-3 md:gap-0 lg:flex-row  "
                >
                  <input
                    type="text"
                    className="placeholder:text-[14px] bg-[var(--color-secondary)] p-[10px] lg:h-[53px] lg:py-[20px] lg:px-[20px] lg-px-[23px] md:w-[70%]"
                    placeholder="Enter Your Email Address"
                  />
                  <button className="bg-[var(--color-green)] p-[10px]  lg:p-[5px]  text-[14px] text-secondary lg:py-[14px] lg:px-[19px] lg:text-[16px] md:text-[14px] uppercase md:w-[35%] lg:w-[30%]">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* footer bottom */}
          <div className="flex flex-wrap gap-4 mb-[90px] ">
            <div className="lg:w-3/12 w-6/12 ">
              <span className="text-secondary lg:text-[23px] text-[20px]  font-semibold block mb-[15px]">
                Store Location
              </span>
              <ul className="text-[var(--color-lightgreen)] lg:text-[18px] text-[14px] flex flex-col gap-[10px] ">
                <li>
                  <span>Address:</span>
                  <p className="text-[var(--color-lightgreen)]">
                    121 King Street Melbourne,3000, Australia
                  </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="text-[var(--color-lightgreen)]">
                    info@groxistore.com
                  </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="text-[var(--color-lightgreen)]">
                    +1 23 45 6789
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 w-5/12">
              <span className="text-secondary lg:text-[23px] text-[20px]  font-semibold block mb-[15px]">
                Useful Links
              </span>
              <ul className="text-[var(--color-lightgreen)] lg:text-[18px] text-[14px]  flex flex-col gap-[10px] ">
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Blog</span>
                </li>
                <li>
                  <span>Check out</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
                <li>
                  <span>Service</span>
                </li>
                <li>
                  <span>Shop</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 w-6/12">
              <span className="text-secondary lg:text-[23px] text-[20px] font-semibold block mb-[15px] ">
                Categories
              </span>
              <ul className="text-[var(--color-lightgreen)] lg:text-[18px] text-[14px] flex flex-col gap-[10px] ">
                <li>
                  <span>Fruits & Vegetables</span>
                </li>
                <li>
                  <span>Dairy Products</span>
                </li>
                <li>
                  <span>Package Foods</span>
                </li>
                <li>
                  <span>Beverage</span>
                </li>
                <li>
                  <span>Health & Wellness</span>
                </li>
                <li>
                  <span>Meat Varieties</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-2/12 w-5/12">
              <span className="text-secondary lg:text-[23px] text-[20px] font-semibold block mb-[15px]">
                Opening Hours
              </span>
              <ul className="text-[var(--color-lightgreen)] lg:text-[18px] text-[14px] flex flex-col gap-[10px] ">
                <li>
                  <span>Monday – Saturday</span>
                  <p className="text-[var(--color-lightgreen)]">
                    12.00 – 14.45
                  </p>
                </li>
                <li>
                  <span>Sunday – Thursday</span>
                  <p className="text-[var(--color-lightgreen)]">
                    17.30 – 00.00
                  </p>
                </li>
                <li>
                  <span>Friday – Saturday</span>
                  <p className="text-[var(--color-lightgreen)]">
                    17.30 – 00.00
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <hr className="bg-[var(--color-lightgreen)] h-0.5" />
        </div>
        <div className="py-[38px] md:py-[30px] ">
          <div className="container">
            <div className="flex flex-col md:flex-row  justify-between">
              <p className="text-[var(--color-lightgreen)] text-[14px] text-center">
                Copyright 2024, Groxi Store. All Rights Reserved.
              </p>
              <div className="flex flex-col md:flex-row   items-center gap-4">
                <span className="text-[var(--color-lightgreen)]">
                  Follow Us:
                </span>
                <ul className="flex gap-4 text-[var(--color-lightgreen)]">
                  <li>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="hover:text-[var(--color-primary)] duration-500"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="hover:text-[var(--color-primary)] duration-500"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="hover:text-[var(--color-primary)] duration-500"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
