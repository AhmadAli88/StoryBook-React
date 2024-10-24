import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = ({
  type = 'text',
  label,
  placeholder,
  error,
  disabled = false,
  helperText,
  required = false,
  onChange,
  value,
  id,
  size = 'medium',
  variant = 'outlined'
}) => {
  const baseInputStyles = 'w-full rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500';
  
  const variants = {
    outlined: 'border-gray-300 bg-white',
    filled: 'border-transparent bg-gray-100',
    flushed: 'border-t-0 border-l-0 border-r-0 border-b-2 rounded-none'
  };
  
  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2',
    large: 'px-4 py-3 text-lg'
  };
  
  const inputClasses = clsx(
    baseInputStyles,
    variants[variant],
    sizes[size],
    error && 'border-red-500 focus:ring-red-500',
    disabled && 'bg-gray-50 cursor-not-allowed opacity-75'
  );

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className={clsx(
            'block mb-2 font-medium',
            error ? 'text-red-500' : 'text-gray-700',
            disabled && 'opacity-75'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        className={inputClasses}
      />
      
      {(helperText || error) && (
        <p className={clsx(
          'mt-1 text-sm',
          error ? 'text-red-500' : 'text-gray-500'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled', 'flushed'])
};

export default Input;