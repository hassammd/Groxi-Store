import { Link } from "react-router-dom";
import Vegetable from "../assets/corner1.png";
import foods from "../assets/corner2.png";
import health from "../assets/corner3.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Catagories = () => {
  const catagory = [
    {
      title: "Get Every Vegetable You Need",
      img: Vegetable,
      color: "#9aded6",
    },
    {
      title: "We Have Best Beverages Collection",
      img: foods,
      color: "#f68a19",
    },
    {
      title: "Beauty And Health Products",
      img: health,
      color: "#a8d723",
    },
  ];

  return (
    <>
      <section className="py-[50px] md:py-[70px] lg:py-[90px] xl:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap  mx-auto items-center justify-center gap-[30px]">
            {catagory.map((items, i) => {
              return (
                <div
                  key={i}
                  className="p-[30px]  sm:w-[47.9%] relative overflow-hidden mx-auto"
                  style={{ backgroundColor: items.color }}
                >
                  <div className="w-[53%] sm:w-[74%] text-[var(--color-secondary)]">
                    <h3 className="text-[23px] leading-[31px] mb-[20px]">
                      {items.title}
                    </h3>
                    <Link className="uppercase text-[15px] font-semibold">
                      Shop Now
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                  <img
                    src={items.img}
                    alt=""
                    className="w-[125px] absolute bottom-[-8px] right-[0px]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catagories;
