import React from 'react'

export const Accounting = () => {
    return (
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
    )
}
