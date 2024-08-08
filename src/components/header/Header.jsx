import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
      <div className="logo mb-4 md:mb-0">
        <a href="#">
          <img src={logo} alt="Logo" className="w-32" />
        </a>
      </div>
      <div className="nav__items mb-4 md:mb-0">
        <ul className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 text-base font-normal text-gray-600">
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Условия</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
      <div className="numbers text-center md:text-right flex flex-col items-center md:items-end">
        <p className="text-sm mb-2">+375 736 463 64 72 / +375 736 463 64 72</p>
        <span className="text-blue-500 cursor-pointer">Заказать звонок</span>
      </div>
    </div>
  );
};

export default Header;
