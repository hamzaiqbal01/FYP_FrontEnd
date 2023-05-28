import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import navCss from "./Components/Navbar/navbar.css";
import Header from "./Components/Header/Header";
import HeaderCss from "./Components/Header/Header.css";
import DiseaseSection from "./Components/DiseaseDectectionSection/DiseaseSection";
import DetectionSectionCss from "./Components/DiseaseDectectionSection/DiseaseDectionSection.css";
import cardCss from "./Components/DiseaseDectectionSection/Diseases-Catagory-cards/Card.css";
import CommonDiseases from "./Components/CommonDiseases/CommonDiseases";
import commonDiseaseCss from "./Components/CommonDiseases/CommonDisease.css";
import Footer from "./Components/Footer/Footer";
import footerCss from "./Components/Footer/Footer.css";
import BotanistCss from "./Components/ContactWithBotanist/ContactWithBotanist.css";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About Us/AboutUs";
import Blogs from "./Components/Blogs/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactWithBotanistComp from "./Components/ContactWithBotanist/ContactWithBotanistComp";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import SearchByImage from "./Components/DiseaseDectectionSection/Search-By-Image/SearchByImage";
import SearchByName from "./Components/DiseaseDectectionSection/SearchByName/SearchByName";
import SearchBySymptoms from "./Components/DiseaseDectectionSection/SearchBySymptoms/SearchBySymptoms";
import Blog_Detail from "./Components/Blogs/Blog_Detail";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/botanist" element={<ContactWithBotanistComp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/searchByImg" element={<SearchByImage />} />
          <Route exact path="/searchByName" element={<SearchByName />} />

          <Route exact path="/Blog/:id" element={<Blog_Detail />} />
          <Route
            exact
            path="/searchBySymptoms"
            element={<SearchBySymptoms />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
