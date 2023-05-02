import React from "react";
import "./about.css";
import Zahra from "../../assets/zahra2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoProject } from "react-icons/go";
import { Trans } from "react-i18next";
const About = () => {
  return (
    <section id="about">
      <h5>
        <Trans i18nKey={"getToKnow"} />
      </h5>
      <h2>
        <Trans i18nKey={"aboutMe"} />
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={Zahra} alt="About" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>
                <Trans i18nKey={"experience"} />
              </h5>
              <small>
                1+ <Trans i18nKey={"yearsWorking"} />
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>
                <Trans i18nKey={"clients"} />
              </h5>
              <small>
                10+ <Trans i18nKey={"worldwide"} />
              </small>
            </article>
            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>
                <Trans i18nKey={"projects"} />
              </h5>
              <small>
                10+ <Trans i18nKey={"completed"} />
              </small>
            </article>
          </div>
          <p>
            <Trans i18nKey={"aboutMeDescription"} />
          </p>
          <a href="#contact" className="btn btn-primary">
            <Trans i18nKey={"letsTalk"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
