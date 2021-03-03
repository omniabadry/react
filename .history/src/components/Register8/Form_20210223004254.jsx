import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  radioGroup: yup.string().required("A radio option is required"),
});


export const Form = () => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("/Register9")
  }
  const history = useHistory();
  // const handleRegisterNext8 = () => {
  //   history.push("/Register9")
  // }
  const handleRegisterBack8 = () => {
    history.push("/Register7")
  }
  return (
    <form className="col-xl-8 col-12 col-sm-12 col-md-12" id="form8Design" >
      <div className="card-fluid">
        <p className="card crdhd"><b>Expertise Level</b><span className="text-muted mutepara">3 of 11</span></p>
        <div className="card-body" id="crd">
          <h3 className="card-title" id="crdtitle">What is your level of experience in this field?</h3><br />
          <div className="card-text">
            <form className="row ">
              <div className="col-xl-4 col-l-12 col-md-12 col-sm-12 mb-4">
                <div className="form-check crdsincrd">
                  <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio" />
                  <label className="form-check-label" htmlFor="flexRadio">
                    <h3>Entry Level</h3>
                    <p className="text-muted text-center">I am relatively new to this field</p>
                  </label>
                </div>
              </div>
              <div className="col-xl-4 col-l-12 col-md-12 col-sm-12 mb-4">
                <div className="form-check crdsincrd">
                  <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio2" />
                  <label className="form-check-label" htmlFor="flexRadio2">
                    <h3>Intermediate</h3>
                    <p className="text-muted text-center">I have substantial experience in this
                  field</p>
                  </label>
                </div>
              </div>
              <div className="col-xl-4 col-l-12 col-md-12 col-sm-12 mb-4">
                <div className="form-check crdsincrd">
                  <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio3" />
                  <label className="form-check-label" htmlFor="flexRadio3">
                    <h3>Expert</h3>
                    <p className="text-muted text-center">I have comprehensive and deep expertise in
                  this field</p>
                  </label>
                </div>
              </div>
              <br />
              <br />
            </form><br />
            <div className="card-footer bg-white crdfooter">
              <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit"><b>Next</b></button>
              <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack8}><b>Back</b></button>
            </div>
          </div>
        </div>
      </div>
    </form>





  )
}
