import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button = ({ url }: ButtonProps) => {
	return <StyledLink href={url}>See all offers</StyledLink>;
};

const StyledLink = styled.a`
	color: black;
	width: 100%;
	font-size: 1.6rem;
	font-weight: 600;
	text-align: center;
	text-decoration: none;
	padding: 15px 35px;
	background-color: #c7e7f5;
	border: 2px solid #c7e7f5;
	border-radius: 6px;
	transition: 0.3s;

	&:hover {
		background-color: white;
	}
`;
