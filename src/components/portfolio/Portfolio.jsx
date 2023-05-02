import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projects/project1.jpg";
import IMG2 from "../../assets/projects/project2.jpg";
import IMG3 from "../../assets/projects/project3.jpg";
import IMG4 from "../../assets/projects/project4.jpg";
import { Trans, useTranslation } from "react-i18next";
function Portfolio() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("portfolio1title"),
      // github: "https://github.com/alireza-phy/snapp-market-react",
      // demo: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: t("portfolio2title"),
      // github: "https://github.com/shayan-hamidi/onlineShopReact",
      // demo: "https://shayan-hamidi.github.io/onlineShopReact/",
    },
    {
      id: 3,
      image: IMG3,
      title: t("portfolio3title"),
      // github: "https://github.com/shayan-hamidi/dashboard-nodin-soft",
      // demo: "https://github.com",
    },
    {
      id: 4,
      image: IMG4,
      title: t("portfolio4title"),
      // github: "https://github.com/shayan-hamidi/tamrin-UI-films",
      // demo: "https://shayan-hamidi.github.io/tamrin-UI-films/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>
        <Trans i18nKey={"recentWork"} />
      </h5>
      <h2>
        <Trans i18nKey={"portfolio"} />
      </h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github ? (
                  <a
                    href={github}
                    className="btn"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Trans i18nKey={"github"} />
                  </a>
                ) : null}
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Trans i18nKey={"liveDemo"} />
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

export default Portfolio;
