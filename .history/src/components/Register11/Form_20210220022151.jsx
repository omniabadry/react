import React from 'react'
import { LanguageDiv } from "./LanguageDiv";

export const Form = () => {
  return (
    <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="formDesign">
  <div className="card-fluid">
    <p className="card crdhd"><b>Languages</b><span className="text-muted mutepara">6 of 11</span></p>
    <div className="card-body" id="crd">
      <h4 className="text-left mb-4"><b>What is your English proficiency?</b></h4>
      <div className="card-text">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="dropdown">
              <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">English proficiency
                <span className="caret" /></button>
              <ul className="dropdown-menu p-2">
                <li><a href="#" className="btn btn-default text-left enBtn">Basic<p className="text-muted">I Write in this language decently</p></a></li>
                <li><a href="#" className="btn btn-default text-left enBtn">Conversational<p className="text-muted">I Write and speak this language well</p></a></li>
                <li><a href="#" className="btn btn-default text-left enBtn">Fluent<p className="text-muted">I Write and speak this language almost perfectly</p></a></li>
                <li><a href="#" className="btn btn-default text-left enBtn">Nativ or Bilingual<p className="text-muted">I Write and speak this language perfectly, including colloquialisms</p></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 d-lg-none" />
        </div>
        <label className="text-left my-5"><b>What other languages do you speak?</b></label><br />
        <button type="button" className="btn btn-outline addEdue" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Language</b></button><br /><br /><br />
            <LanguageDiv/>
        <button className="btn-link mb-2 skipBtn">Skip this step</button>
      </div>
    </div>
    <div className="card-footer bg-white crdfooter">
      <a href="../11/signUp11.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
      <a href="../9/signUp9.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
    </div>
  </div>
</div>

  )
}
