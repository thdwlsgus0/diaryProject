import React, { FC } from 'react';
import styled from 'styled-components';
import Main from '@components/templates/Main';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const App:FC = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main}/>
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App;
