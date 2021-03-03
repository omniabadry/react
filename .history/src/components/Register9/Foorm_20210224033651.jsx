import * as yup from "yup";
import Datetime from "react-datetime";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const FreelancerEducationSchema = yup.object().shape({
    school: yup.string().required(),
    study: yup.string().required(),
    degree: yup.string().required(),
    from_date: yup.date().required("from date is a required field"),
    to_date: yup.date().required("to date is a required field"),
    description: yup.string().required(),
});

export const Foorm = () => {
    return (
        <div>
            
        </div>
    )
}
