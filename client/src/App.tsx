import React from 'react';
import { Header } from '@components/organisms/Header/Header';
import { MainText } from '@components/organisms/MainText/MainText';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
	}
`;

const MainBodyContainer = styled.div`
	&:not(:first-child) {
		margin-top: 60px;
	}

	padding: 0 20px;
	text-align: center;
`;

const MainLinkContainer = styled.a`
	&:not(:first-child) {
		margin-top: 100px;
	}
	
	display: inline-block;
	font-size: 30px;
	font-weight: bold;
	padding: 20px;
	background-color: #59886b;
	color: #fff;
`;

const App = () => {
	return (
		<>
			<GlobalStyle/>
			<Header/>
			<MainBodyContainer>
				<MainText/>
				<MainLinkContainer>서비스 소개</MainLinkContainer>
			</MainBodyContainer>
		</>
	)
}

export default App;
