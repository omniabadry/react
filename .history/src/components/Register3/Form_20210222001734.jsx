import React from 'react';
import { useHistory } from "react-router-dom";


export const Form = () => {
  const history = useHistory();
  const handleRegister3 = () => {
    // localStorage.setItem("email", Register1Form.email)
    history.push("/Register4")
  }
    return (
       <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form3Design">
  <div className="card-fluid">
    <img className="card-img-top crdimg" src="/images/2.jpg" alt="Card image" />
    <div className="card-body" id="crd">
      <h2 className="card-title" id="crdtitle"><b>Join Upwork as a freelancer</b></h2><br />
      <p className="card-text">Hi Ttt,</p><br />
      <p className="card-text">Thanks for your interestin Upwork! As the world's largest talent platform, we connect millions of bussinesses with independent professionals like you.</p><br />
      <p className="card-text">To get started, all you need to do is fill out a profile.</p><br />
      <a href="#" id="crdLnk">Not a freelancer?</a>
            <button className="btn btn-success" id="continueBtn" type="submit" onClick={handleRegister3}>Continue</button>
    </div>
  </div>
</div>

    )
}
