import React from "react";
import PropTypes from "prop-types";

export const FormError = ({ message }) => {
  return <div className="invalid-feedback d-block">{message}</div>;
};

FormError.propTypes = { message: PropTypes.string.isRequired };
