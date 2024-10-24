import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({
  children,
  className,
  variant = 'elevated',
  padding = 'medium',
  onClick,
  hoverable = false
}) => {
  const baseStyles = 'rounded-lg transition-all duration-200';
  
  const variants = {
    elevated: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200',
    filled: 'bg-gray-50'
  };
  
  const paddings = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-5',
    large: 'p-8'
  };
  
  const classes = clsx(
    baseStyles,
    variants[variant],
    paddings[padding],
    hoverable && 'hover:shadow-lg hover:-translate-y-1',
    onClick && 'cursor-pointer',
    className
  );

  return (
    <div 
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['elevated', 'outlined', 'filled']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  onClick: PropTypes.func,
  hoverable: PropTypes.bool
};

export default Card;