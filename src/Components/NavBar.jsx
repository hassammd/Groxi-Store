import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const NavItems = ["Home", "About", "Shop", "Blog", "Contact"];
  const NavIcons = [faMagnifyingGlass, faUser, faHeart, faCartShopping];
  const [isActive, setIsActive] = useState(true);

  const mobileNavHandler = () => {
    setIsActive(!isActive);
    console.log("this is active");
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-between py-4 items-center relative">
          <div>
            <figure className="w-[100px] sm:w-[120px]">
              <img src={logo} alt="" />
            </figure>
          </div>

          {/* desktop nav */}

          <ul className="hidden md:flex justify-between items-center gap-6">
            {NavItems.map((items) => {
              return (
                <li className="cursor-pointer">
                  <Link
                    className="hover:text-[var(--color-primary)]   font-barlow text-[20px] md:text-[18px] text-[var(--color-darkblue)] font-normal leading-[20px] py-[10px]
                  relative before:content-[''] before:bg-[var(--color-primary)] before:w-0 before:h-[2px]
                 hover:before:w-full before:absolute before:bottom-0 before:duration-500 
                  "
                  >
                    {items}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="hidden md:flex items-center gap-4">
            {NavIcons.map((items) => {
              return (
                <li
                  className=" flex items-center justify-center text-[var(--color-primary)] cursor-pointer bg-[var(--color-secondary)] h-[42px] w-[42px] md:h-[36px] md:w-[36px] rounded-full
                 hover:bg-[var(--color-green)] hover:text-[var(--color-secondary)] duration-500 
                 "
                >
                  <FontAwesomeIcon icon={items} />
                </li>
              );
            })}
          </ul>

          {/* mobile nav */}
          <div className="md:hidden">
            {isActive ? (
              <FontAwesomeIcon icon={faXmark} onClick={mobileNavHandler} />
            ) : (
              <FontAwesomeIcon icon={faBars} onClick={mobileNavHandler} />
            )}

            {isActive ? (
              <div className="absolute w-full top-[86px] left-0">
                <ul className="w-auto bg-amber-500 flex flex-col items-center gap-3 py-6 ">
                  {NavItems.map((items) => {
                    return (
                      <li className="cursor-pointer">
                        <Link className="font-barlow text-[20px] text-[var(--color-darkblue)] font-normal leading-[20px] py-[10px]">
                          {items}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
