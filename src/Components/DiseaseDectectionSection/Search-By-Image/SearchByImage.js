import React, { useState, useEffect } from "react";
import css from "./SearchDiseaseByImage.css";
import upimg from "./img/UploadIMG.png";
import axios from "axios";

export default function SearchByImage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [diseaseData, setDiseaseData] = useState(null);

  const handleImageUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData
      );
      setResult(response.data);
      // Call the API with result.class in the body
      await fetchDiseaseData(response.data.class);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const handleInputChange = (event) => {
    handleImageUpload(event);
    handleImage(event);
  };

  const fetchDiseaseData = async (diseaseClass) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/disease/AI_desease",
        { class: diseaseClass }
      );
      setDiseaseData(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="contact-with-botanist search-dise-img p-4 col-md-10 mx-auto row mt-5">
            <h4 className="mx-auto col-md-6 mt-3 mb-5">
              Let's Detect the Disease
            </h4>
            <div className="img-upload-section mb-5  col-md-7">
              <div className="border-section">
                {imageUrl ? (
                  <img src={imageUrl} alt="Preview" className="preview" />
                ) : (
                  <img src={upimg} alt="img" />
                )}
                <div class="file up-btn col-md-4 mt-4">
                  Upload Image
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="preview-detect-section  col-md-5">
              {loading && <p>Loading...</p>}
              {result && (
                <>
                  <p>{result.class}</p>
                  <p>{(result.confidence * 100).toFixed(2)}%</p>
                </>
              )}

              {diseaseData && diseaseData.length > 0 ? (
                <>
                  <p>Disease symptoms: {diseaseData[0].symptoms}</p>
                  <p>Disease treatment: {diseaseData[0].treatment}</p>
                </>
              ) : (
                <>{diseaseData === null ? <></> : <>Plant is healthy</>}</>
              )}

              {console.log(diseaseData)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
