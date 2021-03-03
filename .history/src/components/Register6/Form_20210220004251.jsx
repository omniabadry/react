import React from 'react'

export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form6Design">
  <div className="card-fluid">
    <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">Tell us about the work you do</h3><br />
      <div className="card-text">
        <label><h4>What is the main service you offer?</h4></label>
        <select className="dropdownbutton" id="mySelect6" onchange="myFunction()">
          <option value="Category" className="text-muted disabled">Category</option>
          <option value="Accounting & Consultin">Accounting &amp; Consulting</option>
          <option value="Admin Support">Admin Support</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Data Science & Analytics">Data Science &amp; Analytics</option>
          <option value="Design & Creative">Design &amp; Creative</option>
          <option value="Engineering & Arcitecture">Engineering &amp; Arcitecture</option>
          <option value="IT & Networking">IT &amp; Networking</option>
          <option value="Legal">Legal</option>
          <option value="Sales & Marketing">Sales &amp; Marketing</option>
          <option value="Translation">Translation</option>
          <option value="Web, Mobile & Software Dev">Web, Mobile &amp; Software Dev</option>
          <option value="Writing">Writing</option>
        </select><br /><br />
        {/* Web, Mobile & Software Dev */}
        <div id="rowDisabled">
          <label><h4>What types of Web, Mobile &amp; Software Dev do you do?</h4></label>
          <p className="text-muted">Select up to 4 types of work.</p>
          <br /><br />
          <div className="row">
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Desktop Software Development
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Game Development
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Other-Software Development
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  QA &amp; Testting
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Web &amp; Mobile Design
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Ecommerce Development
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Mobile Development
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Product Management
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Scripts &amp; Utilites
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Web Development
                </label>
              </div>
            </div>
          </div>
          <br /><br />
        </div>
        {/* Accounting */}
        <div id="rowDisabled">
          <label><h4>What types of Accounting do you do?</h4></label>
          <p className="text-muted">Select up to 4 types of work.</p>
          <br /><br />
          <div className="row">
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Accounting
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Financial Planing
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Human Resources
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Management Consulting
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Other-Accounting &amp; Consulting
                </label>
              </div>
            </div>
          </div>
          <br /><br />
        </div>
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
