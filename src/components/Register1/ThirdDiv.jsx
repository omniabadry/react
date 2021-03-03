import React from 'react'
import { useTranslation } from "react-i18next";


export const ThirdDiv = () => {
      const { t } = useTranslation();

    return (
      <div className="container-fluid lastDiv">
        <div>
          <h4>
            <b>{t("More than 60k jobs are posted on Upwork every week")}</b>
          </h4>
        </div>
        <div className="row" id="lastMiddleDiv">
          <div className="col-xl-4 col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="row">
              <div className="col-4">
                <img className="imgLastDiv" src="/images/job.png" />
              </div>
              <div className="col-8">
                <b>{t("Find what you need")}</b> <br />
                {t(
                  "Choose from specialized freelancers and agencies with 5,000+ skills"
                )}
                .
              </div>
              <hr />
            </div>
          </div>
          <div className="col-xl-4 col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="row">
              <div className="col-4">
                <img className="imgLastDiv" src="/images/job.png" />
              </div>
              <div className="col-8">
                <b>{t("Find what you need")}</b> <br />
                {t(
                  "Choose from specialized freelancers and agencies with 5,000+ skills"
                )}
                .
              </div>
              <hr />
            </div>
          </div>
          <div className="col-xl-4 col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="row">
              <div className="col-4">
                <img className="imgLastDiv" src="/images/job.png" />
              </div>
              <div className="col-8">
                <b>{t("Find what you need")}</b> <br />
                {t(
                  "Choose from specialized freelancers and agencies with 5,000+ skills"
                )}
                .
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
}
