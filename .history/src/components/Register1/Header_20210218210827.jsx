import React from 'react'

export const Header = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="index.html">
    <img id="/images/imgLogo" src="upwork.png" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <p className=" nav-link insideLoginWord">Already have an account?</p>
        <a className="nav-link " id="loginWord" href="signUp.html" onmousemove="this.parentElement.style.color='#378b37'"> Log In </a>
      </li>
    </ul>
  </div>
</nav>

    )
}
