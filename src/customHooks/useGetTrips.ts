import { useState, useEffect } from 'react';
import axios from 'axios';

import { TripsState } from './useGetTrips.types';

const TRIPS_URL = '/api/trips';

export const useGetTrips = () => {
	const [trips, setTrips] = useState<TripsState>({
		isLoading: true,
		isError: false,
		apiResponse: null,
	});

	useEffect(() => {
		const getTrips = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url: TRIPS_URL,
				});
				if (response.status === 200) {
					setTrips({
						isLoading: false,
						isError: false,
						apiResponse: response.data,
					});
				}
			} catch {
				setTrips({
					isLoading: false,
					isError: true,
					apiResponse: null,
				});
			}
		};
		getTrips();
	}, []);

	return trips;
};
