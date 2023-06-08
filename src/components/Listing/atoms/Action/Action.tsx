import { ActionProps } from './Action.types';

import styled from 'styled-components';

export const Action = ({ title }: ActionProps) => {
	return (
		<Wrapper>
			<Link href='#'>
				<Typo>See all offers in {title}</Typo>
				<Arrow src='arrow.png' />
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 18px;
`;

const Link = styled.a`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
`;

const Typo = styled.p`
	font-size: 1.4rem;
	color: #3068de;
	font-weight: 600;
`;

const Arrow = styled.img`
	display: block;
	margin-left: 15px;
`;
