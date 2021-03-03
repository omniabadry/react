import React from 'react'
import { useState } from "react";
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";


const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const schema = yup.object().shape({
    Email: yup.string().matches(emailFormat, 'Email is not valid').required(),
});

export const Form = () => {

      const { t } = useTranslation();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const history = useHistory();
    const onSubmit = () => {
        history.push("/Register2")
    }

    return (
        <div className="row">
            <div className="col-2 d-xl-block d-lg-none d-sm-none d-md-none d-none " />
            <form onSubmit={handleSubmit(onSubmit)} className="col-xl-8 col-12 col-sm-12 col-md-12" id="form1Design">
                <h2><b>{t("Get your free account")}</b></h2>
                <a target="popup" onclick="window.open('https://accounts.google.com/signin/v2/identifier?hl=ar&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fsafe%3Dactive%26source%3Dhp%26ei%3D2-PjX_HvB8-Ma73wkIAI%26q%3Dgoogle%2Baccount%26oq%3Dgoogle%2Bacc%26gs_lcp%3DCgZwc3ktYWIQAxgAMgUIABCxAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoGCAAQChABOgoIABCxAxCDARAKOggIABCxAxCDAVCEC1jUJmDoL2gBcAB4AIABdogB0QeSAQM4LjKYAQCgAQGqAQdnd3Mtd2l6sAEA%26sclient%3Dpsy-ab&ec=GAlAAQ&flowName=GlifWebSignIn&flowEntry=AddSession','name','width=600,height=400')">
                    <button type="button" className="btn btn-primary btns">
                        <img id="googleImage" src="/images/gogle.png" />
                        <b> {t("Continue With Google")}</b></button></a>
                <a target="popup" onclick="window.open('https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Faccount%2F&rv=1','name','width=600,height=400')">
                    <button id="AppleButton" type="button" className="btn btn-white btns">
                        <i id="appleIcon" className="fab fa-apple" /> {t("Continue With Apple")}</button></a>
                <p className="separator">
                    <span>{t("or")}</span>
                </p>
                <input type="email" placeholder={t("Work email address")} name="Email" id="emailField" ref={register} 
                className={`form-control ml-5 ${errors.Email ? "border-danger" : ""}`}
                  />
                <div className="text-danger">
                    {t("errors.Email && errors.Email.message")}
                </div>              
                <button id="EmailButton" type="submit" className="btn btn-white btns" disabled=
                    {t("errors.Email")} >
                    <b>{t("Continue with Email")}</b></button>
            </form>
        </div>
    )
}
