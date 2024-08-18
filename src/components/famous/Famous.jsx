import React, { memo } from "react";
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
    <div className="container mx-auto px-4">
      <div className="famous__title flex items-center gap-4 mt-14 hover:text-yellow-500">
        <h3 className="font-bold text-2xl md:text-4xl text-black">
          Популярные категории
        </h3>
        <span className="flex items-center cursor-pointer text-sm md:text-base">
          Все категории <FaArrowRightLong />
        </span>
      </div>
      <div className="famous flex gap-6 flex-wrap mt-9 justify-center">
        {data.map((e, idx) => (
          <div
            key={idx}
            className="famous__item flex items-center flex-col text-center w-full sm:w-48 md:w-56 border p-4 sm:p-6 rounded-3xl bg-slate-50 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="famous__img mb-4">
              <img
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
                src={e.img}
                alt={e.title}
              />
            </div>
            <div className="famous__desc">
              <p className="text-sm md:text-base">{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Famous);
