import React from 'react'
import { ModelContent } from "./ModelContent";
export const Form = () => {
  return (
    <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form10Design">
  <div className="card-fluid">
    <p className="card crdhd"><b>Employment</b><span className="text-muted mutepara">5 of 11</span></p>
    <div className="card-body" id="crd">
      <h2 className="text-left">Add your past work experience</h2>
      <p className="card-title" id="crdtitle">Build your credibility by showcasing the projects or jobs you have completed.</p><br />
      <div className="card-text">
        <button type="button" className="btn btn-outline addEdue" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Employment</b></button><br /><br /><br />
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
      <a href="../10/signUp10.html"> <button className="btn btn-link btn-success" id="nextBtn6" href="#"><b>Next</b></button></a>
      <a href="../8/signUp8.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
    </div>
  </div>
</div>

  )
}
