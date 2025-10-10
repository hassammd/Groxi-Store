import TestimonialCard from "./TestimonialCard";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const CustomersSayings = [
    {
      name: "Alina Parker",
      status: "Ceo, GTD",
      content:
        "”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit sed quia non numqua eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem repudia sint et molestiae”",
      rating: 3,
      icon: faQuoteLeft,
    },
    {
      name: "Kevin Andrew",
      status: "Ceo, GTD",

      content:
        "”Exercitationem ullam corporis suscipit laborio nisi ut aliquid ex ea commodi consequatur uis autem vel eum iure reprehenderit qui in ea vou velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat”",
      rating: 5,
      icon: faQuoteLeft,
    },
  ];

  return (
    <>
      <section className="lg:py-[120px] md:py-[100px] sm:py-[90px] py-[70px]">
        <div className="container">
          <div className="flex items-center justify-center text-center flex-col mb-[39px]">
            <h5 className="text-[16px] text-[var(--color-primary)] font-semibold ">
              Testimonials
            </h5>
            <h2 className="leading-[36px] text-[26px]">
              What Our Customers Saying
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-[30px]">
            {CustomersSayings.map((items) => {
              return (
                <TestimonialCard
                  content={items.content}
                  name={items.name}
                  rating={items.rating}
                  status={items.status}
                  icon={items.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
