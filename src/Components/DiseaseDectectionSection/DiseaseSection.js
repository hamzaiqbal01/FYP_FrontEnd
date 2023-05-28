import React from "react";
import Card from "./Diseases-Catagory-cards/Card";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function DiseaseSection() {
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="container-fliud detection-section" id="detectionSection">
        <div className="container">
          <div className="row col-md-4 mx-auto mt-4  heading-para-row">
            <h3 className="fw-bold">{t("Let's Detect The Disease")}</h3>
            <p className="short-line fst-italic">
              {t("Findout their syptoms and Pesticides")}
            </p>
          </div>
          <div className="row catagory-section col-md-12  py-5">
            <Card
              link="/searchByImg"
              heading="Search By Image"
              image={require("../assets/images/cardImg1.png")}
            />
            <Card
              link="/searchByName"
              heading="Search By Disease"
              image={require("../assets/images/CardImg2.png")}
            />
            <Card
              link="/searchBySymptoms"
              heading="Search By Symptoms"
              image={require("../assets/images/Cardimg3.png")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
