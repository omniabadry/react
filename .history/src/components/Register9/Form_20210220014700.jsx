import React from 'react'
import { ModelContent } from "./ModelContent";

export const Form = () => {
  return (
   <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form9Design">
  <div className="card-fluid">
    <p className="card crdhd"><b>Education</b><span className="text-muted mutepara">4 of 11</span></p>
    <div className="card-body" id="crd">
      <p className="card-title" id="crdtitle">Add the schools you attended, areas of study, and degrees
        earned.</p><br />
      <div className="card-text">
        <button type="button" className="btn btn-outline addEdue" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Education</b></button><br /><br /><br />
        <button className="btn-link mb-2 skipBtn">Skip this step</button>
      </div>
      {/* Modal */}
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog  modal-xl modalContainer">
          {/* Modal content*/}
              <ModelContent/>
        </div>
      </div>
    </div>
    <div className="card-footer bg-white crdfooter">
      <a href="../9/signUp9.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
      <a href="../7/signUp7.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
    </div>
  </div>
</div>

  )
}
