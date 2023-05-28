import React from "react";
import aboutPng from "../assets/images/AboutPng.png";
import Aboutcss from "./About.css";
import Tilt from "react-parallax-tilt";

export default function AboutUs() {
  return (
    <>
      <div>
        <div className="container">
          <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
            {/* <h3 className="my-3">Let's Contact with Botanist </h3> */}
            <section className=" AboutSection col-md-6 ">
              <h4>WHO WE ARE</h4>
              <p className="aboutParagraph mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                iste pariatur voluptas explicabo voluptate. Aspernatur laborum
                accusamus delectus, odit tempora nisi ipsam itaque placeat eaque
                vel facilis accusantium ullam, totam a minus excepturi nostrum!
              </p>
              <button className="btn botanist-btn col-md-4 mt-4">
                Learn More
              </button>
            </section>
            <section className="imgSection col-md-6 ">
              <Tilt>
                <img src={aboutPng} alt="image" />
              </Tilt>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
