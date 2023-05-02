import React from "react";
import { Trans, useTranslation } from "react-i18next";
import persianCV from "../../assets/CV/persianCV.pdf";
import englishCv from "../../assets/CV/englishCv.pdf";
function CTA() {
  const { i18n } = useTranslation();
  return (
    <div className="cta">
      <a
        href={i18n.language === "en" ? englishCv : persianCV}
        download
        className="btn"
      >
        <Trans i18nKey={"downloadCV"} />
      </a>
      <a href="#contact" className="btn btn-primary">
        <Trans i18nKey={"letsTalk"} />
      </a>
    </div>
  );
}

export default CTA;
