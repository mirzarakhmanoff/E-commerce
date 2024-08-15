import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full  z-30 p-6 flex items-center justify-between transition-colors duration-300 ease-in-out ${
        scroll ? "bg-blue-500" : "bg-transparent"
      }`}
    >
      <div className="logo flex items-center gap-14">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </Link>
        <button
          onClick={toggle}
          className="p-2 bg-blue-500 text-white rounded-md md:hidden focus:outline-none"
        >
          {open ? <FaX className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`md:flex flex-col md:flex-row gap-4 md:gap-6 text-base font-normal text-gray-600 ${
          open
            ? "fixed top-0 left-0 w-64 h-full bg-gray-100 border-r border-gray-300 p-4 z-30"
            : "hidden"
        }`}
      >
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-6 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="*">Error</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="numbers text-center md:text-right flex flex-col items-center md:items-end">
        <p className="text-sm mb-2">+375 736 463 64 72 / +375 736 463 64 72</p>
        <span className="text-blue-500 cursor-pointer">Заказать звонок</span>
      </div>
    </header>
  );
};

export default Header;
