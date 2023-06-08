import { Hotel } from 'customHooks/useGetTrips.types';

export interface ListProps {
	hotels: Hotel[];
	numberOfItemsPerListing: number;
}
