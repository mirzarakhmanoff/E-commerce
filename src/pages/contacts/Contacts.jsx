import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactsItem from "../../components/contactsItem/ContactsItem";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <ContactsItem />
      <Footer />
    </div>
  );
};

export default Contacts;
