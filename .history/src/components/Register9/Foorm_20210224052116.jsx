import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import Datetime from "react-datetime";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { stepsContext } from "./context";
import moment from "moment";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "./formError";
import { useHistory } from "react-router-dom";


export const FreelancerEducationSchema = yup.object().shape({
    school: yup.string().required(),
    study: yup.string().required(),
    degree: yup.string().required(),
    from_date: yup.date().required("from date is a required field"),
    to_date: yup.date().required("to date is a required field"),
    description: yup.string().required(),
});

export const Foorm = () => {

    // const { setCurrentStep, freelancerData } = useContext(stepsContext);

    // const [educationData, setEducationData] = useState([...freelancerData?.education]);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentEditItemIndex, setCurrentEditItemIndex] = useState(null);

    const { t } = useTranslation();

    const { register, handleSubmit, errors, setValue, reset, watch } = useForm({
        resolver: yupResolver(FreelancerEducationSchema),
    });

    // useEffect(() => {
    //     setCurrentStep();
    // });

    const history = useHistory();
    const handleRegisterNext9 = () => {
        history.push("/Register10")
    }
    const handleRegisterBack9 = () => {
        history.push("/Register8")
    }

    function openModal() {
        setIsOpen(true);
    }

    const changeDate = (date, name) => {
        const dateMod = date.format("MMMM YYYY");
        setValue(name, dateMod, { shouldValidate: true, shouldDirty: true });
    };

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        reset({});
        setCurrentEditItemIndex(null);
        setIsOpen(false);
    }
    useEffect(() => {
        register({ name: "from_date" });
        register({ name: "to_date" });
    }, [register]);
    function afterOpenModal() { }


    const onSubmit = (data) => {
        // const arr = [...educationData];
        const arr = [];

        currentEditItemIndex === null ? arr.push(data) : arr.splice(currentEditItemIndex, 1, data);
        // setEducationData(arr);
        setCurrentEditItemIndex(null);
        reset({});
        setIsOpen(false);
    };

    return (
        <div className="col-xl-7 col-12 col-sm-12 col-md-12" id="form9Design">

            {/* <Spinner isOpen={stepLoading} /> */}
            <div >
                <p className="card crdhd"><b>Education</b><span className="text-muted mutepara">4 of 11</span></p>
                <div id="crd" >
                    {/* <div className="row">
                        {/* <StepHeader
                            title="Education"
                            description="Add the schools you attended, areas of study, and degrees earned."
                        /> 
                    </div> */}
                    <p className="card-title" id="crdtitle">Add the schools you attended, areas of study, and degrees
        earned.</p><br />
                    
                        <div className="row">
                            <div className="col-lg-12">
                                {/* {renderEducationData()} */}
                            </div>
                            <div className="col-12 mb-5">
                            <button className="btn btn-outline addEdue9" onClick={openModal}>
                                    <i className="fas fa-plus" />&nbsp;&nbsp;<b>{t("Add Education")}</b>
                                </button><br /><br /><br />

                                <button className="btn-link mb-2 skipBtn" type="submit" onClick={handleRegisterNext9}>Skip this step</button>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    // style={customStyles}
                                    contentLabel="Example Modal">
                                <div className="modal-header">
                                    <h2 className="modal-title text-left p-0">Add education</h2>
                                    <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>×</button>
                                </div>
                                    {/* <button
                                        style={{ float: "right", lineHeight: 2, backgroundColor: "#fff" }} onClick={closeModal}>
                                        <i className="far fa-times-circle" style={{ width: 40, height: 40 }} />
                                    </button> */}
                                    <hr style={{ height: 1, color: "#ccc" }} />
                                    <div className=" mt-0 pt-0">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            {/* <form> */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="sn-field ">
                                                        <input
                                                            type="text"
                                                            name="school"
                                                            ref={register}
                                                            placeholder={t("School - Ex: Campridge University")}
                                                        />
                                                    </div>

                                                    <ErrorMessage errors={errors} name="school" render={FormError} />
                                                </div>
                                            </div>

                                            <div className="clear-fix" />

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="sn-field">
                                                        <input
                                                            type="text"
                                                            ref={register}
                                                            name="study"
                                                            placeholder={t("Study - Ex: Computer Science")}
                                                        />
                                                    </div>

                                                    <ErrorMessage errors={errors} name="study" render={FormError} />
                                                </div>
                                            </div>

                                            <div className="clear-fix" />

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="sn-field">
                                                        <input
                                                            type="text"
                                                            ref={register}
                                                            name="degree"
                                                            placeholder={t("Degree - Ex: Bachelor's")}
                                                        />
                                                    </div>

                                                    <ErrorMessage errors={errors} name="degree" render={FormError} />
                                                </div>
                                            </div>

                                            <div className="clear-fix" />
                                            <div className="col-lg-12">
                                                <div className="price-sec">
                                                    <div className="price-br">
                                                        <div className="form-group">
                                                            <div className="sn-field">
                                                                <Datetime
                                                                    onChange={(date) => changeDate(date, "from_date")}
                                                                    dateFormat="MMMM YYYY"
                                                                    timeFormat={false}
                                                                    closeOnSelect
                                                                    inputProps={{
                                                                        placeholder: t("From Date"),
                                                                        className: "datetime",
                                                                        readOnly: true,
                                                                    }}
                                                                    initialValue={
                                                                        watch("from_date")
                                                                        &&
                                                                        moment(watch("from_date")).format("MMMM YYYY")
                                                                    }
                                                                    isValidDate={(current) =>
                                                                        watch("to_date")
                                                                            ? current.isSameOrBefore(watch("to_date"))
                                                                            : true
                                                                    }
                                                                />
                                                            </div>

                                                            <ErrorMessage errors={errors} name="from_date" render={FormError} />
                                                        </div>
                                                    </div>
                                                    <span>{t("To")}</span>

                                                    <div className="price-br">
                                                        <div className="form-group">
                                                            <div className="sn-field">
                                                                <Datetime
                                                                    onChange={(date) => changeDate(date, "to_date")}
                                                                    dateFormat="MMMM YYYY"
                                                                    timeFormat={false}
                                                                    closeOnSelect
                                                                    inputProps={{
                                                                        placeholder: t("To Date"),
                                                                        className: "datetime",
                                                                        readOnly: true,
                                                                    }}
                                                                    initialValue={
                                                                        watch("to_date") && moment(watch("to_date")).format("MMMM YYYY")
                                                                    }
                                                                    isValidDate={(current) =>
                                                                        watch("from_date")
                                                                            ? current.isSameOrAfter(watch("from_date"))
                                                                            : true
                                                                    }
                                                                />
                                                            </div>

                                                            <ErrorMessage errors={errors} name="to_date" render={FormError} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="clear-fix" />

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="sn-field">
                                                        <textarea
                                                            name="description"
                                                            ref={register}
                                                            placeholder={t("Description")}
                                                        />
                                                    </div>
                                                    <div className="float-left">
                                                        <ErrorMessage errors={errors} name="description" render={FormError} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="clear-fix" />

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary float-right">
                                                    {t("save")}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                           
                           
                            </div>
                        <div className="card-footer bg-white crdfooter">
                            <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn6" type="submit" onClick={handleRegisterNext9}><b>Next</b></button>
                            <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack9}><b>Back</b></button>
                        </div>

                            {/* <div className="col-lg-12">
                                <StepFooter nextCallback={submitData} />
                            </div> */}
                        </div>
                    
                </div>
            </div>

        </div>
    )
}
