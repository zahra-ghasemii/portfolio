import React from "react";
import "./certificates.css";
import IMG1 from "../../assets/certificates/googleUx.jpg";
import IMG2 from "../../assets/certificates/metaUx.jpg";
import IMG3 from "../../assets/certificates/queraFront.jpg";
import { Trans, useTranslation } from "react-i18next";
function Certificates() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("certificate1title"),
      demo: "https://coursera.org/share/d42c35fef8eed2452e59e18bd0737819",
    },
    {
      id: 2,
      image: IMG2,
      title: t("certificate2title"),
      demo: "https://coursera.org/share/172e3018ede4e46760e488f79195af28",
    },
    {
      id: 3,
      image: IMG3,
      title: t("certificate3title"),
      demo: "https://quera.org/certificate/Id3G1XGN/",
    },
  ];
  return (
    <section id="certificates">
      <h5>
        <Trans i18nKey={"recentCourses"} />
      </h5>
      <h2>
        <Trans i18nKey={"certificates"} />
      </h2>
      <div className="container certificate__container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="certificate__item">
              <div className="certificate__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="certificate__item-cta">
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Trans i18nKey={"viewCertificate"} />
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Certificates;
