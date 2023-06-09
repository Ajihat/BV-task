import styled, { keyframes } from 'styled-components';

export const Loader = () => {
	return (
		<Container>
			<Spinner />
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const spinnerRotation = keyframes`
0% {transform: rotate(0deg)}
100% {transform: rotate(360deg)}
`;

const Spinner = styled.div`
	width: 35px;
	height: 35px;
	background: transparent;
	border-radius: 50%;
	border: 6px solid gray;
	border-bottom: 6px solid transparent;
	animation-name: ${spinnerRotation};
	animation-duration: 1.2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;
