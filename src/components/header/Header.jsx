import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between relative">
      <div className="logo mb-4 md:mb-0 flex items-center gap-14">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-32 " />
        </Link>
        <div className="bars block md:hidden">
          <button
            onClick={toggle}
            className="p-2 bg-blue-500 text-white rounded-md focus:outline-none"
          >
            {open ? (
              <FaX className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className="nav__items mb-4 md:mb-0">
        <ul
          className={`"  md:flex flex-col md:flex-row gap-4 md:gap-6 ${
            open ? "block" : "hidden"
          } text-base font-normal text-gray-600"`}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/catalog"}>Каталог</Link>
          </li>
          <li>
            <Link to={"/delivery"}>Доставка</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Контакты</Link>
          </li>
          <li>
            <Link to={"/a"}>Error</Link>
          </li>
        </ul>
      </div>
      <div className="numbers text-center md:text-right flex flex-col items-center md:items-end">
        <p className="text-sm mb-2">+375 736 463 64 72 / +375 736 463 64 72</p>
        <span className="text-blue-500 cursor-pointer">Заказать звонок</span>
      </div>

      <div className="fixed z-30 h-full hidden top-0 left-0 w-64 bg-gray-100 border-r border-gray-300 p-4">
        <ul className="flex flex-col gap-4 text-base font-normal text-gray-600">
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="hover:text-white">
              Каталог
            </Link>
          </li>
          <li>
            <Link to="/delivery" className="hover:text-white">
              Доставка
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-white">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
