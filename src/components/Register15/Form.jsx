import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "../formError";
import { useTranslation } from "react-i18next";


const schema = yup.object().shape({
  Street: yup.string().required(),
  Suite: yup.string().required(),
  City: yup.string().required(),
  ZIP: yup.string().required(),
});

export const Form = () => {

    const { t } = useTranslation();

  const onSubmit = () => {
    history.push("/Register16")

  }
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

    const history = useHistory();
    const handleRegisterNext15 = () => {
        history.push("/Register16")
    }
    const handleRegisterBack15 = () => {
        history.push("/Register14")
    }
    return (
      <form
        className="col-xl-7 col-12 col-sm-12 col-md-12 shadow-lg"
        id="formDesign15"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card-fluid">
          <p className="card crdhd">
            <b>{t("Location")}</b>
            <span className="text-muted mutepara">10 {t("of")} 11</span>
          </p>
          <div className="card-body" id="crd">
            <h3 className="card-title" id="crdtitle">
              {t("Where are you based?")}
            </h3>
            <p className="text mb-5">
              {t(
                "We take your privacy very seriously. Only your city and country will be shown to clients."
              )}
            </p>
            <div className="card-text">
              <div className="row">
                <div className="col-6">
                  <label>
                    <b>{t("Country")}</b>
                  </label>
                  <select
                    className="dropdownbutton mb-5"
                    id="mySelect"
                    onchange="myFunction()"
                  >
                    <option value="Egypt">{t("Egypt")}</option>
                    <option value="Algeria">{t("Algeria")}</option>
                    <option value="Lebnanon">{t("Lebnanon")}</option>
                    <option value="Angola">{t("Angola")}</option>
                    <option value="Andorra">{t("Andorra")}</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3">
                  <label>
                    <b>{t("Street Address")}</b>
                  </label>
                  <input
                    className="form-control  locationInput15"
                    ref={register}
                    name="Street"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="Street"
                    render={FormError}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 col-sm-12">
                  <input
                    className="form-control  text-left locationInput15"
                    ref={register}
                    name="Suite"
                    placeholder={t("Apt/Suite")}
                    style={{ display: "block" }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="Suite"
                    render={FormError}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6 col-sm-12">
                  <label>
                    <b>{t("City")}</b>
                  </label>
                  <input
                    className="form-control text-left locationInput15"
                    ref={register}
                    name="City"
                    placeholder={t("Start typing your city")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="City"
                    render={FormError}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-6 col-sm-12">
                  <label>
                    <b>{t("ZIP/Postal code")}</b>
                  </label>
                  <br />
                  <input
                    className="form-control locationInput15"
                    name="ZIP"
                    ref={register}
                  />
                  <ErrorMessage errors={errors} name="ZIP" render={FormError} />
                </div>
              </div>
            </div>
            <div className="card-footer bg-white crdfooter">
              <button
                className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3"
                id="nextBtn6"
                type="submit"
              >
                <b>{t("Next")}</b>
              </button>
              <button
                className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3"
                id="backBtn"
                type="submit"
                onClick={handleRegisterBack15}
              >
                <b>{t("Back")}</b>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
}
