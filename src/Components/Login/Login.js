import React, { useState } from "react";
import img from "../assets/images/loginPng.png";
import css from "./Login.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { LoginService } from "../../services/Auth";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { addToast } = useToasts();
  const getCallLogin = (e) => {
    e.preventDefault();
    console.log(user);
    LoginService(user).then((res) => {
      if (res.data.code == 200) {
        addToast(res.data.message, {
          appearance: "success",
          autoDismiss: true,
        });
        navigate("/");
      } else {
        addToast(res.data.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
          <section className="imgSection col-md-7 my-5">
            <Tilt>
              <img src={img} alt="" />
            </Tilt>
          </section>
          <section className="contactSection loginsection col-md-5 ">
            <h4 className="mb-4">Sign In</h4>
            <form action="">
              <label className="my-1 mt-3">Username</label>
              <input
                type="text"
                className="my-1"
                placeholder="Enter Your Email"
                required
                name="from_name"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
              <label className="my-1 mt-3">Password</label>
              <input
                type="Password"
                className="my-1"
                placeholder="Enter Your Password"
                required
                name="email_id"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <div className="checkboxContainer mt-3">
                <input
                  class="form-check-input mx-2 "
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>

              <button
                className="submit col-md-7 mx-auto mt-4 py-1"
                onClick={(e) => getCallLogin(e)}
              >
                Login
              </button>
              {/* <Link className="nav-link mt-3" aria-current="page" to="">
                <u> Forgot Password</u>
              </Link> */}
              <div className="createAccountBtn mt-3">
                Don't Have an account ?
                <Link
                  className="nav-link mx-2 creat-acc-Link"
                  aria-current="page"
                  to="/Signup"
                >
                  <u> Create Account</u>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
