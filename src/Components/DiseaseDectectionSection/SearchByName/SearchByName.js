import React, { useState } from "react";
import imgVector from "../Search-By-Image/img/byname.png";
import { GetDiscaseListService } from "../../../services/Discase";
import { useEffect } from "react";
export default function SearchByName() {
  const [disease, SetDisease] = useState("");
  const [discaseList, SetDiscaseList] = useState([]);
  const [diseaseData, setDiseaseData] = useState([]);
  const diseaseList = [
    "Leaf Rust",
    "Stripe Rust",
    "Leaf Rust",
    "Stripe Rust",
    "Leaf Rust",
    "Stripe Rust",
    "Leaf Rust",
    "Stripe Rust",
    "Leaf Rust",
    "Stripe Rust",
    "Leaf Rust",
    "Stripe Rust",
  ];

  const imgStyle = {
    width: "80%",
    padding: 10,
    marginLeft: 30,
  };

  const searchDisease = (e) => {
    e.preventDefault();
    // name of discase
    console.log("Discase name", disease);

    // add filter logic by the discase name

    const searchDiscase = discaseList.filter(
      (listItem) => listItem.name == disease
    );
    console.log(searchDiscase);
    setDiseaseData(searchDiscase);
  };

  useEffect(() => {
    // get list of all discase
    GetDiscaseListService(disease)
      .then((res) => {
        SetDiscaseList(res.data.data);
        console.log("Api data");
        console.log(res.data);
        const diseaseData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
        <section className="by-name-imgSection  col-md-7 my-3">
          <img src={imgVector} alt="" style={imgStyle} />
        </section>
        <section className="contactSection loginsection col-md-5 ">
          <h4 className="mb-4">Search Your Wheat Disease Here</h4>
          <form action="">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="my-1 mt-3">Disease Name</label>
              <input
                list="diseaseList"
                type="text"
                className="my-1"
                placeholder="Enter the Disease Name"
                required
                name="from_name"
                onChange={(e) => SetDisease(e.target.value)}
              />
              <datalist id="diseaseList" size="5" className="data__list">
                {diseaseList.map((dataItem) => (
                  <option>{dataItem}</option>
                ))}
              </datalist>
            </div>
            <button
              className="submit col-md-7 mx-auto mt-4 py-1"
              onClick={(e) => searchDisease(e)}
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
              <div>
                {diseaseData.length <= 0 ? (
                  <>
                    {" "}
                    <p>Data not exist</p>
                  </>
                ) : (
                  diseaseData.map((item) => {
                    return (
                      <div className="modal-data">
                        <div className="modal-text">
                          <h1>{item.name}</h1>
                          <h3>Symptoms</h3>
                          <p>{item.symptoms}</p>
                          <p>{item.treatment}</p>
                        </div>
                        <div className="modal-img-sec">
                          {/* <img src={item.madicineImage} alt="Base64 Image" /> */}
                          <img
                            src={"data:image/png;base64," + item.madicineImage}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
