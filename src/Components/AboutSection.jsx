import aboutUsImage from "../assets/about-us-img.png";

const AboutSection = () => {
  return (
    <>
      <section className="bg-[var(--color-productBg)]  lg:py-[120px] py-[50px] sm:py-[70px]  relative">
        <div className="container">
          <div className="flex">
            <div className="lg:w-1/2">
              <figure className="absolute left-[-120px] bottom-[100px] lg:block lg:w-[600px] xl:w-[650px] 2xl:w-auto 2xl:bottom-0 hidden">
                <img src={aboutUsImage} alt="" />
              </figure>
            </div>
            <div className="lg:w-1/2 w-[90%] md:w-[50%] mx-auto bg-[var(--color-secondary)] lg:py-[80px] lg:px-[64px] border-t-3 py-[50px] px-[20px] border-[var(--color-primary)]">
              <span className="font-bold text-[var(--color-primary)] block lg:mb-[15px] lg:text-left text-center mb-[10px] ">
                About Us
              </span>
              <h2 className="lg:mb-[10px] lg:text-left text-center text-[26px] leading-[32px]     mb-2 ">
                We Provide You The Best Experience
              </h2>
              <p className="lg-text-[20px] text-[14px] mb-[10px] text-center lg:text-left font-normal lg:leading-[30px] lg:mb-[6px] font-barlow">
                Neque porro quisquam est aui dolorem iesum ruia dolor sit amet,
                consectetur, adipisci velit, sed quia non numua eius modi
                tempora incidunt ut labore et dolore magnam volutatem
                exercitationem ullam.
              </p>
              <p className="lg-text-[20px] text-[14px] text-center lg:text-left font-normal  lg:leading-[30px] lg:mb-[6px] font-barlow ">
                Quis autem vel eum iure reprehenderit aui in ea voluptae velit
                esse quam nihil molestiae consequatur, vel illum rui dolorem eum
                fugiat quo voluptas.
              </p>
              <div className="text-center lg:text-left">
                <button className="py-[11px] px-[30px] text-[14px] lg:py-[14px] lg:px-[34px] bg-[var(--color-primary)] text-[var(--color-secondary)] mt-[32px] cursor-pointer uppercase hover:bg-[var(--color-green)] lg:text-[14px]">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
