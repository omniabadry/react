import React from 'react'
import { Buttons } from "./Buttons";

export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form7Design">
  <div className="card-fluid">
    <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">Select your skills</h3><br />
      <div className="card-text">
              <Buttons/>
        <br />
        <br />
        <label>
          <h4 className="inputInline"><b>Not what you're looking for? </b></h4><i className="fas fa-question-circle iconHelp" />
        </label><br />
        <input type="text" placeholder="Start typing to search for skills" id="inputStart" />
        <p className="text-muted enterpara">Enter at least 1 skill</p>
      </div><br />
      <div className="card-footer bg-white crdfooter">
        <a href="../7/signUp7.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
        <a href="../5/signUp5.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
      </div>
    </div>
  </div>
</div>


    )
}
