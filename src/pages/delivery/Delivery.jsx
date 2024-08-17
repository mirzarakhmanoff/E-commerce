import React from "react";
import DeliveryItem from "../../components/deliveryItem/DeliveryItem";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const Delivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <DeliveryItem />
      <Footer />
    </div>
  );
};

export default Delivery;
