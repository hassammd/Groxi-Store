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
  // brands logo array
  const brands = [newslogo1, newslogo2, newslogo3, newslogo4];
  // footer section array
  const footerSection = [
    {
      title: "Store Location",
      items: [
        {
          label: "Address:",
          value: "121 King Street Melbourne,3000,Australia",
        },
        {
          label: "Email:",
          value: "info@groxistore.com",
        },
        {
          label: "Phone:",
          value: "+1 23 45 6789",
        },
      ],
    },
    {
      title: "Useful Links",
      items: [
        {
          value: "About Us",
        },
        {
          value: "Blog",
        },
        {
          value: "Check out",
        },
        {
          value: "Contact",
        },
        {
          value: "Service",
        },
        {
          value: "Shop",
        },
      ],
    },

    {
      title: "Categories",
      items: [
        {
          value: "Fruits & Vegetables",
        },
        {
          value: "Dairy Products",
        },
        {
          value: "Package Foods",
        },
        {
          value: "Beverage",
        },
        {
          value: "Health & Wellness",
        },
        {
          value: "Meat Varieties",
        },
      ],
    },
    {
      title: "Opening Hours",
      items: [
        {
          label: "Monday – Saturday",
          value: "12.00 – 14.45",
        },
        {
          label: "Sunday – Thursday",
          value: "17.30 – 00.00",
        },
        {
          label: "Friday – Saturday",
          value: "17.30 – 00.00",
        },
      ],
    },
  ];

  return (
    <>
      {/* logo section */}

      <section className="logo_section lg:py-[100px] py-[90px] md:pb-[100px] lg:pb-[200px] ">
        <div className="container">
          <ul className="flex gap-8 lg:gap-16px items-center justify-center md:justify-end">
            {brands.map((items) => {
              return (
                <li>
                  <img
                    src={items}
                    alt=""
                    className="w-[100px] lg:w-auto opacity-20 hover:opacity-100 duration-1000"
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
          <div className="flex flex-wrap justify-between gap-4 mb-[90px] ">
            {footerSection.map((section, index) => {
              return (
                <>
                  <div className="md:w-[23%] lg:w-[15%]  w-[40%] ">
                    <span className="text-secondary lg:text-[23px] text-[20px]  font-semibold block mb-[15px]">
                      {section.title}
                    </span>
                    <ul className="text-[var(--color-lightgreen)] lg:text-[18px] text-[14px] flex flex-col gap-[10px] ">
                      {section.items.map((items) => {
                        return (
                          <>
                            <li>
                              <span className="">{items.label}</span>
                              <p className=" text-[16px] text-[var(--color-lightgreen)]">
                                {items.value}
                              </p>
                            </li>
                          </>
                        );
                      })}
                      {/* <li>
                        <span>Email:</span>
                        <p className="text-[var(--color-lightgreen)]">
                          info@groxistore.com
                        </p>
                      </li> */}
                      {/* <li>
                        <span>Phone:</span>
                        <p className="text-[var(--color-lightgreen)]">
                          +1 23 45 6789
                        </p>
                      </li> */}
                    </ul>
                  </div>
                </>
              );
            })}
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
