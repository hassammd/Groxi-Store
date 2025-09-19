import trendhome1 from "../assets/trend-home1.png";
import trendhome2 from "../assets/trend-home2.png";
import trendhome3 from "../assets/trend-home3.png";
import trendhome4 from "../assets/trend-home4.png";
import trendhome5 from "../assets/trend-home5.png";
import trendhome6 from "../assets/trend-home6.png";
import ProductsCard from "./ProductCard";

const TrendingProducts = () => {
  const Products = [
    {
      title: "Beef Steak",
      oldPrice: "15",
      newPrice: "12",
      productImg: trendhome1,
      rating: 4,
      hot: true,
    },
    {
      title: "Broccoli",
      oldPrice: "20",
      newPrice: "15",
      productImg: trendhome2,
      rating: 3,
      hot: false,
    },
    {
      title: "Strawberries",
      oldPrice: "30",
      newPrice: "20",
      productImg: trendhome3,
      rating: 1,
      hot: true,
    },
    {
      title: "Fresh Honey",
      oldPrice: "50",
      newPrice: "40",
      productImg: trendhome4,
      rating: 1,
      hot: true,
    },
    {
      title: "Fresh Milk",
      oldPrice: "10",
      newPrice: "08",
      productImg: trendhome5,
      rating: 3,
      hot: true,
    },
    {
      title: "Mango Beverage",
      oldPrice: "22",
      newPrice: "18",
      productImg: trendhome6,
      rating: 3,
      hot: true,
    },
  ];

  return (
    <>
      <section className="py-[70px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-[20px]">
            <span className="text-[var(--color-primary)] font-medium">
              Most Popular
            </span>
            <h2 className="lg:mb-[42px]">Trending Products</h2>
          </div>
          <div className="flex flex-wrap gap-[30px] justify-center">
            {Products.map((items) => {
              return (
                <ProductsCard
                  title={items.title}
                  oldPrice={items.oldPrice}
                  newPrice={items.newPrice}
                  productImg={items.productImg}
                  rating={items.rating}
                  hot={items.hot}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default TrendingProducts;
