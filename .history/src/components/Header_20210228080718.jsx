import React from 'react'
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";



export const Header = () => {
  
const history = useHistory();
const ToHome = () => {
  history.push("/");
};
      const { t } = useTranslation();

    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand">
          <img id="imgLogo" src="/images/upwork.png" onClick={ToHome} />
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
              <div className="dropdown">
                <i
                  className="fas fa-user-circle"
                  data-toggle="dropdown"
                  id="iconNav"
                />
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user-circle" />
                    {t("Ttt Aaar")}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("Close Account")}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("Log out")}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
}
