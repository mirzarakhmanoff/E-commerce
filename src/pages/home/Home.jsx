import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Famous from "../../components/famous/Famous";
import Sales from "../../components/sales/Sales";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
const Home = (selectedCategory, setSelectedCategory) => {
  return (
    <div>
      <Header />
      <Hero />
      <Famous />
      <Sales />
      <Products onCategoryChange={setSelectedCategory} />
      <Footer />
    </div>
  );
};

export default Home;
