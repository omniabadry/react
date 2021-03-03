import React from 'react'

export const ThirdDiv = () => {
    return (
      <div className="container-fluid secondDiv">
        <div>
          <h4>
            <b>Trusted by 5M+ businesses</b>
          </h4>
        </div>
        <div className="row">
          <div className="col-4 col-lg-2   imgMicro">
            <img src="/images/Microsoft-Logo-2012-present.jpg" />
          </div>
          <div className="col-lg-2 d-none d-lg-block imgAir">
            <img src="/images/airbnb_horizontal_lockup_print.jpg" />
          </div>
          <div className="col-4 col-lg-2 imgEg">
            <img src="/images/eg.jpg" />
          </div>
          <div className="col-lg-2 d-none d-lg-block  imgAuto">
            <img src="/images/automattic-cmyk.jpg" />
          </div>
          <div className="col-4 col-lg-2 imgBissel">
            <img src="/images/bissel.png" />
          </div>
          <div className="col-lg-2 d-none   d-lg-block">
            <img src="/images/coty-inc.jpg" />
          </div>
        </div>
      </div>
    );
}
