import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "../formError";
import { useTranslation } from "react-i18next";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10,'phone number must > 10').required()

});

export const Form = () => {

    const { t } = useTranslation();


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    handleRegisterNext16()
    }
      const history = useHistory();
    const handleRegisterNext16 = () => {
        history.push("/Register16")
    }
    const handleRegisterBack16 = () => {
        history.push("/Register15")
    }
    return (
      <div className="col-xl-7 col-12 col-sm-12 col-md-12 shadow-lg" onSubmit={handleSubmit(onSubmit)} id="formDesign16">
  <div className="card-fluid">
    <p className="card crdhd"><b>Phone number</b><span className="text-muted mutepara">11 of 11</span></p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" id="crd">
      <h3 className="card-title mb-4" id="crdtitle">Add your phone number.</h3>
      <div className="card-text">
        <div className="row">
          <div className="col-12">
            <label className="text my-4"><b>Phone</b></label>
            <br />
            <div className="btn-group" role="group" style={{width: '100%'}}>
              <button id="btnGroupDrop1" type="button" className="btn btn-outline dropdown-toggle dropdoenPhone phoneButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Egypt
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" style={{width: '10%'}}>
                <a className="dropdown-item" href="#">Egypt</a>
                <a className="dropdown-item" href="#">Angola</a>
                <a className="dropdown-item" href="#">Canada</a>
              </div>
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown" style={{width: '90%'}}>
                      <input className="form-control phoneInput" name="phone" ref={register} />
              </div>
              <br/>
            </div>
                  <ErrorMessage errors={errors} name="phone" render={FormError} />

          </div>
        </div><br />
        <p className="text mb-5">Your phone number will <b>not</b> be shared with clients.</p>
      </div>
            <div className="card-footer bg-white crdfooter">
              <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext16}><b>Preview Profile</b></button>
              <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack16}><b>Back</b></button>
            </div>
    </form>
  </div>
</div>

       
               


    )
}
