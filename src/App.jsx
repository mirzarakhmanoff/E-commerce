import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Famous from "./components/famous/Famous";
import Sales from "./components/sales/Sales";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Famous />
      <Sales />
    </>
  );
}

export default App;
