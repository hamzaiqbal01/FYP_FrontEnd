import React,{useState} from "react";
import img from "../assets/images/loginPng.png";
import Tilt from "react-parallax-tilt";
import { SignInService } from "../../services/Auth";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
   const navigate = useNavigate();
  const [user,setUser]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })
  const { addToast } = useToasts();
  const getCallRegister = (e) => {
    e.preventDefault();
    SignInService(user).then((res) =>{   
      if(res.data.code==200){
        addToast(res.data.message, {
          appearance: "success",
          autoDismiss: true
        });
        navigate("/login");
      }else{
        addToast(res.data.message, {
          appearance: "error",
          autoDismiss: true
        })
      }}
   );
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
            <h4 className="mb-4">Sign Up</h4>
            <form action="">
              <label className="my-1 mt-3">First Name</label>
              <input
                type="text"
                className="my-1"
                placeholder="Enter Your First Name"
                required
                name="from_name"
                onChange={(e) => {
                  setUser({ ...user, firstName: e.target.value });
                }}
              />
              <label className="my-1 mt-3">Last Name</label>
              <input
                type="text"
                className="my-1"
                placeholder="Enter Your Last Name"
                required
                name="email_id"
                onChange={(e) => {
                  setUser({ ...user, lastName: e.target.value });
                }}
              />
              <label className="my-1 mt-3">Email</label>
              <input
                type="Email"
                className="my-1"
                placeholder="Example@gmail.com"
                required
                name="email_id"
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

              <button className="submit col-md-7 mx-auto mt-4 py-1"
              onClick={(e) => getCallRegister(e)}
              >
                Sign Up
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
