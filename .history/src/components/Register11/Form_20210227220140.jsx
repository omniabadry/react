import React from 'react'
import { LanguageDiv } from "./LanguageDiv";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Form = () => {
  const history = useHistory();
  const handleRegisterNext11 = () => {
    history.push("/Register12")
  }
  const handleRegisterBack11 = () => {
    history.push("/Register10")
  }

  const { t } = useTranslation();

  return (

    <form className="col-xl-8 col-12 col-sm-12 col-md-12" id="form11Design">
      <div className="card-fluid">
        <p className="card crdhd"><b>{t("Languages")}</b><span className="text-muted mutepara">{t("6 of 11")}</span></p>
        <div className="card-body" id="crd">
          <h4 className="text-left mb-4"><b>{t("What is your English proficiency?")}</b></h4>
          <div className="card-text">
            <div className="row">
              <div className="col-xl-6 col-12">
                <div className="dropdown">
                  <button className="btn btn-muted dateBtn11 dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">{t("English proficiency")}
                </button>
                  <ul className="dropdown-menu p-2">
                    <li className="btn btn-default text-left enBtn">{t("Basic")}<p className="text-muted">{t("I Write in this language decently")}</p></li>
                    <li className="btn btn-default text-left enBtn">{t("Conversational")}<p className="text-muted">{t("I Write and speak this language well")}</p></li>
                    <li className="btn btn-default text-left enBtn">{t("Fluent")}<p className="text-muted">{t("I Write and speak this language almost perfectly")}</p></li>
                    <li className="btn btn-default text-left enBtn">{t("Nativ or Bilingual")}<p className="text-muted">{t("I Write and speak this language perfectly, including colloquialisms")}</p></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 d-lg-none" />
            </div>
            <label className="text-left my-5"><b>{t("What other languages do you speak?")}</b></label><br />
            <button type="button" className="btn btn-outline addEdue11" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>
              {t("Add Language")}</b></button><br /><br /><br />
            <LanguageDiv />
            <button className="btn-link mb-2 skipBtn">{t("Skip this step")}</button>
          </div>
        </div>
        <div className="card-footer bg-white crdfooter">
          <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext11}><b>{t("Next")}</b></button>
          <button className="btn btn-link btn-outline col-lg-5 col-sm-12" id="backBtn" type="submit" onClick={handleRegisterBack11}><b>{t("Back")}</b></button>
        </div>
      </div>
    </form>

  )
}
