import React from 'react'
import { useTranslation } from "react-i18next";


export const SecondDiv = () => {
      const { t } = useTranslation();

    return (
      <div className="container-fluid secondDiv">
        <div>
          <b>{t("Trusted by 5M+ businesses")}</b>
        </div>
        <div className="row">
          <div className="col-4 col-lg-2  imgMicro">
            <img
              className="img"
              src="/images/Microsoft-Logo-2012-present.jpg"
            />
          </div>
          <div className="col-lg-2 d-none d-lg-block imgAir">
            <img
              className="img"
              src="/images/airbnb_horizontal_lockup_print.jpg"
            />
          </div>
          <div className="col-4 col-lg-2 imgEg">
            <img className="img" src="/images/eg.jpg" />
          </div>
          <div className="col-lg-2 d-none d-lg-block  imgAuto">
            <img className="img" src="/images/automattic-cmyk.jpg" />
          </div>
          <div className="col-4 col-lg-2 imgBissel">
            <img className="img" src="/images/bissel.png" />
          </div>
          <div className="col-lg-2 d-none   d-lg-block">
            <img className="img" src="/images/coty-inc.jpg" />
          </div>
        </div>
      </div>
    );
}
