import styled from 'styled-components';

import { NavProps } from './Nav.types';

export const Nav = ({ onNext, onPrev }: NavProps) => {
	return (
		<Container>
			<Button onClick={onPrev}>
				<Arrow src='navArrow.png' />
			</Button>
			<Button onClick={onNext}>
				<Arrow src='navArrow.png' />
			</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	gap: 5px;
	top: 15px;
	right: 15px;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: transparent;
	transition: 0.3;
	border: none;
	&:hover {
		background-color: black;
		opacity: 0.3;
	}
	&:nth-child(1) {
		transform: rotate(180deg);
	}
`;

const Arrow = styled.img`
	display: block;
	width: 70%;
`;
