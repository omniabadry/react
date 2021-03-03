import React from 'react'
import { Allservices } from "./Allservices";
import { WebAndMobileDev } from "./WebAndMobileDev";
import { Accounting } from "./Accounting";
import { DesignAndCreative } from "./DesignAndCreative";
import { useHistory } from "react-router-dom";
// import { ControlledCustomSelect } from "./controlledCustomSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { CustomSelect } from "./customSelect";
import makeAnimated from 'react-select/animated';
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "./formError";



const schema = yup.object().shape({
  select1: yup.string().required(),
    select2: yup.string().required(),
        select3: yup.string().required(),

});

export const Form = () => {

       const { register, handleSubmit, errors,control } = useForm({
    resolver: yupResolver(schema),
  });
//    const currentServices = ['Category',"Accounting & Consultin","Admin Support","Web, Mobile & Software Dev"];
const options = [
  { value: 'Accounting & Consultin', label: 'Accounting & Consultin' },
  { value: 'Admin Support', label: 'Admin Support' },
  { value: 'Web, Mobile & Software Dev', label: 'Web, Mobile & Software Dev' }
]
      const history = useHistory();
      const handleRegisterNext6 = () => {
            history.push("/Register8")
      }
      const handleRegisterBack6 = () => {
            history.push("/Register5")
      }

        const onSubmit = () => {
         history.push("/Register8")

        }
      return (
            <form  onSubmit={handleSubmit(onSubmit)} className="col-xl-7 col-12 col-sm-12 col-md-12" id="form6Design">
                  <div className="card-fluid">
                        <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
                        <div className="card-body" id="crd">
                              <h3 className="card-title" id="crdtitle">Tell us about the work you do</h3><br />
                              <div className="card-text">
                                    <label><h4>What is the main service you offer?</h4></label>
                                    {/* <Allservices /> */}
                                   
                      <CustomSelect ref={register} options={options} id="inputStart" name="select1" />
                                                <ErrorMessage errors={errors} name="select1" render={FormError} />
                                    {/* <WebAndMobileDev />
                                    <Accounting />
                                    <DesignAndCreative /> */}

                                    <label><h4>What skills do you offer clients?</h4></label><br />
                                    {/* <input type="text" placeholder="Start typing to search for skills" id="inputStart" /> */}
                                                         <CustomSelect ref={register} options={options} isMulti id="inputStart" name="select2"/>
                                                <ErrorMessage errors={errors} name="select2" render={FormError} />

              <h4 className="inputInline my-5">Not what you're looking for? </h4><i className="fas fa-question-circle iconHelp" /><br/>

 <CustomSelect ref={register} options={options} id="inputStart" isMulti name="select3" />
                                                <ErrorMessage errors={errors} name="select3" render={FormError} />

                              </div><br />
                              <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" ><b>Next</b></button>
                              <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack6}><b>Back</b></button>
                        </div>
                  </div>
            </form>

      )
}
