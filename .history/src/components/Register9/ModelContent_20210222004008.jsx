import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Password: yup.string().min(6, 'Password has to be longer than 6 characters!').required(),
    check: yup.boolean().required(),
    radioGroup: yup.string().required("A radio option is required"),

});

export const ModelContent = () => {
    return (
        <form className="modal-content p-3 my-5" style={{ borderRadius: '1rem' }}>
            <div className="modal-header">
                <h2 className="modal-title text-left p-0">Add education</h2>
                <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
                <label className="text-left mb-3"><b>School</b></label>
                <input className="form-control text-left mb-2 p-4" name='School' type="text" placeholder="EX: Northwestern University" /><br />
                <label className="text-left mb-3"><b>Area of Study (Optional)</b></label>
                <input className="form-control text-left mb-2 p-4" name='Area_of_Study' type="text" placeholder="EX: Computer Science" /><br />
                <label className="text-left mb-3"><b>Degree (Optional)</b></label>
                <input className="form-control text-left mb-2 p-4" name='Degree' type="text" placeholder="EX: Bachelor's" /><br />
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
                <textarea type="text" placeholder="Sescribe your studies, awards,etc" defaultValue={""} />
            </div>
            <br />
            <div className="modal-footer p-4">
                <button type="button" className="btn btn-default btn-link cancelBtn" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-outline-success saveAddMore d-lg-inline d-none">Save &amp; Add
                More</button>
                <button type="button" className="btn btn-success saveBtn">Save</button>
            </div>
        </form>
    )
}
