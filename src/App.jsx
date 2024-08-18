import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Delivery from "./pages/delivery/Delivery";
import Contacts from "./pages/contacts/Contacts";
import Error from "./pages/error/Error";
import Detail from "./components/Detail/Detail";
import LoginPage from "./pages/loginPage/LoginPage";
import AdminPage from "./pages/adminPage/AdminPage";

function App(selectedCategory) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/product/:id"
          element={<Detail selectedCategory={selectedCategory} />}
        />
        <Route path="login" element={<LoginPage />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
