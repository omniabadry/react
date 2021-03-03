import React from 'react'
import { useHistory } from "react-router-dom";

export const Form = () => {
  const history = useHistory();
  const handleRegisterNext5 = () => {
    history.push("/Register6")
  }
  // const handleRegisterBack9 = () => {
  //   history.push("/Register8")
  // }
  return (
    <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="form5Design">
      <div className="card-fluid">
        <h2 className="card crdhd"><b>Getting Started</b></h2><br /><br />
        <div className="card-body" id="crd">
          <h3 className="card-title" id="crdtitle">How would you like to fill out your profile?</h3><br />
          <p className="card-text">To speed this up, upload a PDF of your LinkedIn profile.You can edit it after importing.</p><br />
          <button className="btn btn-link btn-outline" id="uploadBtn" href="#"><b>Upload Your LinkedIn Profile</b></button><br /><br />
          <button className="btn btn-link btn-outline" id="startBtn" type="submit" onClick={handleRegisterNext5}><b>Fill Out Manually</b></button>        </div>
      </div>
    </form>


  )
}
