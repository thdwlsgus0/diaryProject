import React from 'react';
import styled from 'styled-components';
import {SignUpButton} from '@components/molecules/SignUpButton/SignUpButton';
import {LoginButton} from '@components/molecules/LoginButton/LoginButton';
import {Link} from '@components/atoms/Link/Link';
import {Image} from '@components/atoms/Image/Image';
import logo from '@images/logo.svg';

interface HeaderProps {}

const HeaderContainer = styled.div`
	display: flex;
	padding: 50px 20px 10px;
`;

const HeaderButtonContainer = styled.div`
	&:not(:first-child) {
		margin-left: auto;
	}
`;

const Header: React.FC<HeaderProps> = ({...props}) => {
	return (
		<HeaderContainer {...props}>
			<Link href="#">
				<Image src={logo} width="60px" height="30px"></Image>
			</Link>
			<HeaderButtonContainer {...props}>
				<SignUpButton></SignUpButton>
				<LoginButton></LoginButton>
			</HeaderButtonContainer>
		</HeaderContainer>
	)
}

export {Header, HeaderProps};