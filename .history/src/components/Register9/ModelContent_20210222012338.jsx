import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    School: yup.string().required(),
    Area_of_Study: yup.string().required(),
    Degree: yup.string().required(),
    Description: yup.string().required(),
});

export const ModelContent = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = () => { }
    return (
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
                    <button type="submit" disabled={errors.School || errors.Description||errors.Area_of_Study||errors.Degree} className="btn btn-outline-success saveAddMore d-lg-inline d-none">Save &amp; Add
                More</button>
                </div>
                <button type="submit" className="btn btn-success saveBtn" disabled={errors.School}>Save</button>

            </form>
            
        </div>
    )
}
