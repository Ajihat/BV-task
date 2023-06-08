import Link from 'next/link';
import styled from 'styled-components';

import { Stars } from '../Stars/Stars';
import { Details } from '../Details/Details';

import { HotelProps, ListItemProps } from './Hotel.types';

export const Hotel = ({ hotel, index }: HotelProps) => {
	const isEven = index % 2 === 0;
	return (
		<Link href='#'>
			<ListItem isEven={isEven}>
				<Title>{hotel.name}</Title>
				<Stars numberOfStars={hotel.stars} />
				<Details
					date={hotel.date}
					discountPrice={hotel.discountPrice}
					regularPrice={hotel.regularPrice}
					isAllInclusive={hotel.isAllInclusive}
					isLastMinute={hotel.isLastMinute}
				/>
			</ListItem>
		</Link>
	);
};

const ListItem = styled.li<ListItemProps>`
	padding: 18px;
	background-color: ${(props) => (props.isEven ? 'white' : '#f3f4f8')};
	border-radius: ${(props) => (props.isEven ? '0' : '6px')};
	cursor: pointer;
`;

const Title = styled.h4`
	font-size: 1.6rem;
	font-weight: 700;
`;
