import React from 'react'

export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form8Design">
  <div className="card-fluid">
    <p className="card crdhd"><b>Expertise Level</b><span className="text-muted mutepara">3 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">What is your level of experience in this field?</h3><br />
      <div className="card-text">
        <div className="row ">
          <div className="col-xl-4 col-l-12 col-md-12 col-sm-12 ">
            <div className="form-check crdsincrd">
              <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio" />
              <label className="form-check-label" htmlFor="flexRadio">
                <h3>Entry Level</h3>
                <p className="text-muted text-center">I am relatively new to this field</p>
              </label>
            </div>
          </div>
          <div className="col-xl-4 col-l-12 col-md-12 col-sm-12">
            <div className="form-check crdsincrd">
              <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio2" />
              <label className="form-check-label" htmlFor="flexRadio2">
                <h3>Intermediate</h3>
                <p className="text-muted text-center">I have substantial experience in this
                  field</p>
              </label>
            </div>
          </div>
          <div className="col-xl-4 col-l-12 col-md-12 col-sm-12">
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
        </div><br />
        <div className="card-footer bg-white crdfooter">
          <a href="../8/signUp8.html"> <button className="btn btn-link btn-success" id="nextBtn6" href="#"><b>Next</b></button></a>
          <a href="../6/signUp6.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
        </div>
      </div>
    </div>
  </div>
</div>


               


    )
}
