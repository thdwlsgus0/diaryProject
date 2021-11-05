
import React from 'react';
import styled from 'styled-components';

interface LinkProps {
	href: string;
}

const StyledLink = styled.a<any>`
	display: block;
	padding: 0 10px 10px;
	cursor: pointer;
`;

const Link: React.FC<LinkProps> = ({ href, ...props}) => {
  return (
     <StyledLink
	 href={href}
	  {...props}>
	  </StyledLink>
  );
};

export { Link, LinkProps };