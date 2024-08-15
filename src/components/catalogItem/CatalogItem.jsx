import React from "react";
import catalog1 from "../../assets/catalog1.png";
import catalog2 from "../../assets/catalog2.png";
import catalog3 from "../../assets/catalog3.png";
import catalog4 from "../../assets/catalog4.png";
import catalog5 from "../../assets/catalog5.png";
import catalog6 from "../../assets/catalog6.png";
import catalog7 from "../../assets/catalog7.png";
import catalog8 from "../../assets/catalog8.png";

const data = [
  {
    img: catalog1,
    title: "Мебель",
    link1: "Шкафы и шкафы-купе",
    link2: "Стеллажи и книжные шкафы",
    link3: "Столы",
    link4: "Стулья",
    link5: " Кровати",
  },
  {
    img: catalog2,
    title: "Аксессуары для создания уюта",
    link1: "Постельное белье",
    link2: "Одеяла",
    link3: "Комплекты постельного белья",
    link4: "Подушки",
    link5: " Пледы",
  },
  {
    img: catalog3,
    title: "Хранение и порядок",
    link1: "Аксессуары для хранения",
    link2: "Крючки и полки на стену",
    link3: "Вешалки, обувницы",
    link4: "Системы для хранения",
    link5: " Шкафы и шкафы-купе",
  },
  {
    img: catalog4,
    title: "Аксессуары",
    link1: "Шкафы и шкафы-купе",
    link2: "Стеллажи и книжные шкафы",
    link3: "Столы",
    link4: "Стулья",
    link5: " Кровати",
  },
  {
    img: catalog5,
    title: "Мебель",
    link1: "Шкафы и шкафы-купе",
    link2: "Стеллажи и книжные шкафы",
    link3: "Столы",
    link4: "Стулья",
    link5: " Кровати",
  },
  {
    img: catalog6,
    title: "Мебель",
    link1: "Шкафы и шкафы-купе",
    link2: "Стеллажи и книжные шкафы",
    link3: "Столы",
    link4: "Стулья",
    link5: " Кровати",
  },
  {
    img: catalog7,
    title: "Мебель",
    link1: "Шкафы и шкафы-купе",
    link2: "Стеллажи и книжные шкафы",
    link3: "Столы",
    link4: "Стулья",
    link5: " Кровати",
  },
  {
    img: catalog8,
    title: "Мебель",
    link1: "Шкафы и шкафы-купе",
    link2: "Стеллажи и книжные шкафы",
    link3: "Столы",
    link4: "Стулья",
    link5: " Кровати",
  },
];

const CatalogItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 pl-4 md:pl-12">
        Каталог
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded-lg text-sm">
                {item.title}
              </h3>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.link1}
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.link2}
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.link3}
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.link4}
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.link5}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogItem;
