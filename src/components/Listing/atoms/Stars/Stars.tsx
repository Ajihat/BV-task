import styled from 'styled-components';

import { range } from 'utils/range';

import { StarsProps } from './Stars.types';

export const Stars = ({ numberOfStars }: StarsProps) => {
	return (
		<StarsHolder>
			{range(numberOfStars).map((star) => (
				<Star key={star} src='star.png' />
			))}
		</StarsHolder>
	);
};

const StarsHolder = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 5px;
`;

const Star = styled.img`
	display: block;
	margin-left: 2px;
`;
