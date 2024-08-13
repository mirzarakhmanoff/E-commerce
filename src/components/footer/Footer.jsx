import React from "react";
import logo from "../../assets/logo.png";
import insta from "../../assets/insta.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8 md:py-14">
      <div className="flex flex-col gap-12 md:flex-row justify-between items-start md:items-center">
        <div className="logo mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="w-32 md:w-48" />
        </div>
        <div className="footer__items flex flex-col gap-12 md:flex-row justify-between w-full md:w-auto">
          <div className="footer__item mb-8 md:mb-0 w-full md:w-56 flex flex-col gap-3">
            <h5 className="font-bold text-lg">Информация</h5>
            <p className="text-sm">
              Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.
            </p>
            <p className="text-sm">
              УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом
              реестре 158299
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Политика конфиденциальности
            </a>
          </div>
          <div className="footer__item mb-8 md:mb-0 flex flex-col gap-3">
            <h5 className="font-bold text-lg">Меню</h5>
            <div className="links text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Главная
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Каталог
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Товары в наличии
              </a>
            </div>
            <div className="links text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Скидки
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Популярное
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Вдохновение
              </a>
            </div>
            <div className="links text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Доставка
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Услуги
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Условия
              </a>
            </div>
            <div className="links text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Контакты
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Вставить
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Cписок покупок
              </a>
            </div>
            <div className="links text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Корзина
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Личный кабинет
              </a>{" "}
              |
              <a href="#" className="text-blue-600 hover:underline">
                Избранное
              </a>
            </div>
          </div>
          <div className="footer__item mb-8 md:mb-0 flex flex-col gap-3">
            <h5 className="font-bold text-lg">Контакты</h5>
            <p className="text-sm">г.Минск</p>
            <p className="text-sm">Ул. Первомайская, Д. 1, Кв. 43</p>
            <a
              href="tel:+3754348472884"
              className="text-blue-600 hover:underline text-sm"
            >
              + 375 434 847 28 84
            </a>
            <a
              href="tel:+3754484730948"
              className="text-blue-600 hover:underline text-sm"
            >
              + 375 448 473 09 48
            </a>
            <a
              href="mailto:ikeaekspress@gmail.com"
              className="text-blue-600 hover:underline text-sm"
            >
              ikeaekspress@gmail.com
            </a>
          </div>
          <div className="footer__item flex items-center">
            <img src={insta} alt="Instagram" className="w-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
