const FeatureSection = ({ whyUs }) => {
  return (
    <>
      <section className="py-[50px] sm:py-[70px] md:py-[70px]  lg:py-[120px] ">
        <div className="container">
          <div className="text-center mb-[50px]">
            <h2>Why Choose Us</h2>
          </div>
          <div className="flex flex-col md:items-center  justify-center md:justify-start md:gap-[30px]  lg:justify-between   md:flex-row flex-wrap gap-8">
            {/* left side */}
            <div className="lg:w-[29.7%] md:w-[25.6%]  w-full flex flex-wrap flex-col sm:flex-row md:flex-col gap-10">
              {whyUs.slice(0, 2).map((items, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:w-[45%] md:w-full items-center lg:gap-[15px]"
                  >
                    <figure>
                      <img src={items.img} alt="" />
                    </figure>
                    <h4 className="text-center">{items.title}</h4>
                    <p className="lg:text-[20px] lg:leading-[28px] text-center">
                      {items.content}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Basket + Button */}

            {whyUs.slice(2, 3).map((items) => {
              return (
                <div className="hidden lg:w-[34%]  md:w-[40%] md:flex flex-col items-center justify-center gap-10">
                  <figure>
                    <img src={items.img} alt="" />
                  </figure>
                  <button
                    className="uppercase bg-[var(--color-primary)] text-[var(--color-secondary)]
              md:text-[14px]
              md:leading-[14px]
              md:py-[12px]
              md:px-[30px]

              lg:text-[16px]
              lg:leading-[24px]
              lg:py-[14px]
              lg:px-[34px] cursor-pointer
              
              hover:bg-[var(--color-green)] duration-700"
                  >
                    Shop Now
                  </button>
                </div>
              );
            })}

            {/* Right side */}
            <div className="lg:w-[29.7%] md:w-[25.6%] w-full flex flex-wrap flex-col sm:flex-row md:flex-col gap-10">
              {whyUs.slice(3, 5).map((items, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:w-[45%] md:w-full items-center lg:gap-[15px]"
                  >
                    <figure>
                      <img src={items.img} alt="" />
                    </figure>
                    <h4 className="text-center">{items.title}</h4>
                    <p className="lg:text-[20px] lg:leading-[28px] text-center">
                      {items.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
