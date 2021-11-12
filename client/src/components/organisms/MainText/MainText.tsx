import React from 'react';
import styled from 'styled-components';
import {Text} from '@components/atoms/Text/Text';

interface MainTextProps {}


const MainText: React.FC<MainTextProps> = ({...props}) => {
	return (
		<>
			<Text fontSize="40px" fontColor="#222" fontFamily="#">휴대폰은 주머니에 넣고, 빈 손으로 걷는다. </Text>
			<Text fontSize="40px" fontColor="#222" fontFamily="#">깊은 심심함, <br/>
				그것은 경험의 알을 품은 꿈의 새다.</Text>
		</>
	)
}

export {MainText, MainTextProps};