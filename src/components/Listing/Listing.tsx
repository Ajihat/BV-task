import { Header, List, Action, Nav } from './atoms';

import { ListingProps } from './Listing.types';
import styled from 'styled-components';

export const Listing = ({ trip, numberOfItemsPerListing, onNext, onPrev }: ListingProps) => {
	return (
		<Holder>
			<Header text={trip.destination} imageUrl={trip.picture} onNext={onNext} onPrev={onPrev} />
			<List hotels={trip.hotels} numberOfItemsPerListing={numberOfItemsPerListing} />
			<Action title={trip.destination} />
		</Holder>
	);
};

const Holder = styled.div`
	width: 31%;
	border-radius: 6px;
	overflow: hidden;
	box-shadow: 3px 3px 9px 0px rgba(79, 79, 79, 0.3);
	@media (max-width: 1024px) {
		width: 100%;
		margin-bottom: 35px;
	}
`;
