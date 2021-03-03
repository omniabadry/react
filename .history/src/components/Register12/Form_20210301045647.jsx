import React from 'react'
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "../formError";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Schema = yup.object().shape({
  salary: yup
    .string()
    .matches(phoneRegExp, "Salary is not valid")
    .required(),
});

export const Form = () => {

 const history = useHistory();
 const { register, handleSubmit, errors } = useForm({
   resolver: yupResolver(Schema),
 });
 
 const handleRegisterBack12 = () => {
   history.push("/Register11");
 };
 const handleRegisterNext12 = () => {
   history.push("/Register13");
 };

  const onSubmit = () => {
    history.push("/Register12");
     };

 const { t } = useTranslation();


//   function myFunction() {
//     var x = document.getElementById("mySelect").value;
//     document.getElementById("demo").innerHTML = "You selected: " + x;
// }



// document.getElementById("myHourlyRate").oninput = () => {
//     const input = document.getElementById('myHourlyRate');
//     const output = document.getElementById('myHourlyRateDiscount');
//     const discountValue = document.getElementById('discount');

//     if (myHourlyRate.value > 0) {
//         myHourlyRateDiscount.value = input.value - 5
//     } else {
//         myHourlyRate.value
//     }

//     if (myHourlyRate.value > 0) {
//         discount.value = -5
//     } else {
//         discount.value = ""
//     }

// };



// $(document).ready(function () {
//     /* Get iframe src attribute value i.e. YouTube video url
//     and store it in a variable */
//     var url = window.$("#myVideo").attr('src');

//     /* Assign empty url value to the iframe src attribute when
//     modal hide, which stop the video playing */
//     window.$("#myModal").on('hide.bs.modal', function () {
//         $("#myVideo").attr('src', '');
//     });

//     /* Assign the initially stored url back to the iframe src
//     attribute when modal is displayed again */
//     window.$("#myModal").on('show.bs.modal', function () {
//         window.$("#myVideo").attr('src', url);
//     });
// });
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-xl-8 col-12 col-sm-12 col-md-12 shadow-lg"
        id="formDesign12"
      >
        <div className="card-fluid">
          <p className="card crdhd">
            <b>Hourly Rate</b>
            <span className="text-muted mutepara">7 of 11</span>
          </p>
          <div className="card-body" id="crd">
            <p className="card-title" id="crdtitle">
              Clients will see this rate on your profile and in search results
              once you publish your profile. You can adjust your rate every time
              you submit a proposal.
            </p>
            <br />
            <div className="card-text">
              <div className="row">
                <div className="col-xl-6 col-md-12 mb-2">
                  <p>
                    <b>Hourly Rate</b>
                  </p>
                  <p className="text-muted">Total amount the client will see</p>
                </div>
                <div className="col-xl-6 col-md-12 mb-2 text-center">
                  <input
                    className="form-control inputHourly"
                    placeholder="$ 0.00"
                    id="myHourlyRate"
                  />
                  &nbsp; &nbsp;/hr
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xl-6 col-md-12 my-4">
                  <p style={{ display: "inline" }}>
                    <b>Upwork Service Fee</b>
                  </p>
                  &nbsp;&nbsp;
                  <a href="#" className="text-success">
                    Explain this
                  </a>
                  <p className="text-muted">
                    The Upwork Service Fee is 20% when you begin a contract with
                    a new client. Once you bill over $500 with your client, the
                    fee will be 10%.
                  </p>
                </div>
                <div className="col-xl-6 col-md-12 my-4">
                  <p className="text-muted text-center paragHourly">
                    <b>$</b>
                    <input
                      id="discount"
                      name="salary"
                      ref={register}
                      style={{ border: "none", width: "40%" }}
                    />
                    /hr
                  </p>
                  <ErrorMessage
                    errors={errors}
                    name="salary"
                    render={FormError}
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xl-6 col-md-12 mb-2">
                  <p>
                    <b>You'll receive</b>
                  </p>
                  <p className="text-muted">
                    The estimated amount you'll receive after service fees
                  </p>
                </div>
                <div className="col-xl-6 col-md-12 mb-2 text-center">
                  <input
                    className="form-control inputHourly"
                    placeholder="$ 0.00"
                    id="myHourlyRateDiscount"
                  />
                  &nbsp; &nbsp;/hr
                </div>
              </div>
              <div className="row container" id="containerbg">
                <div
                  className="col-xl-8 col-md-12 mb-2 text-center"
                  style={{ paddingTop: "1.5rem" }}
                >
                  <h4
                    className="text mb-4  text-left"
                    style={{ fontSize: "1.4rem" }}
                  >
                    <b>Upwork service fees can be as low as 5%</b>
                  </h4>
                  <a
                    href="#myModal"
                    className="btn btn-outline text-success text-center hourlyBtn"
                    data-toggle="modal"
                  >
                    <i
                      className="fas fa-play text-success"
                      style={{ fontSize: "1rem" }}
                    />
                    &nbsp;&nbsp;&nbsp;See how it works
                  </a>
                  {/* Modal HTML */}
                  <div id="myModal" className="modal fade">
                    <div className="modal-dialog hourlyModal">
                      <div className="modal-content p-2">
                        <div className="modal-header">
                          <h1>
                            <b>Upwork service fees</b>
                          </h1>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            ×
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              id="myVideo"
                              className="embed-responsive-item"
                              src="images/hourly-video.mp4"
                              allowFullScreen
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn-success"
                            data-dismiss="modal"
                            id="closeHourlyBtn"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 text-right">
                  <img
                    src="images/rate.png"
                    alt="rate pic"
                    className="rateImg"
                  />
                </div>
              </div>
              <br />
              <br />
              <button
                className="btn-link mb-2 skipBtn"
                type="submit"
                onClick={handleRegisterNext12}
              >
                <b>{t("Skip this step")}</b>
              </button>
            </div>
          </div>
          <div className="card-footer bg-white crdfooter">
            <button
              className="btn btn-success col-lg-5 col-sm-12 mb-3"
              id="nextBtn12"
              type="submit"
            >
              <b>{t("Next")}</b>
            </button>
            <button
              className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3"
              id="backBtn12"
              type="submit"
              onClick={handleRegisterBack12}
            >
              <b>{t("Back")}</b>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
