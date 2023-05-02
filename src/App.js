import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Particle from "./components/particle/Particle";
import Dialog from "./components/dialog/Dialog";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const [open, setOpen] = useState(true);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [direction, setDirection] = useState(
    i18n.language === "fa" ? "rtl" : "ltr"
  );
  useEffect(() => {
    i18n.changeLanguage(lang);
    if (lang === "fa") {
      document.body.style.direction = direction;
      document.body.style.fontFamily = "IRANSans";
    } else {
      document.body.style.direction = direction;
    }
  }, [lang, i18n, direction]);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Particle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer setLang={setLang} setDirection={setDirection} />
      {open && (
        <Dialog
          setOpen={setOpen}
          setLang={setLang}
          setDirection={setDirection}
        />
      )}
    </>
  );
}

export default App;
