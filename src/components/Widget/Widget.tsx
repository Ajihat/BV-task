import { useState } from 'react';

import { Listing } from 'components/Listing/Listing';
import { Button } from 'components/Button/Button';

import { WidgetProps } from './Widget.types';

export const Widget = ({ isMobile, trips }: WidgetProps) => {
	const numberOfItemsPerListing = isMobile ? 4 : 6;
	const [currentTripIndex, setCurrentTripIndex] = useState(0);

	const handleNextTrip = () => {
		setCurrentTripIndex((prevState) => {
			if (prevState === trips.length - 1) {
				return 0;
			} else {
				return prevState + 1;
			}
		});
	};

	const handlePrevTrip = () => {
		setCurrentTripIndex((prevState) => {
			if (prevState === 0) {
				return trips.length - 1;
			} else {
				return prevState - 1;
			}
		});
	};

	if (!isMobile) {
		return (
			<>
				{trips.map((trip) => (
					<Listing key={trip.id} trip={trip} numberOfItemsPerListing={numberOfItemsPerListing} />
				))}
			</>
		);
	}

	return (
		<>
			<Listing
				trip={trips[currentTripIndex]}
				numberOfItemsPerListing={numberOfItemsPerListing}
				onNext={handleNextTrip}
				onPrev={handlePrevTrip}
			/>
			<Button url='#' />
		</>
	);
};
