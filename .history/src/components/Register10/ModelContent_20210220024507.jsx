import React from 'react'

export const ModelContent = () => {
    return (
        <div className="modal-content p-3 my-5" style={{ borderRadius: '1rem' }}>
            <div className="modal-header">
                <h2 className="modal-title text-left p-0">Add employment</h2>
                <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
                <label className="text-left mb-3"><b>Company</b></label>
                <input className="form-control mb-2 p-4" type="text" style={{ borderRadius: '0.5rem' }} /><br />
                <label className="text-left mb-3"><b>Location</b></label>
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <input className="form-control mb-2 city" type="text" placeholder="City" /><br />
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="dropdown">
                            {/* <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">Egypt
                      </button> */}
                            {/* <ul className="dropdown-menu dateBtn p-2">
                                <li>Egypt</li>
                                <li>Angola</li>
                                <li>Canada</li>
                                <li>France</li>
                            </ul> */}
                            <div className="col-12  ">
                                <select className="dropdownbutton dateBtn p-3">
                                    <option value="Egypt">Egypt</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Lebnanon">Lebnanon</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Andorra">Andorra</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="text-left mb-3"><b>Title</b></label>
                <input className="form-control mb-2 p-4" type="text" style={{ borderRadius: '0.5rem' }} /><br />
                <label className="text-left mb-3"><b>Period</b></label>
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="dropdown">
                            <button className="btn btn-muted dateBtn dropdown-toggle text-left p-3" type="button" data-toggle="dropdown">Month
                      </button>
                            {/* <ul className="dropdown-menu dateBtn p-2">
                                <li><a href="#">January</a></li>
                                <li><a href="#">February</a></li>
                                <li><a href="#">March</a></li>
                            </ul> */}

                            <div className="col-12  ">
                                <select className="dropdownbutton dateBtn p-3">
                                    <option value="Egypt">January</option>
                                    <option value="Algeria">February</option>
                                    <option value="Lebnanon">March</option>
                                    <option value="Angola">April</option>
                                    <option value="Andorra">May</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="dropdown">
                            <button className="btn btn-muted text-left p-3 dropdown-toggle dateBtn" type="button" data-toggle="dropdown">Year
                      </button>
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
                      </button>
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
                      </button>
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
    )
}
