
import React from 'react';
import styled from 'styled-components';

interface ImageProps {
	width: string;
	height: string;
	src: string;
}

const StyledImage = styled.img<any>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	src: ${(props) => props.src}
`;

const Image: React.FC<ImageProps> = ({ width, height, src, ...props }) => {
  return (
     <StyledImage
	  width={width}
	  height={height}
	  src={src}
	  {...props}>
	  </StyledImage>
  );
};

export { Image, ImageProps };