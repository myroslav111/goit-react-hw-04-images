import React from 'react';
import { ButtonSubmit } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onChengePage }) => {
  return (
    <ButtonSubmit type="submit" onClick={onChengePage}>
      Load more
    </ButtonSubmit>
  );
};

Button.propTypes = {
  onChengePage: PropTypes.func,
};

export default Button;
