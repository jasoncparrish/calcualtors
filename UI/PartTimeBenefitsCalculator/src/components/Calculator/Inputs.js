import React from 'react';
import PropTypes from 'prop-types';
import { InputCurrency } from '@massds/mayflower-react';

const inputCurrencyProps = {
  inline: true,
  required: true,
  placeholder: 'e.g. $500',
  defaultValue: null,
  step: 1,
  min: 0,
  format: {
    mantissa: 0,
    trimMantissa: false,
    thousandSeparated: true
  }
};

export const QuestionOne = (props) => {
  const { handleChange } = props;
  return(
    <InputCurrency
      labelText="What is your weekly benefit amount?"
      id="weekly-benefits"
      name="weekly-benefits"
      max={795}
      onChange={handleChange}
      onBlur={(val) => handleChange(val, 'weekly-benefits')}
      {...inputCurrencyProps}
    />
  );
};

export const QuestionTwo = (props) => {
  const { handleChange } = props;
  return(
    <InputCurrency
      labelText="How much do you earn weekly working part-time (before taxes)?"
      inline
      required
      id="weekly-earnings"
      name="weekly-earnings"
      onChange={handleChange}
      {...inputCurrencyProps}
    />
  );
};

QuestionOne.propTypes = {
  handleChange: PropTypes.func
};

QuestionTwo.propTypes = {
  handleChange: PropTypes.func
};
