import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import Datetime from "react-datetime";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { stepsContext } from "./context";
import moment from "moment";



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
        <div>


            {/* <Spinner isOpen={stepLoading} /> */}

            <div className="col-lg-8">
                <div className="post-project-fields ">
                    <div className="row">
                        {/* <StepHeader
                            title="Education"
                            description="Add the schools you attended, areas of study, and degrees earned."
                        /> */}
                    </div>
                    <>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* {renderEducationData()} */}
                                </div>
                            <div className="col-12 mb-5">
                                <button className="btn btn-outline-primary" 
                                onClick={openModal}
                                >
                                    {t("Add Education")}

                                </button>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    // style={customStyles}
                                    contentLabel="Example Modal">
                                    <h2 style={{ display: "inline-block", color: "#01385f" }}>
                                        {t("Add Education")}

                                    </h2>
                                    <button
                                        style={{ float: "right", lineHeight: 2, backgroundColor: "#fff" }}
                                        onClick={closeModal}
                                        >
                                        <i className="far fa-times-circle" style={{ width: 40, height: 40 }} />
                                    </button>
                                    <hr style={{ height: 1, color: "#ccc" }} />
                                    <div className="post-project-fields mt-0 pt-0">
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

                                                    {/* <ErrorMessage errors={errors} name="school" render={FormError} /> */}
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

                                                    {/* <ErrorMessage errors={errors} name="study" render={FormError} /> */}
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

                                                    {/* <ErrorMessage errors={errors} name="degree" render={FormError} /> */}
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

                                                            {/* <ErrorMessage errors={errors} name="from_date" render={FormError} /> */}
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

                                                            {/* <ErrorMessage errors={errors} name="to_date" render={FormError} /> */}
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
                                                        {/* <ErrorMessage errors={errors} name="description" render={FormError} /> */}
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

                            {/* <div className="col-lg-12">
                                <StepFooter nextCallback={submitData} />
                            </div> */}
                        </div>
                    </>
                </div>
            </div>
            
        </div>
    )
}
