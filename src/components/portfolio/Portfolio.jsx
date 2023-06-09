import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projects/project1.jpg";
import IMG2 from "../../assets/projects/project2.jpg";
import IMG3 from "../../assets/projects/project3.jpg";
import IMG4 from "../../assets/projects/project4.jpg";
import IMG5 from "../../assets/projects/project5.jpg";
import { Trans, useTranslation } from "react-i18next";
function Portfolio() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("portfolio1title"),
      demo: "https://www.figma.com/file/VT20tBdKsnBk9FjdUpqMde/Flower-store?node-id=0%3A1&t=R1C9d0OPQmV4LJ4G-1",
      caption: t("portfolio1Caption"),
    },
    {
      id: 2,
      image: IMG2,
      title: t("portfolio2title"),
      demo: "https://www.figma.com/file/spT5q6ogJZZpGIJXUmxH0b/First-Project-(Responsive)?node-id=0%3A1&t=YLLBfN1C1Du31ojU-1",
      caption: t("portfolio2Caption"),
    },
    {
      id: 3,
      image: IMG3,
      title: t("portfolio3title"),
      demo: "https://www.figma.com/file/bJv7Xwvoo8gQsg0YKbbxKd/Dashboard?node-id=0%3A1&t=icSbr6uwgmUCN31f-1",
      caption: t("portfolio3Caption"),
    },
    {
      id: 4,
      image: IMG4,
      title: t("portfolio4title"),
      demo: "https://www.figma.com/file/VdRd4oOaXwjyQApvHKspWf/Music-App?node-id=0%3A1&t=4IFz56Qk8u7pUQyx-1",
      caption: t("portfolio4Caption"),
    },
    {
      id: 5,
      image: IMG5,
      title: t("portfolio5title"),
      demo: "https://www.figma.com/file/F7EPonswjfS7qER75D73bM/reservation?type=design&node-id=0%3A1&t=gVkVkwrmjoJKj74n-1",
      caption: t("portfolio5Caption"),
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
        {data.map(({ id, image, title, github, demo, caption }) => {
          return (
            <article key={id} className="portfolio__item">
              <div>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
              </div>
              {caption && <p>{caption}</p>}
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
                    <Trans i18nKey={"viewOnFigma"} />
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
