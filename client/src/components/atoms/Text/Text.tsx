import React from 'react';
import styled from 'styled-components';

interface TextProps {
	children: React.ReactNode;
	fontSize: string;
	fontColor: string;
	fontFamily: string;
}

const StyledText = styled.p<any>`
	font-size: ${(props) => props.fontSize};
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
	
	&:not(:first-child) {
		margin-top: 30px;
	}
`

const Text: React.FC<TextProps> = ({children, fontSize, fontColor, fontFamily, ...props}) => {
	return (
		<StyledText
		fontSize={fontSize}
		fontColor={fontColor}
		fontFamily={fontFamily}
		>
		{children}
		</StyledText>
	)
}

export { Text, TextProps};