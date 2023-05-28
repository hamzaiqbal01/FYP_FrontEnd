import React from "react";
import CommonDiseases from "../CommonDiseases/CommonDiseases";
import DiseaseSection from "../DiseaseDectectionSection/DiseaseSection";
import Header from "../Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <DiseaseSection />
      <CommonDiseases />
    </>
  );
}
