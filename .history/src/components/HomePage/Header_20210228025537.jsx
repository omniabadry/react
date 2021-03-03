import React from "react";

export const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{ backgroundColor: "#2b5468", padding: "1rem", color: "#fff" }}
      >
        <a className="navbar-brand" href="#">
          <svg
            width="8rem"
            viewBox="0 0 512 153"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            style={{ marginLeft: "5%", marginRight: "2%" }}
          >
            <path
              d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096.075-.3c1.536-8.62 6.409-23.089 21.402-23.089 11.244 0 20.39 9.146 20.39 20.39-.038 11.207-9.183 20.353-20.39 20.353zm0-61.395c-19.154 0-33.996 12.444-40.03 32.909-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993 21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359 22.601 0 41.005-18.516 41.005-41.118 0-22.564-18.404-40.967-41.005-40.967z"
              fill="#6FDA44"
            />
            <path
              d="M244.043 37.557l13.306 53.636 14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636 13.306-53.636h16.754v.038zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042 0 22.677 18.403 41.043 41.042 41.043 22.677 0 41.08-18.366 41.08-41.043 0-22.676-18.403-41.042-41.08-41.042zm0 65.218c-13.343 0-24.138-10.795-24.138-24.138 0-13.344 10.832-24.138 24.138-24.138 13.344 0 24.138 10.794 24.138 24.138 0 13.306-10.794 24.138-24.138 24.138zm90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392h-7.084zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578V115.03h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065l-30.697-41.754z"
              fill="white"
            />
          </svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my my-lg-0 text-light">
            <div style={{ position: "relative" }}>
              <input
                className="form text-light"
                type="search"
                id="searchin"
                placeholder="Search"
              />
              <div
                className="dropdown text-success"
                style={{ position: "absolute", top: 0, right: "80%" }}
              >
                <i className="fas fa-search" />
                <a
                  className="btn btn-secondary dropdown-toggle text-success bg-transparent border-0"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user-alt" />
                    &nbsp;&nbsp;Browse talent
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-file-alt" />
                    &nbsp;&nbsp;Shop by project
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-briefcase" />
                    &nbsp;&nbsp;Explore jobs
                  </a>
                </div>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                Projects <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                How it work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-success btn-sm text-light"
                style={{
                  padding: ".1rem .5rem",
                  fontSize: ".875rem",
                  lineHeight: "1.5",
                  borderRadius: ".5rem",
                }}
              >
                <a className="nav-link text-light" href="#">
                  sign up
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
