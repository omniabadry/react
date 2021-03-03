import React from 'react'

export const Form = () => {
    return (
     <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="formDesign">
  <div className="card-fluid">
    <p className="card crdhd"><b>Expertise</b><span className="text-muted mutepara">2 of 11</span></p>
    <div className="card-body" id="crd">
      <h3 className="card-title" id="crdtitle">Select your skills</h3><br />
      <div className="card-text">
        <div className="btns">
          <button className="btn skillsBtn">MySQL
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">API
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Hibernate
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Python
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">PostgreSQL
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Bussiness Logical Layer
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">SQL
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Automatic Deployment Pipeline
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Angular JS
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">CI/CD
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">MongoDB
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">PHP
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Requirements Specification
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Spring Framework
            <i className="fas fa-plus iconBtn" />
          </button>
          <button className="btn skillsBtn">Microsoft SQL Server
            <i className="fas fa-plus iconBtn" />
          </button>
        </div>
        <br />
        <br />
        <label>
          <h4 className="inputInline"><b>Not what you're looking for? </b></h4><i className="fas fa-question-circle iconHelp" />
        </label><br />
        <input type="text" placeholder="Start typing to search for skills" id="inputStart" />
        <p className="text-muted enterpara">Enter at least 1 skill</p>
      </div><br />
      <div className="card-footer bg-white crdfooter">
        <a href="../7/signUp7.html"> <button className="btn btn-link btn-success" id="nextBtn" href="#"><b>Next</b></button></a>
        <a href="../5/signUp5.html"> <button className="btn btn-link btn-outline" id="backBtn" href="#"><b>Back</b></button></a>
      </div>
    </div>
  </div>
</div>


    )
}
