import React from "react";
import { useHistory } from "react-router-dom";
import { ControlledCustomSelect } from "./controlledCustomSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomSelect } from "./customSelect";
import { ErrorMessage } from "@hookform/error-message";
import { FormError } from "../formError";
import { useTranslation } from "react-i18next";

const schema = yup.object().shape({
  select1: yup.string().required(),
  select2: yup.string().required(),
  select3: yup.string().required(),
});

export const Form = () => {
  const { t } = useTranslation();

  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   register({ name: "select1" });
  //   register({ name: "select2" });
  //   register({ name: "select3" });
  // }, [register]);

  const options = [
    { value: "Accounting & Consultin", label: t("Accounting & Consultin") },
    { value: "Admin Support", label: t("Admin Support") },
    {
      value: "Web, Mobile & Software Dev",
      label: t("Web, Mobile & Software Dev"),
    },
  ];
  const history = useHistory();
  const handleRegisterNext6 = () => {
    history.push("/Register8");
  };
  const handleRegisterBack6 = () => {
    history.push("/Register5");
  };

  const onSubmit = () => {
    history.push("/Register8");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="col-xl-7 col-12 col-sm-12 col-md-12"
      id="form6Design"
    >
      <div className="card-fluid">
        <p className="card crdhd">
          <b>{t("Expertise")}</b>
          <span className="text-muted mutepara">2 {t("of")} 11</span>
        </p>
        <div className="card-body" id="crd">
          <h3 className="card-title" id="crdtitle">
            {t("Tell us about the work you do")}
          </h3>
          <br />
          <div className="card-text">
            <label>
              <h4>{t("What is the main service you offer?")}</h4>
            </label>
            {/* <Allservices /> */}

            {/* <CustomSelect
              // ref={register}
              options={options}
              id="inputStart"
              name="select1"
            /> */}

            <ControlledCustomSelect
              control={control}
              name="main_service_id"
              placeholder="Main Service"
              options={options}
            />
            <ErrorMessage errors={errors} name="select1" render={FormError} />
            {/* <WebAndMobileDev />
            <Accounting />
            <DesignAndCreative /> */}

            <label>
              <h4 className="text mb-0 mt-3">
                {t("What skills do you offer clients?")}
              </h4>
            </label>

            {/* <input type="text" placeholder="Start typing to search for skills" id="inputStart" /> */}
            <CustomSelect
              // ref={register}
              options={options}
              isMulti
              id="inputStart"
              name="select2"
            />
            <ErrorMessage errors={errors} name="select2" render={FormError} />

            <h4 className="inputInline my-4">
              {t("Not what you're looking for?")}{" "}
            </h4>
            <i className="fas fa-question-circle iconHelp my-4" />
            <br />

            <CustomSelect
              // ref={register}
              options={options}
              id="inputStart"
              isMulti
              name="select3"
            />
            <ErrorMessage errors={errors} name="select3" render={FormError} />
          </div>
          <br />
          <button
            className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3"
            id="nextBtn6"
            type="submit"
            // onClick={handleRegisterNext6}
          >
            <b>{t("Next")}</b>
          </button>
          <button
            className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3"
            id="backBtn"
            type="submit"
            onClick={handleRegisterBack6}
          >
            <b>{t("Back")}</b>
          </button>
        </div>
      </div>
    </form>
  );
};
