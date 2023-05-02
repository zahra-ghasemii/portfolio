import React from "react";
import "./testimonials.css";
import Shayan from "../../assets/testimonials/Shayan.jpg";
import Mahdis from "../../assets/testimonials/mahdis.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Trans, useTranslation } from "react-i18next";
function Testimonials() {
  const { t } = useTranslation();
  const data = [
    {
      avatar: Shayan,
      name: t("ShayanHamidi"),
      position: t("ShayanHamidiP"),
      review: t("ShayanHamidiC"),
    },
    {
      avatar: Mahdis,
      name: t("MahdisNazemi"),
      // position: t("MahdisNazemiP"),
      review: t("MahdisNazemiC"),
    },
  ];
  return (
    <section id="testimonials">
      <h5>
        <Trans i18nKey={"colleaguesReview"} />
      </h5>
      <h2>
        <Trans i18nKey={"testimonials"} />
      </h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, position }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              {position ? <h6>{position}</h6> : null}
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
