import React from "react";
import PropTypes, { shape } from "prop-types";
import Select from "react-select";

export const CustomSelect = ({
  name,
  register,
  options,
  onChange,
  isMulti,
  placeholder,
  defaultValue,
  isDisabled,
  ...rest
}) => {
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      height: "62px",
      color: "#b2b2b2",
      fontSize: "14px",
      border: "1px solid #e5e5e5",
      marginBottom: "0px",
      fontWeight: 500,
      zIndex: 10,
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "14px",
      color: "#b2b2b2",
      paddingLeft: "22px",
      marginLeft: "0px",
      marginRight: "0px",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      padding: "0px !important",
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: 100,
    }),
    option: (styles) => ({
      ...styles,
    }),
    singleValue: (styles) => ({
      ...styles,
    }),
    multiValue: (styles) => ({
      ...styles,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      ":hover": {},
    }),
  };

  return (
    <>
      <Select
        isMulti={isMulti}
        isDisabled={isDisabled}
        closeMenuOnSelect={!isMulti}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        styles={selectStyles}
        ref={register ? () => register({ name }) : null}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  options: PropTypes.arrayOf(shape({})),
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

CustomSelect.defaultProps = {
  options: null,
  defaultValue: null,
  register: null,
  isDisabled: false,
  isMulti: false,
};
