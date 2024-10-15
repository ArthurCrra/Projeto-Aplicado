// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ 
  label, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false, 
  size = 'medium', 
  className = '',
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Validação de tipos das props
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

// Valores padrão das props
Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  variant: 'primary',
  disabled: false,
  size: 'medium',
};

export default Button;
