import React from 'react';
import { Header } from '@components/organisms/Header/Header'; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;

const App = () => {
	return (
		<>
			<GlobalStyle/>
			<Header/>
		</>
	)
}

export default App;
