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



const schema = yup.object().shape({
  main_service_id: yup.string().required(),
});

export const Form = () => {

       const { register, handleSubmit, errors,control } = useForm({
    resolver: yupResolver(schema),
  });
//    const currentServices = ['Category',"Accounting & Consultin","Admin Support","Web, Mobile & Software Dev"];
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
      const history = useHistory();
      const handleRegisterNext6 = () => {
            history.push("/Register7")
      }
      const handleRegisterBack6 = () => {
            history.push("/Register5")
      }

        const onSubmit = () => {
                          history.push("/Register7")

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
                                    {/* <ControlledCustomSelect
                      control={control}
                      name="main_service_id"
                      placeholder="Main Service"
                      options={options}
                      //options={["female", "male", "other"]}
                    /> */}
                      <CustomSelect options={options} />

                                    {/* Web, Mobile & Software Dev */}
                                    <WebAndMobileDev />
                                    {/* Accounting */}
                                    <Accounting />
                                    {/* Design & Creative */}
                                    <DesignAndCreative />

                                    <label><h4>What skills do you offer clients?</h4></label><br />
                                    <input type="text" placeholder="Start typing to search for skills" id="inputStart" />
                                    <p className="text-muted enterpara mb-2">Enter at least 1 skill</p>
                              </div><br />
                              <a className="card-footer bg-white crdfooter6">
                              </a>
                              <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" ><b>Next</b></button>
                              <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack6}><b>Back</b></button>
                        </div>
                  </div>
            </form>

      )
}
