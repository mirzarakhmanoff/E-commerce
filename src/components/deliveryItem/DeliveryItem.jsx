import React from "react";
import delivery1 from "../../assets/delivery.png";
import delivery2 from "../../assets/delivery1.png";
import { memo } from "react";

const DeliveryItem = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col gap-12">
      <div className="delivery__items flex flex-col md:flex-row items-center gap-8">
        <div className="left flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
          <p className="text-base mb-4">
            Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.
          </p>
          <p className="text-base mb-4">
            Наше преимущество - фиксированная стоимость доставки по Беларуси.
            Такой приятной цены вы не найдете у транспортных компаний.
          </p>
          <p className="text-base mb-4">
            Наше главное преимущество – работа сразу с двумя магазинами IKEA.
            Это дает большую вероятность того, что нужный вам товар будет в
            наличии.
          </p>
          <p className="text-base mb-4">
            Наша задача – доставить заказ своевременно и без повреждений.
          </p>
          <span className="font-semibold">Как мы работаем?</span>
          <p className="text-base mb-4">
            Мы закупаем выбранные вами товары в магазинах IKEA. После того как
            они прибывают на наши склады, мы начинаем доставлять их вам.
          </p>
          <p className="text-base mb-4">
            Доставляем заказ до подъезда. Подъем на этаж согласовывается заранее
            с оператором и оплачивается отдельно. Для подъема крупногабаритных
            товаров вы должны найти помощника курьеру.
          </p>
          <p className="text-base mb-4">
            Даты поставки указаны в календаре на главной странице сайта.
          </p>
        </div>
        <div className="right flex-1 flex justify-center">
          <img
            src={delivery1}
            alt="Delivery Image 1"
            className="w-full max-w-md"
          />
        </div>
      </div>
      <div className="delivery__items flex flex-col md:flex-row items-center gap-8">
        <div className="left flex-1 flex justify-center">
          <img
            src={delivery2}
            alt="Delivery Image 2"
            className="w-full max-w-md"
          />
        </div>
        <div className="right flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
          <p className="text-base mb-4">
            Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.
          </p>
          <p className="text-base mb-4">
            Наше преимущество - фиксированная стоимость доставки по Беларуси.
            Такой приятной цены вы не найдете у транспортных компаний.
          </p>
          <p className="text-base mb-4">
            Наше главное преимущество – работа сразу с двумя магазинами IKEA.
            Это дает большую вероятность того, что нужный вам товар будет в
            наличии.
          </p>
          <p className="text-base mb-4">
            Наша задача – доставить заказ своевременно и без повреждений.
          </p>
          <span className="font-semibold">Как мы работаем?</span>
          <p className="text-base mb-4">
            Мы закупаем выбранные вами товары в магазинах IKEA. После того как
            они прибывают на наши склады, мы начинаем доставлять их вам.
          </p>
          <p className="text-base mb-4">
            Доставляем заказ до подъезда. Подъем на этаж согласовывается заранее
            с оператором и оплачивается отдельно. Для подъема крупногабаритных
            товаров вы должны найти помощника курьеру.
          </p>
          <p className="text-base mb-4">
            Даты поставки указаны в календаре на главной странице сайта.
          </p>
        </div>
      </div>
      <div className="delivery__items flex flex-col md:flex-row items-center gap-8">
        <div className="right flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4">Доставка</h2>
          <p className="text-base mb-4">
            Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.
          </p>
          <p className="text-base mb-4">
            Наше преимущество - фиксированная стоимость доставки по Беларуси.
            Такой приятной цены вы не найдете у транспортных компаний.
          </p>
          <p className="text-base mb-4">
            Наше главное преимущество – работа сразу с двумя магазинами IKEA.
            Это дает большую вероятность того, что нужный вам товар будет в
            наличии.
          </p>
          <p className="text-base mb-4">
            Наша задача – доставить заказ своевременно и без повреждений.
          </p>
          <span className="font-semibold">Как мы работаем?</span>
          <p className="text-base mb-4">
            Мы закупаем выбранные вами товары в магазинах IKEA. После того как
            они прибывают на наши склады, мы начинаем доставлять их вам.
          </p>
          <p className="text-base mb-4">
            Доставляем заказ до подъезда. Подъем на этаж согласовывается заранее
            с оператором и оплачивается отдельно. Для подъема крупногабаритных
            товаров вы должны найти помощника курьеру.
          </p>
          <p className="text-base mb-4">
            Даты поставки указаны в календаре на главной странице сайта.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(DeliveryItem);
