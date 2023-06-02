import React from "react";
import contactUspng from "../assets/images/ContactUs.png";
import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function ContactWithBotanistComp() {
  const notify = () => toast("Message Sent Boatnist will Contact");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n5tlsi6",
        "template_9pp3vw8",
        e.target,
        "cQIVv_dNsH7tzAIM4"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
          {/* <h3 className="my-3">Let's Contact with Botanist </h3> */}
          <section className="imgSection col-md-7 ">
            <Tilt>
              <img src={contactUspng} alt="" />
            </Tilt>
          </section>
          <section className="contactSection col-md-5 ">
            <h4 className="mb-4">{t("Let's Contact with Botanist")}</h4>
            <form action="" onSubmit={sendEmail}>
              <label className="my-1 mt-3">Name</label>
              <input
                type="text"
                className="my-1"
                placeholder="Enter Your Name"
                required
                name="from_name"
              />
              <label className="my-1 mt-3">Email</label>
              <input
                type="Email"
                className="my-1"
                placeholder="Example@gmail.com"
                required
                name="email_id"
              />
              <label className="my-1 mt-3">{t("Subject")}</label>
              <input
                type="text"
                className="my-1"
                placeholder="I have Problem in ......"
                name="subject"
              />
              <label className="my-1 mt-3">{t("Message")}</label>
              <textarea
                type="text"
                className="my-1"
                placeholder="Leave a message here"
                rows="3"
                required
                name="message"
              />
              <button className="submit col-md-7 mx-auto mt-4 py-1">
                Send Email
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
