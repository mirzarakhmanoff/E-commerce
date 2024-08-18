import React, { memo } from "react";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero__wrapper container mx-auto mt-24 px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="hero__left max-w-xl p-6 md:p-12 border rounded-3xl bg-slate-200 mb-8 md:mb-0">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          Мебель на любой вкус!
        </h2>
        <ul className="list-disc pl-5">
          <li className="pb-3">
            <p className="font-normal text-base text-neutral-900">
              Худи, чашки для горячего чая и термосы
            </p>
          </li>
          <li className="pb-3">
            <p className="font-normal text-base text-neutral-900">
              Елочные игрушки, брелочки
            </p>
          </li>
          <li className="pb-3">
            <p className="font-normal text-base text-neutral-900">
              Начало списка вещей, которые можно{" "}
            </p>
          </li>
        </ul>
        <button
          type="button"
          className="focus:outline-none block text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2"
        >
          Перейти в каталог
        </button>
        <button className="focus:outline-none block text-black bg-slate-100 hover:bg-yellow-500 hover:text-white transition focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2">
          Внести список артикулов
        </button>
      </div>
      <div className="hero__right max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        <img src={heroImg} alt="Hero Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default memo(Hero);
