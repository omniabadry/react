import React from 'react'
import { useTranslation } from "react-i18next";


export const ConDiv = () => {
          const { t } = useTranslation();

  return (
    <div className="col-3 d-xl-block d-lg-none d-sm-none d-md-none d-none ">
  <button className="btn active buttons"><i className="fas fa-arrow-up" />&nbsp; &nbsp;{t("Getting Started")}</button><br />
  <button className="btn active buttons"><i className="fas fa-pencil-ruler" />&nbsp;&nbsp;{t("Expertise")}</button><br />
  <button className="btn active buttons"><i className="fas fa-poll" /> &nbsp; &nbsp; {t("Expertise Level")}</button><br />
  <button className="btn active buttons"><i className="fas fa-graduation-cap" />&nbsp;&nbsp;{t("Education")}</button><br />
  <button className="btn active buttons"><i className="fas fa-building" /> &nbsp; &nbsp;{t("Employment")}</button><br />
  <button className="btn active buttons"><i className="fas fa-microphone" /> &nbsp; &nbsp;{t("Languages")}</button><br />
  <button className="btn active buttonSelected11"><i className="fas fa-dollar-sign" /> &nbsp; &nbsp; {t("Hourly Rate")}</button><br />
  <button className="btn disabled buttons"><i className="fas fa-user-tie" /> &nbsp; &nbsp; {t("Title")} &amp; {t("Overview")}
  </button><br />
  <button className="btn disabled buttons"><i className="fas fa-camera" /> &nbsp; &nbsp; {t("Profile Photo")}
  </button><br />
  <button className="btn disabled buttons"><i className="fas fa-map-marker-alt" /> &nbsp; &nbsp;{t("Location")}</button><br />
  <button className="btn disabled buttons"><i className="fas fa-phone-alt" /> &nbsp; &nbsp; {t("Phone")} </button><br />
</div>


  )
}
