import React from 'react';
import styled from 'styled-components';
import {Button} from '@components/atoms/Button/Button';

interface LoginButtonProps {}

const LoginHandler = () => {

}

const LoginButton: React.FC<LoginButtonProps> = ({...props}) => {
  return (
	  <Button backgroundColor="#59886b" borderColor="#fff" fontColor="#fff" onClick={LoginHandler} {...props}>
		  로그인
	  </Button>
  );
};

export { LoginButton, LoginButtonProps };