import React, { useState, useEffect } from "react";
import css from "./SearchDiseaseByImage.css";
import upimg from "./img/UploadIMG.png";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="contact-with-botanist search-dise-img flex-column p-4 col-md-10 mx-auto row mt-5">
            <h4 className="mx-auto col-md-6 mt-3 mb-5">
              {t("Let's Detect the Disease")}
            </h4>
            <div className="img-upload-section mb-5  col-md-7">
              <div className="border-section">
                {imageUrl ? (
                  <img src={imageUrl} alt="Preview" className="preview" />
                ) : (
                  <img src={upimg} alt="img" />
                )}
                <div class="file up-btn col-md-4 my-4">
                  {t("Upload Image")}
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="preview-detect-section  ">
              {loading && <p>Loading...</p>}
              {result && (
                <>
                  <div className="dis-name d-flex flex-row">
                    <h5 className="fw-bold">{t("Disease Name")}</h5>
                    <p>{result.class}</p>
                  </div>
                  <div className="dis-name d-flex flex-row">
                    <h5 className="fw-bold">{t("Confidence")}</h5>
                    <p>{(result.confidence * 100).toFixed(2)}%</p>
                  </div>
                </>
              )}

              {diseaseData && diseaseData.length > 0 ? (
                <>
                  <div className="symptreat">
                    <h5 className="fw-bold">{t("Disease symptoms:")} </h5>
                    <p>{t(diseaseData[0].symptoms)}</p>
                    <h5 className="fw-bold">{t("Disease treatment:")} </h5>
                    <p>{t(diseaseData[0].treatment)}</p>
                  </div>
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
