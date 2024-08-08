import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Famous from "./components/famous/Famous";
import Sales from "./components/sales/Sales";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Famous />
      <Sales />
      <Products />
      <Footer />
    </>
  );
}

export default App;
