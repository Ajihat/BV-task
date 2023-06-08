import styled from 'styled-components';

import { Nav } from '../Nav/Nav';

import { HeaderProps } from './Header.types';

export const Header = ({ text, imageUrl, onNext, onPrev }: HeaderProps) => {
	return (
		<Holder>
			<Image src={imageUrl} />
			<Typo>{text}</Typo>
			{onNext && onPrev && <Nav onNext={onNext} onPrev={onPrev} />}
		</Holder>
	);
};

const Holder = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 6px;
`;

const Image = styled.img`
	display: block;
	width: 100%;
`;

const Typo = styled.h3`
	position: absolute;
	color: white;
	font-weight: 700;
	font-size: 3.2rem;
	top: 24px;
	left: 24px;
	text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
	@media (max-width: 768px) {
		font-size: 2.4rem;
	}
`;
