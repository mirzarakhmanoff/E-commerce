import React from "react";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero__wrapper container m-auto flex items-center mt-24 justify-around">
      <div className="hero__left max-w-[470px] p-12 border rounded-3xl bg-slate-200">
        <h2 className="font-serif text-5xl font-bold">Мебель на любой вкус!</h2>
        <ul className="list-disc">
          <li className="">
            <p className="font-normal text-base from-neutral-900 pb-3 pt-4">
              Худи, чашки для горячего чая и термосы
            </p>
          </li>
          <li>
            {" "}
            <p className="font-normal text-base from-neutral-900 pb-3">
              Eлочные игрушки, брелочки
            </p>
          </li>
          <li>
            {" "}
            <p className="font-normal text-base from-neutral-900 pb-3">
              Начало списка вещей, которые можно{" "}
            </p>
          </li>
        </ul>
        <button
          type="button"
          class="focus:outline-none block text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          {" "}
          Перейти в каталог
        </button>

        <button className=" focus:outline-none block text-black bg-slate-100 hover:bg-yellow-500 hover:text-white transition focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          Внести список артикулов
        </button>
      </div>
      <div className="hero__right max-w-[600px]">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
