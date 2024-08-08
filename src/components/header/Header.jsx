import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between container m-auto p-6 font-family: Roboto  ">
      <div className="logo">
        <a href="#">
          {" "}
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav__items">
        <ul
          className="flex gap-6 text-base font-normal  "
          style={{ color: "#7D7D7D" }}
        >
          <li>
            <a href="#">Каталог </a>
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
      <div className="numbers  flex flex-col justify-center">
        <p>+ 375 736 463 64 72 / + 375 736 463 64 72</p>
        <span className=" text-right  block">Заказать звонок</span>
      </div>
    </div>
  );
};

export default Header;
