import { useState } from "react";
import Bread from "../assets/seller1.png";
import Red_Pepper from "../assets/seller2.png";
import Orange_Beverage from "../assets/seller3.png";
import Dozen_Eggs from "../assets/seller4.png";
import CookingOil from "../assets/seller5.png";
import Body_Lotion from "../assets/seller6.png";
import Beef_Steak from "../assets/trend-home1.png";
import Fresh_Milk from "../assets/trend-home5.png";
import Strawberries from "../assets/trend-home3.png";

import ProductsCard from "./ProductCard";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("All");

  const products = [
    {
      id: 1,
      title: "Fresh Bread",
      productImg: Bread,
      oldPrice: 15,
      newPrice: 12,
      hot: true,
      rating: 4,
      catagory: "Food",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 2,
      title: "Red Pepper",
      productImg: Red_Pepper,
      oldPrice: 20,
      newPrice: 15,
      hot: true,
      rating: 4,
      catagory: "Food",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 3,
      title: "Orange Beverages",
      productImg: Orange_Beverage,
      oldPrice: 30,
      newPrice: 30,
      hot: true,
      rating: 4,
      catagory: "Food",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 4,
      title: "Dozen Eggs",
      productImg: Dozen_Eggs,
      oldPrice: 50,
      newPrice: 40,
      hot: true,
      rating: 2,
      catagory: "Dairy",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 5,
      title: "Cooking Oil",
      productImg: CookingOil,
      oldPrice: 20,
      newPrice: 15,
      hot: true,
      rating: 4,
      catagory: "Health",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 6,
      title: "Body Lotion",
      productImg: Body_Lotion,
      oldPrice: 30,
      newPrice: 20,
      hot: false,
      rating: 3,
      catagory: "Health",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 7,
      title: "Beef Steak",
      oldPrice: 15,
      newPrice: 12,
      productImg: Beef_Steak,
      hot: true,
      rating: 4,
      catagory: "Meat",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 8,
      title: "Fresh_Milk",
      oldPrice: 12,
      newPrice: 10,
      productImg: Fresh_Milk,
      hot: true,
      rating: 3,
      catagory: "Dairy",
      bgColor: "var(--color-secondary)",
    },
    {
      id: 3,
      title: "Strawberries",
      oldPrice: 15,
      newPrice: 10,
      productImg: Strawberries,
      hot: true,
      rating: 3,
      catagory: "Fruits",
      bgColor: "var(--color-secondary)",
    },
  ];

  const Tabs = ["All", "Food", "Fruits", "Health", "Meat", "Dairy"];
  const featuredProducts =
    activeTab === "All"
      ? products
      : products.filter((items) => items.catagory === activeTab);

  return (
    <>
      <section className="lg:py-[120px] py-[70px] sm:py-[90px]  bg-[var(--color-productBg)]">
        <div className="container">
          <div className="flex flex-col items-center gap-4 mb-[25px]">
            <h5 className="text-[var(--color-primary)] font-semibold">
              Best Seller
            </h5>
            <h2>Featured Products</h2>
          </div>
          <div className="mb-[42px]">
            <ul className="flex items-center justify-center flex-wrap gap-[18px]  lg:gap-[23px]">
              {Tabs.map((items) => {
                return (
                  <li
                    onClick={() => setActiveTab(items)}
                    className={`${
                      activeTab == items ? "text-[var(--color-primary)]" : ""
                    } lg:text-[23px] text-[18px]  font-semibold cursor-pointer hover:text-[var(--color-primary)] duration-500`}
                  >
                    {items}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {featuredProducts.slice(0, 6).map((items) => {
                return (
                  <ProductsCard
                    title={items.title}
                    oldPrice={items.oldPrice}
                    newPrice={items.newPrice}
                    productImg={items.productImg}
                    rating={items.rating}
                    catagory={items.catagory}
                    bgColor={items.bgColor}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
