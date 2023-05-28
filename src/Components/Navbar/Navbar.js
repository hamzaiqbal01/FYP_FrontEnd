import React, { useState } from "react";
import logo from "../assets/images/wheat.png";
import { Link, NavLink } from "react-router-dom";
import navcss from "./navbar.css";
import menuBtn from "../assets/images/menu_100px.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Navbar() {
  const [changeLang, setLang] = useState(0);
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const handleDropdownClick = () => {
    setLang(1);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 px-3">
        <section className="ps-md-5 col-md-3  navLogo border">
          <img src={logo} alt="lgoo" />
        </section>

        {/*  */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="nav-toggle-button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <section
          className="menu  collapse navbar-collapse nav-menu col-md-6 px-2"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item px-4">
              <NavLink className="nav-link " aria-current="page" to="/">
                {t("Home")}
              </NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink className="nav-link " aria-current="page" to="/Blogs">
                {t("Blogs")}
              </NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink className="nav-link " aria-current="page" to="/About">
                {t("About Us")}
              </NavLink>
            </li>
          </ul>
        </section>

        {/* btn group */}
        <section className="btn-group col-md-3 col-5 px-2">
          <div className="row d-flex col-md-12 col-12 flex-nowrap  justify-content-center">
            <select
              name=""
              id=""
              className="lang-select col-md-4  col-7"
              onChange={(e) => handleClick(e)}
            >
              <option value="en">English</option>
              <option value="ur" onClick={handleDropdownClick}>
                اردو
              </option>
            </select>
            {console.log(changeLang)}
            <button
              type="button"
              className="btn login-btn  mx-2  col-md-4 col-6"
            >
              <Link className="nav-link" aria-current="page" to="/login">
                {t("Login")}
              </Link>
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}
