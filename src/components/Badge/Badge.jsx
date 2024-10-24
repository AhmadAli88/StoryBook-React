import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  removable = false,
  onRemove,
  className
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-indigo-100 text-indigo-800'
  };
  
  const sizes = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-1.5 text-base'
  };

  return (
    <span className={clsx(baseStyles, variants[variant], sizes[size], className)}>
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1.5 hover:opacity-75 focus:outline-none"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  className: PropTypes.string
};

export default Badge;