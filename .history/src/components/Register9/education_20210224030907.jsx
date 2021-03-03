import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Datetime from "react-datetime";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import Swal from "sweetalert2";
import { ErrorMessage } from "@hookform/error-message";
import { FreelancerEducationSchema } from "./validationSchema";
import { Spinner, StepHeader, FormError, StepFooter } from "./components";
// import { stepsContext } from "./context";
// import { useAPIHelpers } from "./customHooks";

const customStyles = {
    content: {
        overflow: "scroll",
        height: "25rem",
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

export const Education = () => {
    const { setCurrentStep, freelancerData } = useContext();

    const [educationData, setEducationData] = useState([...freelancerData?.education]);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentEditItemIndex, setCurrentEditItemIndex] = useState(null);

    const { t } = useTranslation();

    const { register, handleSubmit, errors, setValue, reset, watch } = useForm({
        resolver: yupResolver(FreelancerEducationSchema),
    });

    useEffect(() => {
        setCurrentStep(2);
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() { }

    function closeModal() {
        reset({});
        setCurrentEditItemIndex(null);
        setIsOpen(false);
    }

    useEffect(() => {
        register({ name: "from_date" });
        register({ name: "to_date" });
    }, [register]);

    const changeDate = (date, name) => {
        const dateMod = date.format("MMMM YYYY");
        setValue(name, dateMod, { shouldValidate: true, shouldDirty: true });
    };

    const onSubmit = (data) => {
        const arr = [...educationData];
        currentEditItemIndex === null ? arr.push(data) : arr.splice(currentEditItemIndex, 1, data);
        setEducationData(arr);
        setCurrentEditItemIndex(null);
        reset({});
        setIsOpen(false);
    };

    // const [{ loading: freelancerEducationLoading }, addFreelancerEducation] = api.useAxios(
    //   { url: "/freelancer-education", method: "post" },
    //   { manual: true },
    // );

    // const dispatch = useDispatch();

    // const { stepLoading, stepSubmit } = useAPIHelpers();

    const submitData = () => {
        if (educationData.length === 0) {
            return Swal.fire({
                toast: true,
                position: "bottom",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                text: "You must add at least one education before going to the next step",
            });
        }
        // addFreelancerEducation({ data: { education: JSON.stringify(educationData) } }).then((res) => {
        //   setFreelancerData(res.data.freelancerData);
        //   dispatch(updateUser(res.data.freelancerData.user));
        //   goNext();
        // });
        // stepSubmit("/freelancer-education", { education: JSON.stringify(educationData) }, {});
    };

    const deleteItem = (itemIndex) => {
        const arr = [...educationData];
        arr.splice(itemIndex, 1);
        setEducationData(arr);
    };

    const editItem = (itemIndex) => {
        setCurrentEditItemIndex(itemIndex);
        setIsOpen(true);
        reset(educationData[itemIndex]);
    };

    const renderEducationData = () => {
        return educationData?.map((item, index) => (
            <>
                <div className="position-relative" key={`${item?.from_date}_${index + 1}`}>
                    <div className="row">
                        <div className="col-md-10 pl-0">
                            <h4>{item.school}</h4>
                        </div>
                        <div className="col-md-2 d-flex justify-content-around">
                            <button onClick={() => editItem(index)} className="modify-btn">
                                <i className="fas fa-edit" />
                            </button>
                            <button onClick={() => deleteItem(index)} className="modify-btn">
                                <i className="fas fa-trash" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="d-inline-block">{item.degree}</p>
            &nbsp;<span>{t("of")}</span>&nbsp;
            <p className="d-inline-block">{item.study}</p>
                    </div>
                    <div data-test="period" className="text-muted">
                        <div>
                            <p>
                                {moment(item?.from_date?.toString()).format("MMMM YYYY")} -{" "}
                                {moment(item?.to_date?.toString()).format("MMMM YYYY")}
                &nbsp; <span>({t("Expected")})</span>
                            </p>
                        </div>
                    </div>
                    <p style={{ overflowWrap: "break-word" }}>{item.description}</p>
                </div>
                <hr />
            </>
        ));
    };

    return (
        <>
            <Spinner />

            <div className="col-lg-8">
                <div className="post-project-fields ">
                    <div className="row">
                        <StepHeader
                            title="Education"
                            description="Add the schools you attended, areas of study, and degrees earned."
                        />
                    </div>

                    <>
                        <div className="row">
                            <div className="col-lg-12">{renderEducationData()}</div>
                            <div className="col-12 mb-5">
                                <button className="btn btn-outline-primary" onClick={openModal}>
                                    {t("Add Education")}
                                </button>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal">
                                    <h2 style={{ display: "inline-block", color: "#01385f" }}>
                                        {t("Add Education")}
                                    </h2>
                                    <button
                                        style={{ float: "right", lineHeight: 2, backgroundColor: "#fff" }}
                                        onClick={closeModal}>
                                        <i className="far fa-times-circle" style={{ width: 40, height: 40 }} />
                                    </button>
                                    <hr style={{ height: 1, color: "#ccc" }} />
                                    <div className="post-project-fields mt-0 pt-0">
                                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                                                        watch("from_date") &&
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

                            <div className="col-lg-12">
                                <StepFooter nextCallback={submitData} />
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};

Education.propTypes = {};