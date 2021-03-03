import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const schema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  Password: yup
    .string()
    .min(6, "Password has to be longer than 6 characters!")
    .required(),
  check1: yup
    .boolean()
    .oneOf([true], "Must choose at least one option.")
    .required(),
  check2: yup
    .boolean()
    .oneOf([true], "Must choose at least one option.")
    .required(),
  selecct: yup.string().required(),
});
export const Form = (props) => {
  const { t } = useTranslation();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const onSubmit = () => {
    history.push("/Register3");
  };

  return (
    <div className="row">
      <div className="col-3 d-xl-block d-lg-none d-sm-none d-md-none d-none " />
      <div className="col-xl-6 col-12 col-sm-12 col-md-12" id="form2Design">
        <div id="complete">
          <h3>
            <b>{t("Complete your free account setup")}</b>
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row" id="inputbox">
            <div className="row" id="firstName">
              <input
                type="text"
                className={`form-control outline first ${
                  errors.FirstName ? "border-danger" : ""
                }`}
                placeholder={t("First name")}
                name="FirstName"
                ref={register}
              />
              <div className="text-danger">
                {errors.FirstName && errors.FirstName.message}
              </div>
            </div>
            <div className="row" id="lastName">
              <input
                type="text"
                className={`form-control outline first ${
                  errors.LastName ? "border-danger" : ""
                }`}
                placeholder={t("Last name")}
                name="LastName"
                ref={register}
              />
              <div className="text-danger ">
                {errors.LastName && errors.LastName.message}
              </div>
            </div>
            <div className="row" id="passwordd">
              <input
                type="password"
                placeholder={t("Create a Password")}
                name="Password"
                ref={register}
                className={`form-control ${
                  errors.Password ? "border-danger" : ""
                }`}
              />
              <div className="text-danger">
                {errors.Password && errors.Password.message}
              </div>
            </div>
          </div>
          {/* <br /> */}
          <div className="row">
            {/* <div className="col-12"> */}
            <select
              className="dropdownbutton"
              id="mySelect2"
              name="selecct"
              ref={register}
            >
              <option value="Egypt">{t("Egypt")}</option>
              <option value="Algeria">{t("Algeria")}</option>
              <option value="Lebnanon">{t("Lebnanon")}</option>
              <option value="Angola">{t("Angola")}</option>
              <option value="Andorra">{t("Andorra")}</option>
            </select>
            {/* </div> */}
          </div>
          <div className="text-danger">
            {errors.selecct && errors.selecct.message}
          </div>
          <p className="paragraph">
            <b>{t("I want to :")}</b>
          </p>
          <div className="row">
            <div className="col-6" id="btn1">
              <button type="radio" className="btn btn-success Button1">
                {" "}
                {t("Hire for a project")}
              </button>
            </div>
            <div className="col-6" id="btn2">
              <button type="button" className="btn btn-outline Button2">
                {t("Work as a freelancer")}{" "}
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 form-group">
              <div className="check">
                <input
                  type="checkbox"
                  name="check1"
                  ref={register}
                  className={` ${errors.check ? "border-danger" : ""}`}
                />{" "}
                {t(
                  "Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork."
                )}
              </div>
              <div className="text-danger">
                {errors.check1 && errors.check1.message}
              </div>
              <br />
              <div className="check2">
                <input
                  type="checkbox"
                  name="check2"
                  ref={register}
                  className={`${errors.check ? "border-danger" : ""}`}
                />{" "}
                {t("Yes, I understand and agree to the")}
                <a className="aInDiv" href="#">
                  {t("Upwork Terms of Service")}
                </a>{" "}
                {t(", including the")}
                <a className="aInDiv" href="#">
                  {t("User Agreement")}
                </a>{" "}
                {t("and")}
                <a className="aInDiv" href="#">
                  {t("Privacy Policy")}
                </a>
                .
              </div>
              <div className="text-danger">
                {errors.check2 && errors.check2.message}
              </div>
            </div>
          </div>
          <button
            id="CreateButton"
            type="submit"
            className="btn btn-white btns"
            disabled={
              errors.FirstName ||
              errors.LastName ||
              errors.Password ||
              errors.check
            }
          >
            <b>{t("Create My Account")} </b>
          </button>
        </form>
      </div>
    </div>
  );
};
