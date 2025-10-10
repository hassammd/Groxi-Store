import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsCard = ({
  productImg,
  newPrice,
  hot,
  oldPrice,
  title,
  rating,

  varient,
}) => {
  const varientClass = {
    shop: {
      wrapper: "bg-[var(--color-productBg)]",
      heading: "leading-[21px] text-center text-[20px]",
    },
    home: {
      wrapper: "bg-[var(--color-secondary)] ",
    },
  };
  return (
    <>
      <div
        className={` border border-transparent hover:border
      hover:border-[var(--color-primary)] 
      md:py-[45px] md:px-[50px] py-[35px] px-[25px]
      flex flex-col items-center
       justify-center relative group   ${varientClass[varient]?.wrapper}`}
      >
        {hot ? (
          <span className="lg:text-[15px]  py-[1px]  px-[13px] bg-red absolute top-0 left-0 text-[var(--color-secondary)]">
            Hot
          </span>
        ) : (
          ""
        )}

        <div className="cursor-pointer lg:w-[42px] lg:h-[42px] absolute top-[10px] right-[10px] rounded-full bg-[var(--color-secondary)] p-[6px] group-hover:bg-[var(--color-primary)] flex items-center justify-center ">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[var(--color-gray)] group-hover:text-[var(--color-secondary)]"
          />
        </div>
        <figure className="lg:min-h-[214px] mb-[15px] flex items-center justify-center">
          <img src={productImg} alt="" />
        </figure>

        <figure className=" mb-[8px] text-[14px] mt-auto">
          {[...Array(5)].map((items, index) => {
            return index < rating ? (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-[var(--color-yellow)]"
              />
            ) : (
              <FontAwesomeIcon
                icon={regularStar}
                className="text-[var(--color-gray)]"
              />
            );
          })}
        </figure>

        <h4 className={`lg:mb-[14px] ${varientClass[varient]?.heading}`}>
          {title}{" "}
        </h4>
        <div className="flex gap-1 lg:mb-[23px] mb-[15px] ">
          <span className="font-semibold text-[var(--color-gray)] lg:text-[23px]">
            ${oldPrice}
          </span>
          <span className="lg:text-[23px] text-[var(--color-primary)] lg:font-semibold">
            ${newPrice}
          </span>
        </div>
        <button className="uppercase text-[14px] py-[8px] px-[12px] md:py-[8px] md:px-[12px] bg-[var(--color-green)] group-hover:bg-[var(--color-primary)] text-[var(--color-secondary)]">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
