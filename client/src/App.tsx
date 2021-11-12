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

const App = () => {
	return (
		<>
			<GlobalStyle/>
			<Header/>
			<MainBodyContainer>
				<MainText/>
			</MainBodyContainer>
		</>
	)
}

export default App;
