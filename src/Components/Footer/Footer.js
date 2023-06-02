import React from "react";
import logo from "../assets/images/wheat.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="container-fluid footer mt-5 pt-5">
        <div className="row  col-md-11 mx-auto">
          <section className="logoSection col-md-4 ">
            <img src={logo} alt="" />
          </section>
          <section className="ContactSection col-md-5">
            <h4 className="fwt-bold">{t("Contact Us")}</h4>
            <section className="info-section">
              <span className="me-3">{t("Phone No")} </span>{" "}
              <p>+92-051-9292122</p>
            </section>
            <section className="info-section">
              <span className="me-3">{t("E-mail")} </span>{" "}
              <p>webmaster@uaar.edu.pk</p>
            </section>
            <section className="info-section">
              <span className="me-3">{t("Adress")} </span>
              <p>
                {t(
                  "Pir Mehr Ali Shah Arid Agriculture UniversityShamsabad, Muree Road Punjab Rawalpindi 46000"
                )}
              </p>
            </section>
          </section>
          <section className="QuickLinsSection ps-5 col-md-3">
            <h4 className="fwt-bold">Quick Links</h4>
            <section className="footer-links">
              <a href="" className="nav-link">
                {t("About Us")}
              </a>
              <a href="" className="nav-link">
                {t("Blogs")}
              </a>
              <a href="" className="nav-link col-md-3">
                {t("Contact with Botanist")}
              </a>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
