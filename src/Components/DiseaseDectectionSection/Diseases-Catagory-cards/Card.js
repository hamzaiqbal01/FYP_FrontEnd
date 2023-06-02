import React from "react";
import { Link } from "react-router-dom";
export default function card(props) {
  return (
    <>
      <div className="card col-md-3 col-10  mx-2 my-md-0 my-3 mx-auto">
        <div className="cardImg py-4">
          <img src={props.image} alt="" className="imge" />
        </div>

        <div className="cardContent">
          <p className="font-italic">{props.para}</p>
          <div className="btnSection mb-3">
            <Link to={props.link}>
              {" "}
              <button>{props.heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
