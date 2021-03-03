import React from 'react'
import { ModelContent } from "./ModelContent";
import { useHistory } from "react-router-dom";

export const Form = () => {
  const history = useHistory();
  const handleRegisterNext10 = () => {
    history.push("/Register11")
  }
  const handleRegisterBack10 = () => {
    history.push("/Register9")
  }
  return (
    <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="form10Design">
      <div className="card-fluid">
        <p className="card crdhd"><b>Employment</b><span className="text-muted mutepara">5 of 11</span></p>
        <div className="card-body" id="crd">
          <h2 className="text-left">Add your past work experience</h2>
          <p className="card-title" id="crdtitle">Build your credibility by showcasing the projects or jobs you have completed.</p><br />
          <div className="card-text">
            <button type="button" className="btn btn-outline addEdue10" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Employment</b></button><br /><br /><br />
            <button className="btn-link mb-2 skipBtn">Skip this step</button>
          </div>
          {/* Modal */}
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog  modal-xl modalContainer">
              {/* Modal content*/}
              <ModelContent />

            </div>
          </div>
        </div>
        <div className="card-footer bg-white crdfooter">
          <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext10} ><b>Next</b></button>
          <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack10}><b>Back</b></button>
        </div>
      </div>
    </form>

  )
}
