import React from 'react'
import { useHistory } from "react-router-dom";

export const Form = () => {
  const history = useHistory();
  const handleRegisterNext4 = () => {
    history.push("/Register5")
  }
  // const handleRegisterBack9 = () => {
  //   history.push("/Register8")
  // }
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form4Design">
  <div className="card-fluid">
    <h2 className="card crdhd"><b>Fill out your profile to apply</b></h2>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">To provide a high quality
        experience to all customers, admission to Upwork is highly competitive.</h3><br />
      <p className="card-text">Here's how it works:</p><br />
      <p id="crdnumbr">1.Fill out your profile thoroughly accurately</p>
      <p id="crdnumbr">2.Submit your profile</p>
      <p id="crdnumbr">3.You'll receive an email within 24 hours to let you know if you were accepted</p><br />
      <p className="card-text">We are currently experiencing a high number of applications.Create a stand-out
        profile to increase your chances of getting approved!</p><br />
            <button className="btn btn-success" id="continueBtn" type="submit" onClick={handleRegisterNext4}>Start My Profile</button>
    </div>
  </div>
</div>

    )
}
