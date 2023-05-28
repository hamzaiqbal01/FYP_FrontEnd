import React from "react";
import Navbar from "../Navbar/Navbar";
import wheatImg from "../assets/images/doublewheatrpng.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import twiter from "../assets/images/twitter.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <header className="container-fluid ">
        <div className=" d-flex main-container  mt-md-5 mt-0 px-5 py-5">
          <div className="row col-md-12 col-12 row-for-mobile">
            {/* text container */}
            <section className="text-container  col-md-6 col-12  px-4">
              <h1>{t("Don't Say Its Wheat Until You Harvest It")}</h1>
              <p>
                {t(
                  "The most important factor in reduction of quality and quantity of crop is due to plant disease. Identifying plant disease is akey to prevent agricultural losses"
                )}
              </p>
              <Link to="/botanist">
                <button className="btn botanist-btn mt-4 col-md-4 col-12">
                  {t("Contact with Botanist")}
                </button>
              </Link>
            </section>
            {/* img container */}
            <section className="img-container  col-md-5 col-12">
              <img src={wheatImg} alt="wheat img" />
            </section>

            {/* icons */}
            <div className="icon-container  col-md-1">
              <a href="/">
                <img src={fb} alt="facebook" className="my-2" />
              </a>
              <a href="/">
                {" "}
                <img src={insta} alt="insta" className="my-3" />
              </a>
              <a href="">
                {" "}
                <img src={twiter} alt="twitter" className="my-2" />
              </a>
              <span className="vertical-line mx-3"></span>
            </div>
          </div>
        </div>
        <div className="scroler col-md mx-auto">
          <a
            href="#detectionSection"
            className="scroll-down"
            address="true"
          ></a>
        </div>
      </header>
    </>
  );
}
