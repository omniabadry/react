import React from 'react';
import { useState } from "react";

export const Form = (props) => {
  const [Register2Form, setRegister2Form] = useState({
    FirstName: "",
    LastName:"",
    Password:"",
  });
  const [Register2Errors, setRegister2Erros] = useState({
    FirstNameErrors: null,
    LastNameErrors: null,
    PasswordErrors: null,
  });

  const handleForm = (event) => {
    if (event.target.name == "FirstName") {
      setRegister2Form({
        ...Register2Form,
        FirstName: event.target.value
      })
      setRegister2Erros({
        ...Register2Errors,
        FirstNameErrors: event.target.value.length === 0 ? "FirstName is not valid" : null
      })
    } else if (event.target.name == "LastName") {
      setRegister2Form({
        ...Register2Form,
        LastName: event.target.value
      })
      setRegister2Erros({
        ...Register2Errors,
        LastNameErrors: event.target.value.length === 0 ? "LastName is not valid" : null
      })
    }
     else {
      setRegister2Form({
        ...Register2Form,
        Password: event.target.value
      })

      setRegister2Erros({
        ...Register2Errors,
        PasswordErros: event.target.value.length < 8 ? "Password must have at least 8 characters" : null
      })
    }
  }

  // const handleLogin = () => {
  //   localStorage.setItem("email", loginForm.email)
  //   // props.history.push("/ToDo")
  // }
    return (
        <div className="row">
  <div className="col-3 d-xl-block d-lg-none d-sm-none d-md-none d-none " />
  <div className="col-xl-6 col-12 col-sm-12 col-md-12" id="form2Design">
    <div id="complete">
      <h3><b>Complete your free account setup</b></h3>
    </div>
    <div className="row" id="inputbox">
      <div className="col-5" id="firstName">
        {/* <i class="fas fa-user" id="icon"></i> */}
              <input type="text" className="outline first" placeholder="First name" onChange={handleForm} name='FirstName'/>
      </div>
            <div className="col-2" id="emptyCol"></div>
      <div className="col-5" id="lastName">
        {/* <i class="fas fa-user" id="icon2"></i> */}
              <input type="text" className="outline first" placeholder="Last name" onChange={handleForm} name='LastName' />
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-12">
              <input type="password" className="outline pass" placeholder="Create a password" onChange={handleForm} name="Password" />
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-12">
        <select className="dropdownbutton" id="mySelect" onchange="myFunction()">
          <option value="Egypt">Egypt</option>
          <option value="Algeria">Algeria</option>
          <option value="Lebnanon">Lebnanon</option>
          <option value="Angola">Angola</option>
          <option value="Andorra">Andorra</option>
        </select>
      </div>
    </div>
    <br />
    <p className="paragraph"><b>I want to :</b></p>
    <div className="row">
      <div className="col-6" id="btn1">
        <button type="button" className="btn btn-success Button1"> Hire for a project</button>
      </div>
      <div className="col-6" id="btn2">
        <button type="button" className="btn btn-outline Button2">Work as a freelancer </button>
      </div>
    </div>
    <br /><br />
    <div className="row">
      <div className="col-12">
        <div className="check">
          <input type="checkbox" /> Yes! Send me genuinely useful emails every
          now and then to help me get the most out of Upwork.
        </div>
        <br />
        <div className="check2">
          <input type="checkbox" /> Yes, I understand and agree to the
          <a className="aInDiv" href="#">Upwork Terms of Service</a> , including the
          <a className="aInDiv" href="#">User Agreement</a> and
          <a className="aInDiv" href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
    <br /><br />
    <a href="../2/signUp2.html"> <button id="CreateButton" type="button" className="btn btn-white btns">
        <b>Create My Account </b></button></a>
  </div>
</div>

    )
}
