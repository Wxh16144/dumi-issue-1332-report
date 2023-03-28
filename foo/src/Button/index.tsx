import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="button" className="foo">{children}</button>;
};

export default Button;
