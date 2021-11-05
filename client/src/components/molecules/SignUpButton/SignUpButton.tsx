import React from 'react';
import styled from 'styled-components';
import {Button} from '@components/atoms/Button/Button';

interface SignUpButtonProps {}

const SignUpHandler = () => {

}

const SignUpButton: React.FC<SignUpButtonProps> = ({...props}) => {
  return (
	  <Button backgroundColor="#fff" borderColor="#59886b" fontColor="#59886b" onClick={SignUpHandler} {...props}>
		  회원가입
	  </Button>
  );
};

export { SignUpButton, SignUpButtonProps };