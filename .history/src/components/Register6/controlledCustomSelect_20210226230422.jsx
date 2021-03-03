/* eslint-disable eqeqeq */
import React from "react";
import { Controller } from "react-hook-form";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import { CustomSelect } from "./customSelect";

export const ControlledCustomSelect = ({
  control,
  name,
  placeholder,
  options,
  defaultValue,
  isMulti,
  isOptGroup,
  ...rest
}) => {
  const { t } = useTranslation();

  const handleMultiSelectChange = (selectedOption, onChange) => {
    if (!selectedOption) {
      onChange(selectedOption);
      return null;
    }
    const selected = selectedOption.map((item) => item.id);
    return onChange(selected);
  };

  const handleChange = (selectedOption, onChange) => {
    if (isMulti) {
      handleMultiSelectChange(selectedOption, onChange);
    } else {
      onChange(selectedOption.id);
    }
  };

  const isInValue = (item, value) => {
    if ((isMulti && value.includes(item.id)) || item.id == value) {
      return item;
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ onChange, value }) => {
        const FinalVal = [];

        if (options) {
          if (isOptGroup) {
            options.forEach((option) => {
              option.options.forEach((item) => {
                FinalVal.push(isInValue(item, value));
              });
            });
          } else {
            options.forEach((item) => {
              FinalVal.push(isInValue(item, value));
            });
          }
        }
        return (
          <CustomSelect
            placeholder={t(placeholder)}
            onChange={(selectedOption) => {
              return handleChange(selectedOption, onChange);
            }}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            options={options}
            isMulti={isMulti}
            value={FinalVal}
            {...rest}
          />
        );
      }}
    />
  );
};

ControlledCustomSelect.propTypes = {
  control: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf().isRequired,
  defaultValue: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  isOptGroup: PropTypes.bool,
};

ControlledCustomSelect.defaultProps = {
  isMulti: false,
  isOptGroup: false,
};
