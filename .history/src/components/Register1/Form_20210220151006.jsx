import React from 'react'
import { useState } from "react";


export const Form = (props) => {
    const [Register1Form, setRegister1Form] = useState({
        email: "",
    });
    const [Register1Errors, setRegister1Erros] = useState({
        emailErrors: null,
    });

    const handleForm = (event) => {
        const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (event.target.name == "email") {
            setRegister1Form({
                ...Register1Form,
                email: event.target.value
            })
            setRegister1Erros({
                ...Register1Errors,
                emailErrors: event.target.value.length === 0 || !(event.target.value.match(emailFormat)) ? "email is not valid" : null
            })
        } 
    }

    const handleRegister1 = () => {
        localStorage.setItem("email", Register1Form.email)
        // props.history.push("/ToDo")
    }

    return (
        <div className="row">
            <div className="col-2 d-xl-block d-lg-none d-sm-none d-md-none d-none " />
            <div className="col-xl-8 col-12 col-sm-12 col-md-12" id="form1Design">
                <h2><b>Get your free account</b></h2>
                <a target="popup" onclick="window.open('https://accounts.google.com/signin/v2/identifier?hl=ar&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fsafe%3Dactive%26source%3Dhp%26ei%3D2-PjX_HvB8-Ma73wkIAI%26q%3Dgoogle%2Baccount%26oq%3Dgoogle%2Bacc%26gs_lcp%3DCgZwc3ktYWIQAxgAMgUIABCxAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoGCAAQChABOgoIABCxAxCDARAKOggIABCxAxCDAVCEC1jUJmDoL2gBcAB4AIABdogB0QeSAQM4LjKYAQCgAQGqAQdnd3Mtd2l6sAEA%26sclient%3Dpsy-ab&ec=GAlAAQ&flowName=GlifWebSignIn&flowEntry=AddSession','name','width=600,height=400')">
                    <button type="button" className="btn btn-primary btns">
                        <img id="googleImage" src="/images/gogle.png" />
                        <b> Continue With Google</b></button></a>
                <a target="popup" onclick="window.open('https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Faccount%2F&rv=1','name','width=600,height=400')">
                    <button id="AppleButton" type="button" className="btn btn-white btns">
                        <i id="appleIcon" className="fab fa-apple" /> Continue With Apple</button></a>
                <p className="separator">
                    <span>or</span>
                </p>
                <input type="email" placeholder="Work email address" id="emailField" onChange={handleRegister1} 
                className={`form-control ml-5.5 ${Register1Errors.emailErrors ? "border-danger" : ""}`}
                 value={Register1Form.email} />
                <h5>{Register1Errors.emailErrors}</h5>
                <a href="continue-signUp1.html"> <button id="EmailButton" type="button" className="btn btn-white btns">
                    <b>Continue with Email</b></button></a>
            </div>
        </div>

    )
}
