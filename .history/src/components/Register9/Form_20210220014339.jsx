import React from 'react'

export const Form = () => {
  return (
   <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="formDesign">
  <div className="card-fluid">
    <p className="card crdhd"><b>Education</b><span className="text-muted mutepara">4 of 11</span></p>
    <div className="card-body" id="crd">
      <p className="card-title" id="crdtitle">Add the schools you attended, areas of study, and degrees
        earned.</p><br />
      <div className="card-text">
        <button type="button" className="btn btn-outline addEdue" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Education</b></button><br /><br /><br />
        <button className="btn-link mb-2 skipBtn">Skip this step</button>
      </div>
      {/* Modal */}
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog  modal-xl modalContainer">
          {/* Modal content*/}
          <div className="modal-content p-3 my-5" style={{borderRadius: '1rem'}}>
            <div className="modal-header">
              <h2 className="modal-title text-left p-0">Add education</h2>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <label className="text-left mb-3"><b>School</b></label>
              <input className="form-control mb-2 p-4" type="text" placeholder="EX: Northwestern University" /><br />
              <label className="text-left mb-3"><b>Area of Study (Optional)</b></label>
              <input className="form-control mb-2 p-4" type="text" placeholder="EX: Computer Science" /><br />
              <label className="text-left mb-3"><b>Degree (Optional)</b></label>
              <input className="form-control mb-2 p-4" type="text" placeholder="EX: Bachelor's" /><br />
              <label className="text-left mb-3"><b>Dates Attended (Optional)</b></label>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted text-left p-3 dropdown-toggle dateBtn" type="button" data-toggle="dropdown">From
                      <span className="caret" /></button>
                    <ul className="dropdown-menu p-2 dateBtn">
                      <li><a href="#">2012</a></li>
                      <li><a href="#">2010</a></li>
                      <li><a href="#">2011</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">TO (or expected graduation
                      year)
                      <span className="caret" /></button>
                    <ul className="dropdown-menu dateBtn p-2">
                      <li><a href="#">2019</a></li>
                      <li><a href="#">2020</a></li>
                      <li><a href="#">2021</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <label className="text-left mb-3"><b>Description (Optional)</b></label>
              <textarea type="text" placeholder="Sescribe your studies, awards,etc" defaultValue={""} />
            </div>
            <br />
            <div className="modal-footer p-4">
              <button type="button" className="btn btn-default btn-link cancelBtn" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-outline-success saveAddMore d-lg-inline d-sm-none">Save &amp; Add
                More</button>
              <button type="button" className="btn btn-success saveBtn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer bg-white crdfooter">
      <a href="../9/signUp9.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
      <a href="../7/signUp7.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
    </div>
  </div>
</div>

  )
}
