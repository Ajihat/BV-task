import styled from 'styled-components';

import { Hotel } from '../Hotel/Hotel';

import { ListProps } from './List.types';

export const List = ({ hotels, numberOfItemsPerListing }: ListProps) => {
	return (
		<StyledList>
			{hotels.map((hotel, index) => {
				if (index + 1 > numberOfItemsPerListing) return null;
				return <Hotel hotel={hotel} index={index} />;
			})}
		</StyledList>
	);
};

const StyledList = styled.ul`
	list-style: none;
	background-color: white;
`;
