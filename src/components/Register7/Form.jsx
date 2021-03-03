import React from 'react'
import { Buttons } from "./Buttons";
import { useHistory } from "react-router-dom";

export const Form = () => {

  const history = useHistory();
  const handleRegisterNext7 = () => {
    history.push("/Register8")
  }
  const handleRegisterBack7 = () => {
    history.push("/Register6")
  }
  return (
    <form className="col-xl-8 col-12 col-sm-12 col-md-12" id="form7Design">
      <div className="card-fluid">
        <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
        <div className="card-body" id="crd">
          <h3 className="card-title" id="crdtitle">Select your skills</h3><br />
          <div className="card-text">
            <Buttons />
            <br />
            <br />
            <label>
              <h4 className="inputInline"><b>Not what you're looking for? </b></h4><i className="fas fa-question-circle iconHelp" />
            </label><br />
            <input type="text" placeholder="Start typing to search for skills" id="inputStart" />
            <p className="text-muted enterpara">Enter at least 1 skill</p>
          </div><br />
          <div className="card-footer bg-white crdfooter">
            <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext7}><b>Next</b></button>
            <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack7}><b>Back</b></button>
          </div>
        </div>
      </div>
    </form>


  )
}
