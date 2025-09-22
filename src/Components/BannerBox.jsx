import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BannerBox = ({ items }) => {
  return (
    <div className="border-t-2 mt-[70px] border-[var(--color-primary)] bg-[var(--color-secondary)] py-[30px] px-[15px] lg:pt-[50px] lg:pr-[20px] lg:pb-[35px] lg:pl-[20px]  lg:w-[35%] sm:w-[45%] w-[65%] mx-auto flex flex-col items-center justify-center">
      <ul className="flex gap-2 mb-[10px]">
        {items.map((items) => {
          return (
            <li>
              <Link to={items.path}>
                {items.name ? (
                  <span className="lg:text-[22px] font-semibold lg:leading-[16px] font-jost text-[var(--color-primary)]">
                    {items.name}
                  </span>
                ) : (
                  <span className="lg:text-[20px] font-semibold lg:leading-[16px] font-jost text-[var(--color-primary)]">
                    <FontAwesomeIcon icon={items.icon} />
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <h1 className="text-[32px] leading-[38px]">
        {items[items.length - 1]?.name || "Page"}
      </h1>
    </div>
  );
};
export default BannerBox;
