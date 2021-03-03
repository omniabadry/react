import React from 'react'
import { Allservices } from "./Allservices";
import { WebAndMobileDev } from "./WebAndMobileDev";
import { Accounting } from "./Accounting";
export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form6Design">
  <div className="card-fluid">
    <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">Tell us about the work you do</h3><br />
      <div className="card-text">
        <label><h4>What is the main service you offer?</h4></label>
              <Allservices/>
        {/* Web, Mobile & Software Dev */}
              <WebAndMobileDev/>
        {/* Accounting */}
              <Accounting/>
        {/* Design & Creative */}
        <div id="rowDisabled">
          <label><h4>What types of Design &amp; Creative do you do?</h4></label>
          <p className="text-muted">Select up to 4 types of work.</p>
          <br /><br />
          <div className="row">
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Art &amp; illustration
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Audio &amp; Music Production
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Branding
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Gaming &amp; AR/VR
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Graphic, Editorial &amp; Presentation Design
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Performing Arts
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Photography
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Product Design
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Video &amp; Animation
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Voice Talent
                </label>
              </div>
            </div>
          </div>
          <br /><br />
        </div>
       
        <label><h4>What skills do you offer clients?</h4></label><br />
        <input type="text" placeholder="Start typing to search for skills" id="inputStart" />
        <p className="text-muted enterpara">Enter at least 1 skill</p>
      </div><br />
      <a className="card-footer bg-white crdfooter">
      </a><a href="../6/signUp6.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
      <a href="../4/signUp4.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
    </div>
  </div>
</div>

    )
}
