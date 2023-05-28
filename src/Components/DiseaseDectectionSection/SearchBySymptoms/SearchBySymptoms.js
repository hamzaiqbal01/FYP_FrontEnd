import React, { useState } from "react";
import imgVector from "../Search-By-Image/img/byname.png";
import axios from "axios";

export default function SearchBySymptoms() {
  const [results, setResults] = useState([]);
  const [symptom1, setSymptom1] = useState("");
  const [symptom2, setSymptom2] = useState("");
  const [symptom3, setSymptom3] = useState("");
  // const [SymptomData, setSymptomData] = useState([])

  const requestBody = {
    symptom: [symptom1, symptom2, symptom3],
  };

  const imgStyle = {
    width: "80%",
    padding: 10,
    marginLeft: 30,
  };

  const GetFiltterData = async (event) => {
    event.preventDefault();
    console.log(requestBody);
    const url = `http://localhost:3001/api/symptoms/searchSymptoms`;

    const response = await axios.post(url, requestBody);
    console.log("res====>", response.data.data);

    if (response.status === 200) {
      const data = response.data.data;
      // Filter the received data based on the symptoms
      setResults(data);
    } else if (response.status === 404) {
      setResults([]);
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  };
  return (
    <div className="container">
      {console.log(results)}
      <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
        <section className="by-name-imgSection  col-md-7 my-3">
          <img src={imgVector} alt="" style={imgStyle} />
        </section>
        <section className="contactSection loginsection col-md-5 ">
          <h4 className="mb-4">Search Disease By Symptoms</h4>
          <form action="">
            <label className="my-1 mt-3">Symptom 1</label>
            <input
              type="text"
              className="my-1"
              placeholder="Enter the First symptom"
              required
              name="from_name"
              onChange={(e) => setSymptom1(e.target.value)}
            />
            <label className="my-1 mt-3">Symptom 2</label>
            <input
              type="text"
              className="my-1"
              placeholder="Enter the Second symptom"
              required
              name="from_name"
              onChange={(e) => setSymptom2(e.target.value)}
            />
            <label className="my-1 mt-3">Symptom 3</label>
            <input
              type="text"
              className="my-1"
              placeholder="Enter the Third symptom"
              required
              name="from_name"
              onChange={(e) => setSymptom3(e.target.value)}
            />

            <button
              className="submit col-md-7 mx-auto mt-4 py-1"
              onClick={GetFiltterData}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Search
            </button>
          </form>
        </section>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Result
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {console.log(results)}
              {results.length > 0 ? (
                <div>
                  <div>{results[0].desaese_name}</div>
                  <ul>
                    <li>{results[0].symptoms[0]}</li>
                    <li>{results[0].symptoms[1]}</li>
                    <li>{results[0].symptoms[2]}</li>
                  </ul>
                  <div>{results[0].treatment}</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
