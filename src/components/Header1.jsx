import React from 'react'
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const Header = () => {

    const { t } = useTranslation();

      const history = useHistory();
     const ToSignIn = () => {
       history.push("/LogIn");
     };
const ToHome = () => {
  history.push("/");
};
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" onClick={ToHome}>
          <img id="imgLogo" src="/images/upwork.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p className=" nav-link insideLoginWord1">
                {t("Already have an account?")}
              </p>
              <a
                className="nav-link "
                id="loginWord1"
                onClick={ToSignIn}
                onmousemove="this.parentElement.style.color='#378b37'"
              >
                {t("Log In")}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
