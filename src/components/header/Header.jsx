import React from "react";
import "./header.css";
import CTA from "./CTA";
import Zahra from "../../assets/zahra1.png";
import HeaderSocials from "./HeaderSocials";
import { Trans } from "react-i18next";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>
          <Trans i18nKey={"hello"} />
        </h5>
        <h1>
          <Trans i18nKey={"name"} />
        </h1>
        <h5 className="text-light">
          <Trans i18nKey={"myPostion"} />
        </h5>
        <small>
          <Trans i18nKey={"myAddress"} />
        </small>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Zahra} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          <Trans i18nKey={"scrollDown"} />
        </a>
      </div>
    </header>
  );
}

export default Header;
