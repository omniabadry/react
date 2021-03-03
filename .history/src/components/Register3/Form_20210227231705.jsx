import React from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Form = () => {
  const history = useHistory();
  const handleRegister3 = () => {
    // localStorage.setItem("email", Register1Form.email)
    history.push("/Register4")
  }

    const { t } = useTranslation();

    return (
       <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form3Design">
  <div className="card-fluid">
    <img className="card-img-top crdimg" src="/images/2.jpg" alt="Card image" />
    <div className="card-body" id="crd">
      <h2 className="card-title" id="crdtitle"><b>{t("Join Upwork as a freelancer")}</b></h2><br />
      <p className="card-text">{t("Hi Ttt,")}</p><br />
      <p className="card-text">{t("Thanks for your interestin Upwork! As the world's largest talent platform,")}
       {t("we connect millions of bussinesses with independent professionals like you.")}</p><br />
      <p className="card-text">{t("To get started, all you need to do is fill out a profile.")}</p><br />
      <a href="#" id="crdLnk">{t("Not a freelancer?")}</a>
            <button className="btn btn-success" id="continueBtn" type="submit" onClick={handleRegister3}>{t("Continue")}</button>
    </div>
  </div>
</div>

    )
}
