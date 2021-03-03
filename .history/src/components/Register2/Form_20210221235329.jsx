import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  Password: yup.string().min(6, 'Password has to be longer than 6 characters!').required(),
  check: yup.boolean().required(),
  radioGroup: yup.string().required("A radio option is required"),

});
export const Form = (props) => {
 
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => { }
  const history = useHistory();
  const handleRegister2 = () => {
    if (errors){
      document.getElementById("CreateButton").disabled=true;
    }else{
    // localStorage.setItem("email", Register1Form.email)
    history.push("/Register3")}
  }

  return (
    <div className="row">
      <div className="col-3 d-xl-block d-lg-none d-sm-none d-md-none d-none " />
      <div className="col-xl-6 col-12 col-sm-12 col-md-12" id="form2Design">
        <div id="complete">
          <h3><b>Complete your free account setup</b></h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row" id="inputbox" >
          <div className="row" id="firstName" >
            {/* <i class="fas fa-user" id="icon"></i> */}
            <input type="text" className={`form-control outline first ${errors.FirstName ? "border-danger" : ""}`} placeholder="First name" name='FirstName' ref={register} />
              <div className="text-danger">
                {errors.FirstName && errors.FirstName.message}
              </div>
          </div>
          <div className="row" id="lastName" >
            {/* <i class="fas fa-user" id="icon2"></i> */}
            <input type="text" className={`form-control outline first ${errors.LastName ? "border-danger" : ""}`} placeholder="Last name" name='LastName' ref={register} />
              <div className="text-danger ">
                {errors.LastName && errors.LastName.message}
              </div>
          </div>
            <div className="row" id="passwordd">
              <input type="password" placeholder="Create a Password" name="Password" ref={register}
                className={`form-control ${errors.Password ? "border-danger" : ""}`}
              />
            <div className="text-danger">
              {errors.Password && errors.Password.message}
            </div>
          </div>
        </div>
        {/* <br /> */}
        <div className="row">
          {/* <div className="col-12"> */}
              <select className="dropdownbutton" id="mySelect2" onchange="myFunction()" ref={register}>
              <option value="Egypt">Egypt</option>
              <option value="Algeria">Algeria</option>
              <option value="Lebnanon">Lebnanon</option>
              <option value="Angola">Angola</option>
              <option value="Andorra">Andorra</option>
            </select>
          {/* </div> */}
        </div>
        <p className="paragraph"><b>I want to :</b></p>
        <div className="row">
          <div className="col-6" id="btn1">
            <button type="radio" className="btn btn-success Button1"> Hire for a project</button>
          </div>
          <div className="col-6" id="btn2">
            <button type="button" className="btn btn-outline Button2">Work as a freelancer </button>
          </div>
        </div>
        <br />
        <div className="row">
            <div className="col-12 form-group">
            <div className="check">
                <input type="checkbox"  name='check' ref={register}
                  className={`form-control${errors.check ? "border-danger" : ""}`} /> Yes! Send me genuinely useful emails every
          now and then to help me get the most out of Upwork.
        </div>
              <div className="text-danger">
                {errors.check && errors.check.message}
              </div>
            <br />
            <div className="check2">
                <input type="checkbox" name='check' ref={register} 
                className={`form-control${errors.check ? "border-danger" : ""}`}/> Yes, I understand and agree to the
          <a className="aInDiv" href="#">Upwork Terms of Service</a> , including the
          <a className="aInDiv" href="#">User Agreement</a> and
          <a className="aInDiv" href="#">Privacy Policy</a>.
        </div>
              <div className="text-danger">
                {errors.check && errors.check.message}
              </div>
          </div>
        </div>
          <button id="CreateButton" type="submit" className="btn btn-white btns" disabled=
          {errors.FirstName||errors.LastName||errors.Password} >
            <b>Create My Account </b></button>
        </form>

      </div>
    </div>
  )
}
