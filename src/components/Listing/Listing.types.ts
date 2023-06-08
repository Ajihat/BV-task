import { Trip } from 'customHooks/useGetTrips.types';

export interface ListingProps {
	trip: Trip;
	numberOfItemsPerListing: number;
	onNext?: () => void;
	onPrev?: () => void;
}
