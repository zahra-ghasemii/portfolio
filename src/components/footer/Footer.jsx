import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Trans } from "react-i18next";
import IRflag from "../../assets/languages/IRflag.png";
import USflag from "../../assets/languages/USflag.png";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
function Footer({ setLang, setDirection }) {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#header">
            <Trans i18nKey={"home"} />
          </a>
        </li>
        <li>
          <a href="#about">
            <Trans i18nKey={"about"} />
          </a>
        </li>
        <li>
          <a href="#experience">
            <Trans i18nKey={"experience"} />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <Trans i18nKey={"portfolio"} />
          </a>
        </li>
        <li>
          <a href="#certificates">
            <Trans i18nKey={"certificates"} />
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <Trans i18nKey={"testimonials"} />
          </a>
        </li>
        <li>
          <a href="#contact">
            <Trans i18nKey={"contact"} />
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://github.com/zahra-ghasemii"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsTelegram />
        </a>
        <a
          href="https://www.linkedin.com/in/zahra-ghasemi-0441bb227/"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__langOptions">
        <button
          onClick={() => {
            setLang("fa");
            setDirection("rtl");
          }}
        >
          <img src={IRflag} alt="iran language" />
        </button>
        <button
          onClick={() => {
            setLang("en");
            setDirection("ltr");
          }}
        >
          <img src={USflag} alt="usa language" />
        </button>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shine. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
