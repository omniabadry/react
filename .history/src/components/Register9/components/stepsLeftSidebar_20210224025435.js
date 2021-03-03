/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { stepsContext } from "../context";

export const StepsLeftSideBar = ({ labels }) => {
  const { setCurrentStep, currentStep, status } = useContext(stepsContext);

  const onItemClick = (value) => {
    if (status >= 2) {
      setCurrentStep(value);
    }
  };

  const { t } = useTranslation();

  const renderLabels = () => {
    return labels.map((label, index) => {
      return (
        <div
          onClick={() => onItemClick(index + 1)}
          key={`${label}_${index + 1}`}
          className={classNames("sidebar-title", {
            "active-sidebar-title": currentStep === index + 1,
            accountnone: index === labels.length - 1,
            "mb-0": index === labels.length - 1,
            "sidebar-title-pointer": status >= 2,
            "sidebar-title-not-allowed": status < 2,
          })}>
          <h3>{t(label)}</h3>
        </div>
      );
    });
  };

  return (
    <div className="col-lg-3 col-md-12 steps-left-sidebar">
      <div className="filter-secs">{renderLabels()}</div>
    </div>
  );
};

StepsLeftSideBar.propTypes = {
  labels: PropTypes.arrayOf.isRequired,
};
