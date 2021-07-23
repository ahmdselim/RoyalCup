import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="ti-unlink"></span>
            <Link to="/" className="royalLink">
              <span>Royal Cup</span>
            </Link>
          </h3>
          <label htmlFor="sidebar-toggle" className="ti-menu-alt"></label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="/admin">
                <span className="ti-home"></span>
                <span>الرئيسيه</span>
              </Link>
            </li>
            <li>
              <Link to="/addBlog">
                <span className="ti-face-smile"></span>
                <span>اضافه منشور</span>
              </Link>
            </li>
            <li>
              <Link to="/addProduct">
                <span className="ti-face-smile"></span>
                <span>اضافه منتج</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span className="ti-infinite"></span>
                <span>حسابي</span>
              </Link>
            </li>
            <li>
              <Link to="/logOut">
                <span className="ti-face-smile"></span>
                <span>تسجيل خروج</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
