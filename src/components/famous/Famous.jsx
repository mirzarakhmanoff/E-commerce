import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import famous from "../../assets/famous.png";
import famous1 from "../../assets/famous1.png";
import famous2 from "../../assets/famous2.png";
import famous3 from "../../assets/famous3.png";
import famous4 from "../../assets/famous4.png";
import famous5 from "../../assets/famous5.png";
import famous6 from "../../assets/famous6.png";
import famous7 from "../../assets/famous7.png";
import famous8 from "../../assets/famous8.png";

const data = [
  { img: famous, title: "Диваны" },
  { img: famous1, title: "Спальная" },
  { img: famous2, title: "Кухня" },
  { img: famous3, title: "Для сада" },
  { img: famous4, title: "Мебель" },
  { img: famous5, title: "Гигиена" },
  { img: famous6, title: "Товары для отдыха" },
  { img: famous7, title: "Зеркала" },
  { img: famous8, title: "Кухня и бытовая техника" },
  { img: famous8, title: "Кухня и бытовая техника" },
];

const Famous = () => {
  return (
    <div className="container mx-auto">
      {" "}
      <div className="famous__title flex items-center gap-4 mt-14 hover:text-yellow-500">
        <h3 className="font-bold text-4xl text-black">Популярные категории</h3>
        <span className="flex items-center cursor-pointer">
          Все категории <FaArrowRightLong />
        </span>
      </div>
      <div className="famous flex gap-8 flex-wrap mt-9">
        {data.map((e, idx) => (
          <div
            key={idx}
            className="famous__item flex items-center flex-col text-center w-56 border p-6 rounded-3xl bg-slate-50 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="famous__img flex items-center">
              <img
                className="w-28 h-28 object-contain"
                src={e.img}
                alt={e.title}
              />{" "}
              {}
            </div>
            <div className="famous__desc">
              <p>{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Famous;
