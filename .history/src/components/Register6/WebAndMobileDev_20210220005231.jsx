import React from 'react'

export const WebAndMobileDev = () => {
    return (
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
    )
}

