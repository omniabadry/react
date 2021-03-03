import React from 'react'

export const Header = () => {
    return (
     <div>
  <div className="container" id="blueForm">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark d-sm-none d-md-none d-lg-none d-xl-block d-none">
        <a className="navbar-brand" href="index.html">
          <img id="imgLogoLg" src="upwork.png" />
        </a>
      </nav>
    </div>
  </div>
  <div className="container-fluid" id="blueForm">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark d-md-block d-sm-block d-lg-block d-xl-none">
        <a className="navbar-brand" href="index.html">
          <img id="imgLogoSm" src="upwork.png" />
        </a>
      </nav>
    </div>
  </div>
</div>

    )
}
