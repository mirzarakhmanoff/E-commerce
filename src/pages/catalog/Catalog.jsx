import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CatalogItem from "../../components/catalogItem/CatalogItem";
import { useEffect } from "react";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <CatalogItem />
      <Footer />
    </div>
  );
};

export default Catalog;
