import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = ({
  name,
  content,
  rating,
  status,
  goal,
  icon,
  color,
}) => {
  return (
    <>
      <div
        className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left border-t-3 border-[var(--color-primary)] md:w-[47%]  w-full   lg:py-[53px] lg:px-[42px] py-[25px] px-[10px] "
        style={{ backgroundColor: color }}
      >
        <span>
          <FontAwesomeIcon
            icon={icon}
            className=" lg:text-[60px] text-[42px] text-[var(--color-primary)] lg:mb-[20px]"
          />
        </span>

        <figure className="mb-[21px] w-[360px] h-[110px] justify-center lg:justify-start flex items-center ">
          <img src={icon} alt="" className=" w-auto" />
        </figure>
        {goal ? <h3 className="mt-auto mb-[8px]">{goal}</h3> : ""}
        <p className="font-barlow lg:text-[23px] text-[16px] md:text-[18px] lg:leading-[35px]   lg:mb-[24px] mb-[15px]">
          {content}
        </p>

        <button className="mt-auto md:text-[15px] bg-[var(--color-primary)] text-secondary uppercase lg:py-[14px] lg:px-[34px] py-[11px] px-[15px] text-[14px] font-barlow">
          Shop Now
        </button>
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
