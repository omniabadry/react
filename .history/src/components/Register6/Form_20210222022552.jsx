import React from 'react'
import { Allservices } from "./Allservices";
import { WebAndMobileDev } from "./WebAndMobileDev";
import { Accounting } from "./Accounting";
import { DesignAndCreative } from "./DesignAndCreative";
export const Form = () => {
      return (
            <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="form6Design">
                  <div className="card-fluid">
                        <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
                        <div className="card-body" id="crd">
                              <h3 className="card-title" id="crdtitle">Tell us about the work you do</h3><br />
                              <div className="card-text">
                                    <label><h4>What is the main service you offer?</h4></label>
                                    <Allservices />
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
                              </a><a href="../6/signUp6.html"> <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" href="#"><b>Next</b></button></a>
                              <a href="../4/signUp4.html"> <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" href="#"><b>Back</b></button></a>
                        </div>
                  </div>
            </form>

      )
}
