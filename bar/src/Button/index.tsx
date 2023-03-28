import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="button" className="bar">{children}</button>;
};

export default Button;
