/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { stepsContext } from "../../context";

export const StepFooter = ({ nextCallback }) => {
  const { status, currentStep, goBack, stepsCount } = useContext(stepsContext);

  const { t } = useTranslation();

  const renderNextButton = () => {
    let buttonText = "Next";
    if (status >= 2) buttonText = "Update";
    if (currentStep === stepsCount) buttonText = "Finish";
    let buttonProps = { type: "submit" };
    if (nextCallback) buttonProps = { type: "button", onClick: nextCallback };
    return (
      <button className="active" {...buttonProps}>
        {t(buttonText)}
      </button>
    );
  };
  return (
    <ul className="buttons-list">
      {currentStep !== 1 && (
        <li>
          <button type="button" onClick={goBack}>
            {t("Back")}
          </button>
        </li>
      )}
      <li className="ml-auto">{renderNextButton()}</li>
    </ul>
  );
};

StepFooter.propTypes = {
  nextCallback: PropTypes.func,
};

StepFooter.defaultProps = {
  nextCallback: undefined,
};
