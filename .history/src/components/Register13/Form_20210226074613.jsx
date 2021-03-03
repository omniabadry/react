import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "./formError";

const schema = yup.object().shape({
  titleInput: yup.string().required(),
  Input: yup.string().required(),

});

export const Form = () => {

  const onSubmit = () => {
    history.push("/Register14")

  }
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

    const history = useHistory();
    const handleRegisterNext13 = () => {
        history.push("/Register14")
    }
    const handleRegisterBack13 = () => {
        history.push("/Register12")
    }
    return (
      <form className="col-xl-7 col-12 col-sm-12 col-md-12 shadow-lg" onSubmit={handleSubmit(onSubmit)} id="formDesign13">
  <div className="card-fluid">
    <p className="card crdhd"><b>Title &amp; Overview</b><span className="text-muted mutepara">8 of 11</span></p>
    <div className="card-body" id="crd">
      <p className="card-title" id="crdtitle"><a href="#" className="text-success">Learn more </a>about writing a great profile or <a href="#" className="text-success">browse</a> profiles in your category.</p><br />
      <div className="card-text">
        <p className="text-left"><b>Title</b>&nbsp;&nbsp;&nbsp;
          <i className="fas fa-question-circle text-success" />
        </p>
              <input className="form-control" placeholder="Example: Web, Mobile & Software Dev" id="titleInput" ref={register} name="titleInput" />
              <ErrorMessage errors={errors} name="titleInput" render={FormError} />

        <p className="text-left"><b>Professional Overview</b>&nbsp;&nbsp;&nbsp;
          <i className="fas fa-question-circle text-success" />
        </p>
        
              <textarea className="form-control" ref={register} name="Input" placeholder="Highlight your top skills, experience, and interests. This is one of the first things clients will see on your profile." id="ProfessionalInput" defaultValue={""} />
              <ErrorMessage errors={errors} name="Input" render={FormError} />

        <br />
                        <button className="btn-link mb-2 skipBtn" type="submit" onClick={handleRegisterNext13}>Skip this step</button>
      </div>
    </div>
                <div className="card-footer bg-white crdfooter">
                    <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" ><b>Next</b></button>
                    <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack13}><b>Back</b></button>
                </div>
  </div>
</form>

    )
}
