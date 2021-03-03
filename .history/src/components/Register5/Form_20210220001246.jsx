import React from 'react'

export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="formDesign">
  <div className="card-fluid">
    <h2 className="card crdhd"><b>Getting Started</b></h2><br /><br />
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">How would you like to fill out your profile?</h3><br />
      <p className="card-text">To speed this up, upload a PDF of your LinkedIn profile.You can edit it after importing.</p><br />
      <button className="btn btn-link btn-outline" id="uploadBtn" href="#"><b>Upload Your LinkedIn Profile</b></button><br /><br />
      <a href="../5/signUp5.html"> <button className="btn btn-link btn-outline" id="startBtn" href="#"><b>Fill Out Manually</b></button></a>
    </div>
  </div>
</div>


    )
}
