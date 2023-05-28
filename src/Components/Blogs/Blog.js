import React from "react";

export default function Blog(props) {
  return (
    <div className="container">
      <div className="row col-md-12 ">
        <div className="blogs-section mb-5 col-md-12">
          <div className="text-section">
            <h5> {props.heading}</h5>
            <p className="col-md-11 py-2">{props.discribtion}</p>
          </div>
          <div className="img-section">
            <img src={props.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
