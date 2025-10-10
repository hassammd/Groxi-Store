import {
  faAnglesRight,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import TrendingProducts from "../Components/TrendingProducts";
import BannerBox from "../Components/BannerBox";
import ProductsCard from "../Components/ProductCard";
import Bread from "../assets/seller1.png";
import Red_Pepper from "../assets/seller2.png";
import Orange_Beverage from "../assets/seller3.png";
import Dozen_Eggs from "../assets/seller4.png";
import CookingOil from "../assets/seller5.png";
import Body_Lotion from "../assets/seller6.png";
import Beef_Steak from "../assets/trend-home1.png";
import Fresh_Milk from "../assets/trend-home5.png";
import Strawberries from "../assets/trend-home3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Testimonials from "../Components/Testimonials";

const Shop = () => {
  const [productCatagory, setProductCatagory] = useState("");
  const [price, setPrice] = useState("");
  console.log(price);

  const breadcrumbs = [
    {
      name: "Home",
      path: "/",
    },
    {
      icon: faArrowRight,
    },
    {
      name: "Shop",
    },
  ];

  const Products = [
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

  //filter products
  const filteredProducts = Products.filter((items, index) => {
    const byCategory =
      productCatagory === "" ? Products : items.catagory === productCatagory;
    const byPrice = price == "" ? Products : items.newPrice <= price;
    return byCategory && byPrice;
  });

  //count of product per catagory
  const catagoryCount = Products.reduce((acc, current) => {
    acc[current.catagory] = (acc[current.catagory] || 0) + 1;

    return acc;
  }, {});

  console.log(catagoryCount);

  //   find unique catagory
  const uniquecatagory = [...new Set(Products.map((p) => p.catagory))];

  //finding the price
  const productPrice = [...new Set(Products.map((items) => items.newPrice))];
  console.log(productPrice);
  const minPrice = Math.min(...productPrice);
  const maxPrice = Math.max(...productPrice);

  return (
    <>
      <section className="relative bg-[var(--color-productBg)] h-[344px] lg:h-[540px] flex items-center justify-center">
        <div className="container">
          <BannerBox items={breadcrumbs} />
        </div>
      </section>

      <section className="py-[70px] sm:py-[90px] md:py-[100px] lg:py-[100px]">
        <div className="container">
          <div className="flex gap-[30px]  ">
            <div className="flex flex-col gap-6 w-[27%]">
              <div className="lg:py-[25px] lg:px-[15px] border-1 border-[var(--color-lightgreen)]">
                <form action="">
                  <div>
                    <input
                      className="lg:w-[79%] lg:py-[10px] lg:px-[16px] border-1 border-[var(--color-primary)] rounded-sm"
                      type="text"
                      placeholder="Search..."
                    />
                    <button className="lg:py-[10px] lg:px-[16px] lg:ml-[-3px]  text-[var(--color-secondary)]  border-1 border-[var(--color-primary)] bg-[var(--color-primary)]">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </form>
              </div>
              <div className="lg:py-[25px] lg:px-[15px] border-1 border-[var(--color-lightgreen)]">
                <h5>Categories</h5>

                <ul>
                  {/* seprate the catagoris and than map on them */}
                  {uniquecatagory.map((items) => {
                    return (
                      <li
                        className="cursor-pointer py-[10px] flex justify-between  border-b border-[var(--color-primary)] text-[var(--color-text)] "
                        onClick={() => setProductCatagory(items)}
                      >
                        <span className="flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className="text-[var(--color-primary)] text-[14px]"
                          />
                          {items}
                        </span>

                        <span className="text-[var(--color-primary)] text-[16px] leading-[20px] font-semibold ">
                          ({catagoryCount[items]})
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="lg:py-[25px] lg:px-[15px] border-1 border-[var(--color-lightgreen)]">
                <h5 className="mb-[20px]">Filter By Price</h5>
                <span className="block w-full bg-[var(--color-primary)] p-[8px]">
                  <input
                    className="w-full accent-[var(--color-secondary)]"
                    type="range"
                    max={maxPrice}
                    min={minPrice}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </span>

                <div className="flex justify-between">
                  <span>{price}$</span>
                  <span>{maxPrice}</span>
                </div>
              </div>
            </div>

            <div className="w-[71%]">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((items, index) => {
                  return (
                    <ProductsCard
                      key={index}
                      title={items.title}
                      oldPrice={items.oldPrice}
                      newPrice={items.newPrice}
                      productImg={items.productImg}
                      rating={items.rating}
                      hot={items.hot}
                      bgColor={items.bgColor}
                      classwidth={items.classwidth}
                      varient="shop"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default Shop;
