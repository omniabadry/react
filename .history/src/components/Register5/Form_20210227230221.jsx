import React from 'react'
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Form = () => {
  const history = useHistory();
  const handleRegisterNext5 = () => {
    history.push("/Register6")
  }

    const { t } = useTranslation();

  // const handleRegisterBack9 = () => {
  //   history.push("/Register8")
  // }
  return (
    <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="form5Design">
      <div className="card-fluid">
        <h2 className="card crdhd"><b>{t("Getting Started")}</b></h2><br /><br />
        <div className="card-body" id="crd">
          <h3 className="card-title" id="crdtitle">{t("How would you like to fill out your profile?")}</h3><br />
          <p className="card-text">{t("To speed this up, upload a PDF of your LinkedIn profile.You can edit it after importing.")}</p><br />
          <button className="btn btn-link btn-outline" id="uploadBtn" href="#"><b>{t("Upload Your")} LinkedIn {t("Profile")}</b></button><br /><br />
          <button className="btn btn-link btn-outline" id="startBtn" type="submit" onClick={handleRegisterNext5}><b>{t("Fill Out Manually")}</b></button>        </div>
      </div>
    </form>


  )
}
