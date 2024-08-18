import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { memo } from "react";

const SetAdmin = () => {
  const darkHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className=" flex container mx-auto">
      <div className="mt-6 w-80 h-[100vh] bg-[]">
        <ul className="flex gap-[30px] flex-col py-3">
          <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>

          <li>
            <NavLink to={"/admin/MyProfile"}>My Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/Subscribes"}>Show Subscribes</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 py-8 text-center">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(SetAdmin);
