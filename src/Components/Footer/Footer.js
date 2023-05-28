import React from "react";
import logo from "../assets/images/wheat.png";
export default function Footer() {
  return (
    <>
      <div className="container-fluid footer mt-5 pt-5">
        <div className="row  col-md-11 mx-auto">
          <section className="logoSection col-md-4 ">
            <img src={logo} alt="" />
          </section>
          <section className="ContactSection col-md-5">
            <h4 className="fwt-bold">Contact Us</h4>
            <section className="info-section">
              <span className="me-3">Phone No : </span> <p>+92-051-9292122</p>
            </section>
            <section className="info-section">
              <span className="me-3">E-mail : </span>{" "}
              <p>webmaster@uaar.edu.pk</p>
            </section>
            <section className="info-section">
              <span className="me-3">Adress: </span>
              <p>
                Pir Mehr Ali Shah Arid Agriculture UniversityShamsabad, Muree،
                Road, Punjab، Rawalpindi, 46000
              </p>
            </section>
          </section>
          <section className="QuickLinsSection ps-5 col-md-3">
            <h4 className="fwt-bold">Quick Links</h4>
            <section className="footer-links">
              <a href="" className="nav-link">
                About Us
              </a>
              <a href="" className="nav-link">
                Blogs
              </a>
              <a href="" className="nav-link col-md-3">
                Contact with Botanist
              </a>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
