/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
// import Swal from "sweetalert2";
import { ErrorMessage } from "@hookform/error-message";
// import _ from "lodash";
// import { FreelancerLanguagesSchema } from "../../../utils/validationSchema";
import {
  // Spinner,
  // StepHeader,
  FormError,
  ControlledCustomSelect,
  // StepFooter,
} from "../../../components";
// import api from "../../../services/api";
// import { stepsContext } from "../../../context";
// import { useAPIHelpers } from "../../../customHooks";

const customStyles = {
  content: {
    height: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "#0009",
  },
};

export const Languages = () => {
  // const { setCurrentStep, freelancerData, levelOptions } = useContext(
  //   stepsContext
  // );

  // const [result, setResult] = useState([
  //   ...freelancerData?.languages.map((language) => ({
  //     ...language,
  //     level_name: levelOptions[language?.pivot?.level - 1].name,
  //     level_id: language?.pivot?.level,
  //   })),
  // ]);

  // const { stepLoading, stepSubmit } = useAPIHelpers();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEditItemIndex, setCurrentEditItemIndex] = useState(null);
  const [languagesData, setLanguagesData] = useState([]);

  const { t } = useTranslation();

  // const [{ loading: languagesLoading }, fetchLanguages] = api.useAxios(
  //   {
  //     url: "/languages",
  //     method: "get",
  //   },
  //   { manual: true }
  // );

  // useEffect(() => {
  //   // setCurrentStep(4);
  //   fetchLanguages().then((res) => {
  //     const arr = res.data.languages;
  //     const freelancerLanguagesIds = {};
  //     // result.forEach((lang) => {
  //     //   freelancerLanguagesIds[lang.id] = true;
  //     // });
  //     _.remove(arr, (lang) => lang.id in freelancerLanguagesIds);
  //     setLanguagesData(arr);
  //   });
  // }, []);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    reset({});
    setCurrentEditItemIndex(null);
    setIsOpen(false);
    setIsEdit(false);
  }

  const { handleSubmit, errors, control, reset, register } = useForm({
    // resolver: yupResolver(FreelancerLanguagesSchema),
  });

  const onSubmit = () => {}

  // const onSubmit = (data) => {
  //   const language = _.find(
  //     languagesData,
  //     (lang) => lang.id == data.language_id
  //   );
  //   const level = levelOptions[data.level - 1];
  //   const langIndex = _.findIndex(
  //     result,
  //     (lang) => lang.id == data.language_id
  //   );
  //   if (langIndex >= 0) {
  //     const resultArr = [...result];
  //     const lang = {
  //       ...result[langIndex],
  //       level_name: levelOptions[data.level - 1].name,
  //       level_id: data.level,
  //     };
  //     resultArr[langIndex] = lang;

  //     setResult(resultArr);
  //   } else {
  //     setResult((prev) => [
  //       ...prev,
  //       { ...language, level_name: level.name, level_id: level.id },
  //     ]);
  //   }
  //   const languagesDataArr = [...languagesData];
  //   _.remove(languagesDataArr, (lang) => lang.id == data.language_id);
  //   setLanguagesData(languagesDataArr);
  //   setCurrentEditItemIndex(null);
  //   reset({});
  //   setIsOpen(false);
  //   setIsEdit(false);
  // };

  // const submitData = () => {
  //   if (result.length === 0) {
  //     return Swal.fire({
  //       toast: true,
  //       position: "bottom",
  //       showConfirmButton: false,
  //       timer: 4000,
  //       timerProgressBar: true,
  //       text:
  //         "You must add at least one employemnt before going to the next step",
  //     });
  //   }
  //   const formattedLanguages = {};
  //   result.forEach((language) => {
  //     formattedLanguages[language?.id] = { level: language?.level_id };
  //   });
  //   stepSubmit(
  //     "/freelancer-languages",
  //     { languages: JSON.stringify(formattedLanguages) },
  //     {}
  //   );
  // };

  // const deleteItem = (id) => {
  //   const arr = [...result];
  //   const language = _.remove(arr, (lang) => lang.id == id);
  //   setResult(arr);
  //   setLanguagesData((prev) => [...prev, ...language]);
  // };

  // const editItem = (index) => {
  //   setCurrentEditItemIndex(index);
  //   reset({ language_id: result[index].id, level: result[index].level_id });
  //   setIsOpen(true);
  //   setIsEdit(true);
  // };

  // const renderLanguagesData = () => {
  //   return result.map((language, index) => (
  //     <>
  //       <div
  //         className="position-relative"
  //         key={`${language?.from_date}_${index + 1}`}
  //       >
  //         <div className="row">
  //           <div className="col-md-10 pl-0">
  //             <h4 className="d-inline-block">{language?.name}</h4>
  //           </div>
  //           <div className="col-md-2 d-flex justify-content-around">
  //             <button onClick={() => editItem(index)} className="modify-btn">
  //               <i className="fas fa-edit" />
  //             </button>
  //             <button
  //               onClick={() => deleteItem(language?.id)}
  //               className="modify-btn"
  //             >
  //               <i className="fas fa-trash" />
  //             </button>
  //           </div>
  //         </div>

  //         <div data-test="degree">
  //           <p className="d-inline-block">{language?.level_name}</p>
  //         </div>
  //       </div>
  //       <hr />
  //     </>
  //   ));
  // };

  return (
    <>
      {/* <Spinner isOpen={languagesLoading || stepLoading} /> */}

      <div className="col-lg-8">
        <div className="post-project-fields">
          <div className="row">
            {/* <StepHeader
              title="Languages"
              description="What languages do you speak?"
            /> */}
          </div>
          <>
            <div className="row">
              <div className="col-lg-12">{/* {renderLanguagesData()} */}</div>
              <div className="col-12 mb-5">
                <button
                  className="btn btn-outline-primary"
                  onClick={openModal}
                  disabled={languagesData.length === 0}
                >
                  {t("Add Languages")}
                </button>
                <Modal
                  parentSelector={() =>
                    document.querySelector(".post-project-fields")
                  }
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 style={{ display: "inline-block", color: "#01385f" }}>
                    {t("Add Language")}
                  </h2>
                  <button
                    style={{
                      float: "right",
                      lineHeight: 2,
                      backgroundColor: "#fff",
                    }}
                    onClick={closeModal}
                  >
                    <i
                      className="far fa-times-circle"
                      style={{ width: 40, height: 40 }}
                    />
                  </button>
                  <hr style={{ height: 1, color: "#ccc" }} />
                  <div className="post-project-fields mt-0 pt-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="sn-field">
                            {!isEdit ? (
                              <ControlledCustomSelect
                                control={control}
                                name="language_id"
                                placeholder="Language"
                                options={languagesData}
                              />
                            ) : (
                              <>
                                {/* <h4>{result[currentEditItemIndex]?.name}</h4> */}
                                <input
                                  type="hidden"
                                  name="language_id"
                                  ref={register}
                                />
                              </>
                            )}
                          </div>
                          <ErrorMessage
                            errors={errors}
                            name="language_id"
                            render={FormError}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="sn-field">
                            <ControlledCustomSelect
                              control={control}
                              name="level"
                              placeholder="Level"
                              // options={levelOptions}
                              // defaultValue={
                              //   currentEditItemIndex !== null
                              //     ? {
                              //         name:
                              //           // result[currentEditItemIndex]
                              //             // ?.level_name,
                              //         id:
                              //           result[currentEditItemIndex]?.level_id,
                              //       }
                              //     : null
                              // }
                            />
                          </div>
                          <ErrorMessage
                            errors={errors}
                            name="level"
                            render={FormError}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-primary float-right"
                        >
                          {t("save")}
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              </div>

              <div className="col-lg-12">
                {/* <StepFooter nextCallback={submitData} /> */}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

Languages.propTypes = {};
