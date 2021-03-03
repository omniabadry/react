import React from 'react'

export const DesignAndCreative = () => {
    return (
        <form id="rowDisabled">
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
        </form>
    )
}
