import styled from 'styled-components';

export const ErrorSign = () => {
	return <Typo>Error, something went wrong</Typo>;
};

const Typo = styled.h3`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: red;
	font-size: 2rem;
`;
