import React from "react";
import { BsLinkedin, BsTelegram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/zahra-ghasemi-0441bb227/"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/zahra-ghasemii"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
