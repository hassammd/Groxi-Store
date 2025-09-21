import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = ({ name, content, rating, status }) => {
  return (
    <>
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left border-t-3 border-[var(--color-primary)] md:w-[47%]  w-full   lg:py-[53px] lg:px-[42px] py-[25px] px-[10px] bg-[var(--color-productBg)]">
        <span>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="lg:text-[60px] text-[42px] text-[var(--color-primary)] lg:mb-[20px]"
          />
        </span>
        <p className="font-barlow lg:text-[23px] text-[16px] md:text-[18px] lg:leading-[35px] italic lg:mb-[24px] mb-[15px]">
          {content}
        </p>
        <div className=" mb-[15px]">
          {[...Array(5)].map((items, index) => {
            return index < rating ? (
              <FontAwesomeIcon
                icon={faStar}
                className="text-[var(--color-yellow)]"
              />
            ) : (
              ""
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <h5 className="text-[16px]">{name}</h5>
          <span className="text-[var(--color-primary)] font-semibold text-[16px]">
            {status}
          </span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
