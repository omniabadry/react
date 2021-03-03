import React from 'react'
import { ModelContent } from "./ModelContent";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  School: yup.string().required(),
  Area_of_Study: yup.string().required(),
  Degree: yup.string().required(),
  Description: yup.string().required(),
});


export const Form = () => {


  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => { }

  const history = useHistory();
  const handleRegisterNext9 = () => {
    history.push("/Register10")
  }
  const handleRegisterBack9 = () => {
    history.push("/Register8")
  }
  return (
    <form className="col-xl-7 col-12 col-sm-12 col-md-12" id="form9Design">
      <div className="card-fluid">
        <p className="card crdhd"><b>Education</b><span className="text-muted mutepara">4 of 11</span></p>
        <div className="card-body" id="crd">
          <p className="card-title" id="crdtitle">Add the schools you attended, areas of study, and degrees
        earned.</p><br />
          <div className="card-text">
            <button type="button" className="btn btn-outline addEdue9" data-toggle="modal"
             data-target="#myModal"> <i className="fas fa-plus" />&nbsp;&nbsp;<b>Add
            Education</b></button><br /><br /><br />
            <button className="btn-link mb-2 skipBtn" type="submit" onClick={handleRegisterNext9}>Skip this step</button>
          </div>
          {/* Modal */}
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog  modal-xl modalContainer">
              {/* Modal content*/}




              <div className="modal-content p-3 my-5" style={{ borderRadius: '1rem' }}>
                <div className="modal-header">
                  <h2 className="modal-title text-left p-0">Add education</h2>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="modal-body">
                  <label className="text-left mb-3"><b>School</b></label>
                  <input className={`form-control text-left mb-2 p-4 ${errors.School ? " border-danger" : ""}`} name='School' ref={register} type="text" placeholder="EX: Northwestern University" /><br />
                  {/* //    className={`form-control outline first ${errors.LastName ? "border-danger" : ""}`} */}
                  <div className="text-danger">
                    {errors.School && errors.School.message}
                  </div>
                  <label className="text-left mb-3"><b>Area of Study (Optional)</b></label>
                  <input className={`form-control text-left mb-2 p-4 ${errors.Area_of_Study ? " border-danger" : ""}`} name='Area_of_Study' ref={register} type="text" placeholder="EX: Computer Science" /><br />
                  <div className="text-danger">
                    {errors.Area_of_Study && errors.Area_of_Study.message}
                  </div>
                  <label className="text-left mb-3"><b>Degree (Optional)</b></label>
                  <input className={`form-control text-left mb-2 p-4 ${errors.Degree ? " border-danger" : ""}`} name='Degree' ref={register} type="text" placeholder="EX: Bachelor's" /><br />
                  <div className="text-danger">
                    {errors.Degree && errors.Degree.message}
                  </div>
                  <label className="text-left mb-3"><b>Dates Attended (Optional)</b></label>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12">
                      <div className="dropdown">
                        <button className="btn btn-muted text-left p-3 dropdown-toggle dateBtn9" type="button" data-toggle="dropdown">From
                     </button>
                        <ul className="dropdown-menu p-2 dateBtn9">
                          <li><a href="#">2012</a></li>
                          <li><a href="#">2010</a></li>
                          <li><a href="#">2011</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      <div className="dropdown">
                        <button className="btn btn-muted dateBtn9 dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">TO(or expected graduation
                        year)
                      </button>
                        <ul className="dropdown-menu dateBtn9 p-2">
                          <li><a href="#">2019</a></li>
                          <li><a href="#">2020</a></li>
                          <li><a href="#">2021</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <br />
                  <label className="text-left mb-3"><b>Description (Optional)</b></label>
                  <textarea type="text" className={`form-control ${errors.Description ? " border-danger" : ""}`} placeholder="Sescribe your studies, awards,etc" name="Description" ref={register} defaultValue={""} />
                  <div className="text-danger">
                    {errors.Description && errors.Description.message}
                  </div>
                  <br />
                  <div className="modal-footer p-4">
                    <button type="button" className="btn btn-default btn-link cancelBtn" data-dismiss="modal">Cancel</button>
                    <button type="submit" disabled={errors.School || errors.Description || errors.Area_of_Study || errors.Degree} className="btn btn-outline-success saveAddMore d-lg-inline d-none">Save &amp; Add
                More</button>
                    <button type="submit" className="btn btn-success saveBtn" disabled={errors.School || errors.Description || errors.Area_of_Study || errors.Degree}>Save</button>

                  </div>

                </form>

              </div>





        





            </div>
          </div>
        </div>
        <div className="card-footer bg-white crdfooter">
          <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext9}><b>Next</b></button>
          <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack9}><b>Back</b></button>
        </div>
      </div>
    </form>

  )
}
