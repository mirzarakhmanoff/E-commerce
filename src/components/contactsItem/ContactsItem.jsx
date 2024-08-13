import React from "react";
import icon from "../../assets/icon.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import contactsImg from "../../assets/contacts.png";

const ContactsItem = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Контакты
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="contacts__items flex flex-col md:flex-row gap-8 w-full md:w-2/3">
          <div className="phones flex flex-col gap-4 md:w-1/3">
            <a
              href="tel:+3754348472884"
              className="text-blue-600 hover:underline"
            >
              +375 434 847 28 84
            </a>
            <a
              href="tel:+3754484730948"
              className="text-blue-600 hover:underline"
            >
              +375 448 473 09 48
            </a>
            <a
              href="mailto:ikeaekspress@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ikeaekspress@gmail.com
            </a>
          </div>
          <div className="address flex flex-col gap-4 md:w-1/3">
            <p className="text-gray-700">г.Минск</p>
            <p className="text-gray-700">Ул. Первомайская</p>
            <p className="text-gray-700">Д. 1, Кв. 43</p>
          </div>
          <div className="company-info flex flex-col gap-4 md:w-1/3">
            <p className="text-gray-700">ОГРН: 3748 49384 4847 30948</p>
            <p className="text-gray-700">ООО “Икеа”</p>
            <a href="#" className="text-blue-600 hover:underline">
              Политика конфиденциальности
            </a>
          </div>
        </div>
        <div className="contacts__img flex justify-center md:justify-end md:w-1/3">
          <img
            src={contactsImg}
            alt="Contacts"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>

      <div className="icons flex justify-center md:justify-end gap-6 mt-8">
        <a href="#" className="hover:opacity-80">
          <img src={icon} alt="Icon 1" className="w-8 h-8" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src={icon1} alt="Icon 2" className="w-8 h-8" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src={icon2} alt="Icon 3" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default ContactsItem;
