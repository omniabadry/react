import React from 'react'
import { useHistory } from "react-router-dom";

export const Form = () => {

    const history = useHistory();
    const handleRegisterNext14 = () => {
        history.push("/Register15")
    }
    const handleRegisterBack14 = () => {
        history.push("/Register13")
    }
    return (
       
     <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="formDesign">
  <div className="card-fluid">
    <p className="card crdhd"><b>Profile Photo</b><span className="text-muted mutepara">9 of 11</span></p>
    <div className="card-body" id="crd">
      <p className="card-title" id="crdtitle">Please upload a professional portrait that clearly shows your face.&nbsp;&nbsp;&nbsp; <i className="fas fa-exclamation-circle text-success" /></p><br />
      <div className="card-text">
        <img src="/images/user_icon1.png" className="uploadPic" id="output1" data-toggle="modal" data-target="#myModal" /><br />
        <button type="button" className="btn btn-outline addEdue" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Profile Photo</b></button><br /><br /><br />
              <button className="btn-link mb-1 skipBtn" type="submit" onClick={handleRegisterNext14}>Skip this step</button>
      </div>
      {/* Modal */}
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog  modal-xl modalContainer">
          {/* Modal content*/}
          <div className="modal-content p-3 my-5" style={{borderRadius: '1rem'}}>
            <div className="modal-header">
              <h2 className="modal-title text-left p-0">Add profile photo</h2>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <div className="row">
                      <img src="/images/user_icon1.png" className="uploadPicIcon" id="output" />
              </div>
              <hr />
              <p><input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)" style={{display: 'none'}} /></p>
              <p><label className="btn btn-outline uploadFileBtn" htmlFor="file" style={{cursor: 'pointer'}}>Select profile Image</label></p>
              <br />
              <label><b>Profile photo guidelines:</b></label>
              <ul className="ulPic">
                <li>Professional-looking</li>
                <li>Crisp resolution</li>
                <li>Include only your face</li>
                <li>Have a neutral background</li>
              </ul>
              <br />
              <div className="modal-footer p-4">
                <button type="button" className="btn btn-default btn-link cancelBtn" data-dismiss="modal">Cancel</button>
                <button type="button" data-dismiss="modal" className="btn btn-success saveBtn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div className="card-footer bg-white crdfooter">
                    <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext14}><b>Next</b></button>
                   <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack14}><b>Back</b></button>
               </div>
    </div>
  </div>
</form>

    )
}
