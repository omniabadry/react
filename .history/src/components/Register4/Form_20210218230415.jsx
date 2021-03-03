import React from 'react'

export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form3Design">
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
      <a href="../4/signUp4.html"> <button className="btn btn-success" id="continueBtn4">Start My Profile</button></a>
    </div>
  </div>
</div>

    )
}
