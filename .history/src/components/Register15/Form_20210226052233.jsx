import React from 'react'
import { useHistory } from "react-router-dom";

export const Form = () => {

    const history = useHistory();
    const handleRegisterNext15 = () => {
        history.push("/Register16")
    }
    const handleRegisterBack15 = () => {
        history.push("/Register14")
    }
    return (

      <form className="col-xl-7 col-12 col-sm-12 col-md-12 shadow-lg" id="formDesign">
  <div className="card-fluid">
    <p className="card crdhd"><b>Location</b><span className="text-muted mutepara">10 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">Where are you based?</h3>
      <p className="text mb-5">We take your privacy very seriously. Only your city and country will be shown to clients.</p>
      <div className="card-text">
        <div className="row">
          <div className="col-6">
            <label><b>Country</b></label>
            <select className="dropdownbutton mb-5" id="mySelect" onchange="myFunction()">
              <option value="Egypt">Egypt</option>
              <option value="Algeria">Algeria</option>
              <option value="Lebnanon">Lebnanon</option>
              <option value="Angola">Angola</option>
              <option value="Andorra">Andorra</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label><b>Street Address</b></label>
            <input className="form-control mb-3 locationInput" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input className="form-control mb-5 locationInput" placeholder="Apt/Suite" style={{display: 'block'}} />
            <label style={{display: 'block'}}><b>City</b></label>
            <input className="form-control mb-3 locationInput" placeholder="Start typing your city" /><br />
            <label><b>ZIP/Postal code</b></label><br />
            <input className="form-control mb-5 locationInput" />
          </div>
        </div>
      </div>
            <div className="card-footer bg-white crdfooter">
              <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext15}><b>Next</b></button>
              <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack15}><b>Back</b></button>
            </div>
    </div>
  </div>
</form>

       
               
 

    )
}
