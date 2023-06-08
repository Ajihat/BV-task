export type Hotel = {
	name: string;
	stars: number;
	date: string;
	isLastMinute: boolean;
	isAllInclusive: boolean;
	regularPrice: string;
	discountPrice: string | null;
};

export type Trip = {
	id: number;
	destination: string;
	picture: string;
	hotels: Hotel[];
};

export type Trips = Trip[];

type Loading = {
	isLoading: boolean;
	isError: boolean;
	apiResponse: null;
};

type Success = {
	isLoading: boolean;
	isError: boolean;
	apiResponse: Trips;
};

type Error = {
	isLoading: boolean;
	isError: boolean;
	apiResponse: null;
};

export type TripsState = Loading | Success | Error;
