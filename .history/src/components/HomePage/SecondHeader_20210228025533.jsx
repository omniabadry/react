import React from "react";

export const SecondHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              style={{ padding: "10px 25px" }}
              href="#"
            >
              Web Dev <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Mobile Dev
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Design
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Writing
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Admin Support
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Customer Service
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Marketing
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              Accounting
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              See all Categories
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
