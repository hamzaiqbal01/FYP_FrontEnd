import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function CommonDiseases() {
  const [changeLang, setLang] = useState(0);
  const { t, i18n } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const handleDropdownClick = () => {
    setLang(1);
  };
  return (
    <>
      <div className="container-fluid detection-section mt-4">
        <div className="container">
          <div className="row col-md-4 mx-auto mt-5  heading-para-row">
            <h3 className="fw-bold">{t("Most Common Diseases")}</h3>
            <p className="short-line fst-italic">
              {t("Following are Most Common Diseases")}
            </p>
          </div>
          <div className="row col-md-9 mx-auto  py-4 ">
            <Swiper
              modules={[Navigation, Pagination, FreeMode, Autoplay]}
              autoplay={true}
              grabCursor={true}
              slidesPerView={4}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
            >
              <SwiperSlide>
                <div className=" swiperCard swiperCard1 col-md-9 py-0">
                  <p className="col-md-12">Yellow Dwarf</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" swiperCard swiperCard2 col-md-9 py-0">
                  <p className="col-md-12">Yellow Dwarf</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" swiperCard swiperCard3 col-md-9 py-0">
                  <p className="col-md-12">Yellow Dwarf</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" swiperCard swiperCard4  col-md-9 py-0">
                  <p className="col-md-12">Yellow Dwarf</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" swiperCard swiperCard5 col-md-9 py-0">
                  <p className="col-md-12">Yellow Dwarf</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
