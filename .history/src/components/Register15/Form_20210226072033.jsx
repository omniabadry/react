import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "./formError";

const schema = yup.object().shape({
  Street: yup.string().required(),
  Suite: yup.string().required(),
  City: yup.string().required(),
  ZIP: yup.string().required(),
});

export const Form = () => {
  const onSubmit = () => {
    history.push("/Register16")

  }
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

    const history = useHistory();
    const handleRegisterNext15 = () => {
        history.push("/Register16")
    }
    const handleRegisterBack15 = () => {
        history.push("/Register14")
    }
    return (

      <form className="col-xl-7 col-12 col-sm-12 col-md-12 shadow-lg" id="formDesign15" onSubmit={handleSubmit(onSubmit)}>
  <div className="card-fluid">
    <p className="card crdhd"><b>Location</b><span className="text-muted mutepara">10 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">Where are you based?</h3>
      <p className="text mb-5">We take your privacy very seriously. Only your city and country will be shown to clients.</p>
      <div className="card-text">
        <div className="row">
          <div className="col-6">
            <label><b>Country</b></label>
            <select className="dropdownbutton mb-5" id="mySelect" onchange="myFunction()">
              <option value="Egypt">Egypt</option>
              <option value="Algeria">Algeria</option>
              <option value="Lebnanon">Lebnanon</option>
              <option value="Angola">Angola</option>
              <option value="Andorra">Andorra</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label><b>Street Address</b></label>
                  <input className="form-control mb-3 locationInput"  ref={register} name="Street"/>
                         <ErrorMessage errors={errors} name="Street" render={FormError} />
          </div>
        </div>
                <input className="form-control mb-5 locationInput" ref={register} name="Suite" placeholder="Apt/Suite" style={{display: 'block'}} />
                  <ErrorMessage errors={errors} name="Suite" render={FormError} />

            <label style={{display: 'block'}}><b>City</b></label>
                  <input className="form-control mb-3 locationInput" ref={register} name="City" placeholder="Start typing your city" /><br />
                  <ErrorMessage errors={errors} name="City" render={FormError} />

            <label><b>ZIP/Postal code</b></label><br />
                  <input className="form-control mb-5 locationInput" name="ZIP" ref={register} />
                  <ErrorMessage errors={errors} name="ZIP" render={FormError} />

      </div>
            <div className="card-footer bg-white crdfooter">
              <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit"><b>Next</b></button>
              <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack15}><b>Back</b></button>
            </div>
    </div>
  </div>
</form>
    )
}
