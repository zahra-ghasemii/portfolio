import React from "react";
import "./dialog.css";
import IRflag from "../../assets/languages/IRflag.png";
import USflag from "../../assets/languages/USflag.png";

function Dialog({ setOpen, setLang, setDirection }) {
  return (
    <div className="dialog-outer">
      <div className="dialog-container">
        <div className="dialog-header">
          <h3>Select Language</h3>
          <h3>انتخاب زبان</h3>
        </div>
        <div className="dialog-body">
          <h6>choose your language</h6>
          <h6>زبان خود را انتخاب کنید</h6>
        </div>
        <div className="dialog-footer">
          <button
            className="btn btn-primary lang-btn"
            onClick={() => {
              setLang("en");
              setDirection("ltr");
              setOpen(false);
            }}
          >
            English
            <img src={USflag} alt="english language" />
          </button>
          <button
            className="btn btn-primary lang-btn"
            onClick={() => {
              setLang("fa");
              setDirection("rtl");
              setOpen(false);
            }}
          >
            فارسی
            <img src={IRflag} alt="persian language" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
