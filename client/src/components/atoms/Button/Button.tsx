import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  hasBold?: string;
  onClick: () => void;
}

const StyledButton = styled.button<any>`
  font-size: 15px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.fontColor};
  padding: 8px 15px;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
  font-weight: ${(props) => (props.hasBold? 'bold': null)};

  &:not(:first-child) {
	margin-left: 10px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, borderColor, fontColor, hasBold, ...props}) => {
  return (
     <StyledButton
	  backgroundColor={backgroundColor}
	  borderColor={borderColor}
	  fontColor={fontColor}
	  hasBold={hasBold}
	  {...props}>
	  {children}
	  </StyledButton>
  );
};

export { Button, ButtonProps };