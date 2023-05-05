import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { BsTelegram } from "react-icons/bs";
import { Trans } from "react-i18next";
import { t } from "i18next";

function Contact() {
  const form = useRef();
  const constsendEmail = (e) => {
    console.log(e)
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5rh7syn",
        "template_sl0onaa",
        form.current,
        "JmK7QIb4jhfmMc7K-"
      )
      .then(
        (result) => {
          // console.log(result);
        },
        (error) => {
          // console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>
        <Trans i18nKey={"getInTouch"} />
      </h5>
      <h2>
        <Trans i18nKey={"contactMe"} />
      </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>
              <Trans i18nKey={"email"} />
            </h4>
            <h5>ghz40534@gmail.com</h5>
            <a href="mailto:ghz40534@gmail.com">
              <Trans i18nKey={"sendAmessage"} />
            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>
              <Trans i18nKey={"telegram"} />
            </h4>
            <h5>Zahra Ghasemi</h5>
            <a href="https://t.me/zahra_zghh">
              <Trans i18nKey={"sendAmessage"} />
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>
              <Trans i18nKey={"whatsApp"} />
            </h4>
            <h5>989101696915</h5>
            <a href="https://wa.me/+989101696915">
              <Trans i18nKey={"sendAmessage"} />
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={constsendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("formNameP")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("formEmailP")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("formMessageP")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            <Trans i18nKey={"sendMessage"} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
