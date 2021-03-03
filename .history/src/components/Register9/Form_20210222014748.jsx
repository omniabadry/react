import React from 'react'
import { ModelContent } from "./ModelContent";
import { useHistory } from "react-router-dom";


export const Form = () => {
  const history = useHistory();
  const handleRegisterNext9 = () => {
    history.push("/Register10")
  }
  const handleRegisterBack9 = () => {
    history.push("/Register8")
  }
  return (
    <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="form9Design">
      <div className="card-fluid">
        <p className="card crdhd"><b>Education</b><span className="text-muted mutepara">4 of 11</span></p>
        <div className="card-body" id="crd">
          <p className="card-title" id="crdtitle">Add the schools you attended, areas of study, and degrees
        earned.</p><br />
          <div className="card-text">
            <button type="button" className="btn btn-outline addEdue9" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Education</b></button><br /><br /><br />
            <button className="btn-link mb-2 skipBtn" type="submit" onClick={handleRegisterNext9}>Skip this step</button>
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
          <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext9}><b>Next</b></button>
          <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack9}><b>Back</b></button>
        </div>
      </div>
    </form>

  )
}
