import React from 'react'

export const FirstSection = () => {
    return (
       <section className="pt-4 pt-md-11" style={{backgroundImage: 'url(https://www.upwork.com/static/assets/Brontes/7814396/img/xl.24b3e20.jpg)', backgroundPosition: '50%', backgroundSize: 'cover !important', backgroundRepeat: 'no-repeat', padding: '40px 0'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-md-5 col-lg-6 order-md-2">
      </div>
      <div className="col-12 col-md-7 col-lg-10 order-md-1 aos-init aos-animate" data-aos="fade-up">
        {/* Heading */}
        <div className="row">
          <h1 className="text-success vs-text-canela vs-color-up-green mb-4 col-10 col-sm-8 col-xl-7">
            In-demand talent <span className="nowrap">on demand.<sup>TM</sup></span><br /> <span className="second-header vs-color-white">
              Upwork is how.<sup>TM</sup></span></h1>
        </div>
        {/* Text */}
        <div className="row">
          <p className="text-light lead-intro vs-color-white d-none d-md-block col-md-8 col-lg-7 col-xl-6">
            Hire proven pros with confidence using the world’s largest, remote talent platform.
          </p>
        </div>
        {/* Buttons */}
        <div>
          <div className="text-light d-flex d-md-block mb-3 mb-md-0">
            <button tabIndex={0} className="btn btn-light cta-group__btn up-btn up-btn-default mb-0 ml-5 mr-0">
              Watch Demo
            </button>
            <a  href="/signup/?accountType=client " tabIndex={0 } className="cta-group__btn up-btn up-btn-primary mb-0 mr-10 btn btn-success ">Get Started</a>
          </div>
        </div>
      </div>
    </div> {/* / .row */}
  </div> {/* / .container */}
</section>

    )
}
