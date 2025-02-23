import React from "react";
import { ButtonContainer } from "./ButtonStyles";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
};

export default Button;
