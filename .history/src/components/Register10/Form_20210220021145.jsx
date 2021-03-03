import React from 'react'

export const Form = () => {
  return (
    <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="formDesign">
  <div className="card-fluid">
    <p className="card crdhd"><b>Employment</b><span className="text-muted mutepara">5 of 11</span></p>
    <div className="card-body" id="crd">
      <h2 className="text-left">Add your past work experience</h2>
      <p className="card-title" id="crdtitle">Build your credibility by showcasing the projects or jobs you have completed.</p><br />
      <div className="card-text">
        <button type="button" className="btn btn-outline addEdue" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Employment</b></button><br /><br /><br />
        <button className="btn-link mb-2 skipBtn">Skip this step</button>
      </div>
      {/* Modal */}
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog  modal-xl modalContainer">
          {/* Modal content*/}
          <div className="modal-content p-3 my-5" style={{borderRadius: '1rem'}}>
            <div className="modal-header">
              <h2 className="modal-title text-left p-0">Add employment</h2>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <label className="text-left mb-3"><b>Company</b></label>
              <input className="form-control mb-2 p-4" type="text" style={{borderRadius: '0.5rem'}} /><br />
              <label className="text-left mb-3"><b>Location</b></label>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <input className="form-control mb-2 city" type="text" placeholder="City" /><br />
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">Egypt
                      <span className="caret" /></button>
                    <ul className="dropdown-menu dateBtn p-2">
                      <li><a href="#">Egypt</a></li>
                      <li><a href="#">Angola</a></li>
                      <li><a href="#">Canada</a></li>
                      <li><a href="#">France</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <label className="text-left mb-3"><b>Title</b></label>
              <input className="form-control mb-2 p-4" type="text" style={{borderRadius: '0.5rem'}} /><br />
              <label className="text-left mb-3"><b>Period</b></label>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">Month
                      <span className="caret" /></button>
                    <ul className="dropdown-menu dateBtn p-2">
                      <li><a href="#">January</a></li>
                      <li><a href="#">February</a></li>
                      <li><a href="#">March</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted text-left p-3 dropdown-toggle dateBtn" type="button" data-toggle="dropdown">Year
                      <span className="caret" /></button>
                    <ul className="dropdown-menu p-2 dateBtn">
                      <li><a href="#">1990</a></li>
                      <li><a href="#">1991</a></li>
                      <li><a href="#">1992</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-muted">through</p>
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">Month
                      <span className="caret" /></button>
                    <ul className="dropdown-menu dateBtn p-2">
                      <li><a href="#">January</a></li>
                      <li><a href="#">February</a></li>
                      <li><a href="#">March</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="dropdown">
                    <button className="btn btn-muted text-left p-3 dropdown-toggle dateBtn" type="button" data-toggle="dropdown">Year
                      <span className="caret" /></button>
                    <ul className="dropdown-menu p-2 dateBtn">
                      <li><a href="#">1990</a></li>
                      <li><a href="#">1991</a></li>
                      <li><a href="#">1992</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <input type="checkbox" className="text-left mb-5" />&nbsp; I currently work here<br />
              <label className="text-left mb-3"><b>Description (Optional)</b></label>
              <textarea type="text" defaultValue={""} />
            </div>
            <br />
            <div className="modal-footer p-4">
              <button type="button" className="btn btn-default btn-link cancelBtn" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success saveBtn">Save</button>
            </div>
            
          </div>

        </div>
      </div>
    </div>
    <div className="card-footer bg-white crdfooter">
      <a href="../10/signUp10.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
      <a href="../8/signUp8.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
    </div>
  </div>
</div>

  )
}
