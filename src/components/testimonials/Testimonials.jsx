import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Golshenas.jpeg";
import AVTR2 from "../../assets/Khani.jpeg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Trans, useTranslation } from "react-i18next";
function Testimonials() {
  const { t } = useTranslation();
  const data = [
    {
      avatar: AVTR1,
      name: t("HamedGolshenas"),
      position: t("HamedGolshenasP"),
      review: t("HamedGolshenasC"),
    },
    {
      avatar: AVTR2,
      name: t("MohammadKhani"),
      position: t("MohammadKhaniP"),
      review: t("MohammadKhaniC"),
    },
    // {
    //   avatar: AVTR3,
    //   name: "Tina Snow",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    // },
    // {
    //   avatar: AVTR4,
    //   name: "Tina Snow",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    // },
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
