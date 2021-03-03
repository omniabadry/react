/* eslint-disable camelcase */
import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "@hookform/error-message";
// import {
//     Spinner,
//     StepHeader,
//     StepFooter,
//     ControlledCustomSelect,
//     FormError,
//     RadioGroup,
// } from "../../../components";
// import { FreelancerExpertiseSchema } from "../../../utils/validationSchema";
import { stepsContext } from "./context";
// import { useSkills, useSelectHelpers, useAPIHelpers, useServices } from "../../../customHooks";
import * as yup from "yup";


export const FreelancerExpertiseSchema = yup.object().shape({
    main_service_id: yup.string().required("main service is a required field"),
    service_id: yup.array().required("sub services is a required field"),
    skill_id: yup.array().required("skills is a required field"),
    expertise_level: yup.string().required("expertise is a required level"),
});


export const level = () => {
    // const { setCurrentStep, freelancerData, expertiseLevel } = useContext(stepsContext);

    // const { currentSkills, skillsLoading } = useSkills();
    // const { extractId } = useSelectHelpers();

    const { register, handleSubmit, control, errors, reset, setError, watch } = useForm({
        resolver: yupResolver(FreelancerExpertiseSchema),
    });

    // const { stepLoading, stepSubmit } = useAPIHelpers();

    useEffect(() => {
        // setCurrentStep(1);
        reset({
            // title: freelancerData?.title,
            // main_service_id: freelancerData?.main_service_id,
            // service_id: extractId(freelancerData?.services),
            // skill_id: extractId(freelancerData?.skills),
            // expertise_level: `${freelancerData?.expertise_level}`,
        });
    }, []);

    // const { servicesLoading, currentServices, currentSubServices } = useServices(
    //     watch("main_service_id"),
    // );

    const { t } = useTranslation();

    const onSubmit = (data) => {
        // stepSubmit("/freelancer-expertise", data, { setError });
    };

    return (
        <>
            {/* <Spinner isOpen={stepLoading || skillsLoading || servicesLoading} /> */}
            <div className="col-lg-8">
                <div className="post-project-fields">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* <StepHeader title="Expertise" /> */}

                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <div className="sn-field">
                                        <label className="custom-form-label" htmlFor="main_service_id">
                                            {t("Choose the main service of your expertise")}
                                        </label>
                                        {/* <ControlledCustomSelect
                                            control={control}
                                            name="main_service_id"
                                            placeholder="Main Service"
                                            // options={currentServices}
                                        /> */}
                                    </div>

                                    {/* <ErrorMessage errors={errors} name="main_service_id" render={FormError} /> */}
                                </div>
                            </div>
                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <div className="sn-field">
                                        <label className="custom-form-label" htmlFor="service_id">
                                            {t("Choose sub services that you can provide")}
                                        </label>

                                        {/* <ControlledCustomSelect
                                            isMulti
                                            control={control}
                                            name="service_id"
                                            placeholder="Sub Services"
                                            // options={currentSubServices}
                                        /> */}
                                    </div>
                                    {/* <ErrorMessage errors={errors} name="service_id" render={FormError} /> */}
                                </div>
                            </div>
                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <div className="sn-field">
                                        <label className="custom-form-label" htmlFor="skill_id">
                                            {t("Choose skills")}
                                        </label>

                                        {/* <ControlledCustomSelect
                                            isMulti
                                            control={control}
                                            name="skill_id"
                                            placeholder="Skills"
                                            // options={currentSkills}
                                            isOptGroup
                                        /> */}
                                    </div>
                                    {/* <ErrorMessage errors={errors} name="skill_id" render={FormError} /> */}
                                </div>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <div className="form-group row">
                                    <div className="col-md-4 pl-0">
                                        <label className="custom-col-label custom-form-label">
                                            {t("Experince level in this field")}
                                        </label>
                                    </div>
                                    <div className="col-md-8">
                                        {/* <RadioGroup register={register} data={expertiseLevel} name="expertise_level" /> */}
                                    </div>
                                    {/* <ErrorMessage errors={errors} name="expertise_level" render={FormError} /> */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                {/* <StepFooter /> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
Expertise.propTypes = {};
