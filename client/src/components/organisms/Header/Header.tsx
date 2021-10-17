import React from 'react';
import styled from 'styled-components';
import {SignUpButton} from '../../molecules/SignUpButton/SignUpButton';
import {LoginButton} from '../../molecules/LoginButton/LoginButton';

interface HeaderProps {}

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 50px 20px 10px;
`;

const HeaderButtonContainer = styled.div`
`;

const Header: React.FC<HeaderProps> = ({...props}) => {
	return (
		<HeaderContainer {...props}>
			<HeaderButtonContainer {...props}>
				<SignUpButton></SignUpButton>
				<LoginButton></LoginButton>
			</HeaderButtonContainer>
		</HeaderContainer>
	)
}

export {Header, HeaderProps};